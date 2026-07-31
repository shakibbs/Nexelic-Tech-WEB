import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  UserCheck, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  Mail, 
  ChevronRight,
  Server,
  KeyRound,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of Nexelix Tech detailing personal data collection, GDPR & CCPA rights, cookie preferences, data retention, subprocessors, and security controls.",
  openGraph: {
    title: "Privacy Policy | Nexelix Tech",
    description: "Official Privacy Policy and data protection framework of Nexelix Tech.",
  },
};

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "roles", title: "1. Data Controller & Processor" },
  { id: "categories", title: "2. Data We Collect" },
  { id: "purposes", title: "3. How We Use Your Data" },
  { id: "legal-bases", title: "4. Legal Bases (GDPR & CCPA)" },
  { id: "subprocessors", title: "5. Data Sharing & Subprocessors" },
  { id: "cookies", title: "6. Cookies & Tracking Controls" },
  { id: "transfers", title: "7. International Data Transfers" },
  { id: "retention", title: "8. Data Retention" },
  { id: "rights", title: "9. Your Rights (GDPR & CCPA)" },
  { id: "security", title: "10. Data Security Measures" },
  { id: "children", title: "11. Children's Privacy" },
  { id: "ai-automated", title: "12. AI & Automated Decision-Making" },
  { id: "modifications", title: "13. Changes to this Policy" },
  { id: "breach", title: "14. Data Breach Incident Response" },
  { id: "contact-dpo", title: "15. Contact & DPO Status" },
  { id: "sla-beta", title: "16. SLA & Beta Features Addendum" },
  { id: "opensource", title: "17. Open-Source Software" },
  { id: "dpa-summary", title: "18. Data Processing Addendum (DPA)" },
];

const subprocessors = [
  { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure, encrypted database hosting", location: "United States / EU Regions" },
  { name: "Google Cloud / Analytics", purpose: "Application hosting & de-identified web performance analytics", location: "United States / Global" },
  { name: "Stripe, Inc.", purpose: "PCI-DSS compliant payment processing & billing orchestration", location: "United States / Global" },
  { name: "Vercel Inc.", purpose: "Frontend Edge network delivery & deployment infrastructure", location: "United States / Global" },
  { name: "Mailchimp / Postmark", purpose: "Transactional & service notification email distribution", location: "United States" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background pb-24 pt-12">
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden blur-3xl">
        <div className="h-[400px] w-[800px] bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-emerald-900/10 opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Lock className="h-3.5 w-3.5" />
            GDPR & CCPA Compliant Privacy Standards
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-base text-foreground-muted">
            At Nexelix Tech, we are committed to transparent, enterprise-grade data protection. This Privacy Policy explains what personal information we collect, why we collect it, how we safeguard it, and your rights under global privacy laws.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-foreground-subtle">
            <div>
              <span className="font-semibold text-foreground">Last Updated:</span> August 1, 2026
            </div>
            <div>
              <span className="font-semibold text-foreground">Effective Date:</span> August 1, 2026
            </div>
            <div>
              <span className="font-semibold text-foreground">Status:</span> Active (Version 1.0)
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-md">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Policy Sections
              </h2>
              <nav className="mt-4 space-y-1 text-xs">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-foreground-muted transition-colors hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
                  </a>
                ))}
              </nav>
              <div className="mt-6 border-t border-border pt-4 text-xs text-foreground-muted">
                Have data privacy requests? Email our Privacy Team directly at{" "}
                <a
                  href="mailto:info@nexelixtech.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  info@nexelixtech.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Privacy Policy Text */}
          <main className="space-y-12 lg:col-span-3">
            {/* Introduction */}
            <section id="intro" className="scroll-m-24 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Introduction</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech (“Company”, “we”, “us”, “our”) respects your privacy and is dedicated to protecting your personal data. This Privacy Policy governs personal information collected through our official website (<a href="https://nexelixtech.com" className="text-purple-400 underline">https://nexelixtech.com</a>), software applications, consulting channels, customer portals, and associated SaaS services (collectively, the “Services”).
              </p>
            </section>

            {/* Section 1 */}
            <section id="roles" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">1. Data Controller and Data Processor Roles</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-purple-500/20 bg-surface/60 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">Data Controller</h3>
                  <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
                    Nexelix Tech acts as Data Controller for personal information collected directly through our website forms, account registration, billing data, job applications, and marketing communications.
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-surface/60 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Data Processor</h3>
                  <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
                    When business clients utilize our SaaS applications or custom software to store, manage, or process customer end-user data, Nexelix Tech acts as a Data Processor. The client acts as Data Controller.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="categories" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">2. Categories of Data We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                We collect personal information in the following structured categories:
              </p>
              <div className="mt-4 space-y-3 text-xs">
                <div className="rounded-xl border border-border bg-surface/40 p-3.5">
                  <span className="font-semibold text-foreground">Contact Data:</span> Names, professional email addresses, phone numbers, corporate role, and organization name submitted via contact or demo request forms.
                </div>
                <div className="rounded-xl border border-border bg-surface/40 p-3.5">
                  <span className="font-semibold text-foreground">Account Credentials:</span> Usernames, hashed password credentials, single-sign-on (SSO) tokens, and account profile preferences.
                </div>
                <div className="rounded-xl border border-border bg-surface/40 p-3.5">
                  <span className="font-semibold text-foreground">Transaction & Billing Data:</span> Billing addresses and payment metadata. Full payment card details are handled directly by PCI-DSS compliant third-party payment processors (e.g., Stripe) and never stored on Nexelix Tech servers.
                </div>
                <div className="rounded-xl border border-border bg-surface/40 p-3.5">
                  <span className="font-semibold text-foreground">Usage & Telemetry Data:</span> IP addresses, device operating system, browser type, referral URLs, session timestamps, and de-identified application interaction metrics.
                </div>
                <div className="rounded-xl border border-border bg-surface/40 p-3.5">
                  <span className="font-semibold text-foreground">Communications History:</span> Customer support email exchanges, feedback submissions, live chat logs, and opt-in/opt-out status records.
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="purposes" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">3. How We Use Your Data (Purposes of Processing)</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                We process personal information strictly for legitimate operational purposes:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-foreground-muted list-disc list-inside">
                <li><span className="font-semibold text-foreground">Service Delivery:</span> Account creation, client identity verification, project milestone delivery, payment billing, and customer support.</li>
                <li><span className="font-semibold text-foreground">Platform Improvement:</span> Analyzing aggregate usage trends to optimize web performance, patch bugs, and deploy new feature enhancements.</li>
                <li><span className="font-semibold text-foreground">Security & Fraud Prevention:</span> Monitoring systems for unauthorized intrusion, DDoS mitigation, cyber attack prevention, and security audits.</li>
                <li><span className="font-semibold text-foreground">Legal & Regulatory Compliance:</span> Fulfilling corporate tax, accounting, audit, and legal disclosure duties.</li>
                <li><span className="font-semibold text-foreground">Communications:</span> Sending operational service alerts, security notices, invoice updates, and opt-in newsletters.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="legal-bases" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">4. Legal Bases (GDPR) & CCPA Business Purpose</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Under the European General Data Protection Regulation (GDPR), we process personal data under four lawful bases:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <span className="font-semibold text-purple-300">Contractual Necessity:</span> Processing essential to fulfill our contractual commitments to you (e.g., account administration, billing).
                </div>
                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <span className="font-semibold text-emerald-300">Consent:</span> Where you have given explicit opt-in consent (e.g., newsletter subscriptions, non-essential cookies).
                </div>
                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <span className="font-semibold text-blue-300">Legitimate Interest:</span> Securing platform infrastructure, preventing fraud, and direct business communications.
                </div>
                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <span className="font-semibold text-amber-300">Legal Obligation:</span> Compliance with statutory tax, audit, or law enforcement mandates.
                </div>
              </div>
              <p className="mt-3 text-xs text-foreground-subtle">
                For California residents, these categories align with permissible “business purposes” under the California Consumer Privacy Act (CCPA) and CPRA.
              </p>
            </section>

            {/* Section 5 - Subprocessors */}
            <section id="subprocessors" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Server className="h-5 w-5 text-purple-400" />
                5. Data Sharing & Vetted Subprocessors
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech does not sell personal data. We only share personal data with trusted third-party service providers bound by Data Processing Agreements (DPAs) and strict confidentiality obligations:
              </p>

              <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface/40">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-surface/80 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Subprocessor</th>
                      <th className="px-4 py-3 font-semibold">Processing Purpose</th>
                      <th className="px-4 py-3 font-semibold">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground-muted">
                    {subprocessors.map((sub) => (
                      <tr key={sub.name} className="hover:bg-purple-500/5">
                        <td className="px-4 py-3 font-medium text-foreground">{sub.name}</td>
                        <td className="px-4 py-3">{sub.purpose}</td>
                        <td className="px-4 py-3">{sub.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 - Cookies */}
            <section id="cookies" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">6. Cookies & Tracking Controls (ePrivacy Directive)</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Under the EU ePrivacy Directive and global web guidelines, non-essential cookies require prior explicit opt-in consent:
              </p>
              <div className="mt-4 space-y-2 text-xs text-foreground-muted">
                <div className="rounded-lg border border-border p-3">
                  <span className="font-semibold text-foreground">Strictly Necessary Cookies:</span> Essential for authentication, security, and navigation. Active by default.
                </div>
                <div className="rounded-lg border border-border p-3">
                  <span className="font-semibold text-foreground">Performance & Analytics Cookies:</span> Collect anonymized site traffic metrics (e.g., Google Analytics). Fired only after user consent.
                </div>
                <div className="rounded-lg border border-border p-3">
                  <span className="font-semibold text-foreground">Marketing & Preference Cookies:</span> Used for newsletter preferences or promotional tracking. Requires explicit opt-in.
                </div>
              </div>
              <p className="mt-3 text-xs text-foreground-subtle">
                You may modify or withdraw cookie consent at any time by clicking the <span className="font-semibold text-foreground">“Cookie Preferences”</span> link in our website footer.
              </p>
            </section>

            {/* Section 7 */}
            <section id="transfers" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-emerald-400" />
                7. International Data Transfers
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech operates globally. Personal data may be transferred to or hosted in servers located outside your home jurisdiction (e.g., United States, EU). When transferring personal data out of the European Economic Area (EEA) or UK, we rely on recognized legal safeguards, including the European Commission’s Standard Contractual Clauses (SCCs) and Data Privacy Framework (DPF) certifications.
              </p>
            </section>

            {/* Section 8 */}
            <section id="retention" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">8. Data Retention Policies</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                We retain personal data only as long as necessary to fulfill the purposes for which it was collected or to comply with statutory accounting, legal, and dispute resolution duties. Account data is retained during active subscription status and archived for up to 6 years following account closure for corporate compliance. Following expiration of retention windows, data is securely overwritten, erased, or anonymized.
              </p>
            </section>

            {/* Section 9 - Data Rights */}
            <section id="rights" className="scroll-m-24 border-t border-border pt-8">
              <div className="rounded-2xl border border-purple-500/30 bg-surface/70 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-purple-400" />
                  9. Your Data Rights (GDPR & CCPA/CPRA)
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  Depending on your jurisdiction, you possess specific statutory rights regarding your personal information:
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Know & Access:</span> Request copies of personal data held about you.
                  </div>
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Rectification:</span> Request correction of inaccurate or incomplete personal records.
                  </div>
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Deletion / Erasure:</span> Request deletion of your personal data (the “Right to be Forgotten”).
                  </div>
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Data Portability:</span> Request export of your data in a structured, machine-readable format.
                  </div>
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Opt-Out (CCPA):</span> Opt-out of any potential sale or sharing of personal data (Nexelix Tech does not sell data).
                  </div>
                  <div className="rounded-xl border border-border bg-surface/50 p-3">
                    <span className="font-semibold text-purple-300">Right to Non-Discrimination:</span> We will never discriminate against you for exercising your privacy rights.
                  </div>
                </div>
                <p className="mt-4 text-xs text-foreground-muted">
                  To submit a Data Subject Access Request (DSAR), please contact our Privacy Officer at <a href="mailto:info@nexelixtech.com" className="text-purple-400 underline font-medium">info@nexelixtech.com</a>. Identity verification may be required.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="security" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <KeyRound className="h-5 w-5 text-emerald-400" />
                10. Data Security Measures
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech implements robust technical and organizational security controls aligned with ISO 27001 standards:
              </p>
              <div className="mt-3 space-y-2 text-xs text-foreground-muted">
                <p>• <span className="font-semibold text-foreground">Encryption:</span> Transport Layer Security (TLS 1.3) in transit; AES-256 bit encryption at rest for database data.</p>
                <p>• <span className="font-semibold text-foreground">Access Controls:</span> Role-based access control (RBAC), multi-factor authentication (MFA), and least-privilege employee authorization.</p>
                <p>• <span className="font-semibold text-foreground">Infrastructure Hardening:</span> Automated vulnerability scanning, web application firewalls (WAF), and DDoS protection.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="children" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">11. Children’s Privacy</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Our Services are designed exclusively for business and professional users. We do not knowingly collect or solicit personal data from children under 16 years of age. If we discover that a minor under 16 has submitted personal information, we will immediately delete such data.
              </p>
            </section>

            {/* Section 12 */}
            <section id="ai-automated" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-400" />
                12. AI & Automated Decision-Making Transparency
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech develops AI/ML integrations for enterprise client applications. We do not engage in automated decision-making or profiling that produces legal or similarly significant effects on users without human intervention. Any client AI model execution is subject to human-in-the-loop oversight and custom DPA terms.
              </p>
            </section>

            {/* Section 13 */}
            <section id="modifications" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">13. Changes to this Privacy Policy</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                We may revise this Privacy Policy periodically to reflect technological updates or legal changes. Material revisions will be posted on our website alongside an updated “Last Updated” date and, where appropriate, communicated via email. Continued use of the Services signifies acceptance of the revised policy.
              </p>
            </section>

            {/* Section 14 */}
            <section id="breach" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-400" />
                14. Incident Response & Data Breach Notification
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech maintains a formal Data Incident Response Plan. In the event of a confirmed security incident impacting personal data:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-foreground-muted list-disc list-inside">
                <li><span className="font-semibold text-foreground">GDPR Notification:</span> Regulators and impacted data subjects will be notified without undue delay and within 72 hours of confirmation where required by law.</li>
                <li><span className="font-semibold text-foreground">US Notification:</span> Applicable US state Attorneys General and consumers will be notified within statutory deadlines (30–45 days).</li>
              </ul>
            </section>

            {/* Section 15 */}
            <section id="contact-dpo" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">15. Contact Information & DPO Status</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech has designated a dedicated Privacy Response Team. (As an agile software startup, no formal Data Protection Officer (DPO) is currently required under statutory thresholds; if designated in future, details will be published here).
              </p>
              <div className="mt-4 rounded-xl border border-border bg-surface/60 p-4 text-xs text-foreground">
                <p className="font-semibold text-purple-400">Nexelix Tech Privacy Office</p>
                <p className="mt-1 text-foreground-muted">Email: info@nexelixtech.com | support@nexelixtech.com</p>
                <p className="text-foreground-muted">Website: https://nexelixtech.com</p>
              </div>
            </section>

            {/* Section 16 - SLA & Beta */}
            <section id="sla-beta" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">16. Service Level Agreement (SLA) & Beta Features Addendum</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                <span className="font-semibold text-foreground">Service Level Agreement (SLA):</span> Nexelix Tech strives for 99.9% uptime across production SaaS infrastructure. SLA availability guarantees, scheduled maintenance windows, and service credit terms are defined in individual customer service level agreements.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                <span className="font-semibold text-foreground">Beta Features:</span> Features designated as “Beta”, “Preview”, or “Experimental” are provided strictly “AS-IS” without uptime guarantees, SLA coverage, or warranties.
              </p>
            </section>

            {/* Section 17 */}
            <section id="opensource" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">17. Open-Source Software & Anonymized Analytics</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech services utilize open-source software libraries licensed under MIT, Apache 2.0, and BSD licenses. Open-source components are subject to their respective software license disclaimers. Aggregate anonymized metrics collected for web performance optimization do not identify individual users.
              </p>
            </section>

            {/* Section 18 - DPA Summary */}
            <section id="dpa-summary" className="scroll-m-24 border-t border-border pt-8">
              <div className="rounded-2xl border border-emerald-500/30 bg-surface/80 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-400" />
                  18. Data Processing Addendum (DPA) Summary
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  For enterprise and EU business clients, our Data Processing Addendum (DPA) forms an integral part of our customer contract:
                </p>
                <div className="mt-4 space-y-2 text-xs text-foreground-muted">
                  <p>• <span className="font-semibold text-foreground">Processing Instructions:</span> Nexelix Tech processes customer data solely under documented client instructions.</p>
                  <p>• <span className="font-semibold text-foreground">Subprocessor Transparency:</span> Clients receive notice prior to appointing new infrastructure subprocessors.</p>
                  <p>• <span className="font-semibold text-foreground">Standard Contractual Clauses:</span> Incorporates EU/UK SCCs for lawful cross-border data transfers.</p>
                  <p>• <span className="font-semibold text-foreground">Data Return & Erasure:</span> Upon contract expiration, client data is returned or permanently deleted within 60 days.</p>
                </div>
                <div className="mt-4 border-t border-border pt-3 text-xs">
                  Request an executed DPA copy by contacting <a href="mailto:info@nexelixtech.com" className="text-emerald-400 underline">info@nexelixtech.com</a>.
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
