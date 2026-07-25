"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Globe,
  Smartphone,
  BrainCircuit,
  PenTool,
  Cloud,
  Building2,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";

// Map icon names from data to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  BrainCircuit,
  PenTool,
  Cloud,
  Building2,
  Briefcase,
};

// Mouse-tracking glow card (SRS §3.2 micro-interaction)
function ServiceCard({
  title,
  tagline,
  iconName,
  slug,
}: {
  title: string;
  tagline: string;
  iconName: string;
  slug: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight follows cursor
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
  );

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const Icon = iconMap[iconName] ?? Globe;

  return (
    <Link href={`/services/${slug}`} className="group block">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        whileHover={{ y: -4 }}
        className="glow-border relative h-full overflow-hidden rounded-2xl card-solid p-6"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20">
            <Icon className="h-6 w-6 text-accent-cyan" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-foreground-muted">{tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-cyan">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export function ServicesSpotlight() {
  return (
    <section className="cv-auto mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-accent-cyan">What We Do</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Services Built for Modern Digital Leaders
        </h2>
        <p className="mt-4 text-foreground-muted">
          Full-stack engineering across web, mobile, AI, and cloud — delivered
          with zero tech debt and bank-grade security.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            tagline={service.tagline}
            iconName={service.iconName}
            slug={service.slug}
          />
        ))}
      </div>
    </section>
  );
}
