"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-card border-b border-border">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-accent-indigo focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="relative h-8 w-40">
            <Image 
              src="/logo.png" 
              alt="Nexelix Tech Logo" 
              fill
              className="object-contain object-left" 
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground hover:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">


          <Link href="/contact" className="hidden sm:block">
            <Button size="sm">Start a Project</Button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-lg p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="mt-2 w-full">
                Start a Project
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
