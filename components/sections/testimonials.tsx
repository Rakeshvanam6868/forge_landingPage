import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const TestimonialsSection = () => (
  <section className="py-32 bg-[#000000] border-y border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="What Early Testers Say" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { quote: "I stopped guessing my workouts. The app tells me exactly what to lift.", author: "Rahul", role: "Gym Member, Beta Tester" },
          { quote: "Feels like having a smart training program in my pocket.", author: "Sarah K.", role: "Intermediate Lifter" },
          { quote: "Finally an app that actually tells me what to do in the gym.", author: "James M.", role: "Beta Tester" }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 h-full flex flex-col justify-between shadow-xl">
              <p className="text-[#CCCCCC] text-base leading-relaxed mb-8 italic">“{item.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#222] border border-white/10 flex items-center justify-center text-sm font-bold text-[#888]">
                  {item.author[0]}
                </div>
                <div>
                   <div className="text-sm font-bold text-white tracking-wide">{item.author}</div>
                   <div className="text-xs text-[#888]">{item.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
