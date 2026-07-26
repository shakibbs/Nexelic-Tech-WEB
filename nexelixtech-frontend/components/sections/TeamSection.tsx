"use client";

import { teamMembers } from "@/data/team";
import { TeamCard } from "@/components/team/TeamCard";

// Team preview section (SRS §8, S11)
export function TeamSection() {
  return (
    <section id="team" className="cv-auto border-y border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-cyan">Our Team</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Engineered by Experts
          </h2>
          <p className="mt-4 text-foreground-muted">
            Meet the leadership behind our zero-tech-debt guarantee.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
