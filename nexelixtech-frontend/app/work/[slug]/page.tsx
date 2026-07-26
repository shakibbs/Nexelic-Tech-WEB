import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Server, Code2, Cpu } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return { title: "Not Found" };

  return {
    title: `${study.title} | Nexelix Tech`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: {
      "@type": "Organization",
      name: "Nexelix Tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexelix Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://nexelixtech.com/logo.png",
      }
    },
    image: `https://nexelixtech.com${study.image}`,
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
          href="/work" 
          className="inline-flex items-center text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Work
        </Link>
        
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              {study.industry}
            </span>
            <span className="text-foreground-muted font-medium py-1">
              {study.client}
            </span>
          </div>
          
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            {study.title}
          </h1>
          
          <p className="text-xl text-foreground-muted leading-8 max-w-3xl">
            {study.summary}
          </p>
        </div>
        
        <div className="w-full mb-16 relative">
          <ImageCarousel images={[study.image, ...(study.galleryImages || [])]} title={study.title} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">The Challenge</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                {study.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Solution</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                {study.solution}
              </p>
            </div>
            
            {study.extraSections && study.extraSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-display font-bold text-white mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg text-foreground-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-muted/50 border border-border">
              <h3 className="text-2xl font-bold text-white mb-6">Key Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {study.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-4xl font-display font-bold text-accent-cyan mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-foreground-muted uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 sticky top-32">
              <h3 className="font-display text-xl font-bold text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech, index) => (
                  <span key={index} className="inline-flex items-center rounded-md bg-surface-muted px-3 py-1.5 text-sm font-medium text-white border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              
              {study.demoUrl && (
                <div className="mt-8 pt-8 border-t border-border">
                  <a 
                    href={study.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-lg bg-accent-indigo px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-indigo/90 transition-colors"
                  >
                    View Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </div>
    </>
  );
}
