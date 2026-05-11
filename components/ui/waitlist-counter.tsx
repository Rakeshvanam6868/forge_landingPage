'use client';

import { useState, useEffect } from 'react';

export const WaitlistCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/waitlist/count');
        const data = await res.json();
        setCount(data.count ?? 0);
        setSpotsLeft(data.foundingSpotsLeft ?? null);
      } catch (err) {
        console.error('Failed to fetch count', err);
        // HONEST: Show nothing on error, not a fake number
        setCount(0);
      }
    };

    fetchCount();
  }, []);

  if (count === null) return <div className="h-6"></div>;

  return (
    <div className="flex flex-col items-center gap-3 mt-4 animate-in fade-in duration-700">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#FF3B3B] font-bold uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B3B] animate-pulse" />
        Beta is live{spotsLeft !== null ? ` · ${spotsLeft} founding spots remaining` : ''}
      </div>
    </div>
  );
};
