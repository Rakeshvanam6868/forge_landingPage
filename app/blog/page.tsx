import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Blog | Trainzy - Adaptive Strength Training Insights',
  description: 'Learn about progressive overload, adaptive training, and how to optimize your gym sessions.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionHeading title="Latest from Trainzy" />
            <p className="text-[#888] text-lg max-w-2xl mx-auto mt-4">
              Insights on strength training, science-based progression, and how to build a better program.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <Link 
                href={`/blog/${post.slug}`}
                className="group block h-full bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF3B3B]/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs text-[#555] mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF3B3B] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#888] text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#222] border border-white/10 flex items-center justify-center text-[10px] font-bold text-[#888]">
                        {post.author[0]}
                      </div>
                      <span className="text-xs text-[#888]">{post.author}</span>
                    </div>
                    <span className="text-xs font-bold text-[#FF3B3B] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Post <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-[#111] border border-dashed border-white/10 rounded-2xl">
            <p className="text-[#888]">No articles found yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
