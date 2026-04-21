'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const WaitlistForm = ({ source = 'hero' }: { source?: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  const [isReturning, setIsReturning] = useState(false);
  const [isPaidUser, setIsPaidUser] = useState(false);
  const [showPaymentFlow, setShowPaymentFlow] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, source }),
      });

      const data = await res.json();

      if (res.ok) {
        setPosition(data.position);
        setIsReturning(!!data.isReturning);
        setIsPaidUser(!!data.isPaid);
        setStatus('success');
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Waitlist error:', err);
      setErrorMessage('Failed to connect to the server. Please check your internet connection.');
      setStatus('error');
    }
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUpgrade = async () => {
    setPaymentLoading(true);
    try {
      const res = await loadRazorpay();
      if (!res) {
        alert('Payment gateway failed to load. Please check your connection and try again.');
        setPaymentLoading(false);
        return;
      }

      // SECURITY: Amount is controlled server-side—we don't send it from client
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const { orderId, error } = await orderRes.json();

      if (error) {
        if (error === 'ALREADY_PAID') {
          setIsPaidUser(true);
          setPaymentLoading(false);
          return;
        }
        if (error === 'SOLD_OUT') {
          setPaymentLoading(false);
          alert('All 100 founding member spots have been filled! You\'re still on the waitlist and will get free access when we launch.');
          return;
        }
        throw new Error(error);
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: 19900, // Display only — actual amount is server-controlled
        currency: 'INR',
        name: 'Trainzy',
        description: 'Founding Member — 1 Year Premium Access',
        order_id: orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch('/api/payment-success', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email,
                name
              }),
            });
            const data = await verifyRes.json();
            if (data.success) {
              // Redirect to proper success page
              window.location.href = '/success?type=founding_member';
            } else {
              alert('Payment verification failed. Please contact support at hello@trainzy.app');
            }
          } catch (err) {
            console.error('Verification error:', err);
            alert('Something went wrong. Your payment is safe — please contact hello@trainzy.app');
          }
        },
        modal: {
          ondismiss: function() {
            setPaymentLoading(false);
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: '#FF3B3B',
        },
        notes: {
          plan: 'founding_member_1yr'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function() {
        setPaymentLoading(false);
        alert('Payment failed. Please try again or contact hello@trainzy.app');
      });
      rzp.open();
    } catch (err: any) {
      console.error('Upgrade error:', err);
      setPaymentLoading(false);
      if (err.message === 'ALREADY_PAID') {
        setIsPaidUser(true);
      } else {
        alert('Unable to start payment. Please try again.');
      }
    }
  };

  // ─── PAID USER STATE ─────────────────────────────────
  if (isPaidUser && status === 'success') {
    return (
      <div className="w-full flex justify-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#111] border border-[#22C55E]/20 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22C55E]/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">You&apos;re a Founding Member</h3>
            <p className="text-[#888] mb-2 leading-relaxed">
              You have full premium access for 1 year. We&apos;ll reach out with early access as soon as the app launches.
            </p>
            <p className="text-xs text-[#555] mb-8">Check your email for confirmation details.</p>
            <Button
              onClick={() => window.location.href = '/'}
              variant="primary"
              className="w-full rounded-full py-5 font-bold text-base shadow-[0_4px_20px_rgba(34,197,94,0.2)] bg-[#22C55E] hover:bg-[#1DB954]"
            >
              ✓ You&apos;re all set
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ─── WAITLIST SUCCESS STATE ───────────────────────────
  if (status === 'success') {
    return (
      <div className="w-full flex justify-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            {/* Confirmation Section */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isReturning ? "You're already on the waitlist." : "You're on the waitlist!"}
              </h3>
              <p className="text-sm font-medium text-white/90">Your position: #{position}</p>
              <p className="text-xs text-[#666] mt-2">
                We&apos;ll notify you when early access opens.
              </p>
            </div>

            {!showPaymentFlow ? (
              <>
                <div className="h-px bg-white/5 w-full mb-6" />
                
                {/* Founding Member Upgrade Card */}
                <div className="bg-[#0A0A0A] border border-[#FF3B3B]/15 rounded-2xl p-6 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3B3B]/5 blur-2xl rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-[#FF3B3B] uppercase tracking-widest">Founding Offer</span>
                      <span className="text-[10px] text-[#555] bg-[#1A1A1A] px-2 py-1 rounded-full">Limited spots</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1.5">Skip the waitlist</h4>
                    <p className="text-sm text-[#888] leading-relaxed mb-4">
                      Get guaranteed access + 1 year premium. No monthly fees ever.
                    </p>
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="text-3xl font-extrabold text-white">₹199</span>
                      <span className="text-sm text-[#555] line-through">₹999/yr</span>
                      <span className="text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full ml-1">Save 80%</span>
                    </div>
                    <Button
                      onClick={() => {
                        setShowPaymentFlow(true);
                        handleUpgrade();
                      }}
                      variant="primary"
                      disabled={paymentLoading}
                      className="w-full rounded-full py-5 bg-[#FF3B3B] hover:bg-[#E63535] shadow-[0_0_20px_rgba(255,59,59,0.2)] font-bold text-base"
                    >
                      {paymentLoading ? 'Processing...' : 'Become a Founding Member — ₹199'}
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-[#555]">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Secure payment via Razorpay
                      </span>
                      <span>•</span>
                      <a href="/refund" className="hover:text-white transition-colors underline">Refund policy</a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-8 h-8 border-2 border-[#FF3B3B] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm text-[#888]">Opening secure payment...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── INITIAL FORM STATE ───────────────────────────────
  return (
    <div id="waitlist-form" className="w-full max-w-md flex flex-col items-center scroll-mt-24">
      <div className="text-center mb-8 w-full bg-[#111] border border-white/5 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/5 to-transparent pointer-events-none" />
        <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Join the Waitlist</h3>
        <p className="text-sm text-[#888] relative z-10">Free — be first to know when Trainzy launches</p>
        <ul className="space-y-3 text-left inline-block relative z-10 mt-6">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium text-sm">Get early access when the app launches</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium text-sm">Your plan adapts when you miss workouts</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium text-sm">No spam — only launch updates</span>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-3">
        <div className="flex items-center bg-[#111111] border border-white/10 rounded-full p-1.5 shadow-xl hover:border-white/20 transition-colors focus-within:border-[#FF3B3B]/50 focus-within:ring-1 focus-within:ring-[#FF3B3B]/50">
          <div className="pl-4 pr-2 flex items-center z-10">
            <svg className="w-5 h-5 text-[#666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-transparent border-none px-2 py-3 text-white placeholder-[#666] focus:outline-none focus:ring-0 text-sm sm:text-base w-full min-w-0"
          />
        </div>

        <div className="flex items-center bg-[#111111] border border-white/10 rounded-full p-1.5 shadow-xl hover:border-white/20 transition-colors focus-within:border-[#FF3B3B]/50 focus-within:ring-1 focus-within:ring-[#FF3B3B]/50">
          <div className="pl-4 pr-2 flex items-center z-10">
            <svg className="w-5 h-5 text-[#666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border-none px-2 py-3 text-white placeholder-[#666] focus:outline-none focus:ring-0 text-sm sm:text-base w-full min-w-0"
          />
        </div>

        <Button variant="primary" className="w-full rounded-full py-4 text-base shadow-[0_0_20px_rgba(255,59,59,0.3)] font-bold" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Join Waitlist — Free'}
        </Button>
      </form>

      <div className="h-6 mt-2 w-full text-center">
        {status === 'error' && (
          <p className="text-xs text-[#FF3B3B] font-medium animate-in slide-in-from-top-1">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};
