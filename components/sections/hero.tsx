import { ArrowRight, Play } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { ProductCarousel } from '@/components/ui/product-carousel';

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
              <span className="text-[10px] sm:text-xs font-semibold text-[#CCCCCC]">TrainSmarter Early Beta</span>
              <span className="text-[10px] sm:text-xs text-[#888] ml-2 border-l border-white/20 pl-2">Join today</span>
              <ArrowRight className="w-3 h-3 ml-1 text-[#888]" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 sm:mb-8 leading-[1.1] text-white">
              Your workouts should evolve.<br />
              <span className="text-[#888888]">Most apps only log them.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-[#888888] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              TrainSmarter automatically adjusts your sets, reps, and weights based on your real performance. Stop guessing and start progressing.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl text-base group">
                Join Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl text-base group">
                <Play className="mr-2 w-4 h-4" />
                See How It Works
              </Button>
            </div>
            <p className="mt-6 text-[11px] text-[#888888] font-medium tracking-wide uppercase">Designed for high-performance lifters.</p>
          </FadeIn>
        </div>

        {/* Product Carousel - Now centered below text */}
        <div className="w-full max-w-5xl flex justify-center -mt-4 sm:-mt-8">
          <FadeIn delay={0.6} className="w-full">
            <ProductCarousel />
          </FadeIn>
        </div>

      </div>
    </div>
  </section>
);
