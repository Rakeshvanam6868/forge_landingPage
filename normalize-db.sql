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

-- 3. Perform a safe merge of the waitlist table
-- This keeps the most 'premium' record and deletes duplicates
WITH ranked_waitlist AS (
    SELECT id, email,
           ROW_NUMBER() OVER (
               PARTITION BY LOWER(TRIM(email)) 
               ORDER BY 
                   CASE WHEN status = 'founder' OR is_paid = true THEN 0 ELSE 1 END,
                   created_at ASC
           ) as rn
    FROM public.waitlist
)
DELETE FROM public.waitlist 
WHERE id IN (SELECT id FROM ranked_waitlist WHERE rn > 1);

-- 4. Normalize the email column in all tables
UPDATE public.waitlist SET email = LOWER(TRIM(email));
UPDATE public.razorpay_orders SET email = LOWER(TRIM(email));

-- 5. Re-add the foreign key constraint (Safely)
ALTER TABLE public.razorpay_orders 
ADD CONSTRAINT razorpay_orders_email_fkey 
FOREIGN KEY (email) REFERENCES public.waitlist(email) ON UPDATE CASCADE ON DELETE CASCADE;

COMMIT;

-- Refresh PostgREST cache
NOTIFY pgrst, 'reload schema';
