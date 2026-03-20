import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { normalizeEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for backend updates
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      email,
      name
    } = await req.json();

    const normalizedEmail = normalizeEmail(email);

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    // Check if order already processed (Idempotency)
    const { data: existingOrder } = await supabase
      .from('razorpay_orders')
      .select('status')
      .eq('razorpay_order_id', razorpay_order_id)
      .single();

    if (existingOrder?.status === 'successful') {
      return NextResponse.json({ success: true, message: 'Already processed' });
    }

    // Update razorpay_orders status
    await supabase
      .from('razorpay_orders')
      .update({ status: 'successful', razorpay_payment_id: razorpay_payment_id })
      .eq('razorpay_order_id', razorpay_order_id);

    // Update Supabase
    const { error: updateError } = await supabase
      .from('waitlist')
      .update({
        status: 'founder',
        is_paid: true,
        payment_id: razorpay_payment_id,
        payment_date: new Date().toISOString()
      })
      .eq('email', normalizedEmail);

    if (updateError) {
      console.error('Supabase update failed:', updateError);
      return NextResponse.json(
        { error: 'Failed to update user status' },
        { status: 500 }
      );
    }

    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Trainzy <welcome@trainzy.app>',
          to: email,
          subject: "Welcome Founding Member",
          html: `<p>Welcome Founding Member!</p><p>Thank you for supporting Trainzy. You now have lifetime premium access.</p><p>We'll notify you as soon as the platform is ready for you.</p>`
        });
      } catch (err) {
        console.error('Email sending failed:', err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Payment verification failed:', error);
    return NextResponse.json(
      { error: error.message || 'Verification failed' },
      { status: 500 }
    );
  }
}
