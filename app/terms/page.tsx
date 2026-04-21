import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Trainzy',
  description: 'Terms of Service for Trainzy — the adaptive workout app.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32">
        <Link href="/" className="text-sm text-[#888] hover:text-white transition-colors mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-sm text-[#888] mb-12">Last updated: April 21, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#CCCCCC] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. About Trainzy</h2>
            <p>Trainzy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an adaptive workout planning application currently in development. By using our website at trainzy.app (the &quot;Site&quot;) or purchasing a Founding Member plan, you agree to these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Pre-Launch Product</h2>
            <p>Trainzy is currently in a pre-launch phase. The application is under active development. By joining the waitlist or purchasing a Founding Member plan, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The app is not yet available for download or use.</li>
              <li>Features described on the Site represent our planned functionality and may change before launch.</li>
              <li>We will provide updates on development progress via email.</li>
              <li>All Founding Member purchases include a full refund guarantee if we do not launch within 12 months of purchase (see Refund Policy).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Founding Member Plan</h2>
            <p>The Founding Member plan is a one-time payment of ₹199 that provides:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>1 year of full premium access from the date the app launches (not from the date of purchase).</li>
              <li>Priority early access before general availability.</li>
              <li>The Founding Member offer is limited to 100 users.</li>
              <li>If subscription pricing is introduced in the future, your 1-year premium access remains unaffected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Free Tier & Future Pricing</h2>
            <p>Trainzy plans to launch with a free tier that includes core workout features. Premium features may be introduced as a paid subscription in the future.</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The free tier will include basic adaptive workout planning.</li>
              <li>Premium features (advanced analytics, custom programs, etc.) may require a subscription.</li>
              <li>Founding Members will have access to all premium features for the duration of their 1-year access period, regardless of future pricing changes.</li>
              <li>We will communicate any pricing changes at least 30 days before they take effect.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Payments</h2>
            <p>All payments are processed securely by Razorpay. We do not store your card details. By making a payment, you agree to Razorpay&apos;s terms of service in addition to ours.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Waitlist</h2>
            <p>Joining the waitlist is free and does not obligate you to purchase anything. We collect your name and email address to notify you about the launch. You can request removal from the waitlist at any time by emailing us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p>All content on this Site, including text, graphics, logos, and design, is owned by Trainzy and protected by applicable intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p>Trainzy is provided &quot;as is&quot; without any warranties. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site or purchase of the Founding Member plan.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Modifications</h2>
            <p>We reserve the right to update these Terms at any time. Material changes will be communicated via email to registered users. Continued use of the Site after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
