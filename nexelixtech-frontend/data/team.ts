import type { TeamMember } from "@/lib/types";

// Core leadership & engineering team (SRS §8)
export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Aria Chen",
    role: "Founder & CEO",
    bio: "Ex-Google engineer turned founder. Leads product vision and enterprise strategy.",
    specialties: ["Product Strategy", "Next.js", "Cloud Architecture"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
    image: "/images/team/aria-chen.svg",
  },
  {
    id: "tm-2",
    name: "Marcus Okoye",
    role: "CTO",
    bio: "Distributed systems expert with 15+ years scaling platforms to millions of users.",
    specialties: ["System Design", "Kubernetes", "Rust"],
    socials: { linkedin: "#", github: "#" },
    image: "/images/team/marcus-okoye.svg",
  },
  {
    id: "tm-3",
    name: "Sofia Reyes",
    role: "Head of AI",
    bio: "PhD in Machine Learning. Architects RAG systems and autonomous agents for enterprises.",
    specialties: ["LLMs", "RAG", "Computer Vision"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
    image: "/images/team/sofia-reyes.svg",
  },
  {
    id: "tm-4",
    name: "Kenji Tanaka",
    role: "Head of Design",
    bio: "Award-winning designer crafting conversion-first interfaces and design systems.",
    specialties: ["UI/UX", "Motion Design", "Design Systems"],
    socials: { linkedin: "#", twitter: "#" },
    image: "/images/team/kenji-tanaka.svg",
  },
];
