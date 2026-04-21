'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';

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

// Only show for signups within last 48 hours
function isRecent(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  return diff < 48 * 60 * 60 * 1000;
}

const MIN_SIGNUPS_TO_SHOW = 5; // Don't show social proof if we have very few signups

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
        // Only use real, recent signups — no fakes
        if (Array.isArray(data) && data.length >= MIN_SIGNUPS_TO_SHOW) {
          const recent = data.filter((s: any) => isRecent(s.created_at));
          if (recent.length >= 3) {
            setRecentSignups(recent);
          }
        }
      } catch (err) {
        console.error('Failed to fetch recent signups', err);
      }
    };
    fetchRecent();
  }, []);

  const showBubble = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % recentSignups.length);
    setIsVisible(true);
  }, [recentSignups.length]);

  // Cycle through notifications
  useEffect(() => {
    if (recentSignups.length === 0) return;

    // Start first bubble after 8 seconds to not overlap with initial page load
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
      showBubble();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [recentSignups, showBubble]);

  useEffect(() => {
    if (!hasStarted || recentSignups.length === 0) return;

    // The cycle logic: visible for 5s, hidden for 15s, then show next
    if (!isVisible) {
      const showTimer = setTimeout(() => {
        showBubble();
      }, 15000);
      return () => clearTimeout(showTimer);
    } else {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, hasStarted, recentSignups, showBubble]);

  const currentItem = recentSignups[currentIndex];

  // Don't render anything if we don't have enough real signups
  if (recentSignups.length < MIN_SIGNUPS_TO_SHOW) return null;

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
                {currentItem.name ? `${currentItem.name.split(' ')[0]} joined the waitlist` : 'Someone just joined the waitlist'}
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
