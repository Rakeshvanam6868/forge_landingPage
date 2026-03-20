import { Zap, Activity, TrendingUp, Smartphone } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

export const FeaturesSection = () => (
  <section className="py-32 bg-[#050505] border-t border-white/5" id="features">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading title="Built to keep you going" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Zap className="w-5 h-5 text-white" />,
            title: "Adaptive Training Engine",
            description: "Your plan adapts so you don't have to restart. Ensuring optimal progress every single day."
          },
          {
            icon: <Activity className="w-5 h-5 text-white" />,
            title: "You always know what to do next",
            description: "Open the app. Your workout is ready."
          },
          {
            icon: <TrendingUp className="w-5 h-5 text-white" />,
            title: "Progress without overthinking",
            description: "No calculations. No guessing. Just train."
          }
        ].map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="h-full bg-[#111] border-white/10 p-8 rounded-2xl">
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
