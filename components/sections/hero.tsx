import { ArrowRight, Play, Activity, TrendingUp, BarChart3, Check, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center">
    {/* Abstract Glow Effects */}
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3B3B]/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111111]/50 backdrop-blur-sm shadow-sm mb-8 hover:border-white/20 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-[#FF3B3B] animate-pulse"></span>
            <span className="text-xs font-semibold text-[#CCCCCC]">TrainSmarter is in early beta</span>
            <span className="text-xs text-[#888] ml-2 border-l border-white/20 pl-2">Join today</span>
            <ArrowRight className="w-3 h-3 ml-1 text-[#888]" />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05] text-white">
            Your workouts should evolve.<br />
            <span className="text-[#888888]">Most apps only log them.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto leading-relaxed">
            TrainSmarter automatically adjusts your sets, reps, and weights based on your real gym performance.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base group">
              Join Early Access
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base group">
              <Play className="mr-2 w-4 h-4" />
              See How It Works
            </Button>
          </div>
          <p className="mt-4 text-[11px] text-[#888888] font-medium tracking-wide">Designed for lifters who want real progress.</p>
        </FadeIn>
      </div>

      {/* Strict UI Screenshot (CSS/JSX based) */}
      <FadeIn delay={0.6} className="w-full mt-8 flex justify-center perspective-1000">
        <div className="relative w-full max-w-5xl rounded-xl border border-white/10 p-2 md:p-4 bg-gradient-to-b from-[#111111] to-[#050505] shadow-[0_0_80px_rgba(255,59,59,0.1)] -rotate-x-[2deg] hover:rotate-x-0 transition-transform duration-700 ease-out">
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none" />
          
          {/* App Header */}
          <div className="flex items-center justify-between px-4 pb-4 pt-2 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="px-3 py-1 bg-[#1A1A1A] rounded-md border border-white/5 text-[10px] text-[#888] flex items-center gap-2">
              <Activity className="w-3 h-3 text-[#FF3B3B]" /> train.smarter/app
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>
          
          {/* Main App Canvas */}
          <div className="aspect-[16/10] bg-[#0A0A0A] rounded-b-lg overflow-hidden flex shadow-inner">
            
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 border-r border-white/5 bg-[#050505] p-6">
              <div className="text-xs font-bold text-[#888] uppercase tracking-widest mb-4">Training Block</div>
              <div className="space-y-2">
                <div className="px-3 py-2 bg-[#111111] rounded text-sm font-medium text-white border border-white/5">Week 4: Hypertrophy</div>
                <div className="px-3 py-2 rounded text-sm text-[#888] hover:text-white transition-colors cursor-pointer">Week 5: Deload</div>
                <div className="px-3 py-2 rounded text-sm text-[#888] hover:text-white transition-colors cursor-pointer">Week 6: Strength</div>
              </div>
              <div className="mt-8 text-xs font-bold text-[#888] uppercase tracking-widest mb-4">Analytics</div>
              <div className="space-y-2">
                <div className="px-3 py-2 rounded text-sm text-[#888] flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><TrendingUp className="w-4 h-4" /> Volume Trends</div>
                <div className="px-3 py-2 rounded text-sm text-[#888] flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><BarChart3 className="w-4 h-4" /> PR History</div>
              </div>
            </div>

            {/* Main Editor/Workout View */}
            <div className="flex-1 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Push Day (A)</h2>
                  <p className="text-[#888] text-sm">Target: 70% 1RM • Focus: Volume</p>
                </div>
                <div className="bg-[#FF3B3B]/10 border border-[#FF3B3B]/20 text-[#FF3B3B] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                  <Activity className="w-3 h-3" /> System Adapted (+5 lbs to Bench)
                </div>
              </div>

              {/* Workout Logic Display */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                {/* Left - Exercise List */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Active Exercise Card */}
                  <div className="bg-[#111111] rounded-xl border border-white/10 p-5 shadow-lg relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF3B3B]" />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pl-3 gap-2">
                      <div className="font-semibold text-lg">Barbell Bench Press</div>
                      <div className="text-xs bg-[#1A1A1A] p-2 rounded border border-white/5 flex flex-col items-end gap-1">
                        <span className="text-[#888]">Last session: 185lbs × 8</span>
                        <span className="text-[#22C55E] font-medium flex items-center gap-1">
                           <TrendingUp className="w-3 h-3" /> Suggested today: 190lbs × 8
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm bg-[#1A1A1A] rounded p-2 border border-white/5">
                        <div className="w-8 text-center text-[#888] font-mono">1</div>
                        <div className="flex-1 font-medium text-white/50 line-through">190 lbs × 8</div>
                        <Check className="w-4 h-4 text-[#22C55E]" />
                      </div>
                      <div className="flex items-center gap-4 text-sm bg-[#FF3B3B]/5 rounded p-2 border border-[#FF3B3B]/20">
                        <div className="w-8 text-center text-[#FF3B3B] font-mono font-bold">2</div>
                        <div className="flex-1 font-medium text-white">190 lbs × 8</div>
                        <div className="w-16 text-center text-xs font-bold text-[#FF3B3B]">DOING</div>
                      </div>
                      <div className="flex items-center gap-4 text-sm bg-[#1A1A1A] rounded p-2 border border-white/5 opacity-50">
                        <div className="w-8 text-center text-[#888] font-mono">3</div>
                        <div className="flex-1 font-medium">190 lbs × 8</div>
                        <div className="w-4 h-4 rounded-full border border-[#888]" />
                      </div>
                    </div>
                  </div>

                  {/* Pending Exercise Card */}
                  <div className="bg-[#111111] rounded-xl border border-white/5 p-5 opacity-60">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-semibold text-white">Incline Dumbbell Press</div>
                    </div>
                    <div className="text-sm text-[#888] bg-[#1A1A1A] rounded p-3 italic">
                      System adjusted weight down 5 lbs based on last week's fatigue.
                    </div>
                  </div>
                </div>

                {/* Right - AI Insights Panel */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="bg-[#111111] border border-white/5 rounded-xl p-5 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-[#FF3B3B]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Smart Insights</span>
                    </div>
                    <div className="space-y-4">
                       <div>
                         <div className="text-sm font-medium mb-1 line-clamp-1">Strength Trending Up</div>
                         <div className="text-xs text-[#888]">Your estimated 1RM for Bench Press has increased by 4% this block. Maintaining current volume trajectory.</div>
                       </div>
                       <div className="h-px bg-white/5" />
                       <div>
                         <div className="text-sm font-medium mb-1">Deload Incoming</div>
                         <div className="text-xs text-[#888]">Fatigue accumulation detected. System will schedule a 20% volume reduction next week.</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
