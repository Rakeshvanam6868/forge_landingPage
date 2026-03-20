'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const WaitlistForm = ({ source = 'hero' }: { source?: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  const [isReturning, setIsReturning] = useState(false);
  const [isPaidUser, setIsPaidUser] = useState(false);

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

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUpgrade = async () => {
    try {
      const res = await loadRazorpay();
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      // Create Order
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 199, email, name }), 
      });
      const { orderId, error } = await orderRes.json();

      if (error) throw new Error(error);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Public Key
        amount: 19900,
        currency: 'INR',
        name: 'Trainzy',
        description: 'Founding Member 1-Year Access',
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
              setShowSuccessModal(true);
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (err) {
            console.error('Verification error:', err);
            alert('Something went wrong during verification.');
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: '#FF3B3B',
        },
      };

      const rzp = (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error('Upgrade error:', err);
      if (err.message === 'ALREADY_PAID') {
        setIsPaidUser(true);
        setStatus('success');
      } else {
        alert(err.message || 'Failed to initiate upgrade');
      }
    }
  };

  if (showSuccessModal) {
    return (
      <div className="w-full flex justify-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">You're a Founding Member</h3>
            <p className="text-[#888] mb-8 leading-relaxed">
              You have full premium access for 1 year. No monthly charges. We'll reach out soon with next steps.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="primary" 
              className="w-full rounded-full py-6 font-bold text-base shadow-[0_4px_20px_rgba(255,59,59,0.3)]"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="w-full flex justify-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            {/* Confirmation Section */}
            <div className="mb-8">
              <div className="w-12 h-12 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isPaidUser 
                  ? "You're already a Founding Member." 
                  : isReturning 
                    ? "You're already on the waitlist." 
                    : "You're on the waitlist."}
              </h3>
              {!isPaidUser && <p className="text-sm font-medium text-white/90">Your position: #{position}</p>}
              <p className="text-xs text-[#666] mt-2">
                {isPaidUser ? "Welcome back! You have full premium access for 1 year." : "We'll notify you when access opens."}
              </p>
            </div>
            
            {!isPaidUser && (
              <>
                <div className="h-px bg-white/5 w-full mb-8" />
                
                {/* Upgrade Card Section */}
                <p className="text-xs font-semibold text-[#FF3B3B] uppercase tracking-wider mb-2">LIMITED FOUNDING OFFER</p>
                <h4 className="text-xl font-bold text-white mb-2">Become a Founding Member</h4>
                <p className="text-sm text-[#888] leading-relaxed">
                  Unlock 1 year of premium access for a one-time payment of ₹199. No monthly subscription.
                </p>
                
                <Button 
                  onClick={handleUpgrade}
                  variant="primary" 
                  className="w-full rounded-full py-6 bg-[#FF3B3B] hover:bg-[#E63535] shadow-[0_0_20px_rgba(255,59,59,0.3)] font-bold text-base mt-6"
                >
                  Get 1-Year Access — ₹199
                </Button>
                <p className="text-[10px] text-[#555] mt-4 uppercase tracking-widest font-bold items-center gap-2 flex justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#FF3B3B] animate-pulse" />
                  Limited to first 100 users
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist-form" className="w-full max-w-md flex flex-col items-center scroll-mt-24">
      <div className="text-center mb-10 w-full bg-[#111] border border-white/5 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/5 to-transparent pointer-events-none" />
        <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Join Waitlist (Free)</h3>
        <ul className="space-y-4 text-left inline-block relative z-10">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium">Access when app launches</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium">3-day free trial</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
            <span className="text-[#888] font-medium">Then monthly subscription</span>
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
        
        <Button variant="primary" className="w-full rounded-full py-4 text-base shadow-[0_0_20px_rgba(255,59,59,0.3)]" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
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
