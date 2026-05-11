import Script from 'next/script';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ProductPreviewSection } from '@/components/sections/product-preview';
import { LiveWorkoutSection } from '@/components/sections/live-workout';
import { ProgressSection } from '@/components/sections/progress';
import { FounderSection } from '@/components/sections/founder';
import { EarlyAccessSection } from '@/components/sections/early-access';
import { FinalCTA } from '@/components/sections/final-cta';
import { FoundingMemberSuccess } from '@/components/ui/founding-member-success';
import { SocialProofBubble } from '@/components/ui/social-proof-bubble';


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
        <SocialProofBubble />

        {/* BEAT 1 — I KNOW YOU */}
        <Hero />


        {/* BEAT 2 — HERE'S THE SHIFT */}
        <ProductPreviewSection />

        {/* BEAT 3 — IN THE GYM */}
        <LiveWorkoutSection />

        {/* BEAT 4 — THIS IS REAL */}
        <ProgressSection />

        {/* BEAT 5 — GET IN */}
        <FounderSection />
        <EarlyAccessSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
