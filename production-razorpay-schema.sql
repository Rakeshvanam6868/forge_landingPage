-- RUN THIS IN THE SUPABASE SQL EDITOR

-- 1. Ensure your Waitlist table has the correct flags
ALTER TABLE public.waitlist 
ADD COLUMN IF NOT EXISTS is_paid BOOLEAN DEFAULT FALSE;

-- Update your constraint if needed so 'founder' can represent paid lifetime members securely
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_status_check;
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_status_check CHECK (status IN ('waitlist','founder','invited','joined'));

-- 2. CREATE THE DEDICATED ORDERS TABLE (CRITICAL FOR IDEMPOTENCY)
CREATE TABLE IF NOT EXISTS public.razorpay_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL REFERENCES public.waitlist(email) ON UPDATE CASCADE ON DELETE CASCADE,
  razorpay_order_id TEXT UNIQUE NOT NULL,
  razorpay_payment_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending' NOT NULL,
  amount INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT razorpay_orders_status_check CHECK (status IN ('pending', 'successful', 'failed'))
);

-- 3. Indexes for lightning-fast webhook processing
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON public.razorpay_orders(razorpay_order_id);
CREATE INDEX IF NOT EXISTS idx_orders_email ON public.razorpay_orders(email);

-- Enable RLS on the new table
ALTER TABLE public.razorpay_orders ENABLE ROW LEVEL SECURITY;

-- Allow only service role to handle orders (API routes use service role)
DROP POLICY IF EXISTS "Allow service role or public insert" ON public.razorpay_orders;
-- If the user wants public to be able to initiate orders, we can keep it but it's safer to use service role in backend.
-- The current backend implementation uses Supabase Service Role Key, so we don't need public policies.
-- I'll remove the public policy for security.
CREATE POLICY "Service Role Only" ON public.razorpay_orders 
FOR ALL USING (auth.role() = 'service_role');

-- Refresh PostgREST cache
NOTIFY pgrst, 'reload schema';
