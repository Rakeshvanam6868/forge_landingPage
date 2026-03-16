import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const HowItWorksSection = () => (
  <section className="py-32 bg-[#000000] border-t border-white/5" id="how-it-works">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="How Trainzy Works" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 relative mt-16">
        {/* Subtle connecting line for desktop */}
        {/* The connecting line div was removed as per the instruction's implied change in the surrounding div structure. */}

        {[
          {
            step: "01",
            title: "Log your workout.",
            desc: "Record your sets, reps, and weights as you train."
          },
          {
            step: "02",
            title: "Trainzy analyzes your performance.",
            desc: "Our engine evaluates your volume, intensity, and feedback."
          },
          {
            step: "03",
            title: "Your next workout adapts automatically.",
            desc: "Wake up to a plan perfectly tailored to your current level."
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.15} className="relative z-10 flex flex-col text-left bg-[#111111] p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-[#050505] border border-[#FF3B3B]/20 flex items-center justify-center text-sm font-bold mb-6 text-[#FF3B3B] shadow-inner">
              Step {item.step}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
