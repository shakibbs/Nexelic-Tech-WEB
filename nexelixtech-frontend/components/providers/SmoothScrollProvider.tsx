"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Lenis smooth-scroll wrapper (SRS §4.1).
// Skips hijack when user prefers reduced motion.
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll position on route changes and trigger a resize recalculation
  useEffect(() => {
    if (lenisRef.current) {
      // Force scroll to top immediately without animation
      lenisRef.current.scrollTo(0, { immediate: true });
      
      // Delay resize slightly to allow Next.js to render the new page content
      setTimeout(() => {
        lenisRef.current?.resize();
      }, 100);
    }
  }, [pathname]);

  return <>{children}</>;
}
