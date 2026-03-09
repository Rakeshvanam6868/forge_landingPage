export const SectionHeading = ({ title, subtitle, align = 'center' }: { title: string, subtitle?: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white/90">{title}</h2>
    {subtitle && <p className="text-[#888888] text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);
