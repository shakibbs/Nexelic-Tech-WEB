import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Nexelix Tech",
  description: "Insights, engineering tutorials, and thoughts on the future of software development.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Engineering <span className="text-gradient-accent">Insights</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Deep dives into scalable architecture, frontend performance, and the future of AI-driven development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-indigo/20"
            >
              <div className="relative h-48 w-full overflow-hidden bg-surface-muted">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-semibold text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-sm text-foreground-muted line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-foreground-muted mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
