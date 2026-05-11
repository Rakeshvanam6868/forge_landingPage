import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Timer, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const LiveWorkoutSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF3B3B]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[800px] h-[600px] bg-[#FF3B3B]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionHeading title="Zero guesswork on the floor." />
            <p className="text-[#888888] text-lg mt-6">
              When the workout starts, the thinking stops. One exercise. One target. Nothing else on screen.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mock UI Side */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B3B]/20 to-transparent blur-3xl rounded-3xl" />
              <div className="relative flex flex-col gap-6">
                
                {/* Active Exercise Card */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#FF3B3B]/30 transition-colors">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-sm text-[#888888] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#FF3B3B] shadow-[0_0_8px_rgba(255,59,59,0.8)]" />
                      Exercise 3 of 8
                    </div>
                    <div className="text-white font-mono text-lg flex items-center gap-2">
                      <Timer className="w-4 h-4 text-[#888888]" />
                      24:15
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-extrabold text-white mb-1">Incline Dumbbell Press</h3>
                    <p className="text-[#888888] mb-8">Upper Chest • 3 Sets</p>

                    <div className="space-y-3">
                      {[
                        { set: 1, weight: '30kg', reps: 10, done: true },
                        { set: 2, weight: '30kg', reps: 10, done: true },
                        { set: 3, weight: '30kg', reps: 8, active: true },
                      ].map((item, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border ${
                          item.active 
                            ? 'bg-[#FF3B3B]/10 border-[#FF3B3B]/30' 
                            : item.done 
                              ? 'bg-white/5 border-white/5 opacity-60' 
                              : 'bg-white/5 border-white/5'
                        }`}>
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${item.active ? 'bg-[#FF3B3B] text-white' : 'bg-white/10 text-white/50'}`}>
                              {item.set}
                            </div>
                            <div className="flex gap-4 text-xl font-bold">
                              <span className="text-white">{item.weight}</span>
                              <span className="text-[#555]">×</span>
                              <span className="text-white">{item.reps}</span>
                            </div>
                          </div>
                          {item.done ? (
                            <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                          ) : (
                            <div className={`w-6 h-6 rounded-full border-2 ${item.active ? 'border-[#FF3B3B]' : 'border-white/20'}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rest Timer Overlay Mock */}
                <div className="absolute -bottom-8 -right-8 w-64 bg-[#111111] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-[#FF3B3B]/20 border-t-[#FF3B3B] animate-spin mb-4" />
                    <div className="text-xs text-[#888888] uppercase tracking-widest font-bold mb-1">Resting</div>
                    <div className="text-4xl font-black text-white font-mono mb-4">01:15</div>
                    <div className="text-xs text-[#888888]">Next up: Cable Flys</div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn delay={0.2}>
            <div className="lg:pl-10 space-y-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF3B3B]/10 flex items-center justify-center shrink-0 border border-[#FF3B3B]/20">
                  <ShieldCheck className="w-6 h-6 text-[#FF3B3B]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Weight Intelligence</h4>
                  <p className="text-[#888888] leading-relaxed">
                    Your target weight is already filled in. Based on last session. No scrolling back. No guessing the number.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF3B3B]/10 flex items-center justify-center shrink-0 border border-[#FF3B3B]/20">
                  <Timer className="w-6 h-6 text-[#FF3B3B]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Smart Rest Timers</h4>
                  <p className="text-[#888888] leading-relaxed">
                    Finish a set — dark overlay. Pulsing countdown. Next exercise shown. You just breathe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF3B3B]/10 flex items-center justify-center shrink-0 border border-[#FF3B3B]/20">
                  <Zap className="w-6 h-6 text-[#FF3B3B]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">One Exercise at a Time</h4>
                  <p className="text-[#888888] leading-relaxed">
                    No list of 10 exercises staring at you. Just the one you&apos;re doing right now. That&apos;s the whole screen.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
