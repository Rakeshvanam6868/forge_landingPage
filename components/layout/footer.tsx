export const Footer = () => (
  <footer className="py-12 bg-[#000000] border-t border-white/5 text-sm text-[#888] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="font-bold text-white flex items-center gap-2">
        <div className="w-4 h-4 rounded-sm bg-[#FF3B3B]" /> TrainSmarter
      </div>
      <div>© {new Date().getFullYear()} TrainSmarter.</div>
    </div>
  </footer>
);
