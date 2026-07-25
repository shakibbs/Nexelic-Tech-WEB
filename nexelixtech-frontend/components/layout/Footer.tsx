import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

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
        { label: "Business Consultancy", href: "/services/business-consultancy" },
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
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
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-foreground-subtle">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-white/80"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <span className="text-xs font-semibold text-foreground">Contact us</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-foreground-muted hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
