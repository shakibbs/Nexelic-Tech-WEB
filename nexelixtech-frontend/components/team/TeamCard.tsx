"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link2, Code2, Send, Mail } from "lucide-react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import type { TeamMember } from "@/lib/types";

// Generic social icons (brand icons removed from lucide-react)
const socialIcons = {
  linkedin: Link2,
  github: Code2,
  twitter: Send,
  email: Mail,
} as const;

// 3D tilt card — mouse tilt for mouse users, scale fallback for keyboard/touch
export function TeamCard({ member }: { member: TeamMember }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
    stiffness: 300,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      tabIndex={0}
      role="article"
      aria-label={`${member.name}, ${member.role}`}
      className="glow-border relative overflow-hidden rounded-2xl card-solid p-6 outline-none"
    >
      {/* Avatar */}
      {member.image && member.image !== "" && !member.image.endsWith(".svg") ? (
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-accent-cyan/30">
          <Image
            src={member.image}
            alt={member.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent-indigo/30 to-accent-cyan/30">
          <span className="font-display text-2xl font-bold text-white">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
      )}

      <h3 className="mt-4 text-center font-display text-lg font-semibold">
        {member.name}
      </h3>
      <p className="text-center text-sm font-medium text-accent-cyan">
        {member.role}
      </p>
      <p className="mt-3 text-center text-sm text-foreground-muted">{member.bio}</p>

      {/* Specialties */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {member.specialties.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div className="mt-4 flex justify-center gap-3">
        {Object.entries(member.socials).map(([key, href]) => {
          const Icon = socialIcons[key as keyof typeof socialIcons] ?? Link2;
          return (
            <a
              key={key}
              href={key === "email" ? `https://mail.google.com/mail/?view=cm&fs=1&to=${href}` : href}
              target={key === "email" ? "_blank" : undefined}
              rel={key === "email" ? "noopener noreferrer" : undefined}
              aria-label={`${member.name} on ${key}`}
              className="text-foreground-muted transition-colors hover:text-accent-cyan"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
