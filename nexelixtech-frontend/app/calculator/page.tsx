import { EstimatorWidget } from "@/components/sections/EstimatorWidget";

export const metadata = {
  title: "Project Estimator | Nexelix Tech",
  description: "Calculate the estimated cost and timeline for your next software engineering project.",
};

export default function CalculatorPage() {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Project <span className="text-gradient-accent">Estimator</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground-muted max-w-2xl mx-auto">
          Get a transparent, instant estimate for your next-generation software build. Select the features and capabilities you need below.
        </p>
      </div>
      <EstimatorWidget />
    </div>
  );
}
