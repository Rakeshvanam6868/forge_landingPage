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
import { FinalCTA } from '@/components/sections/final-cta';
import { RealExampleSection } from '@/components/sections/real-example';
import { BeforeAfterSection } from '@/components/sections/before-after';
import { EarlyAccessSection } from '@/components/sections/early-access';
import { FoundingMemberSuccess } from '@/components/ui/founding-member-success';


import { DemoVideoSection } from '@/components/sections/demo-video';
import { WaitlistForm } from '@/components/ui/waitlist-form';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-[#000000] text-white selection:bg-[#FF3B3B]/30 overflow-x-hidden">
      {/* Plausible Analytics Integration */}
      <Script 
        defer 
        data-domain="trainzy.app" 
        src="https://plausible.io/js/script.js" 
      />
      
      <Navbar />
      <main>
        <FoundingMemberSuccess />
        <Hero />
        
        {/* Single Waitlist Form Centerpiece */}
        <section className="bg-black py-12 flex justify-center">
          <WaitlistForm source="landing_page_center" />
        </section>

        {/* <DemoVideoSection /> */}
        <ProductPreviewSection />
        <ProblemSection />
        <SolutionSection />
        <RealExampleSection />
        <HowItWorksSection />
        <BeforeAfterSection />
        <ProgressSection />
        <TargetAudienceSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FounderSection />
        <EarlyAccessSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
