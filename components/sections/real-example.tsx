import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const RealExampleSection = () => (
  <section className="py-32 bg-[#000000] border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <FadeIn>
        <SectionHeading title="What actually happens when you miss workouts" />
      </FadeIn>
      
      <div className="mt-16 max-w-2xl mx-auto space-y-12">
        <FadeIn delay={0.1}>
          <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl italic font-black">?</span>
            </div>
            <p className="text-[#888] text-sm font-bold uppercase tracking-widest mb-4">The Scenario</p>
            <h3 className="text-2xl font-bold mb-4">Missed 3 workouts last week?</h3>
            <p className="text-[#CCCCCC] text-lg leading-relaxed">Here’s what changes automatically:</p>
            
            <ul className="mt-8 space-y-4 text-left inline-block">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                <span className="text-white/90 font-medium">Intensity reduced for recovery</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                <span className="text-white/90 font-medium">Missed muscle groups rescheduled</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                <span className="text-white/90 font-medium">Next workout simplified</span>
              </li>
            </ul>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xl font-bold text-white">You open the app and train. That’s it.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
