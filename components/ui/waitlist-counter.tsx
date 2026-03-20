'use client';

import { useState, useEffect } from 'react';

export const WaitlistCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/waitlist/count');
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error('Failed to fetch count', err);
        setCount(84); // Fallback
      }
    };

    fetchCount();
  }, []);

  if (count === null) return <div className="h-6"></div>;

  // const displayCount = count !== null && count >= 100 
  //   ? `${count.toLocaleString()}+ athletes`
  //   : "100+ athletes";
  const displayCount = count < 100
    ? "early athletes"
    : `${count.toLocaleString()}+ athletes`;
  return (
    <div className="flex items-center gap-2 mt-4 animate-in fade-in duration-700">
      <p className="text-sm sm:text-base text-[#888] font-medium">
        Join <span className="text-white font-bold">{displayCount}</span> testing Trainzy.
      </p>
    </div>
  );
};
