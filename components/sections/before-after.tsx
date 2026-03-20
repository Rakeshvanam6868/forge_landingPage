import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { X, Check } from 'lucide-react';

export const BeforeAfterSection = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <FadeIn>
        <SectionHeading title="Most people don’t fail workouts. They fail restarting." />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
        {/* Without Trainzy */}
        <FadeIn delay={0.1}>
          <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-8 text-[#888]">Without Trainzy</h3>
            <ul className="space-y-6 w-full">
              <li className="flex items-center gap-4 text-left bg-black/40 p-4 rounded-xl border border-white/5">
                <X className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-[#888] font-medium">Miss workout</span>
              </li>
              <li className="flex items-center gap-4 text-left bg-black/40 p-4 rounded-xl border border-white/5">
                <X className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-[#888] font-medium">Plan breaks</span>
              </li>
              <li className="flex items-center gap-4 text-left bg-black/40 p-4 rounded-xl border border-white/5">
                <X className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-[#888] font-medium">Restart from day one</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* With Trainzy */}
        <FadeIn delay={0.2}>
          <div className="bg-[#111] p-8 rounded-3xl border border-[#FF3B3B]/20 h-full flex flex-col items-center shadow-[0_0_50px_rgba(255,59,59,0.05)]">
            <h3 className="text-xl font-bold mb-8 text-white">With Trainzy</h3>
            <ul className="space-y-6 w-full">
              <li className="flex items-center gap-4 text-left bg-[#FF3B3B]/5 p-4 rounded-xl border border-[#FF3B3B]/20">
                <Check className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-white font-medium">Miss workout</span>
              </li>
              <li className="flex items-center gap-4 text-left bg-[#FF3B3B]/5 p-4 rounded-xl border border-[#FF3B3B]/20">
                <Check className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-white font-medium">Plan adjusts automatically</span>
              </li>
              <li className="flex items-center gap-4 text-left bg-[#FF3B3B]/5 p-4 rounded-xl border border-[#FF3B3B]/20">
                <Check className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                <span className="text-white font-medium">Continue where you left off</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
