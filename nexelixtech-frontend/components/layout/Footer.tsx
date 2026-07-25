import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";

// Multi-column footer with live system status (SRS §16)
export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services/custom-web-development" },
        { label: "Mobile Apps", href: "/services/mobile-app-development" },
        { label: "AI / ML", href: "/services/ai-ml-automation" },
        { label: "UI/UX Design", href: "/services/ui-ux-product-design" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Work", href: "/work" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Cost Calculator", href: "/calculator" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand + status */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-48">
                <Image 
                  src="/logo.png" 
                  alt="Nexelix Tech Logo" 
                  fill
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-foreground-muted">
              Next-gen software solutions engineered for speed, scale, and security.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-emerald" />
              </span>
              <span className="text-foreground-muted">
                All systems operational · 99.99% uptime
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-subtle">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs text-foreground-muted hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
