import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { supabase } from '@/lib/supabase';
import { normalizeEmail } from '@/lib/email';

// SECURITY: Price is hardcoded server-side. Never trust client-sent amounts.
const FOUNDING_MEMBER_PRICE_INR = 199;
const FOUNDING_MEMBER_LIMIT = 100;

export async function POST(req: Request) {
  try {
    const { email: rawEmail, name } = await req.json();
    
    if (!rawEmail || typeof rawEmail !== 'string') {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const email = normalizeEmail(rawEmail);

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay keys not configured');
      return NextResponse.json({ error: 'Payment service unavailable. Please try again later.' }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!supabase) {
      console.error('Supabase not configured');
      return NextResponse.json({ error: 'Service unavailable. Please try again later.' }, { status: 500 });
    }

    // 1. Enforce founding member limit BEFORE creating an order
    const { count: paidCount, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .eq('is_paid', true);

    if (countError) {
      console.error('Failed to check founding member count:', countError);
      return NextResponse.json({ error: 'Service temporarily unavailable.' }, { status: 500 });
    }

    if ((paidCount || 0) >= FOUNDING_MEMBER_LIMIT) {
      return NextResponse.json({ 
        error: 'SOLD_OUT', 
        message: 'All founding member spots have been filled. Join the waitlist for free access when we launch.' 
      }, { status: 400 });
    }

    // 2. Check if user is on the waitlist & if they already paid
    let { data: user } = await supabase
      .from('waitlist')
      .select('is_paid, id')
      .eq('email', email)
      .single();

    if (user?.is_paid) {
      return NextResponse.json({ error: 'ALREADY_PAID', message: 'You already have 1-year premium access.' }, { status: 400 });
    }

    // 3. If user doesn't exist on waitlist at all, create them
    if (!user) {
      const { data: newUser, error } = await supabase
        .from('waitlist')
        .insert([{ email, name, status: 'waitlist', is_paid: false }])
        .select()
        .single();
        
      if (error) throw error;
      user = newUser;
    }

    // 4. Create Razorpay Order — amount is ALWAYS server-controlled
    const order = await razorpay.orders.create({
      amount: FOUNDING_MEMBER_PRICE_INR * 100, // Amount in paise
      currency: 'INR',
      receipt: `rcpt_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      notes: { email, name, plan: 'founding_member_1yr' }
    });

    // 5. Log the EXACT attempt in the orders table
    await supabase.from('razorpay_orders').insert([{
      email,
      razorpay_order_id: order.id,
      amount: FOUNDING_MEMBER_PRICE_INR,
      status: 'pending'
    }]);

    return NextResponse.json({ orderId: order.id });

  } catch (error: any) {
    console.error('Order Creation Error:', error);
    // SECURITY: Never expose internal error details to the client
    return NextResponse.json({ error: 'Unable to create order. Please try again.' }, { status: 500 });
  }
}
