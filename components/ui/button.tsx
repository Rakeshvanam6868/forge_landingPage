'use client';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer overflow-hidden relative";
  const variants = {
    primary: "bg-[#FF3B3B] hover:bg-[#E63535] text-white shadow-[0_4px_14px_0_rgba(255,59,59,0.39)] hover:shadow-[0_6px_20px_rgba(255,59,59,0.23)] border border-[#FF3B3B]/50",
    secondary: "bg-[#111111] text-white hover:bg-[#1A1A1A] border border-white/10",
    outline: "border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
