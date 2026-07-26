import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [

  {
    id: "event-management-system",
    title: "Enterprise Event Management System",
    client: "Corporate Event Operations",
    industry: "Corporate Events",
    metrics: [
      { label: "End-to-End", value: "Automation" },
      { label: "Security", value: "Enterprise" },
      { label: "Dashboards", value: "3 Tailored Views" }
    ],
    summary: "A secure, scalable, and role-based event management platform engineered to streamline how organizations plan, approve, invite, and report on events.",
    challenge: "Organizations running frequent internal and external events faced fragmented workflows, no approval governance, manual attendee handling, weak access control, and no reporting visibility. They needed a centralized, secure platform governing the event lifecycle while remaining easy for non-technical staff to operate.",
    solution: "We delivered the platform as a modular, layered Spring Boot backend with a clear separation of concerns, designed for extensibility and long-term maintainability.",
    techStack: ["Java 17", "Spring Boot 3.5", "React", "TypeScript", "MySQL", "Spring Security", "JWT", "JasperReports", "Docker", "Tailwind CSS"],
    image: "/images/work/event-landing.png",
    galleryImages: [
      "/images/work/event-dashboard.png",
      "/images/work/event-list.png",
      "/images/work/event-login.png",
      "/images/work/event-admin-dashboard.png",
      "/images/work/event-highlights.png",
      "/images/work/event-details.png",
      "/images/work/event-attendee-dashboard.png"
    ],
    extraSections: [
      {
        title: "Solution Pillars",
        content: [
          "Domain-Driven Architecture: A layered structure with DTOs and MapStruct mappers keeping the API contract clean and decoupled from the data model.",
          "Security First: JWT-based authentication with access and refresh tokens, layered on top of Spring Security 6. Every endpoint is protected by role and permission checks.",
          "Fine-Grained Access Control: A flexible RBAC model supporting Super Admin, Admin, and Attendee roles — with dynamic role creation and per-permission assignment.",
          "Automated Communication: A scheduled email engine sends event reminders, invitations with secure tokens, RSVP confirmations, and auto-generated account credentials.",
          "Observability & Auditability: Comprehensive logging, login/logout history, user activity tracking, and password history give administrators a complete audit trail."
        ]
      },
      {
        title: "What We Built",
        content: [
          "Event Lifecycle Management: A complete state machine governing events from creation through completion — including an approval workflow and status tracking.",
          "Attendee & RSVP Management: Email-based invitations, one-click RSVP, and real-time attendee status tracking with auto-provisioned accounts.",
          "Role-Specific Dashboards: Three tailored dashboards (Super Admin, Admin, Attendee) rendered dynamically based on user roles and permissions.",
          "Reporting & Export: JasperReports integration delivers branded, exportable event and attendee reports (PDF)."
        ]
      },
      {
        title: "Key Outcomes",
        content: [
          "End-to-end automation of the event lifecycle — from creation and approval to invitation, reminders, and reporting.",
          "Enterprise-grade security with token-based auth and granular, role-scoped permissions across every action.",
          "Operational visibility through audit logs, activity history, and exportable reports — replacing scattered spreadsheets.",
          "Faster, smoother events by removing manual attendee handling and reminder follow-ups from staff workloads."
        ]
      }
    ]
  },
  {
    id: "technova-crm",
    title: "TechNova CRM & Consultancy Management System",
    client: "TechNova Software Consultancy",
    industry: "Software Consulting & IT Services",
    metrics: [
      { label: "Platform", value: "Web App" },
      { label: "Roles", value: "3" },
      { label: "Timeline", value: "End-to-end" }
    ],
    summary: "A unified, single-domain platform that turns a software consultancy's scattered tools into one secure, role-aware system spanning lead generation, sales, project delivery, and client support.",
    challenge: "Consultancies that rely on disconnected tools — email for inquiries, spreadsheets for leads, chat apps for project coordination — run into predictable, costly problems: No single source of truth, poor visibility into the sales pipeline, inefficient project tracking, and unprotected web forms drowning in spam. The brief was clear: build one platform that takes a visitor from \"Request a Quote\" all the way to a delivered, supported project — without ever leaving the system.",
    solution: "A unified, single-domain web platform built around three separate panels, each serving a distinct role: A Public Corporate Website for anonymous visitors to request quotes; an Internal CRM Dashboard for agency staff covering the full delivery lifecycle; and a Client Portal where clients log in to monitor their own projects. Each user type gets its own dedicated, isolated workspace, yet all three run on a single shared backend and database.",
    techStack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Vite", "Tailwind CSS", "JWT", "Redis", "Celery"],
    image: "/images/work/technova-hero.png",
    galleryImages: [
      "/images/work/technova-stats.png",
      "/images/work/technova-leads.png",
      "/images/work/technova-landing.png",
      "/images/work/technova-login.png",
      "/images/work/technova-client-portal.png",
      "/images/work/technova-team.png",
      "/images/work/technova-proposals.png"
    ],
    extraSections: [
      {
        title: "Panel 1 — Public Corporate Website",
        content: [
          "The public-facing surface for the consultancy — home, services, portfolio, and a 'Request a Quote' form that feeds leads directly into the CRM pipeline. The public endpoint is protected by anonymous rate-limiting and bot mitigation (Turnstile/reCAPTCHA) so only genuine inquiries reach the database."
        ]
      },
      {
        title: "Panel 2 — Internal CRM Dashboard",
        content: [
          "A password-protected workspace for agency staff covering the full delivery lifecycle:",
          "• Lead tracking with statuses (New → Contacted → Qualified → Converted)",
          "• Automated lead-to-client conversion — flipping a lead to 'Converted' transactionally creates a client account, profile, and portal access in one step",
          "• Client & project management with milestones, tasks, and assignees",
          "• Task collaboration through threaded task updates",
          "• Team performance and reporting views"
        ]
      },
      {
        title: "Panel 3 — Client Portal",
        content: [
          "A dedicated, isolated gateway where clients log in to monitor their own projects, submit support tickets, and download deliverables — with strict data ownership enforced at the database level.",
          "Role isolation by design: Staff log in through a dedicated /admin/login gateway and land on the CRM Dashboard; clients log in through a separate /portal/login gateway and land on the Client Portal. Even though both call the same JWT endpoint, the frontend decodes each token's role claim to route the user to the correct panel — and the backend enforces it independently, so no role can ever reach another panel's data."
        ]
      },
      {
        title: "Key Technical Highlights",
        content: [
          "• Single-domain, decoupled architecture — React frontend and Django REST Framework backend unified under one domain to bypass CORS friction while keeping concerns cleanly separated.",
          "• Role-based security at two layers — frontend React route guards mirror backend DRF permission classes. Even if a user manually edits a URL, the database rejects access with a 403 Forbidden.",
          "• Dedicated authentication gateways — staff enter through /admin/login, clients through /portal/login. Both call the same JWT endpoint.",
          "• JWT auth with short-lived access tokens and automated refresh cycling for secure session management.",
          "• UUID primary keys across all CRM models to shield table scale and prevent record enumeration.",
          "• Integrity-first data modeling — ON DELETE RESTRICT protects financially critical links, while transient children cascade cleanly with their parent project.",
          "• Anti-spam by design — the public lead form is hardened with rate-limiting and bot-mitigation token validation before any write hits the database."
        ]
      },
      {
        title: "Outcomes & Impact",
        content: [
          "• One platform replaces an entire toolchain — leads, projects, tasks, and client communication now live in a single system.",
          "• Zero cross-role data leakage by construction — strict gateway separation plus backend ownership queries guarantee a client can only ever see their own projects.",
          "• Faster, safer lead acquisition — captured inquiries flow straight into a tracked pipeline, while bot traffic is filtered out.",
          "• Frictionless lead-to-client conversion — what used to be a manual, multi-step process happens transactionally in a single status change.",
          "• Real delivery visibility — admins can monitor workload, deadlines, and project health in real time."
        ]
      }
    ]
  }
];
