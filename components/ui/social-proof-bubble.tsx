'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Helper to format rough time ago without large libraries
function timeAgoStr(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  return 'Recently';
}

export const SocialProofBubble = () => {
  const [recentSignups, setRecentSignups] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Fetch data once on mount
  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch('/api/waitlist/recent');
        const data = await res.json();
        if (data.recent && data.recent.length > 0) {
          setRecentSignups(data.recent);
        }
      } catch (err) {
        console.error('Failed to fetch recent signups', err);
      }
    };
    fetchRecent();
  }, []);

  // Cycle through notifications
  useEffect(() => {
    if (recentSignups.length === 0) return;

    // Start first bubble after 5 seconds to not overlap with initial page load
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
      showBubble();
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, [recentSignups]);

  useEffect(() => {
    if (!hasStarted || recentSignups.length === 0) return;

    // The cycle logic: visible for 5s, hidden for 12s, then show next
    if (!isVisible) {
      const showTimer = setTimeout(() => {
        showBubble();
      }, 12000);
      return () => clearTimeout(showTimer);
    } else {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, hasStarted, recentSignups]);

  const showBubble = () => {
    setCurrentIndex((prev) => (prev + 1) % recentSignups.length);
    setIsVisible(true);
  };

  const currentItem = recentSignups[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && currentItem && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 shadow-2xl flex items-start gap-4 max-w-sm pointer-events-auto cursor-default backdrop-blur-md"
          >
            <div className="relative mt-1">
              <div className="w-3 h-3 bg-[#22C55E] rounded-full" />
              <div className="absolute inset-0 bg-[#22C55E] rounded-full animate-ping opacity-50" />
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-1">
                {currentItem.name ? `${currentItem.name} joined the waitlist` : 'Someone joined the waitlist'}
              </p>
              <p className="text-xs text-[#888]">
                {timeAgoStr(currentItem.created_at)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
