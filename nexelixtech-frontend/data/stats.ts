import type { StatItem } from "@/lib/types";

// Impact metrics (SRS §3 homepage section)
export const stats: StatItem[] = [
  { id: "stat-1", label: "Projects Delivered", value: 120, suffix: "+" },
  { id: "stat-2", label: "Global Clients", value: 50, suffix: "+" },
  { id: "stat-3", label: "Revenue Processed", value: 100, suffix: "M+", prefix: "$" },
  { id: "stat-4", label: "Avg. Lighthouse Score", value: 98, suffix: "" },
];
