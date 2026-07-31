"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useIsomorphicLayoutEffect } from "@/lib/hooks/use-isomorphic-layout-effect";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { processSteps } from "@/data/process-steps";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
};

// Horizontal pin-scroll process (SRS §6)
export function ProcessPinning() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only pin and horizontally scroll on desktop screen sizes (768px+)
      mm.add("(min-width: 768px)", () => {
        const scrollWidth = panelRef.current?.scrollWidth || 0;
        const amountToScroll = scrollWidth - window.innerWidth;
        
        gsap.to(panelRef.current, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.5,
            end: "+=150%",
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 scroll-mt-20 border-y border-border bg-background md:h-screen flex flex-col md:overflow-hidden py-12 md:py-0 md:pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-6 md:py-8 sm:px-6 lg:px-8 shrink-0 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-cyan">
          How We Work
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          From Idea to Deploy in 4 Steps
        </h2>
      </div>

      <div className="flex-1 w-full relative flex items-center justify-center pb-8 md:pb-12">
        <div
          ref={panelRef}
          className={
            prefersReducedMotion
              ? "mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16 h-auto overflow-y-auto"
              : "md:absolute md:top-0 md:left-0 flex flex-col md:flex-row h-auto md:h-full w-full md:w-[400vw] gap-6 md:gap-0 px-4 md:px-0 max-w-xl md:max-w-none mx-auto items-center"
          }
        >
          {processSteps.map((step) => {
            const Icon = iconMap[step.iconName] ?? Lightbulb;
            return (
              <div
                key={step.id}
                className="flex md:h-full w-full md:w-screen items-center justify-center px-4 sm:px-8"
              >
                <div className="card-solid glow-border rounded-3xl p-8 sm:p-12 border border-border/60 shadow-2xl max-w-xl w-full text-center relative overflow-hidden transition-all duration-300 hover:border-accent-cyan/40 active:border-accent-cyan/40">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20 border border-accent-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <Icon className="h-8 w-8 text-accent-cyan" aria-hidden="true" />
                  </div>
                  <p className="mt-6 font-display text-xs sm:text-sm font-bold tracking-widest uppercase text-accent-indigo">
                    Step 0{step.step}
                  </p>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
