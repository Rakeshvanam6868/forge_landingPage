CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'landing',
  status TEXT DEFAULT 'waitlist' CHECK (status IN ('waitlist','founder','invited','joined')),
  stripe_customer_id TEXT,
  stripe_session_id TEXT,
  created_at TIMESTAMP DEFAULT now()
);