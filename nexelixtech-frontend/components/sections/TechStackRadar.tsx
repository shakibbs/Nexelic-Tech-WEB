'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/data/tech-stack';

export function TechStackRadar() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Interactive Technology Stack Radar
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Our proficiency across the modern engineering landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl glow-border"
              >
                <span className="font-semibold">{tech.name}</span>
                <span className="text-sm text-foreground-muted mt-2">{tech.category}</span>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.05 }}
                    className="bg-indigo-500 h-1.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
