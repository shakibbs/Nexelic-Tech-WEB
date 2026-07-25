import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "zero-tech-debt-architecture",
    title: "Zero-Tech-Debt Architecture: Building Resilient Next.js Apps",
    excerpt: "Learn how we use strict typing, custom hooks, and robust CI/CD pipelines to ensure our Next.js applications remain maintainable long-term.",
    content: "...",
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
    content: "...",
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
    content: "...",
    author: "Alex Johnson",
    date: "2026-06-20",
    readingTime: "6 min read",
    tags: ["Animation", "React", "UX"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  }
];
