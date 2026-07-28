"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { Database, FileText, BrainCircuit, Terminal } from "lucide-react";

const nodes = [
  { id: "doc", label: "Document", icon: FileText, color: "text-blue-400" },
  { id: "vdb", label: "Vector DB", icon: Database, color: "text-emerald-400" },
  { id: "llm", label: "LLM Agent", icon: BrainCircuit, color: "text-indigo-400" },
  { id: "out", label: "Output", icon: Terminal, color: "text-cyan-400" },
];

// Live AI Capabilities Playground (SRS §6 - Section 5)
export function AIPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 10%"],
  });

  // Add a spring to the scroll progress to give it a smooth, slightly delayed feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Track scroll position to update the active node index
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  // Scroll-driven line widths (Mobile uses height)
  const line1Progress = useTransform(smoothProgress, [0.1, 0.25], ["0%", "100%"]);
  const line2Progress = useTransform(smoothProgress, [0.35, 0.5], ["0%", "100%"]);
  const line3Progress = useTransform(smoothProgress, [0.6, 0.75], ["0%", "100%"]);

  const getLineProgress = (index: number) => {
    if (index === 0) return line1Progress;
    if (index === 1) return line2Progress;
    return line3Progress;
  };

  return (
    <section 
      id="capabilities" 
      className="relative z-10 bg-background scroll-mt-24 cv-auto mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center px-2 sm:px-0">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-cyan">
          Capabilities
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Live AI Architecture
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted max-w-lg mx-auto">
          Watch how our custom RAG (Retrieval-Augmented Generation) pipeline processes data as you scroll.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="mt-10 sm:mt-16 overflow-hidden rounded-2xl card-solid p-6 sm:p-12 border border-border/50 relative"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeIndex === index;
            const isPast = index < activeIndex;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                {/* Connecting Line (Desktop) */}
                {index < nodes.length - 1 && (
                  <div className="hidden md:block absolute left-[50%] top-8 h-[2px] w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)] bg-border z-[-1]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
                      style={{ width: getLineProgress(index) }}
                    />
                  </div>
                )}
                {/* Connecting Line (Mobile) */}
                {index < nodes.length - 1 && (
                  <div className="md:hidden absolute top-[50%] left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+2rem)] bg-border z-[-1]">
                    <motion.div
                      className="w-full bg-gradient-to-b from-accent-indigo to-accent-cyan"
                      style={{ height: getLineProgress(index) }}
                    />
                  </div>
                )}

                <motion.div
                  className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-surface border ${
                    isActive ? "border-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "border-border"
                  } transition-colors duration-300`}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                >
                  <Icon className={`h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-300 ${isActive || isPast ? node.color : "text-foreground-muted"}`} />
                </motion.div>
                <p className={`mt-3 font-display text-xs sm:text-sm font-semibold transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground-muted"}`}>
                  {node.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
