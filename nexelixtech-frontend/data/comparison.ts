// Comparison matrix (SRS §6 — Section 10: Nexelix vs Traditional Agencies)
export interface ComparisonRow {
  id: string;
  metric: string;
  traditional: string;
  nexelix: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    id: "cmp-1",
    metric: "Delivery Speed",
    traditional: "3-6 Months (Slow Legacy)",
    nexelix: "2-4 Weeks (Rapid Next.js Iteration)",
  },
  {
    id: "cmp-2",
    metric: "Code Quality & Debt",
    traditional: "High Debt, No Tests",
    nexelix: "Zero Tech Debt, 100% Test Coverage",
  },
  {
    id: "cmp-3",
    metric: "Page Speed & Performance",
    traditional: "Slow (Lighthouse < 60)",
    nexelix: "Ultra-Fast (Lighthouse 95-100)",
  },
  {
    id: "cmp-4",
    metric: "Architecture & Scalability",
    traditional: "Monolithic & Fragile",
    nexelix: "Serverless, Edge-Ready & Cloud Native",
  },
  {
    id: "cmp-5",
    metric: "AI Integration",
    traditional: "None / Basic Chatbots",
    nexelix: "Custom RAG, Autonomous Agents & LLMs",
  },
];
