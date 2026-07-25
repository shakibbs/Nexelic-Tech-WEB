import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Nexelix Tech Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <article>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm font-semibold text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted mb-12 pb-8 border-b border-border">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readingTime}
            </div>
          </div>
          
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden mb-12 glow-border">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Prose content - using standard Tailwind typography if we had it, but falling back to manual styling for simplicity */}
          <div className="prose prose-invert prose-lg max-w-none prose-a:text-accent-cyan prose-a:no-underline hover:prose-a:underline prose-headings:font-display prose-headings:font-bold prose-img:rounded-2xl">
            {/* 
              In a real application, post.content would likely be markdown or HTML 
              and we would render it using a markdown parser or dangerouslySetInnerHTML.
              For this mockup, we'll just render it as text, but split by paragraphs if needed.
            */}
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
