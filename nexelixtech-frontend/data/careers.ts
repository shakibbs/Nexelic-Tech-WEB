import { JobOpening } from "@/lib/types";

export const careers: JobOpening[] = [
  {
    id: "eng-1",
    title: "Senior Next.js Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "We are looking for an expert Next.js engineer with deep knowledge of React Server Components, Turbopack, and edge infrastructure to lead architecture for our enterprise clients.",
    requirements: [
      "5+ years of production experience with React and Node.js",
      "Deep understanding of Next.js App Router and server-side rendering",
      "Experience with TypeScript, Tailwind CSS, and Framer Motion",
      "Strong background in performance optimization and Core Web Vitals"
    ]
  },
  {
    id: "ai-1",
    title: "Machine Learning Architect",
    department: "AI & Data",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Lead the design and implementation of autonomous AI agents and scalable RAG pipelines for our enterprise clients.",
    requirements: [
      "PhD or MS in Computer Science, AI/ML, or related field",
      "Production experience with LLMs, LangChain, and LlamaIndex",
      "Expertise in vector databases (Pinecone, Weaviate) and semantic search",
      "Strong Python and PyTorch background"
    ]
  },
  {
    id: "des-1",
    title: "Lead Product Designer",
    department: "Design",
    location: "New York / Remote",
    type: "Full-time",
    description: "Craft visually breathtaking, conversion-focused interfaces and robust design systems that define the future of our clients' digital products.",
    requirements: [
      "6+ years of digital product design experience",
      "Expertise in Figma, Framer, and modern prototyping tools",
      "Strong portfolio demonstrating premium, tech-forward aesthetics",
      "Experience building and maintaining enterprise design systems"
    ]
  }
];
