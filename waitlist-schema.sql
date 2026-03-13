-- Create the waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    source TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'invited', 'joined')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for waitlist signup)
CREATE POLICY "Allow public inserts to waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow service role to read/update
-- (Supabase default usually handles this for service role, but being explicit)
CREATE POLICY "Allow service role to manage waitlist"
ON public.waitlist
FOR ALL
USING (auth.role() = 'service_role');
