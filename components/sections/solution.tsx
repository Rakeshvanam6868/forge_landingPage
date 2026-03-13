import { Check, Activity } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export const SolutionSection = () => (
  <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
    <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-[#FF3B3B]/10 blur-[150px] pointer-events-none rounded-full" />
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="inline-block px-3 py-1 rounded-full bg-[#FF3B3B]/10 border border-[#FF3B3B]/20 text-[#FF3B3B] text-xs font-bold uppercase tracking-wider mb-6">
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Turn Every Workout Into Real Progress
          </h2>
          <p className="text-[#888888] text-lg mb-8 leading-relaxed">
            TrainSmarter analyzes your training history and performance to automatically adjust your workouts.
          </p>
          <p className="text-[#888888] text-lg mb-10 leading-relaxed">
            It tells you exactly what weight to lift, how many reps to perform, and when to progress.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              "Automatically increase weight when you're ready",
              "Detect stalled lifts before plateaus happen",
              "Adjust rep ranges to maintain progression",
              "Track real strength improvements over time"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#FF3B3B]" />
                <span className="text-[#CCCCCC] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button>See Features</Button>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10">
          <div className="relative rounded-2xl p-4 bg-[#111111] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden">
               <div className="px-6 py-4 border-b border-white/5 bg-[#050505] flex justify-between items-center">
                 <span className="font-bold">Next Session Generation</span>
                 <Activity className="w-4 h-4 text-[#888]" />
               </div>
               <div className="p-6 space-y-4">
                 <div className="bg-[#1A1A1A] rounded p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                   <div>
                     <div className="font-semibold text-sm">Deadlift</div>
                     <div className="text-xs text-[#888]">Analyzing last 4 weeks...</div>
                   </div>
                   <div className="bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold px-3 py-1.5 rounded-md self-start sm:self-auto border border-[#22C55E]/20">
                     Maintain Load
                   </div>
                 </div>
                 <div className="bg-[#1A1A1A] rounded p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                   <div>
                     <div className="font-semibold text-sm">Pull-ups</div>
                     <div className="text-xs text-[#888]">Target volume exceeded</div>
                   </div>
                   <div className="bg-[#FF3B3B]/10 text-[#FF3B3B] text-xs font-bold px-3 py-1.5 rounded-md self-start sm:self-auto border border-[#FF3B3B]/20">
                     Add +2.5 lbs
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
