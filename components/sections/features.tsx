import { Zap, Activity, TrendingUp, Smartphone } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

export const FeaturesSection = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="Everything You Need To Get Stronger" />
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Zap className="w-5 h-5 text-white" />,
            title: "Adaptive Workouts",
            description: "Your training plan evolves automatically based on your performance."
          },
          {
            icon: <Activity className="w-5 h-5 text-white" />,
            title: "Live Workout Mode",
            description: "Track sets, weights, and rest timers seamlessly without friction."
          },
          {
            icon: <TrendingUp className="w-5 h-5 text-white" />,
            title: "Strength Tracking",
            description: "See clear trends in your performance with embedded analytics."
          },
          {
            icon: <Smartphone className="w-5 h-5 text-white" />,
            title: "Smart Insights",
            description: "Get actionable feedback after every single workout."
          }
        ].map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="h-full bg-[#111] border-white/10">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-[#0A0A0A] flex items-center justify-center mb-6 text-white shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{feature.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
