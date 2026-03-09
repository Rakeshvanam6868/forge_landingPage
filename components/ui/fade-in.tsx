'use client';

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <div 
    className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);
