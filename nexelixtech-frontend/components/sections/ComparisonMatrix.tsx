import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/comparison";

// Nexelix vs Traditional Agencies comparison (SRS §6 — Section 10)
export function ComparisonMatrix() {
  return (
    <section className="cv-auto mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-accent-cyan">Why Nexelix</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Nexelix vs Traditional Agencies
        </h2>
        <p className="mt-4 text-foreground-muted">
          We engineer differently — faster, cleaner, and built to scale.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="py-4 pr-4 text-sm font-semibold text-foreground-muted">
                Capability
              </th>
              <th className="px-4 py-4 text-sm font-semibold text-foreground-muted">
                Traditional Agencies
              </th>
              <th className="rounded-xl bg-gradient-to-br from-accent-indigo/10 to-accent-cyan/10 px-4 py-4 text-sm font-bold text-gradient-accent">
                Nexelix Tech
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.id} className="border-b border-border/50">
                <td className="py-4 pr-4 text-sm font-medium">{row.metric}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-2 text-sm text-foreground-muted">
                    <X className="h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                    {row.traditional}
                  </span>
                </td>
                <td className="rounded-lg bg-gradient-to-br from-accent-indigo/5 to-accent-cyan/5 px-4 py-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    <Check className="h-4 w-4 shrink-0 text-accent-emerald" aria-hidden="true" />
                    {row.nexelix}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
