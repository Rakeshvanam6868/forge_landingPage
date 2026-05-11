import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Share2, Instagram, Award, Flame, Zap } from 'lucide-react';

export const SocialShareSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[150px] pointer-events-none rounded-b-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-wider mb-3">Share Your Wins</h2>
            <SectionHeading title="Effort deserves to be seen." />
            <p className="text-[#888888] text-lg mt-6">
              Beautiful, auto-generated cards for your PRs, streaks, and achievements. Ready for Instagram in one tap.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn delay={0.1}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#111] to-[#000] rounded-2xl mb-6 relative border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                  {/* Card Design */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 blur-2xl rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="text-xs text-[#888] font-bold tracking-widest uppercase mb-1">Trainzy / Strength</div>
                    <div className="text-3xl font-black text-white leading-tight">1,960kg<br/><span className="text-yellow-500">Lifted</span></div>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-[#888]">New PR</span>
                      <span className="text-white font-bold flex items-center gap-1"><Award className="w-4 h-4 text-yellow-500" /> Bench +2.5kg</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-sm text-[#888]">Duration</span>
                      <span className="text-white font-bold">45m 12s</span>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#888]">@username</span>
                    <div className="w-6 h-6 rounded bg-[#FF3B3B] flex items-center justify-center font-black text-[10px] text-white">Tz</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">Achievement Card</h4>
                <p className="text-[#888888] text-sm">Highlights your total volume, session duration, and the PRs you hit.</p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#111] to-[#000] rounded-2xl mb-6 relative border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="text-xs text-[#888] font-bold tracking-widest uppercase mb-1">Trainzy / Streak</div>
                    <div className="text-4xl font-black text-white leading-tight flex items-center gap-2">
                      14<Flame className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="text-orange-500 font-bold mt-1">Days Consistent</div>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-2 mt-auto pb-4">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">12</div>
                      <div className="text-[10px] text-[#888] uppercase tracking-wider">Workouts</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">98%</div>
                      <div className="text-[10px] text-[#888] uppercase tracking-wider">Compliance</div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs font-bold text-[#888]">@username</span>
                    <div className="w-6 h-6 rounded bg-[#FF3B3B] flex items-center justify-center font-black text-[10px] text-white">Tz</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">Consistency Card</h4>
                <p className="text-[#888888] text-sm">Flex your dedication. Shows your current streak and workout frequency.</p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.3}>
            <div className="group relative md:mt-12">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                
                <div className="aspect-[4/5] bg-gradient-to-b from-purple-500 to-pink-500 rounded-2xl mb-6 relative p-6 flex flex-col justify-center items-center text-center overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  
                  <div className="relative z-10 space-y-6">
                    <Zap className="w-12 h-12 text-white/90 mx-auto drop-shadow-lg" />
                    <h3 className="text-2xl font-black text-white italic tracking-tight drop-shadow-md">
                      "SOME PEOPLE WANT IT TO HAPPEN, SOME MAKE IT HAPPEN."
                    </h3>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/80">@username</span>
                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center font-black text-[10px] text-purple-600">Tz</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">Motivation Card</h4>
                <p className="text-[#888888] text-sm">Stand out with premium, gradient-heavy motivational quotes and graphics.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-pink-500/25">
              <Instagram className="w-5 h-5" /> Ready for Instagram Stories
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
