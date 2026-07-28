import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Display font — futuristic geometric sans-serif for headings (SRS §3.2)
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

// Body font — legible, ergonomic sans-serif (SRS §3.2)
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://nexelixtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexelix Tech — Next-Gen Software Solutions Agency",
    template: "%s | Nexelix Tech",
  },
  description:
    "Nexelix Tech architects bespoke web applications, enterprise software, AI integrations, and mobile apps with zero tech debt, bank-grade security, and ultra-fast delivery.",
  keywords: [
    "custom software development",
    "AI integration",
    "Next.js agency",
    "web application development",
    "mobile app development",
    "cloud devops",
    "enterprise software",
  ],
  authors: [{ name: "Nexelix Tech" }],
  creator: "Nexelix Tech",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nexelix Tech",
    title: "Nexelix Tech — Next-Gen Software Solutions Agency",
    description:
      "Bespoke web applications, AI integrations, and mobile apps engineered for speed, scale, and security.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexelix Tech — Next-Gen Software Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexelix Tech — Next-Gen Software Solutions Agency",
    description:
      "Bespoke web applications, AI integrations, and mobile apps engineered for speed, scale, and security.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexelix Tech",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: metadata.description,
    sameAs: [
      "https://twitter.com/nexelixtech",
      "https://linkedin.com/company/nexelixtech",
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main id="main" className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
