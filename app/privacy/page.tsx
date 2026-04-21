import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trainzy',
  description: 'Privacy Policy for Trainzy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32">
        <Link href="/" className="text-sm text-[#888] hover:text-white transition-colors mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#888] mb-12">Last updated: April 21, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#CCCCCC] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>When you use Trainzy, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Personal Information:</strong> Name and email address when you join the waitlist or make a purchase.</li>
              <li><strong>Payment Information:</strong> Payment details are processed by Razorpay. We receive confirmation of payment but do not store card numbers, CVV, or other sensitive payment data.</li>
              <li><strong>Usage Data:</strong> We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies and does not collect personal data. It tracks page views and referral sources only.</li>
              <li><strong>Technical Data:</strong> IP address (for rate limiting only, not stored permanently), browser type, and device information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To manage your waitlist position and send launch updates.</li>
              <li>To process payments and provide Founding Member access.</li>
              <li>To send transactional emails (confirmation, welcome, launch notification).</li>
              <li>To improve our product and user experience.</li>
            </ul>
            <p className="mt-3">We will <strong>never</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Data Storage & Security</h2>
            <p>Your data is stored securely using Supabase (hosted on AWS infrastructure). We use industry-standard encryption and access controls. Payment processing is handled entirely by Razorpay, which is PCI-DSS compliant.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Email Communications</h2>
            <p>We send emails using Resend. You will receive:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Waitlist confirmation (once)</li>
              <li>Payment confirmation (if applicable, once)</li>
              <li>Launch updates (occasional)</li>
            </ul>
            <p className="mt-3">You can unsubscribe from non-transactional emails at any time by replying to any email with &quot;unsubscribe&quot; or contacting us directly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Cookies</h2>
            <p>We do not use cookies for tracking. Plausible Analytics is cookie-free. No third-party tracking cookies are placed on your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion of your data from our systems.</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. If you request deletion, we will remove your data within 30 days, except where we are legally required to retain it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify registered users of any material changes via email.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
