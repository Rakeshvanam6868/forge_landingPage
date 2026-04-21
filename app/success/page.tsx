import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Welcome, Founding Member | Trainzy',
  description: 'Thank you for supporting Trainzy as a Founding Member.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🎉</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold mb-4 tracking-tight">You&apos;re a Founding Member</h1>
          <p className="text-[#888] text-lg mb-10 leading-relaxed">
            Thank you for believing in Trainzy early. You&apos;ve secured 1 year of premium access.
          </p>
          
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6 text-left">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              What happens next
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                <span className="text-sm text-[#888]">Confirmation email sent to your inbox</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                <span className="text-sm text-[#888]">You&apos;ll get early access before anyone else</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                <span className="text-sm text-[#888]">We&apos;ll share progress updates along the way</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-10 text-left">
            <h3 className="text-white font-bold mb-2 text-sm">Questions or feedback?</h3>
            <p className="text-sm text-[#888]">
              Reply to your confirmation email or reach out at{' '}
              <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a>.
              We read every message.
            </p>
          </div>
          
          <Link href="/">
            <Button variant="primary" className="w-full py-6 text-lg rounded-full font-bold">
              Back to Homepage
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
