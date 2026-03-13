'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MobileDeviceFrame } from './mobile-device-frame';

const screens = [
  { src: '/screens/today-screen.jpg', alt: 'Today Overview' },
  { src: '/screens/1000175255.jpg', alt: 'Workout Session' },
  { src: '/screens/1000175258.jpg', alt: 'Progress Dashboard' },
  { src: '/screens/1000175260.jpg', alt: 'Exercise List' },
  { src: '/screens/1000175261.jpg', alt: 'Workout Summary' },
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => {
    return (currentIndex + offset + screens.length) % screens.length;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 group overflow-hidden sm:overflow-visible">
      <div className="relative flex justify-center items-center h-[500px] sm:h-[650px]">
        {/* Carousel Container */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Previous Screen (Ghost) */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] opacity-20 scale-75 blur-[2px] hidden lg:block transition-all duration-700 cursor-pointer hover:opacity-40"
            onClick={prev}
          >
            <MobileDeviceFrame 
              src={screens[getIndex(-1)].src} 
              alt={screens[getIndex(-1)].alt} 
            />
          </div>

          {/* Current Screen (Active) */}
          <div className="relative z-20 w-[280px] sm:w-[320px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-[3rem] transition-all duration-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <MobileDeviceFrame 
                  src={screens[currentIndex].src} 
                  alt={screens[currentIndex].alt} 
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Screen (Ghost) */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] opacity-20 scale-75 blur-[2px] hidden lg:block transition-all duration-700 cursor-pointer hover:opacity-40"
            onClick={next}
          >
            <MobileDeviceFrame 
              src={screens[getIndex(1)].src} 
              alt={screens[getIndex(1)].alt} 
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-[-40px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Previous screen"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-[-40px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Next screen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-12 mb-4">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#FF3B3B] w-8' : 'bg-white/10 w-4 hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
