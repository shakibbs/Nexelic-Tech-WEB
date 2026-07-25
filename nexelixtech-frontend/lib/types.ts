// ============================================================================
// Nexelix Tech — Shared TypeScript interfaces (per SRS §10 + extensions)
// ============================================================================

// Service catalog item (SRS §7, §10)
export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  badgeText: string;
  subCapabilities: string[];
  techStack: string[];
  deliverables: string[];
}

// Team member (SRS §8, §10)
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  socials: { linkedin?: string; github?: string; twitter?: string; email?: string };
  image: string;
}

// Portfolio case study (SRS §10)
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
}

// Estimator option (SRS §10)
export interface EstimatorOption {
  id: string;
  category: "platform" | "scale" | "features";
  label: string;
  description: string;
  basePriceUSD: number;
  estimatedDays: number;
}

// Testimonial (SRS §12 homepage section)
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

// FAQ entry (SRS §14 homepage section)
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Blog post (SRS §5, §13)
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
}

// Stat counter (SRS §3 homepage section)
export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

// Engineering process step (SRS §6 homepage section)
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  iconName: string;
}

// Job opening (SRS /careers)
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  requirements: string[];
}

// Site navigation link
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
