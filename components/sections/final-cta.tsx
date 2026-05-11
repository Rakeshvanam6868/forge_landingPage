'use client';

import { FadeIn } from '@/components/ui/fade-in';

export const FinalCTA = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <FadeIn>
        <p className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
          Your next target is 5 questions away.
        </p>
      </FadeIn>
    </div>
  </section>
);
