import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MobileDeviceFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const MobileDeviceFrame = ({ src, alt, className, priority }: MobileDeviceFrameProps) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] rounded-[32px] sm:rounded-[40px] border-[8px] border-neutral-900 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
        {/* Notch/Island area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-b-2xl z-20" />
        
        {/* Screen Content */}
        <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 280px, 320px"
          />
        </div>
      </div>
      
      {/* Subtle Glow/Shadow */}
      <div className="absolute -inset-4 bg-[#FF3B3B]/10 blur-3xl rounded-[60px] -z-10 opacity-50" />
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/40 blur-2xl -z-10" />
    </div>
  );
};
