'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight leading-[1.05]">
          Stop restarting your workouts.<br />
          <span className="text-[#888888]">Start continuing.</span>
        </h2>
        <Button 
          onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          variant="primary" 
          className="px-10 py-5 text-lg shadow-[0_0_30px_rgba(255,59,59,0.3)] font-bold rounded-full"
        >
          Join the Waitlist
        </Button>
      </FadeIn>
    </div>
  </section>
);
