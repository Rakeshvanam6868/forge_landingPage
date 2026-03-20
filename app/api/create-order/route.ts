import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { supabase } from '@/lib/supabase';
import { normalizeEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email: rawEmail, amount } = await req.json();
    
    if (!rawEmail || typeof rawEmail !== 'string') {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required' }, { status: 400 });
    }

    const email = normalizeEmail(rawEmail);

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: 'Razorpay keys not configured' }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!supabase) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
    }

    // 1. Check if user is on the waitlist & if they already paid
    let { data: user } = await supabase
      .from('waitlist')
      .select('is_paid, id')
      .eq('email', email)
      .single();

    if (user?.is_paid) {
      return NextResponse.json({ error: 'ALREADY_PAID', message: 'You already have 1-year premium access.' }, { status: 400 });
    }

    // 2. If user doesn't exist on waitlist at all, create them
    if (!user) {
      const { data: newUser, error } = await supabase
        .from('waitlist')
        .insert([{ email, status: 'waitlist', is_paid: false }])
        .select()
        .single();
        
      if (error) throw error;
      user = newUser;
    }

    // 3. Create Razorpay Order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `rcpt_${Math.random().toString(36).substring(7)}`,
      notes: { email }
    });

    // 4. Log the EXACT attempt in the new orders table
    await supabase.from('razorpay_orders').insert([{
      email,
      razorpay_order_id: order.id,
      amount,
      status: 'pending'
    }]);

    return NextResponse.json({ orderId: order.id });

  } catch (error: any) {
    console.error('Order Creation Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
