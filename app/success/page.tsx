
import { NextResponse } from 'next/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';

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
          
          <h1 className="text-3xl font-extrabold mb-4 tracking-tight">You're a founding member</h1>
          <p className="text-[#888] text-lg mb-10 leading-relaxed">
            Thank you for supporting Trainzy. You've secured lifetime premium access and helped make this project possible.
          </p>
          
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-10 text-left">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              What's next?
            </h3>
            <p className="text-sm text-[#888]">
              We'll send you a welcome email shortly. You'll receive early access as soon as the private beta launches.
            </p>
          </div>
          
          <Link href="/">
            <Button variant="primary" className="w-full py-6 text-lg rounded-full">
              Return to Homepage
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
