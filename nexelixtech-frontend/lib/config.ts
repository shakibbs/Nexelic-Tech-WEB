// Centralized site configuration (SRS §9)
export const siteConfig = {
  name: "Nexelix Tech",
  url: "https://nexelixtech.com",
  email: "hello@nexelixtech.com",
  description:
    "Next-gen software solutions agency specializing in bespoke web apps, AI integration, and mobile engineering.",
  // Cal.com embed identifier for discovery-call booking
  calcomUsername: process.env.NEXT_PUBLIC_CALCOM_USERNAME ?? "nexelixtech",
  calcomEventSlug: process.env.NEXT_PUBLIC_CALCOM_EVENT_SLUG ?? "discovery-call",
  // Social links
  socials: {
    linkedin: "https://www.linkedin.com/company/nexelixtech",
    github: "https://github.com/nexelixtech",
    twitter: "https://twitter.com/nexelixtech",
  },
  // Primary navigation (SRS §5)
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Calculator", href: "/calculator" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

// Server-only secrets (never import in client components)
export const serverConfig = {
  slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  contactInbox: process.env.CONTACT_INBOX_EMAIL ?? siteConfig.email,
} as const;
