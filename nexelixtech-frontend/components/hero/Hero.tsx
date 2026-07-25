"use client";

import dynamic from "next/dynamic";
import { HeroContent } from "@/components/hero/HeroContent";

// Lazy-load 3D canvas so it never blocks the hero text (LCP) — Issue 1 fix
const Hero3DCanvas = dynamic(() => import("@/components/hero/Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(ellipse at bottom, rgba(6, 182, 212, 0.12), transparent 60%)",
      }}
      aria-hidden="true"
    />
  ),
});

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* 3D canvas loads after paint; hero text is SSR-rendered (LCP element) */}
      <Hero3DCanvas />
      <HeroContent />
    </section>
  );
}
