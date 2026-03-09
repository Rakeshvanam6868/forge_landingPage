export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div 
    className={`bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[#FF3B3B]/30 hover:shadow-[0_0_30px_rgba(255,59,59,0.05)] transition-all duration-300 relative overflow-hidden group ${className}`}
  >
    {/* Subtle hover gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B3B]/0 to-[#FF3B3B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);
