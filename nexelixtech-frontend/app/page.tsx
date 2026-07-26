import { Hero } from "@/components/hero/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSpotlight } from "@/components/sections/ServicesSpotlight";
import { AIPlayground } from "@/components/sections/AIPlayground";
import { ProcessPinning } from "@/components/sections/ProcessPinning";
import { ComparisonMatrix } from "@/components/sections/ComparisonMatrix";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TechStackRadar } from "@/components/sections/TechStackRadar";
import { EstimatorWidget } from "@/components/sections/EstimatorWidget";
import { CaseStudiesCarousel } from "@/components/sections/CaseStudiesCarousel";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* S1: 3D Hero */}
      <Hero />

      {/* S2: Social Proof Marquee */}
      <LogoMarquee />

      {/* S3: Impact Metrics */}
      <StatsSection />

      {/* S4: Services Spotlight */}
      <ServicesSpotlight />

      {/* S5: AI Playground */}
      <AIPlayground />

      {/* S6: Process Pinning */}
      <ProcessPinning />

      {/* S7: Technology Stack Radar */}
      <TechStackRadar />

      {/* S8: Cost & Timeline Estimator */}
      <EstimatorWidget />

      {/* S9: Case Studies */}
      <CaseStudiesCarousel />

      {/* S10: Comparison Matrix */}
      <ComparisonMatrix />

      {/* S11: Team Section */}
      <TeamSection />

      {/* S12: Testimonials */}
      <TestimonialsSlider />

      {/* S13: Blog Preview */}
      <BlogPreview />

      {/* S14: FAQ */}
      <FAQSection />

      {/* S15: Contact / RFP */}
      <ContactSection />

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="glow-border relative overflow-hidden rounded-3xl card-solid px-8 py-16 text-center sm:px-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to build something{" "}
            <span className="text-gradient-accent">extraordinary?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-muted">
            Let&apos;s architect your next-gen software solution. Book a free
            discovery call to get started.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
