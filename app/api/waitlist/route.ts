import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!supabase) {
      console.warn('Supabase is not configured. Mocking waitlist insertion.');
      // Simulate success with a realistic waitlist position
      return NextResponse.json({ success: true, position: Math.floor(Math.random() * 50) + 150 });
    }

    // 1. Check for duplicate entry in Supabase
    const { data: existingEntry, error: checkError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .single();

    if (existingEntry) {
      return NextResponse.json({ error: 'Email already on waitlist' }, { status: 409 });
    }

    // 2. Store in database
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email, source: source || 'landing_page', status: 'pending' }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    }

    // 3. Send confirmation email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'TrainSmarter <welcome@trainsmarter.app>',
          to: email,
          subject: "You're on the TrainSmarter waitlist",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #FF3B3B;">Welcome to TrainSmarter</h1>
              <p>Thanks for joining the TrainSmarter waitlist.</p>
              <p>We're building an adaptive workout system that adjusts your next session automatically based on your performance.</p>
              <p>You'll be among the first invited to try it when we launch our beta.</p>
              <br />
              <p>Stay strong,<br />The TrainSmarter Team</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Resend error:', emailError);
        // We don't return an error here as the db part succeeded
      }
    }

    // 4. Get waitlist position (total count)
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });
      
    const position = count ? count : 1; // Fallback to 1 if count fails

    return NextResponse.json({ success: true, position });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
