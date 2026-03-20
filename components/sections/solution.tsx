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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
            Your plan never breaks.<br />
            <span className="text-[#888888]">It adjusts.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto leading-relaxed">
            You don't restart. You continue.
          </p>
          
          <div className="space-y-6 mb-10 text-xl font-bold">
            <div className="flex items-center gap-4">
              <span className="text-[#FF3B3B]">Missed workouts ❌</span>
            </div>
            <div className="flex items-center gap-4 pl-4">
              <span className="text-[#888888] text-sm">↓ App detects gap</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#22C55E]">Plan rebuilt instantly ✅</span>
            </div>
          </div>
          <Button variant="primary">Start Your First Workout</Button>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10">
          <div className="relative rounded-2xl p-4 bg-[#111111] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden">
               <div className="px-6 py-4 border-b border-white/5 bg-[#050505] flex justify-between items-center">
                 <span className="font-bold">Plan Recovery</span>
                 <Activity className="w-4 h-4 text-[#888]" />
               </div>
               <div className="p-6 space-y-4">
                 <div className="bg-[#1A1A1A] rounded p-4 border border-[#FF3B3B]/30 flex flex-col sm:flex-row sm:items-center gap-3">
                   <div>
                     <div className="font-semibold text-sm">Missed 3 Workouts ❌</div>
                     <div className="text-xs text-[#888]">App detects gap</div>
                   </div>
                 </div>
                 <div className="bg-[#1A1A1A] rounded p-4 border border-[#22C55E]/30 flex flex-col sm:flex-row sm:items-center gap-3">
                   <div>
                     <div className="font-semibold text-sm">Plan Rebuilt Instantly ✅</div>
                     <div className="text-xs text-[#888]">Ready for today</div>
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
