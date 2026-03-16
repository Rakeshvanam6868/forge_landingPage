import { LayoutTemplate, TrendingUp, Calendar } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

export const ProductPreviewSection = () => (
  <section className="py-24 bg-[#050505] relative border-t border-white/5" id="preview">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="Built for Performance" />
      </FadeIn>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeIn delay={0.1}>
          <Card className="h-full flex flex-col group">
            <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 bg-[#FF3B3B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <LayoutTemplate className="w-6 h-6 text-white/80" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white/90">Adaptive Workout Engine</h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">Your training plan automatically adjusts based on your performance and feedback.</p>
            
            {/* Inline UI Component */}
            <div className="mt-auto bg-[#1A1A1A] rounded-lg border border-white/5 p-4 flex gap-2">
               <div className="flex-1 bg-[#222222] rounded py-2 px-3 flex flex-col shadow-inner">
                 <span className="text-[10px] text-[#888] uppercase font-bold tracking-widest">LBS</span>
                 <span className="font-mono text-lg font-bold">190</span>
               </div>
               <div className="flex-1 bg-[#222222] rounded py-2 px-3 flex flex-col shadow-inner">
                 <span className="text-[10px] text-[#888] uppercase font-bold tracking-widest">REPS</span>
                 <span className="font-mono text-lg font-bold">8</span>
               </div>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="h-full flex flex-col group">
            <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 bg-[#FF3B3B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <TrendingUp className="w-6 h-6 text-[#22C55E]/80" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white/90">Equipment-Aware Training</h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">Workouts match your available equipment whether you train at home or in the gym.</p>
            
            {/* Inline UI Component */}
            <div className="mt-auto bg-[#1A1A1A] rounded-lg border border-[#22C55E]/20 p-4 border-l-2 border-l-[#22C55E]">
               <div className="text-xs font-bold text-[#22C55E] mb-1">Target Reached</div>
               <div className="text-xs text-[#888]">Squat increased by +5 lbs for next scheduled session.</div>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Card className="h-full flex flex-col group">
            <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 bg-[#FF3B3B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Calendar className="w-6 h-6 text-white/80" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white/90">Structured Progression</h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">Every workout builds on the last so you continue improving week after week.</p>
            
            {/* Inline UI Component */}
            <div className="mt-auto bg-[#1A1A1A] rounded-lg border border-white/5 p-4">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] text-[#FF3B3B] font-bold uppercase tracking-widest">Up Next</span>
               </div>
               <div className="text-sm font-semibold">Upper Power (B)</div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </div>
  </section>
);
