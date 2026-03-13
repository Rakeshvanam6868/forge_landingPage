import { getPostBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FadeIn } from '@/components/ui/fade-in';
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { WaitlistForm } from '@/components/ui/waitlist-form';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) return {};

  const url = `https://trainsmarter.app/blog/${resolvedParams.slug}`;

  return {
    title: `${post.title} | TrainSmarter Blog`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      siteName: 'TrainSmarter',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const components = {
  h1: (props: any) => <h1 className="text-3xl sm:text-4xl font-extrabold mt-12 mb-6 tracking-tight text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-white" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-8 mb-3 text-white" {...props} />,
  p: (props: any) => <p className="text-[#888] leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#888]" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#888]" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[#FF3B3B] pl-6 py-2 my-8 italic text-white/90 text-lg bg-[#FF3B3B]/5 rounded-r-lg" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-10" />,
};

export default async function BlogPostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <FadeIn>
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#555] mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#888] line-clamp-1">{post.title}</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#888] pb-8 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {post.author[0]}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

// ... (keep existing generateMetadata and components)

          <div className="prose prose-invert prose-red max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          <div className="mt-16 bg-[#111] border border-white/5 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want to experience adaptive training?</h2>
            <p className="text-[#888] mb-8 max-w-xl mx-auto">
              TrainSmarter adjusts your workouts based on your performance in real-time. Join the waitlist for early access.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm source="blog_post_footer" />
            </div>
          </div>

          <footer className="mt-16 pt-10 border-t border-white/5">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#FF3B3B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </footer>
        </article>
      </FadeIn>
    </main>
  );
}
