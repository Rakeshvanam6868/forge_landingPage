import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // SECURITY: Use service role for backend
);

export const dynamic = 'force-dynamic'; // Avoid caching for recent signups

export async function GET() {
  if (!supabase) return NextResponse.json([], { status: 500 });
  
  try {
    // Only fetch real signups from the last 48 hours for social proof
    const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from('waitlist')
      .select('name, created_at')
      .gte('created_at', cutoff)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;

    // Privacy: Only return first name + last initial
    const sanitized = (data || []).map(entry => ({
      name: entry.name ? `${entry.name.split(' ')[0]} ${entry.name.split(' ').slice(1).map((n: string) => n[0] + '.').join(' ')}`.trim() : null,
      created_at: entry.created_at
    }));

    return NextResponse.json(sanitized);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
