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

  if (count === null) return <div className="h-6"></div>; // Placeholder to avoid layout shift

  return (
    <div className="flex items-center gap-3 mt-4 animate-in fade-in duration-700">
      <div className="flex -space-x-2">
        {/* Placeholder avatars to build trust visually */}
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-6 h-6 rounded-full border border-black bg-[#222] flex items-center justify-center overflow-hidden z-[${4-i}]`}>
            <div className="w-full h-full bg-gradient-to-tr from-[#333] to-[#555] opacity-50" />
          </div>
        ))}
      </div>
      <p className="text-[13px] text-[#888] font-medium">
        Join <span className="text-white font-bold">{count.toLocaleString()}</span> lifters already testing TrainSmarter.
      </p>
    </div>
  );
};
