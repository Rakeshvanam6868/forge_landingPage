'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const FoundingMemberSuccess = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('type=founding_member')) {
      setShow(true);
      document.body.classList.add('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
       <div className="bg-[#111] border border-[#FF3B3B]/30 rounded-3xl p-8 sm:p-12 text-center max-w-lg w-full shadow-[0_0_100px_rgba(255,59,59,0.2)]">
          <div className="w-16 h-16 bg-[#FF3B3B]/20 text-[#FF3B3B] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF3B3B]/30">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You're now a Founding Member.</h2>
          <p className="text-lg text-[#888] mb-8">Welcome to the early group building Trainzy.</p>
          <Link href="/" onClick={() => setShow(false)}>
            <Button variant="primary" className="rounded-full px-8 py-3">
              Continue to Dashboard
            </Button>
          </Link>
       </div>
    </div>
  );
};
