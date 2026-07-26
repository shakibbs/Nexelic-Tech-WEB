"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Staggered hero text entrance (SRS §4.2)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6"
    >
      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-border glass-card px-4 py-1.5 text-sm text-foreground-muted">
          <Sparkles className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
          Next-Gen Software Solutions Agency
        </span>
      </motion.div>

      {/* Headline — this is the LCP element, renders instantly via SSR */}
      <motion.h1
        variants={item}
        className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        We Architect{" "}
        <span className="text-gradient-accent">Next-Gen Software</span>{" "}
        Solutions
      </motion.h1>

      <motion.p
        variants={item}
        className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
      >
        Bespoke web applications, AI integrations, and mobile apps engineered for
        speed, scale, and security — delivered in weeks, not months.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link href="/contact">
          <Button size="lg" className="w-full sm:w-auto">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/work">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Our Work
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
