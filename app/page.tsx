import Script from 'next/script';
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

import { BlogPreviewSection } from '@/components/sections/blog-preview';
import { DemoVideoSection } from '@/components/sections/demo-video';
import { SocialProofBubble } from '@/components/ui/social-proof-bubble';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-[#000000] text-white selection:bg-[#FF3B3B]/30 overflow-x-hidden">
      {/* Plausible Analytics Integration */}
      <Script 
        defer 
        data-domain="trainsmarter.app" 
        src="https://plausible.io/js/script.js" 
      />
      <SocialProofBubble />
      
      <Navbar />
      <main>
        <Hero />
        <DemoVideoSection />
        <ProductPreviewSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ProgressSection />
        <TargetAudienceSection />
        <FeaturesSection />
        <BlogPreviewSection />
        <TestimonialsSection />
        <FounderSection />
        <EarlyAccessSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
