import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy | Trainzy',
  description: 'Refund Policy for Trainzy Founding Member purchases.',
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32">
        <Link href="/" className="text-sm text-[#888] hover:text-white transition-colors mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Refund Policy</h1>
        <p className="text-sm text-[#888] mb-12">Last updated: April 21, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#CCCCCC] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Our Promise</h2>
            <p>We want you to feel confident supporting Trainzy as a Founding Member. Since the app is currently in development, we provide clear refund guarantees to protect your purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Founding Member Refund Guarantee</h2>
            
            <div className="bg-[#111] border border-[#22C55E]/20 rounded-xl p-6 my-4">
              <h3 className="text-lg font-bold text-[#22C55E] mb-3">✓ Full Refund Guarantee</h3>
              <p className="mb-3">You are eligible for a <strong>full refund</strong> of your ₹199 Founding Member payment in any of the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>App does not launch within 12 months</strong> of your purchase date.</li>
                <li><strong>Within 7 days of purchase</strong> — no questions asked, for any reason.</li>
                <li><strong>App launches but is fundamentally different</strong> from what was described on the site at the time of your purchase.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">How to Request a Refund</h2>
            <p>To request a refund, email us at <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a> with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The email address you used to purchase</li>
              <li>Your reason for requesting a refund (optional)</li>
            </ul>
            <p className="mt-3">We will process your refund within <strong>5-7 business days</strong>. The refund will be credited to your original payment method via Razorpay.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Waitlist</h2>
            <p>Joining the waitlist is free. You can request removal from the waitlist at any time by emailing us. No payment is required to join the waitlist.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Non-Refundable Cases</h2>
            <p>Refunds will not be provided in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>After the 7-day no-questions-asked window, if the app has launched and you have been granted access.</li>
              <li>If your account has been terminated due to a violation of our Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <p>For refund-related questions, contact us at <a href="mailto:hello@trainzy.app" className="text-[#FF3B3B] hover:underline">hello@trainzy.app</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
