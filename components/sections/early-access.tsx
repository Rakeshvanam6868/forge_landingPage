'use client';

import { useState, useEffect } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export const EarlyAccessSection = () => {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const res = await fetch('/api/waitlist/count');
        const data = await res.json();
        setSpotsLeft(data.foundingSpotsLeft ?? null);
      } catch {
        // Don't show spots if we can't fetch
      }
    };
    fetchSpots();
  }, []);

  const isSoldOut = spotsLeft !== null && spotsLeft <= 0;

  return (
    <section className="py-32 bg-[#000000] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3B3B]/5 blur-[120px] pointer-events-none rounded-b-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF3B3B]/20 bg-[#FF3B3B]/5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF3B3B]" />
              <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider">Limited Founding Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Become a Founding Member</h2>
            <p className="text-[#888888] text-lg max-w-2xl mx-auto">
              Pay once, get full premium access for 1 year. No monthly subscription. No recurring charges.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#111111] border border-[#FF3B3B]/20 rounded-3xl p-10 md:p-14 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B]/5 to-transparent pointer-events-none" />
             
             {/* Price with anchor */}
             <div className="relative z-10 text-center mb-10">
               <div className="flex items-baseline justify-center gap-3 mb-2">
                 <span className="text-5xl md:text-6xl font-extrabold text-white">₹199</span>
                 <span className="text-xl text-[#555] line-through font-medium">₹999</span>
               </div>
               <p className="text-sm text-[#888]">One-time payment · 1 year premium access</p>
               <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                 <span className="text-xs font-bold text-[#22C55E]">Save 80% as a founding member</span>
               </div>
             </div>

             <div className="relative z-10 grid sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "1 year full premium access",
                "No monthly payments ever",
                "Priority early access to the app",
                "Founding member badge",
                "Direct line to the founder",
                "Shape the product roadmap"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#FF3B3B] shrink-0" />
                  <span className="text-sm font-medium text-[#CCCCCC]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              {isSoldOut ? (
                <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-white font-bold text-lg mb-1">Founding offer is closed</div>
                  <p className="text-[#888] text-sm">Join the waitlist to get notified when we launch.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Button 
                    onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="primary" 
                    className="w-full py-6 text-xl font-bold rounded-2xl bg-[#FF3B3B] hover:bg-[#E63535] shadow-[0_10px_30px_rgba(255,59,59,0.3)] transform transition-transform hover:scale-[1.02]"
                  >
                    Get 1-Year Access — ₹199
                  </Button>
                  
                  {/* Trust signals */}
                  <div className="flex items-center justify-center gap-6 text-xs text-[#555] mt-2">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      Secure payment
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Full refund if we don&apos;t launch
                    </span>
                  </div>

                  {spotsLeft !== null && spotsLeft > 0 && (
                    <p className="text-center text-xs text-[#555] mt-2 uppercase tracking-widest font-bold items-center gap-2 flex justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#FF3B3B] animate-pulse" />
                      {spotsLeft} of 100 founding spots remaining
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
