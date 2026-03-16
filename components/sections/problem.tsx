import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const ProblemSection = () => (
  <section className="py-32 bg-[#000000] relative border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading 
          title="If Your Progress Has Stalled, There’s a Reason" 
        />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Most fitness apps only log workouts.",
            desc: "They record what you did but never tell you what to do next."
          },
          {
            title: "Programs stop adapting.",
            desc: "Your body changes but your workout plan stays the same."
          },
          {
            title: "Progress becomes guesswork.",
            desc: "Increase weight? Add reps? Deload? Most lifters end up guessing."
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="border border-white/5 rounded-2xl p-8 h-full bg-[#0A0A0A]">
              <div className="w-8 h-8 rounded-full bg-[#FF3B3B]/10 flex items-center justify-center mb-6 text-[#FF3B3B] font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
