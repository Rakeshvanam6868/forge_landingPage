import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const HowItWorksSection = () => (
  <section className="py-32 bg-[#000000] border-t border-white/5" id="how-it-works">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="How it works" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 relative mt-16">
        {/* Subtle connecting line for desktop */}
        {/* The connecting line div was removed as per the instruction's implied change in the surrounding div structure. */}

        {[
          {
            step: "01",
            title: "Open app",
            desc: "You see exactly what to do today."
          },
          {
            step: "02",
            title: "Do workout",
            desc: "You lift the weights and log your sets."
          },
          {
            step: "03",
            title: "App adjusts",
            desc: "Missed a day? We fix the plan for tomorrow."
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
