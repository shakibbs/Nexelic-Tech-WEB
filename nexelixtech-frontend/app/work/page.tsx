import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Work | Nexelix Tech",
  description: "Explore our portfolio of successful software engineering projects and case studies.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our <span className="text-gradient-accent">Work</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Discover how we've partnered with forward-thinking companies to build scalable, high-performance digital products.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden glass-card aspect-video lg:aspect-square glow-border">
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <span className="text-foreground-muted font-medium py-1">
                    {study.client}
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  {study.title}
                </h2>
                
                <p className="text-lg text-foreground-muted mb-8 line-clamp-3">
                  {study.summary}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-accent-cyan">{metric.value}</div>
                      <div className="text-sm text-foreground-muted mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <Link 
                    href={`/work/${study.id}`}
                    className="inline-flex items-center text-sm font-semibold text-accent-indigo hover:text-accent-cyan transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
