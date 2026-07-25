import { services, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Smartphone, BrainCircuit, PenTool, Cloud, Building2, Briefcase, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  BrainCircuit,
  PenTool,
  Cloud,
  Building2,
  Briefcase,
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.title} | Nexelix Tech`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Globe;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Nexelix Tech",
      url: "https://nexelixtech.com",
    },
    serviceType: service.title,
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
          href="/services" 
          className="inline-flex items-center text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20 mb-6">
              <Icon className="h-8 w-8 text-accent-cyan" aria-hidden="true" />
            </div>
            
            {service.badgeText && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-indigo/20 text-accent-indigo mb-4 border border-accent-indigo/30">
                {service.badgeText}
              </span>
            )}
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl font-medium text-accent-cyan mb-6">
              {service.tagline}
            </p>
            
            <p className="text-lg text-foreground-muted leading-8 mb-8">
              {service.description}
            </p>
            
            <div className="flex gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-accent-indigo px-8 text-sm font-semibold text-white shadow-sm hover:bg-accent-indigo/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-indigo">
                Start a Project
              </Link>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Capabilities</h3>
              <ul className="space-y-4">
                {service.subCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-cyan shrink-0 mr-3" />
                    <span className="text-foreground-muted">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, index) => (
                  <span key={index} className="inline-flex items-center rounded-md bg-surface/50 px-3 py-1 text-sm font-medium text-white border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Deliverables</h3>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-center text-foreground-muted">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-indigo mr-3 shrink-0" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
