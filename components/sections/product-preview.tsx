import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { CheckCircle2, TrendingUp, Battery, Activity, ArrowRight, Zap, Target } from 'lucide-react';

export const ProductPreviewSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden" id="preview">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF3B3B]/20 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3B3B]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionHeading title="Here's what actually changes." />
            <p className="text-[#888888] text-lg mt-6">
              Other apps start with a template. Trainzy starts with you.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {/* ── STEP 1 ── */}
          <FadeIn delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/10 to-transparent blur-3xl rounded-full" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden group hover:border-white/20 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FF3B3B]/10 flex items-center justify-center border border-[#FF3B3B]/20">
                          <Target className="w-5 h-5 text-[#FF3B3B]" />
                        </div>
                        <div className="text-white font-medium">Build Profile</div>
                      </div>
                      <div className="text-xs font-mono text-[#888888]">100%</div>
                    </div>

                    {[
                      { label: "Primary Goal", value: "Hypertrophy" },
                      { label: "Experience Level", value: "Intermediate" },
                      { label: "Training Location", value: "Commercial Gym" },
                      { label: "Weekly Frequency", value: "4 Days" },
                      { label: "Last Workout", value: "Push Day" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[#888888] text-sm">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm font-medium">{item.value}</span>
                          <CheckCircle2 className="w-4 h-4 text-[#FF3B3B]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">01</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF3B3B]/50 to-transparent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  Five questions.<br />One profile.
                </h3>
                <div className="text-lg text-[#888888] leading-relaxed space-y-6">
                  <p>
                    Goal. Level. Location. Frequency. Last workout. <br />
                    <strong className="text-white font-medium">Tap — no typing. Done in 30 seconds.</strong>
                  </p>
                  <p>
                    Then Trainzy shows you your training archetype — a specific profile built from those 5 answers. Not a plan someone else followed. Yours.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#FF3B3B] bg-[#FF3B3B]/10 px-4 py-2 rounded-full border border-[#FF3B3B]/20">
                    <Zap className="w-4 h-4" /> Your archetype. Not a template.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── STEP 2 ── */}
          <FadeIn delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">02</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF3B3B]/50 to-transparent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  Open the app.<br />Your number is there.
                </h3>
                <div className="text-lg text-[#888888] leading-relaxed space-y-6">
                  <p>
                    Before you pick an exercise — <strong className="text-white font-medium">today&apos;s volume target is on the first screen.</strong>
                  </p>
                  <p>
                    Not a suggested workout. A specific number. In kg. With the exact reason why.
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm">
                      Hevy shows you last session. Strong shows you a log. Trainzy shows you tomorrow&apos;s target — today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 via-yellow-500/10 to-blue-500/10 blur-3xl rounded-full" />
                <div className="relative space-y-4">
                  {/* Target Card */}
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10 flex flex-col items-center justify-center py-6">
                      <div className="text-[#888888] text-sm uppercase tracking-widest font-bold mb-4">Today&apos;s Target Volume</div>
                      <div className="text-7xl font-black text-white tracking-tighter mb-2">1,960<span className="text-3xl text-[#FF3B3B] ml-1">kg</span></div>
                      <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-medium border border-green-400/20 mt-2">
                        <TrendingUp className="w-4 h-4" /> +5% from last session
                      </div>
                    </div>
                  </div>

                  {/* 3 states */}
                  <div className="grid gap-3 relative z-10">
                    <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-4 flex items-center gap-4 hover:border-green-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] shrink-0" />
                      <p className="text-sm text-white/90 font-medium">
                        &ldquo;Last session felt easy. Push for 1,960kg today.&rdquo;
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-4 flex items-center gap-4 hover:border-yellow-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] shrink-0" />
                      <p className="text-sm text-[#CCCCCC]">
                        &ldquo;Two hard sessions back to back. Recover at 1,180kg.&rdquo;
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] shrink-0" />
                      <p className="text-sm text-[#CCCCCC]">
                        &ldquo;Maintaining baseline. Hold at 1,600kg.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── STEP 3 ── */}
          <FadeIn delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/10 to-transparent blur-3xl rounded-full" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                  <div className="relative z-10 space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-white font-medium">
                        <Activity className="w-5 h-5 text-[#FF3B3B]" />
                        How did that feel?
                      </div>
                      <div className="flex gap-2">
                        {['Too Easy', 'Just Right', 'Too Hard'].map((level, i) => (
                          <div key={i} className={`flex-1 py-3 px-2 text-center rounded-lg text-sm font-medium border cursor-pointer transition-all ${i === 1
                            ? 'bg-[#FF3B3B]/20 border-[#FF3B3B]/50 text-white shadow-[0_0_15px_rgba(255,59,59,0.2)]'
                            : 'bg-white/5 border-white/10 text-[#888888] hover:bg-white/10'
                            }`}>
                            {level}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4 text-white font-medium">
                        <Battery className="w-5 h-5 text-[#FF3B3B]" />
                        Energy levels today
                      </div>
                      <div className="flex gap-2">
                        {['Low', 'Normal', 'High'].map((level, i) => (
                          <div key={i} className={`flex-1 py-3 px-2 text-center rounded-lg text-sm font-medium border cursor-pointer transition-all ${i === 2
                            ? 'bg-[#FF3B3B]/20 border-[#FF3B3B]/50 text-white shadow-[0_0_15px_rgba(255,59,59,0.2)]'
                            : 'bg-white/5 border-white/10 text-[#888888] hover:bg-white/10'
                            }`}>
                            {level}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="text-[#888888] text-sm">Target adjustment generating...</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[#FF3B3B] rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-2 h-2 bg-[#FF3B3B] rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-2 h-2 bg-[#FF3B3B] rounded-full animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">03</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF3B3B]/50 to-transparent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  You log how it felt.<br />It sets what&apos;s next.
                </h3>
                <div className="text-lg text-[#888888] leading-relaxed space-y-6">
                  <p>
                    After every session — three taps: Energy. Difficulty. Done. That&apos;s what sets tomorrow&apos;s number. High energy streak? Volume goes up 10%. Two hard sessions back to back? Drops 40% before you burn out. Came back after missing days? Trainzy calls it a Comeback. You manage nothing. It handles all of it.
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

