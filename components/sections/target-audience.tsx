import { Dumbbell, TrendingUp, Smartphone } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export const TargetAudienceSection = () => (
  <section className="py-32 bg-[#000000] border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="Who Trainzy Is Built For" />
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Dumbbell className="w-6 h-6 text-[#FF3B3B]" />,
            title: "Beginner lifters",
            desc: "Start with structured workouts that grow with your ability."
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-[#FF3B3B]" />,
            title: "Intermediate lifters",
            desc: "Break through plateaus with adaptive training adjustments."
          },
          {
            icon: <Smartphone className="w-6 h-6 text-[#FF3B3B]" />,
            title: "Home gym athletes",
            desc: "Train effectively even with limited equipment."
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="h-full">
            <div className="bg-[#050505] p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center text-center items-center shadow-lg hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[#111] border border-[#222] rounded-full flex justify-center items-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-[#888] text-sm">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
