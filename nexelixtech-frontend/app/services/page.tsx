import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, BrainCircuit, PenTool, Cloud, Building2, type LucideIcon } from "lucide-react";

export const metadata = {
  title: "Services | Nexelix Tech",
  description: "Explore our comprehensive suite of next-gen software engineering services.",
};

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  BrainCircuit,
  PenTool,
  Cloud,
  Building2,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our <span className="text-gradient-accent">Services</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            We engineer high-performance software solutions tailored to solve your most complex business challenges. Discover how we can accelerate your digital transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-indigo/20"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20">
                    <Icon className="h-6 w-6 text-accent-cyan transition-transform group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    <Link href={`/services/${service.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-foreground-muted line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-sm font-semibold text-accent-indigo group-hover:text-accent-cyan transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
