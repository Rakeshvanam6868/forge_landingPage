import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    let email = session.metadata?.email || session.customer_details?.email;

    if (email) {
      // Normalize email for matching
      let [user, domain] = email.toLowerCase().trim().split('@');
      if (domain === 'gmail.com') {
        user = user.replace(/\./g, '').split('+')[0];
      } else {
        user = user.split('+')[0];
      }
      const normalizedEmail = `${user}@${domain}`;

      await supabase
        .from('waitlist')
        .update({ status: 'founder', stripe_session_id: session.id })
        .eq('email', normalizedEmail);
      
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Trainzy <welcome@trainzy.app>',
          to: email,
          subject: "Welcome Founding Member",
          html: `<p>Welcome Founding Member!</p><p>Thank you for supporting Trainzy. You now have lifetime premium access.</p><p>We'll notify you as soon as the platform is ready for you.</p>`
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}
