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
      const scrollWidth = panelRef.current?.scrollWidth || 0;
      const amountToScroll = scrollWidth - window.innerWidth;
      
      gsap.to(panelRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          // "+=100%" means it takes exactly 1 screen height of scrolling to finish all 4 steps.
          // This makes each step change extremely fast.
          end: "+=100%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="border-y border-border bg-surface/50 h-screen flex flex-col overflow-hidden relative"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 shrink-0">
        <p className="text-sm font-medium text-accent-cyan">How We Work</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          From Idea to Deploy in 4 Steps
        </h2>
      </div>

      <div className="flex-1 w-full relative">
        <div
          ref={panelRef}
          className={
            prefersReducedMotion
              ? "mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16 h-auto overflow-y-auto"
              : "absolute top-0 left-0 flex h-full w-[400vw]"
          }
        >
          {processSteps.map((step) => {
            const Icon = iconMap[step.iconName] ?? Lightbulb;
            return (
              <div
                key={step.id}
                className={
                  prefersReducedMotion
                    ? "card-solid rounded-2xl p-8"
                    : "flex h-full w-screen items-center justify-center px-8"
                }
              >
                <div className="max-w-md text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20">
                    <Icon className="h-8 w-8 text-accent-cyan" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-display text-sm font-bold text-accent-indigo">
                    Step 0{step.step}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-foreground-muted">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
