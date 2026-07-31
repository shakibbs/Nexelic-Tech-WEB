'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export function BlogPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering Insights
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Technical deep dives and architectural patterns from our engineering team.
            </p>
          </div>
          <Link href="/blog" className="hidden sm:flex relative z-10 items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="glass-card flex flex-col h-full rounded-2xl overflow-hidden hover:ring-2 active:ring-2 ring-indigo-500/50 transition-all duration-300 group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 group-active:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md text-indigo-300 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 group-active:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground-muted text-sm flex-1 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-foreground-muted/80 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden relative z-10">
          <Link href="/blog" className="flex items-center justify-center gap-2 text-indigo-400 font-medium">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
