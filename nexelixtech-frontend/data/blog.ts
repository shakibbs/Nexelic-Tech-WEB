import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "zero-tech-debt-architecture",
    title: "Zero-Tech-Debt Architecture: Building Resilient Next.js Apps",
    excerpt: "Learn how we use strict typing, custom hooks, and robust CI/CD pipelines to ensure our Next.js applications remain maintainable long-term.",
    content: "Technical debt is the silent killer of fast-moving software projects. At Nexelix Tech, we've developed a zero-tech-debt philosophy when building enterprise-grade applications with Next.js.\n\nOur approach starts with strict TypeScript configurations. We don't just use types; we use them to model our entire domain, catching potential runtime errors before they even make it to a pull request. By enforcing exhaustive type checking, we eliminate entire classes of bugs.\n\nNext, we rely heavily on custom hooks to encapsulate complex state and side effects. This keeps our components clean, testable, and focused purely on presentation. When business logic changes, we update a single hook rather than hunting down logic scattered across a dozen components.\n\nFinally, our CI/CD pipelines are ruthless. Automated testing, linting, and performance budgets ensure that no code merges unless it meets our uncompromising standards. It takes more time upfront, but the long-term velocity and resilience of our applications speak for themselves.",
    author: "John Doe",
    date: "2026-07-15",
    readingTime: "5 min read",
    tags: ["Next.js", "Architecture", "TypeScript"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "implementing-rag-agents",
    title: "Implementing RAG Agents with LangChain and Pinecone",
    excerpt: "A technical deep dive into how we build autonomous support agents capable of understanding context and executing multi-step workflows.",
    content: "Retrieval-Augmented Generation (RAG) has transformed how we build AI applications, moving beyond static knowledge cutoffs to dynamic, context-aware systems. In this post, we'll explore our architecture for building autonomous support agents using LangChain and Pinecone.\n\nThe core challenge in enterprise AI is hallucinations. To combat this, we use a robust vector database (Pinecone) to store semantic embeddings of our client's proprietary knowledge base. When a user queries the agent, we don't just pass the question to the LLM; we first perform a similarity search in Pinecone to retrieve highly relevant context.\n\nLangChain orchestrates this entire workflow. We construct chains that take the user's input, fetch the context, and inject it into a carefully engineered prompt. But we don't stop there. By utilizing LangChain's agent framework, our AI can also decide when to call external APIs, fetch real-time data, or escalate to a human operator.\n\nThe result is a support agent that is not only highly knowledgeable but also capable of taking actionable steps to resolve complex customer issues autonomously.",
    author: "Jane Smith",
    date: "2026-07-02",
    readingTime: "8 min read",
    tags: ["AI", "LangChain", "Vector DB"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "mastering-framer-motion",
    title: "Mastering Framer Motion for Enterprise Web Apps",
    excerpt: "Discover our techniques for creating fluid, 60fps animations that enhance user experience without compromising core web vitals.",
    content: "Animation on the web used to be a choice between poor performance or complex, hard-to-maintain code. With Framer Motion, we've found the perfect balance for our React applications at Nexelix Tech.\n\nWe use Framer Motion not just for visual flair, but to provide critical user feedback. A button that smoothly scales down when clicked, or a modal that glides into view, grounds the user in the interface and makes the application feel responsive and premium.\n\nOur key technique for maintaining 60fps performance is leveraging hardware acceleration. We stick strictly to animating properties like `transform` and `opacity`, which can be handled by the GPU, avoiding layout-triggering properties like `width` or `margin`.\n\nFurthermore, we abstract common animations into reusable wrapper components. This ensures consistency across the application and makes it incredibly easy for our development team to implement complex animations with a single line of code. Good animation should feel invisible; it should just feel right.",
    author: "Alex Johnson",
    date: "2026-06-20",
    readingTime: "6 min read",
    tags: ["Animation", "React", "UX"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  }
];
