import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const ProblemSection = () => (
  <section className="py-32 bg-[#000000] relative border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading 
          title="You skip a workout. Then another. Then you stop." 
        />
      </FadeIn>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-xl text-[#888] mb-8 text-center">Most people don’t quit because they’re lazy. Then you stop.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "their plan stops making sense",
              desc: "They quit because:"
            },
            {
              title: "they don’t know what to do next",
              desc: "their plan stops making sense"
            },
            {
              title: "restarting feels frustrating",
              desc: "they don’t know what to do next"
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-white/5 rounded-2xl p-8 h-full bg-[#0A0A0A] flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#FF3B3B] mb-6 shadow-[0_0_10px_rgba(255,59,59,0.5)]" />
                <h3 className="text-lg font-bold mb-4 text-white text-center leading-tight">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.4}>
        <div className="text-center text-[#888] text-lg font-medium">
          Most apps don’t fix this. They just track it.
        </div>
      </FadeIn>
    </div>
  </section>
);
