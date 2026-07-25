import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Global FinTech Scaling",
    client: "Acme Finance",
    industry: "FinTech",
    metrics: [
      { label: "Performance Increase", value: "300%" },
      { label: "Uptime", value: "99.99%" },
    ],
    summary: "Re-architecting a legacy monolithic platform to a serverless Next.js architecture.",
    challenge: "The client was experiencing slow page load times leading to high customer drop-off during onboarding.",
    solution: "We migrated the entire frontend to Next.js App Router with React Server Components and deployed on edge infrastructure.",
    techStack: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cs2",
    title: "Autonomous Customer Support Agent",
    client: "TechStart SaaS",
    industry: "B2B SaaS",
    metrics: [
      { label: "Ticket Deflection", value: "85%" },
      { label: "Response Time", value: "<1s" },
    ],
    summary: "Implemented a custom RAG-based AI support agent capable of resolving complex technical queries.",
    challenge: "Support team was overwhelmed by repetitive queries and struggled to maintain SLA.",
    solution: "Built a custom LangChain agent connected to their documentation and Zendesk via Pinecone vector database.",
    techStack: ["LangChain", "OpenAI", "Pinecone", "Node.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cs3",
    title: "Omnichannel E-commerce Transformation",
    client: "RetailPrime",
    industry: "E-commerce",
    metrics: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "LCP", value: "0.8s" },
    ],
    summary: "Built a headless commerce solution using Next.js and Shopify.",
    challenge: "Outdated Shopify liquid theme was too slow and inflexible for their multi-region expansion.",
    solution: "Decoupled the frontend using Next.js, integrating with Shopify Storefront API and Sanity CMS.",
    techStack: ["Next.js", "Shopify", "Sanity CMS", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  },
];
