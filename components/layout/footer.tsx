import Link from 'next/link';

export const Footer = () => (
  <footer className="py-12 bg-[#000000] border-t border-white/5 text-sm text-[#888] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo & Copyright */}
        <div>
          <div className="font-bold text-white flex items-center gap-2 mb-2">
            <img 
              src="/TrainSmarter.png" 
              alt="Trainzy Logo" 
              className="w-8 h-8 object-contain"
            /> 
            Trainzy
          </div>
          <div className="text-xs text-[#555]">© {new Date().getFullYear()} Trainzy. All rights reserved.</div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/refund" className="hover:text-white transition-colors">
            Refund Policy
          </Link>
          <a href="mailto:hello@trainzy.app" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);
