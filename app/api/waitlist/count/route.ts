import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // SECURITY: Use service role for backend
);

const FOUNDING_MEMBER_LIMIT = 100;

export async function GET() {
  try {
    // Total waitlist count
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;

    // Paid founding member count
    const { count: paidCount, error: paidError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .eq('is_paid', true);

    if (paidError) throw paidError;

    return NextResponse.json({
      count: count || 0,
      foundingSpotsLeft: FOUNDING_MEMBER_LIMIT - (paidCount || 0),
      totalFoundingSpots: FOUNDING_MEMBER_LIMIT
    });
  } catch (error) {
    console.error('Count API Error:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
