import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogPreviewSection = async () => {
  const posts = (await getAllPosts()).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5" id="blog-preview">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Latest from TrainSmarter</h2>
            <p className="text-[#888] text-lg max-w-xl">
              Learn how to optimize your training with our science-backed guides and updates.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/blog">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                View All Articles
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <Link 
                href={`/blog/${post.slug}`}
                className="group block h-full bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF3B3B]/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 text-[10px] text-[#555] mb-4 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1.5 font-mono">•</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readingTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF3B3B] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#888] text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-bold text-[#FF3B3B] group-hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
