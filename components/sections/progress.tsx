import { TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const ProgressSection = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <SectionHeading 
            title="Track progress that reflects your training" 
            subtitle="Your workouts evolve based on: performance, consistency, and recovery. Not just logs — real progression."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
           {/* Abstract Data Visualization UI Component */}
          <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 relative shadow-2xl">
             <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                <span className="font-bold text-lg tracking-wide uppercase flex items-center gap-2">
                   <TrendingUp className="w-5 h-5 text-[#22C55E]" /> Bench Press
                </span>
             </div>

             <div className="space-y-6 relative ml-2">
               {/* Vertical timeline line */}
               <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-[#FF3B3B] to-[#FF3B3B]/10 z-0" />

               {[
                 { time: "Week 1", weight: "60kg × 8", note: "Baseline established" },
                 { time: "Week 5", weight: "75kg × 8", note: "Progressive overload applied" }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 relative z-10 items-start">
                   <div className="w-2 h-2 mt-1.5 rounded-full bg-[#FF3B3B] shadow-[0_0_10px_rgba(255,59,59,0.8)] shrink-0" />
                   <div>
                     <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-4 mb-1">
                        <span className="text-[#888888] text-sm font-mono w-16">{item.time}</span>
                        <span className="font-bold text-xl">{item.weight}</span>
                     </div>
                     <div className="text-sm text-[#888888]">{item.note}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
