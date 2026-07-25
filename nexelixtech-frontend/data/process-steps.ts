import type { ProcessStep } from "@/lib/types";

// Engineering process (SRS §6) — Idea ➔ Deploy in 4 steps
export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Discovery & Architecture",
    description:
      "We map your business goals, define technical requirements, and design a scalable system architecture before a single line of code.",
    iconName: "Lightbulb",
  },
  {
    id: "step-2",
    step: 2,
    title: "Design & Prototyping",
    description:
      "High-fidelity wireframes, interactive prototypes, and a validated design system ensure conversion-first UX before development.",
    iconName: "PenTool",
  },
  {
    id: "step-3",
    step: 3,
    title: "Engineering & Testing",
    description:
      "Clean, modular code with 100% automated test coverage — unit, integration, and end-to-end — built on a modern serverless stack.",
    iconName: "Code2",
  },
  {
    id: "step-4",
    step: 4,
    title: "Deploy & Scale",
    description:
      "Zero-downtime CI/CD deployment to the edge, with observability, monitoring, and auto-scaling infrastructure built in.",
    iconName: "Rocket",
  },
];
