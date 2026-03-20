import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabase';
import { normalizeEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret) {
      console.error('Webhook secret not found');
      return NextResponse.json({ error: 'Webhook secret not found' }, { status: 500 });
    }

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // 1. Secure HMAC Verification
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(body);

    if (event.event === 'order.paid') {
      const paymentBody = event.payload.payment.entity;
      const orderId = paymentBody.order_id;
      const paymentId = paymentBody.id;
      const email = normalizeEmail(paymentBody.email);

      if (!supabase) {
        throw new Error('Supabase client not initialized');
      }

      // 2. Idempotency Check (Prevent duplicate handling of identical webhooks)
      const { data: existingOrder } = await supabase
        .from('razorpay_orders')
        .select('status')
        .eq('razorpay_order_id', orderId)
        .single();

      if (existingOrder?.status === 'successful') {
        return NextResponse.json({ status: 'already_processed' }, { status: 200 });
      }

      // 3. Update the dedicated Razorpay Orders table
      await supabase
        .from('razorpay_orders')
        .update({ status: 'successful', razorpay_payment_id: paymentId })
        .eq('razorpay_order_id', orderId);

      // 4. Transform the Waitlist user into a Paid Founder!
      if (email) {
        await supabase
          .from('waitlist')
          .update({ 
            is_paid: true, 
            status: 'founder' 
          })
          .eq('email', email);
      } else {
        // Fallback: update waitlist based on the email attached to razorpay_orders
        const { data: orderData } = await supabase
          .from('razorpay_orders')
          .select('email')
          .eq('razorpay_order_id', orderId)
          .single();
          
        if (orderData?.email) {
          await supabase
            .from('waitlist')
            .update({ 
              is_paid: true, 
              status: 'founder' 
            })
            .eq('email', normalizeEmail(orderData.email));
        }
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (err: any) {
    console.error('Webhook Error:', err);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
