import { FadeIn } from '@/components/ui/fade-in';

export const DemoVideoSection = () => {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/5" id="demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">See How Trainzy Adapts Your Workouts</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              From onboarding to adaptive training — see how your program evolves as you train.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,59,59,0.1)] border border-white/10 relative group">
             {/* Aspect Ratio Box (16:9) */}
             <div className="aspect-video bg-[#0A0A0A] flex items-center justify-center relative">
                {/* Placeholder for Video - In production, use iframe from YouTube/Vimeo or <video> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B3B]/10 to-transparent flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full border border-[#FF3B3B]/50 bg-[#FF3B3B]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF3B3B]/20 transition-all cursor-pointer">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                  </div>
                  <p className="text-white/40 text-sm font-medium">Demo video implementation ready.</p>
                  <p className="text-white/20 text-xs mt-2 uppercase tracking-widest">Connect your production video URL here</p>
                </div>
                
                {/* Real iframe placeholder (commented out) */}
                {/* 
                <iframe 
                  className="w-full h-full"
                  src="YOUR_VIDEO_URL"
                  title="Trainzy App Demo"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe> 
                */}
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
