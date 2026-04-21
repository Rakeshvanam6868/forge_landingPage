import { FadeIn } from '@/components/ui/fade-in';

export const FounderSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_100px_rgba(255,59,59,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Built after watching people quit again and again</h2>
          <div className="space-y-6 text-[#888888] text-lg max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
            <p className="text-white/90">People don&apos;t fail workouts.</p>
            <p>They fail after missing a few days.</p>
            <p>So I built Trainzy to fix that exact moment.</p>
            <p className="text-white font-bold">When you miss — your plan adjusts.</p>
            <p className="text-white/90 italic pt-4">And you keep going.</p>
          </div>
          
          {/* Founder identity — real person builds trust */}
          <div className="mt-10 flex flex-col items-center gap-3 relative z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#FF3B3B]/20 to-[#111] border border-white/10 flex items-center justify-center shadow-lg text-lg font-bold text-white">
              R
            </div>
            <div>
              <div className="text-sm font-bold text-white">Rakesh Vanam</div>
              <div className="text-xs text-[#888]">Founder, Trainzy</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
