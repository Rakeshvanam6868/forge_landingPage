import { User } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

export const FounderSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_100px_rgba(255,59,59,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
          <h2 className="text-3xl font-bold mb-8 relative z-10">Built from personal frustration</h2>
          <div className="space-y-6 text-[#888888] text-lg max-w-2xl mx-auto relative z-10 font-medium">
            <p className="text-white/90">I built Trainzy because I kept skipping workouts and quitting.</p>
            <p>Every time I missed a week, my old program felt useless.</p>
            <p>I was tired of constantly restarting from day one.</p>
            <p className="text-white/90 italic pt-4">So I built an app that never makes you restart.</p>
          </div>
          <div className="mt-10 flex justify-center">
             <div className="w-14 h-14 rounded-full border border-white/20 bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center shadow-lg">
               <User className="w-6 h-6 text-white/50" />
             </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
