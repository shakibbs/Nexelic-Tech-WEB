import type { FAQItem } from "@/lib/types";

// FAQ entries (SRS §14 homepage section)
export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does a typical project take?",
    answer:
      "Most projects ship in 2-4 weeks for MVPs and 6-12 weeks for full enterprise builds. We use rapid Next.js iteration and CI/CD pipelines to deliver far faster than traditional agencies.",
    category: "Timeline",
  },
  {
    id: "faq-2",
    question: "Do you provide the source code?",
    answer:
      "Yes — you own 100% of the source code, delivered in a Git repository with full CI/CD pipeline setup, automated tests, and architecture documentation.",
    category: "Process",
  },
  {
    id: "faq-3",
    question: "What is your tech stack?",
    answer:
      "Next.js, React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS on the frontend/backend. For AI we use OpenAI, LangChain, and vector databases. Infrastructure runs on AWS/GCP with Docker and Kubernetes.",
    category: "Technology",
  },
  {
    id: "faq-4",
    question: "Do you offer maintenance after launch?",
    answer:
      "Absolutely. We offer flexible retainer plans covering monitoring, updates, security patches, and feature development to keep your product running at peak performance.",
    category: "Support",
  },
  {
    id: "faq-5",
    question: "Can you integrate AI into our existing product?",
    answer:
      "Yes — we specialize in RAG architecture, custom LLM integrations, and autonomous AI agents that plug into your existing systems without a full rewrite.",
    category: "AI",
  },
  {
    id: "faq-6",
    question: "What are your payment terms?",
    answer:
      "Typically 50% upfront to begin and 50% on delivery. For larger projects we offer milestone-based payments. We accept bank transfer, card, and international payments.",
    category: "Pricing",
  },
];
