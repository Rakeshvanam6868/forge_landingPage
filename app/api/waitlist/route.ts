import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic IP-based rate limiting stores (in-memory for simple landing page)
const rateLimit = new Map<string, { count: number, lastReset: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const limit = 5;
  const timeframe = 60 * 1000; // 1 minute

  const record = rateLimit.get(ip);
  if (!record || now - record.lastReset > timeframe) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= limit) return true;
  record.count++;
  return false;
}

const BLOCKED_DOMAINS = [
  'mailinator.com', '10minutemail.com', 'tempmail.com', 
  'guerrillamail.com', 'trashmail.com', 'yopmail.com'
];

function normalizeEmail(email: string) {
  let [user, domain] = email.toLowerCase().trim().split('@');
  if (domain === 'gmail.com') {
    user = user.replace(/\./g, '').split('+')[0];
  } else {
    user = user.split('+')[0];
  }
  return `${user}@${domain}`;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { email: rawEmail, name, source = 'landing' } = await req.json();

    if (!rawEmail || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const normalizedEmail = normalizeEmail(rawEmail);
    const domain = normalizedEmail.split('@')[1];

    if (BLOCKED_DOMAINS.includes(domain)) {
      return NextResponse.json({ error: 'Please use a valid email address.' }, { status: 400 });
    }

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('id, created_at, status')
      .eq('email', normalizedEmail)
      .single();

    if (existingUser) {
      // Get position for existing user
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
        .lte('created_at', existingUser.created_at);
      
      return NextResponse.json({ 
        success: true, 
        position: count || 0,
        isReturning: true,
        status: existingUser.status,
        message: "You're already on the waitlist."
      });
    }

    // Insert new user
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email: normalizedEmail, name, source, status: 'waitlist' }])
      .select('created_at')
      .single();

    if (error) throw error;

    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Trainzy <welcome@trainzy.app>',
          to: normalizedEmail,
          subject: "You're on the waitlist 🎉",
          html: `<p>Hi ${name},</p><p>You're now on the early access list. We'll notify you as soon as the beta launches.</p><p>Best,<br/>The Trainzy Team</p>`
        });
      } catch (err) {
        console.error('Email sending failed:', err);
      }
    }

    // Get position
    const { count: position } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    return NextResponse.json({ 
      success: true, 
      position: position || 1 
    });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
