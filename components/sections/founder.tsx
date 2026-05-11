import { FadeIn } from '@/components/ui/fade-in';

export const FounderSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_100px_rgba(255,59,59,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed italic">
              &ldquo;I built this because I was tired of finishing a session
              and having no idea if it was enough.&rdquo;
            </p>
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
