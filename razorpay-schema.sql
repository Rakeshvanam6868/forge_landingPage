-- Add Razorpay specific columns to waitlist table
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS is_paid BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS payment_id TEXT;

-- Index for payment_id
CREATE INDEX IF NOT EXISTS idx_waitlist_payment_id ON waitlist(payment_id);
