"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/stats";

// Animated counter with aria-live for screen readers (SRS §3)
function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number | string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState<number | string>(typeof value === "number" ? 0 : value);

  useEffect(() => {
    if (!inView || typeof value !== "number") return;
    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for a natural slowdown
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      aria-live="polite"
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border bg-surface/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <dd className="font-display text-4xl font-bold text-gradient-accent sm:text-5xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
              <dt className="mt-2 text-sm text-foreground-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
