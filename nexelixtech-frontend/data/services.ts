import type { ServiceItem } from "@/lib/types";

// Service catalog (SRS §7) — 6 core services
export const services: ServiceItem[] = [
  {
    id: "svc-1",
    title: "Custom Web Application Development",
    slug: "custom-web-development",
    tagline: "High-speed, scalable web applications crafted for modern digital leaders.",
    description:
      "Enterprise-grade React and Next.js applications featuring ultra-fast response times, resilient cloud backends, and serverless architectures.",
    iconName: "Globe",
    badgeText: "Most Popular",
    subCapabilities: [
      "Full-stack SaaS Development",
      "Web Dashboards & Portals",
      "WebSockets Real-time Tools",
      "Progressive Web Apps (PWA)",
      "Headless E-commerce",
    ],
    techStack: ["Next.js", "React.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Docker", "AWS"],
    deliverables: [
      "Source Code Repository",
      "CI/CD Pipeline",
      "Automated Test Suite",
      "Architecture Diagram",
      "Security Audit Report",
    ],
  },
  {
    id: "svc-2",
    title: "Mobile Application Engineering",
    slug: "mobile-app-development",
    tagline: "Native performance with cross-platform elegance.",
    description:
      "Custom iOS and Android apps engineered for maximum responsiveness, fluid 120Hz gesture animations, offline storage, and seamless API synchronizations.",
    iconName: "Smartphone",
    badgeText: "iOS & Android",
    subCapabilities: [
      "Cross-Platform (React Native, Flutter)",
      "Native iOS (Swift) & Android (Kotlin)",
      "Biometric Authentication",
      "Push Notifications",
      "Offline-First Architecture",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Fastlane"],
    deliverables: [
      "App Store & Play Store Submission",
      "Source Code Repository",
      "CI/CD Pipeline",
      "Analytics Integration",
      "Post-Launch Support",
    ],
  },
  {
    id: "svc-3",
    title: "AI / ML & Intelligent Automation",
    slug: "ai-ml-automation",
    tagline: "Empower your business operations with autonomous AI agents and custom LLMs.",
    description:
      "Large Language Model (LLM) integrations, Retrieval-Augmented Generation (RAG), and custom computer vision pipelines tailored to your data.",
    iconName: "BrainCircuit",
    badgeText: "Cutting Edge",
    subCapabilities: [
      "Custom RAG Architecture",
      "Autonomous AI Agents (LangChain, LlamaIndex)",
      "Fine-Tuned Open Models",
      "Vector DB Semantic Search",
      "Computer Vision Pipelines",
    ],
    techStack: ["OpenAI", "LangChain", "LlamaIndex", "Pinecone", "PyTorch", "Hugging Face", "Python"],
    deliverables: [
      "Trained Model Artifacts",
      "API Documentation",
      "Evaluation Benchmarks",
      "Deployment Infrastructure",
      "Source Code Repository",
    ],
  },
  {
    id: "svc-4",
    title: "Business Consultancy",
    slug: "business-consultancy",
    tagline: "Strategic guidance to accelerate digital transformation and business growth.",
    description:
      "Comprehensive technology consulting, process optimization, market analysis, and digital strategy formulation for modern enterprises.",
    iconName: "Briefcase",
    badgeText: "Strategy",
    subCapabilities: [
      "Digital Transformation Strategy",
      "Technology Stack Assessment",
      "Process Automation Planning",
      "Market & Competitor Analysis",
      "IT Cost Optimization",
    ],
    techStack: ["Miro", "Notion", "Jira", "Tableau", "PowerBI"],
    deliverables: [
      "Digital Strategy Roadmap",
      "Technology Audit Report",
      "Process Optimization Plan",
      "ROI Analysis",
      "Executive Summary",
    ],
  },
  {
    id: "svc-5",
    title: "Cloud Infrastructure & DevOps",
    slug: "cloud-devops",
    tagline: "Zero-downtime, auto-scaling infrastructure built for global performance.",
    description:
      "Infrastructure as Code, Kubernetes orchestration, multi-cloud setup, and automated CI/CD pipelines.",
    iconName: "Cloud",
    badgeText: "99.99% Uptime",
    subCapabilities: [
      "Infrastructure as Code (Terraform)",
      "Kubernetes Orchestration",
      "AWS / GCP / Azure Multi-Cloud",
      "Automated CI/CD Pipelines",
      "Observability & Monitoring",
    ],
    techStack: ["Terraform", "Kubernetes", "AWS", "GCP", "Docker", "Prometheus", "Grafana"],
    deliverables: [
      "Infrastructure Code Repository",
      "CI/CD Pipeline Setup",
      "Monitoring Dashboards",
      "Disaster Recovery Plan",
      "Cost Optimization Report",
    ],
  },
  {
    id: "svc-6",
    title: "Enterprise Software & Custom ERP/CRM",
    slug: "enterprise-erp-crm",
    tagline: "Streamline complex business processes into unified, custom workflows.",
    description:
      "Custom ERP & CRM system development, financial & payroll automation, and multi-tenant architecture with role-based access control.",
    iconName: "Building2",
    badgeText: "Enterprise",
    subCapabilities: [
      "Custom ERP & CRM Development",
      "Financial & Payroll Automation",
      "Multi-tenant Architecture (RBAC)",
      "Legacy System Migration",
      "Workflow Automation",
    ],
    techStack: ["Java", "Spring Boot", "C#", ".NET", "Odoo", "PostgreSQL", "AWS"],
    deliverables: [
      "Source Code Repository",
      "RBAC Configuration",
      "API Documentation",
      "Data Migration Scripts",
      "Admin Training Manual",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
