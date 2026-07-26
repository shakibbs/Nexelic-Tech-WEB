'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '@/data/case-studies';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const activeStudy = caseStudies[currentIndex];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Case Studies
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Discover how we've helped leading companies achieve their digital transformation goals.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="p-3 rounded-full glass-card hover:bg-white/10 transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full glass-card hover:bg-white/10 transition">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-auto min-h-[600px] w-full rounded-3xl overflow-hidden glass-card glow-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="p-8 lg:p-16 flex flex-col h-full overflow-y-auto">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                    {activeStudy.industry}
                  </span>
                  <span className="text-foreground-muted font-medium py-1">
                    {activeStudy.client}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  {activeStudy.title}
                </h3>
                
                <p className="text-lg text-foreground-muted mb-8">
                  {activeStudy.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {activeStudy.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-400 break-words">{metric.value}</div>
                      <div className="text-sm text-foreground-muted mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {activeStudy.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative hidden lg:block h-full w-full">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/50 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
