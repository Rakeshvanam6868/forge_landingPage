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
                {isReturning ? "You're already on the waitlist." : "You're on the waitlist."}
              </h3>
              <p className="text-sm font-medium text-white/90">Your position: #{position}</p>
              <p className="text-xs text-[#666] mt-2">We'll notify you when the beta opens.</p>
            </div>
            
            <div className="h-px bg-white/5 w-full mb-8" />
            
            {/* Upgrade Card Section */}
            <p className="text-xs font-semibold text-[#FF3B3B] uppercase tracking-wider mb-2">Get Instant Access</p>
            <h4 className="text-xl font-bold text-white mb-2">Become a Founding Member</h4>
            <p className="text-sm text-[#888] mb-8 leading-relaxed">
              Skip the waitlist and unlock lifetime premium access for a one-time payment of $5.
            </p>
            
            <Button 
              onClick={async () => {
                try {
                  const res = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, name }),
                  });
                  const { url } = await res.json();
                  if (url) window.location.href = url;
                } catch (err) {
                  console.error('Checkout error:', err);
                }
              }}
              variant="primary" 
              className="w-full rounded-full py-6 bg-[#FF3B3B] hover:bg-[#E63535] shadow-[0_0_20px_rgba(255,59,59,0.3)] font-bold text-base"
            >
              Become Founding Member — $5 Lifetime
            </Button>
            <p className="text-[10px] text-[#555] mt-4">Limited founding spots available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist-form" className="w-full max-w-md flex flex-col items-center scroll-mt-24">
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
