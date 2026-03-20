'use client';

import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { ProductCarousel } from '@/components/ui/product-carousel';
import { WaitlistForm } from '@/components/ui/waitlist-form';
import { WaitlistCounter } from '@/components/ui/waitlist-counter';

export const Hero = () => (
  <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden flex flex-col items-center">
    {/* Abstract Glow Effects */}
    <div className="absolute top-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FF3B3B]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
      {/* Centered Content Stack */}
      <div className="w-full flex flex-col items-center text-center">

        {/* Hero Text Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111111]/50 backdrop-blur-sm shadow-sm mb-6 sm:mb-8 hover:border-white/20 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-[#FF3B3B] animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-semibold text-[#CCCCCC]">Trainzy Early Beta</span>
              <span className="text-[10px] sm:text-xs text-[#888] ml-2 border-l border-white/20 pl-2">Join today</span>
              <ArrowRight className="w-3 h-3 ml-1 text-[#888]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 sm:mb-8 leading-[1.1] text-white">
              Miss a few workouts?<br />
              <span className="text-[#888888]">Your plan is already fixed.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-[#888888] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Most people don&apos;t quit working out. They just miss a few days... and never come back. Trainzy makes
              sure you never miss a workout again.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                className="rounded-full py-4 px-8 text-lg font-bold shadow-[0_0_30px_rgba(255,59,59,0.3)] hover:scale-105 transition-transform"
              >
                Join Waitlist (Free)
              </Button>
              <Button
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="rounded-full py-4 px-8 text-lg border-white/10 hover:bg-white/5 font-semibold text-white"
              >
                Get 1-Year Access — ₹199
              </Button>
            </div>

            <div className="text-sm sm:text-base text-[#888] font-medium mb-12">
              Pay once. No monthly subscription.
            </div>

            <WaitlistCounter />
          </FadeIn>
        </div>

        {/* Product Carousel - Now centered below text */}
        {/* <div className="w-full max-w-5xl flex justify-center -mt-4 sm:-mt-8">
          <FadeIn delay={0.6} className="w-full">
            <ProductCarousel />
          </FadeIn>
        </div> */}

      </div>
    </div>
  </section>
);
