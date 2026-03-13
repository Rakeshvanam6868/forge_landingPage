import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const HowItWorksSection = () => (
  <section className="py-32 bg-[#000000] border-t border-white/5" id="how-it-works">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="How TrainSmarter Works" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 relative mt-16">
        {/* Subtle connecting line for desktop */}
        <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-white/5" />

        {[
          {
            step: "01",
            title: "Tell Us Your Level",
            description: "Tell us your level and equipment."
          },
          {
            step: "02",
            title: "Track Your Workout",
            description: "Log your workout in real time."
          },
          {
            step: "03",
            title: "Your Program Adapts",
            description: "The system automatically adjusts your next workout."
          }
        ].map((item, index) => (
          <FadeIn key={index} delay={index * 0.15} className="relative z-10 flex flex-col text-left bg-[#111111] p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-[#050505] border border-[#FF3B3B]/20 flex items-center justify-center text-sm font-bold mb-6 text-[#FF3B3B] shadow-inner">
              Step {item.step}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-[#888888] text-sm leading-relaxed">{item.description}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
