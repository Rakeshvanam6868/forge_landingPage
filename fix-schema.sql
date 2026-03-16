-- RUN THIS IN THE SUPABASE SQL EDITOR TO SYNC YOUR SCHEMA

-- If the table exists, this will add the missing columns safely.
-- If the table doesn't exist, it will create it.

DO $$ 
BEGIN
    -- Create table if not exists
    CREATE TABLE IF NOT EXISTS public.waitlist (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Add missing columns
    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'waitlist' AND COLUMN_NAME = 'name') THEN
        ALTER TABLE public.waitlist ADD COLUMN name TEXT NOT NULL DEFAULT 'User';
        ALTER TABLE public.waitlist ALTER COLUMN name DROP DEFAULT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'waitlist' AND COLUMN_NAME = 'source') THEN
        ALTER TABLE public.waitlist ADD COLUMN source TEXT DEFAULT 'landing';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'waitlist' AND COLUMN_NAME = 'status') THEN
        ALTER TABLE public.waitlist ADD COLUMN status TEXT DEFAULT 'waitlist';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'waitlist' AND COLUMN_NAME = 'stripe_customer_id') THEN
        ALTER TABLE public.waitlist ADD COLUMN stripe_customer_id TEXT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'waitlist' AND COLUMN_NAME = 'stripe_session_id') THEN
        ALTER TABLE public.waitlist ADD COLUMN stripe_session_id TEXT;
    END IF;

    -- Update constraint to include new statuses
    ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_status_check;
    ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_status_check CHECK (status IN ('waitlist','founder','invited','joined'));

END $$;

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (important for landing page)
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
CREATE POLICY "Allow public inserts" ON public.waitlist FOR INSERT WITH CHECK (true);

-- Allow public to see waitlist count (for the counter)
DROP POLICY IF EXISTS "Allow public to see count" ON public.waitlist;
CREATE POLICY "Allow public to see count" ON public.waitlist FOR SELECT USING (true);

-- Refresh PostgREST cache
NOTIFY pgrst, 'reload schema';
