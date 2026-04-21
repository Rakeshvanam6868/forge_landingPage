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

    // Check if order already processed (Idempotency) - Atomic Update
    const { data: existingOrder, error: fetchError } = await supabase
      .from('razorpay_orders')
      .select('status')
      .eq('razorpay_order_id', razorpay_order_id)
      .single();

    if (fetchError) {
      console.error('Error fetching order:', fetchError);
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    if (existingOrder?.status === 'successful') {
      return NextResponse.json({ success: true, message: 'Already processed' });
    }

    // Update razorpay_orders status - only if still pending
    const { data: updatedOrder, error: updateOrderError } = await supabase
      .from('razorpay_orders')
      .update({ status: 'successful', razorpay_payment_id: razorpay_payment_id })
      .eq('razorpay_order_id', razorpay_order_id)
      .eq('status', 'pending') // Ensure we only update if it was still pending
      .select();

    if (updateOrderError) {
      console.error('razorpay_orders update failed:', updateOrderError);
      return NextResponse.json({ error: 'Failed to update order status' }, { status: 500 });
    }

    // If no rows were updated, another request already processed this order
    if (!updatedOrder || updatedOrder.length === 0) {
      return NextResponse.json({ success: true, message: 'Already processed' });
    }

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

    // Send confirmation email — use normalizedEmail for consistency
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Trainzy <welcome@trainzy.app>',
          to: normalizedEmail,
          subject: "You're a Founding Member 🎉",
          html: `
            <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto; color: #333;">
              <h2 style="color: #000;">Welcome to Trainzy, ${name || 'Founding Member'}!</h2>
              <p>Thank you for believing in Trainzy early. You've secured <strong>1 year of full premium access</strong>.</p>
              <div style="background: #f9f9f9; border-left: 3px solid #FF3B3B; padding: 16px; margin: 24px 0; border-radius: 4px;">
                <strong>What happens next:</strong>
                <ul style="margin: 8px 0 0; padding-left: 20px;">
                  <li>We're building the app right now</li>
                  <li>You'll get exclusive early access before anyone else</li>
                  <li>We'll email you with progress updates</li>
                </ul>
              </div>
              <p style="color: #888; font-size: 14px;">If you have any questions, reply to this email directly.</p>
              <p>— Rakesh, Founder of Trainzy</p>
            </div>
          `
        });
      } catch (err) {
        console.error('Email sending failed:', err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Payment verification failed:', error);
    return NextResponse.json(
      { error: 'Verification failed. If you were charged, please contact hello@trainzy.app' },
      { status: 500 }
    );
  }
}
