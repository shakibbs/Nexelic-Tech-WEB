'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { techStack, type TechItem } from '@/data/tech-stack';
import { cn } from '@/lib/utils';

function TiltCard({ tech, index }: { tech: TechItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the motion values to create fluid rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse position to rotation degrees (tilt intensity)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ 
        duration: 0.4, 
        type: "spring", 
        bounce: 0.3,
        delay: index * 0.05 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass-card flex flex-col items-center justify-center p-6 rounded-2xl h-32 relative cursor-crosshair transition-colors duration-300",
        tech.featured ? "ring-1 ring-accent-cyan/60 bg-accent-cyan/5 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-accent-cyan/10" : "hover:bg-white/[0.04]"
      )}
    >
      {/* 3D Content wrapper - pushed towards the viewer */}
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center pointer-events-none">
        <span className={cn("font-semibold text-center tracking-wide", tech.featured ? "text-accent-cyan font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "text-foreground")}>
          {tech.name}
        </span>
        
        {tech.note && (
          <span className="mt-3 text-[10px] uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md text-foreground-muted font-bold border border-white/10 shadow-sm backdrop-blur-sm">
            {tech.note}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function TechStackRadar() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(techStack.map(t => t.category))];
  
  const filteredStack = techStack.filter(
    (tech) => activeCategory === 'All' || tech.category === activeCategory
  );

  return (
    <section className="relative z-10 bg-background border-b border-border overflow-hidden py-24 sm:py-32 perspective-1000">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our proficiency across the modern engineering landscape
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            A comprehensive overview of the technologies we leverage to build scalable solutions.
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                activeCategory === category
                  ? "bg-accent-indigo text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  : "bg-surface-raised text-foreground hover:bg-surface-elevated"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl" style={{ perspective: 1000 }}>
          <motion.div 
            layout 
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredStack.map((tech, index) => (
                <TiltCard key={tech.name} tech={tech} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
