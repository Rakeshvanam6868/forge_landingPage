'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const WaitlistForm = ({ source = 'hero' }: { source?: string }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [position, setPosition] = useState<number | null>(null);

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
        body: JSON.stringify({ email, source }),
      });
      
      const data = await res.json();

      if (res.ok) {
        setPosition(data.position);
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
        <div className="bg-[#111] border border-[#22C55E]/30 rounded-2xl p-6 sm:p-8 text-center max-w-md w-full shadow-[0_0_40px_rgba(34,197,94,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E]/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#22C55E]/20 text-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#22C55E]/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're on the waitlist!</h3>
            <div className="bg-[#222] border border-white/10 rounded-xl py-3 px-4 mb-3 inline-block">
              <span className="text-sm text-[#888] mr-2">Your position:</span>
              <span className="text-xl font-extrabold text-[#22C55E]">#{position || '...'}</span>
            </div>
            <p className="text-sm text-[#888]">Keep an eye on your inbox. We'll invite early testers soon.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full flex items-center bg-[#111111] border border-white/10 rounded-full p-1.5 shadow-xl hover:border-white/20 transition-colors focus-within:border-[#FF3B3B]/50 focus-within:ring-1 focus-within:ring-[#FF3B3B]/50">
        <div className="pl-4 pr-2 flex items-center z-10">
          <svg className="w-5 h-5 text-[#666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent border-none px-2 py-3 text-white placeholder-[#666] focus:outline-none focus:ring-0 text-sm sm:text-base w-full min-w-0"
        />
        <Button variant="primary" className="rounded-full py-3 px-6 text-sm whitespace-nowrap hidden sm:block shadow-[0_0_20px_rgba(255,59,59,0.3)]" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
      
      <Button variant="primary" className="rounded-full py-3.5 px-6 text-sm whitespace-nowrap mt-3 w-full sm:hidden" disabled={status === 'loading'} onClick={handleSubmit}>
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </Button>

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
