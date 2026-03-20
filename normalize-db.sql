-- ROBUST DATABASE NORMALIZATION v2
-- RUN THIS IN THE SUPABASE SQL EDITOR

-- This script will:
-- 1. Temporarily drop the foreign key constraint
-- 2. Create a clean, normalized version of the waitlist (merging duplicates)
-- 3. Update the razorpay_orders table to match the new normalized emails
-- 4. Re-establish the foreign key

BEGIN;

-- 1. Identify the foreign key name (usually 'razorpay_orders_email_fkey')
-- Dropping it temporarily to allow the migration
ALTER TABLE public.razorpay_orders DROP CONSTRAINT IF EXISTS razorpay_orders_email_fkey;

-- 2. Create a temporary table to store normalized 'waitlist' data
-- We use DISTINCT ON to keep only ONE record per email (casing/spaces ignored)
-- Order by is_paid/founder so we keep the "Premium" version of the user if they exist
CREATE TEMP TABLE normalized_waitlist_temp AS
SELECT DISTINCT ON (LOWER(TRIM(email))) 
    *
FROM public.waitlist
ORDER BY 
    LOWER(TRIM(email)), 
    CASE 
        WHEN status = 'founder' OR is_paid = true THEN 0 
        ELSE 1 
    END,
    created_at ASC;

-- 3. Clear existing waitlist and re-insert normalized data
DELETE FROM public.waitlist;

INSERT INTO public.waitlist (id, name, email, source, status, is_paid, payment_date, payment_id, created_at)
SELECT 
    id, 
    name, 
    LOWER(TRIM(email)), 
    source, 
    status, 
    is_paid, 
    payment_date, 
    payment_id, 
    created_at
FROM normalized_waitlist_temp;

-- 4. Normalize the email column in razorpay_orders so it matches the new waitlist
UPDATE public.razorpay_orders SET email = LOWER(TRIM(email));

-- 5. Re-add the foreign key constraint (Safely)
ALTER TABLE public.razorpay_orders 
ADD CONSTRAINT razorpay_orders_email_fkey 
FOREIGN KEY (email) REFERENCES public.waitlist(email) ON DELETE CASCADE;

COMMIT;

-- Refresh PostgREST cache
NOTIFY pgrst, 'reload schema';
