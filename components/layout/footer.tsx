export const Footer = () => (
  <footer className="py-12 bg-[#000000] border-t border-white/5 text-sm text-[#888] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="font-bold text-white flex items-center gap-2">
        <img 
              src="/TrainSmarter.png" 
              alt="TrainSmarter Logo" 
              className="w-10 h-10 object-contain"
            /> TrainSmarter
      </div>
      <div>© {new Date().getFullYear()} TrainSmarter.</div>
    </div>
  </footer>
);
