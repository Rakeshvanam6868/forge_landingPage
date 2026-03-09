import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const ProblemSection = () => (
  <section className="py-32 bg-[#000000] relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading 
          title="If Your Progress Has Stalled, There's a Reason" 
          subtitle="Most fitness apps log workouts without providing the logic needed to drive actual physical adaptation."
        />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Doing the same 3×10 every week",
            description: "and wondering why nothing changes."
          },
          {
            title: "Logging workouts but never knowing",
            description: "if you're actually getting stronger."
          },
          {
            title: "Guessing What to Train Next",
            description: "Without guidance, training becomes random. Random effort without structured progression leads to average results."
          }
        ].map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="border border-white/5 rounded-2xl p-8 h-full bg-[#0A0A0A]">
              <div className="w-8 h-8 rounded-full bg-[#FF3B3B]/10 flex items-center justify-center mb-6 text-[#FF3B3B] font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
