'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Innovators
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            See what our partners say about working with Nexelix Tech.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl min-h-[400px]">
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-10 hidden sm:block">
            <button onClick={prev} className="p-3 rounded-full glass-card hover:bg-white/10 transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-10 hidden sm:block">
            <button onClick={next} className="p-3 rounded-full glass-card hover:bg-white/10 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-16 h-full min-h-[400px] glow-border flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-indigo-500/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                <div className="flex gap-1 mb-6 text-indigo-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                  "{current.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{current.author}</div>
                    <div className="text-sm text-foreground-muted">{current.role}, {current.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2 sm:hidden">
             <button onClick={prev} className="p-3 rounded-full glass-card">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full glass-card">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
