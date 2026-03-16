'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'landing_page_footer' }),
      });
      
      const data = await res.json();

      if (res.ok) {
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

  return (
    <section className="py-32 bg-[#000000] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3B3B]/5 blur-[120px] pointer-events-none rounded-b-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Join the Trainzy Beta</h2>
            <p className="text-[#888888] text-lg max-w-2xl mx-auto">
              Early testers get full access to premium features while the product is in beta.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#111111] border border-[#FF3B3B]/20 rounded-3xl p-10 md:p-14 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B]/5 to-transparent pointer-events-none" />
             <div className="relative z-10 grid sm:grid-cols-2 gap-6 text-left mb-12">
              {[
                "Unlimited adaptive workouts",
                "Advanced strength analytics",
                "Priority support",
                "Direct feedback to founder"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FF3B3B] shrink-0" />
                  <span className="text-sm font-medium text-[#CCCCCC]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              {status === 'success' ? (
                <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-xl p-4 text-center">
                  <div className="text-[#22C55E] font-bold text-lg mb-1">You're on the list!</div>
                  <p className="text-[#888] text-sm">Keep an eye on your inbox for early access details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-[#888] focus:outline-none focus:border-[#FF3B3B]/50 focus:ring-1 focus:ring-[#FF3B3B]/50 transition-all"
                    />
                    <Button variant="primary" className="py-4 text-base sm:w-auto" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </Button>
                  </div>
                  {status === 'error' && (
                    <p className="text-center text-xs text-[#FF3B3B] mt-2 font-medium bg-[#FF3B3B]/10 py-2 rounded-lg border border-[#FF3B3B]/20">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-center text-xs text-[#888] mt-2">No spam. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
