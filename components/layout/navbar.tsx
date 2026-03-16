'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/TrainSmarter.png" 
              alt="Trainzy Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl tracking-tight text-white/90">Trainzy</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#preview" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Product</a>
            <a href="#how-it-works" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Method</a>
            <a href="#features" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Features</a>
            <Link href="/blog" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Blog</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* <a href="#" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Log In</a> */}
            <Button 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary" 
              className="px-5 py-2 text-sm"
            >
              Join Waitlist
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/10 absolute top-full left-0 right-0 h-screen p-4 flex flex-col gap-4">
          <a href="#preview" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#888888] hover:text-white p-2">Product</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#888888] hover:text-white p-2">Method</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#888888] hover:text-white p-2">Features</a>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#888888] hover:text-white p-2">Blog</Link>
          <div className="pt-4 mt-auto">
            <Button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary" 
              className="w-full"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
