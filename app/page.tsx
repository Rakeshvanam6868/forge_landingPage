import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ProductPreviewSection } from '@/components/sections/product-preview';
import { ProblemSection } from '@/components/sections/problem';
import { SolutionSection } from '@/components/sections/solution';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ProgressSection } from '@/components/sections/progress';
import { TargetAudienceSection } from '@/components/sections/target-audience';
import { FeaturesSection } from '@/components/sections/features';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FounderSection } from '@/components/sections/founder';
import { EarlyAccessSection } from '@/components/sections/early-access';
import { FinalCTA } from '@/components/sections/final-cta';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-[#000000] text-white selection:bg-[#FF3B3B]/30">
      <Navbar />
      <main>
        <Hero />
        <ProductPreviewSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ProgressSection />
        <TargetAudienceSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FounderSection />
        <EarlyAccessSection />
        <FinalCTA />
      </main>
      <Footer />
      {/* Target UX Improvement: Sticky waitlist button on mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <Button variant="primary" className="w-full shadow-2xl shadow-black/80 backdrop-blur-md">
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}
