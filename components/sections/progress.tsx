import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Target, Award, LineChart, TrendingUp, Zap, Flame, Share2, Activity, CalendarDays, ArrowRight, RotateCcw } from 'lucide-react';
import { WaitlistForm } from '@/components/ui/waitlist-form';

export const ProgressSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF3B3B]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionHeading title="What you see. Every day." />
            <p className="text-[#888888] text-lg mt-6">
              Not a log. A picture of where you are and what&apos;s coming next.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── BLOCK 1: BEFORE YOU TRAIN ── */}
          <FadeIn delay={0.1}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B]/10 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden flex flex-col group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3B3B]/10 flex items-center justify-center border border-[#FF3B3B]/20 mb-6">
                    <Target className="w-6 h-6 text-[#FF3B3B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Before you train</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">Your target. Your focus muscle. Your state. All on the first screen.</p>
                </div>

                <div className="relative z-10 space-y-4 mt-auto">
                  {/* Mock UI snippet */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <div className="text-[10px] text-[#888888] uppercase tracking-wider font-semibold mb-1">Target Volume</div>
                        <div className="text-2xl font-black text-white leading-none">1,960<span className="text-sm text-[#FF3B3B] ml-1">kg</span></div>
                      </div>
                      <div className="flex items-center gap-1 text-[#22C55E] text-xs font-bold bg-[#22C55E]/10 px-2 py-1 rounded-md border border-[#22C55E]/20">
                        <TrendingUp className="w-3 h-3" /> +5%
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#888888] flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /> Focus</span>
                        <span className="font-medium text-white">Rear Delts</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#888888] flex items-center gap-2"><Activity className="w-4 h-4 text-green-500" /> State</span>
                        <span className="font-medium text-[#22C55E]">Progression</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── BLOCK 2: AFTER YOU TRAIN ── */}
          <FadeIn delay={0.2}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B]/10 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden flex flex-col group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3B3B]/10 flex items-center justify-center border border-[#FF3B3B]/20 mb-6">
                    <Award className="w-6 h-6 text-[#FF3B3B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">After you train</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">PR detected. Badge earned. Shareable card ready. One tap to Instagram.</p>
                </div>

                <div className="relative z-10 space-y-4 mt-auto">
                  {/* Mock UI snippet */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                        <Award className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div>
                        <div className="text-xs text-yellow-500/80 font-bold uppercase tracking-wider mb-0.5">New PR Detected</div>
                        <div className="text-sm font-bold text-white">Bench Press +2.5kg</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-[#888888] uppercase mb-1">Streak</div>
                        <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                          <Flame className="w-4 h-4 text-orange-500" /> 9 Days
                        </div>
                      </div>
                      <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-[#888888] uppercase mb-1">Badge</div>
                        <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                          <Target className="w-4 h-4 text-blue-400" /> Perfect
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/20">
                      <Share2 className="w-4 h-4" /> Share to Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── BLOCK 3: OVER TIME ── */}
          <FadeIn delay={0.3}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B]/10 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden flex flex-col group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3B3B]/10 flex items-center justify-center border border-[#FF3B3B]/20 mb-6">
                    <LineChart className="w-6 h-6 text-[#FF3B3B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Over time</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">Consistency grid. Volume trend. Muscle distribution. Level re-evaluated every 28 days.</p>
                </div>

                <div className="relative z-10 mt-auto">
                  {/* Mock UI snippet */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarDays className="w-4 h-4 text-[#888888]" />
                      <span className="text-xs text-[#888888] font-semibold uppercase tracking-wider">Consistency Grid</span>
                    </div>
                    
                    {/* Simulated Heatmap */}
                    <div className="grid grid-cols-7 gap-1.5 mb-6">
                      {Array.from({ length: 28 }).map((_, i) => {
                        // Generate somewhat random but realistic looking heatmap data
                        const intensities = [
                          'bg-white/5', 'bg-white/5', 'bg-white/5',
                          'bg-green-500/20', 'bg-green-500/40', 'bg-green-500/60', 'bg-green-500/80', 'bg-[#22C55E]'
                        ];
                        // Higher chance of being active towards the end to simulate a good streak
                        const isRecent = i > 14;
                        const pool = isRecent ? intensities.slice(3) : intensities;
                        const color = pool[Math.floor((i * 13 + 7) % pool.length)]; // deterministic "random" for SSR hydration match if ever used, but since it's just client mostly or static, let's use a simple deterministic sequence
                        
                        return (
                          <div key={i} className={`w-full aspect-square rounded-[3px] ${color}`} />
                        );
                      })}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#888888]">Weekly Vol. Trend</span>
                        <div className="flex gap-1 items-end h-4">
                          <div className="w-1.5 h-2 bg-white/20 rounded-t-sm" />
                          <div className="w-1.5 h-2.5 bg-white/40 rounded-t-sm" />
                          <div className="w-1.5 h-3.5 bg-white/60 rounded-t-sm" />
                          <div className="w-1.5 h-4 bg-[#FF3B3B] rounded-t-sm" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#888888]">Level Eval</span>
                        <span className="text-xs font-bold text-white">Every 28 Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 mb-24 flex justify-center w-full">
          <WaitlistForm source="landing_page_center" />
        </div>

        {/* ── CLOSING LINE ── */}
        <FadeIn delay={0.4}>
          <div className="mt-24 relative p-10 rounded-3xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF3B3B]/30 to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF3B3B]/10 rounded-full flex items-center justify-center border border-[#FF3B3B]/20 mb-6">
                <RotateCcw className="w-8 h-8 text-[#FF3B3B]" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
                Change your goal anytime.
              </h3>
              <p className="text-lg text-[#888888] max-w-2xl mx-auto mb-2">
                Old program archived. New one built in seconds.
                <strong className="text-white block mt-2 text-xl">Every rep of history preserved — forever.</strong>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
