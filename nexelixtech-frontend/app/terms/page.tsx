import { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  Scale, 
  HelpCircle, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Official Terms of Service governing access to and use of Nexelix Tech software, custom development, AI/ML integrations, and SaaS platform services.",
  openGraph: {
    title: "Terms of Service | Nexelix Tech",
    description: "Official legal terms of service for Nexelix Tech services.",
  },
};

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "scope", title: "1. Scope of Services" },
  { id: "accounts", title: "2. User Accounts" },
  { id: "payments", title: "3. Payments and Refunds" },
  { id: "subscriptions", title: "4. Subscription Terms & Trials" },
  { id: "ip", title: "5. Intellectual Property & Licenses" },
  { id: "content", title: "6. User Content; Data Processing" },
  { id: "confidentiality", title: "7. Confidentiality" },
  { id: "warranties", title: "8. Warranties & Disclaimers" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "indemnification", title: "10. Indemnification" },
  { id: "termination", title: "11. Termination and Suspension" },
  { id: "acceptable-use", title: "12. Acceptable Use & Export Compliance" },
  { id: "third-party", title: "13. Third-Party Services" },
  { id: "modifications", title: "14. Modifications to Terms" },
  { id: "notices", title: "15. Notices" },
  { id: "disputes", title: "16. Dispute Resolution & Governing Law" },
  { id: "severability", title: "17. Severability & Entire Agreement" },
  { id: "contact", title: "18. Contact Information" },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-background pb-24 pt-12">
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden blur-3xl">
        <div className="h-[400px] w-[800px] bg-gradient-to-tr from-purple-900/30 via-indigo-900/20 to-emerald-900/10 opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Legal & Regulatory Compliance
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 max-w-3xl text-base text-foreground-muted">
            These Terms of Service govern your access to and use of Nexelix Tech’s software products, web and mobile application engineering, AI/ML services, and SaaS platforms.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-foreground-subtle">
            <div>
              <span className="font-semibold text-foreground">Last Updated:</span> August 1, 2026
            </div>
            <div>
              <span className="font-semibold text-foreground">Version:</span> 1.0 (Global)
            </div>
            <div>
              <span className="font-semibold text-foreground">Applies to:</span> All Nexelix Tech Services
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-md">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FileText className="h-4 w-4 text-purple-400" />
                Table of Contents
              </h2>
              <nav className="mt-4 space-y-1 text-xs">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-foreground-muted transition-colors hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
                  </a>
                ))}
              </nav>
              <div className="mt-6 border-t border-border pt-4 text-xs text-foreground-muted">
                Need clarification? Reach out to our legal team at{" "}
                <a
                  href="mailto:info@nexelixtech.com"
                  className="text-purple-400 underline hover:text-purple-300"
                >
                  info@nexelixtech.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <main className="space-y-12 lg:col-span-3">
            {/* Introduction */}
            <section id="intro" className="scroll-m-24 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Introduction</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                These Terms of Service (“Terms”) govern your access to and use of Nexelix Tech’s software services (including web, mobile, and AI/ML applications, cloud/DevOps, consulting services, and associated platforms) (the “Services”). By using the Services or creating an account, you agree to these Terms. If you do not agree, do not use the Services. Nexelix Tech (“Company”, “we”, “us”) reserves all rights not expressly granted herein.
              </p>
            </section>

            {/* Section 1 */}
            <section id="scope" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">1. Scope of Services</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech provides business and consumer software solutions including custom web/app development, AI/ML integrations, cloud/DevOps architecture, ERP/CRM integrations, and related technology consulting. These Terms apply whether you use free trials, self-serve SaaS subscriptions, or custom enterprise contracts. Nexelix Tech may offer different service plans; any plan-specific terms will be communicated when you subscribe or execute a statement of work.
              </p>
            </section>

            {/* Section 2 */}
            <section id="accounts" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">2. User Accounts</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                You must register for an account to access most Services. You agree to: (a) provide accurate, complete, and current information; (b) keep login credentials strictly confidential and secure; and (c) remain fully responsible for all activities conducted under your account. If you authorize employees, contractors, or coworkers to access your account, you remain legally responsible for their compliance. We reserve the right to suspend or terminate accounts for non-compliance, unauthorized use, security breaches, or legal requirements.
              </p>
            </section>

            {/* Section 3 */}
            <section id="payments" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">3. Payments and Refunds</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Certain Services require recurring subscription fees or milestone payments. You agree to provide valid payment information and authorize recurring charges. Subscriptions automatically renew at the end of each billing cycle unless cancelled prior to renewal. Fees are non-refundable except as required by applicable mandatory law or explicit written agreement. Fee disputes must be submitted in writing to billing@nexelixtech.com within 60 days of the charge date. Nexelix Tech reserves the right to adjust service pricing upon 30 days’ prior notice to subscribers.
              </p>
            </section>

            {/* Section 4 */}
            <section id="subscriptions" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">4. Subscription Terms & Free Trials</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Subscriptions begin on purchase date and continue through the agreed billing cycle. If granted a free trial, access to trial features is limited to the specified trial duration. Unless cancelled prior to trial expiration, free trials may auto-convert into paid subscriptions. You may cancel your subscription at any time via account settings or written notice; cancellation takes effect at the conclusion of the current billing cycle. Prior usage of free or trial services does not entitle you to refunds of paid fees.
              </p>
            </section>

            {/* Section 5 */}
            <section id="ip" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">5. Intellectual Property & Licenses</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech retains all right, title, and interest in and to the Services, proprietary software, algorithms, code libraries, trade secrets, and trademarks. Subject to your compliance with these Terms, we grant you a limited, revocable, non-exclusive, non-sublicensable, non-transferable license to access and use the Services.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                You retain ownership of any data, code, or content uploaded or submitted by you (“Your Content”). By submitting Your Content, you grant Nexelix Tech a worldwide, royalty-free license to host, display, execute, and process Your Content solely for the purpose of delivering the Services to you in compliance with confidentiality commitments. You may not reverse-engineer, decompile, copy, modify, or redistribute our software except as expressly permitted by governing law.
              </p>
            </section>

            {/* Section 6 */}
            <section id="content" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">6. User Content; Data Processing Roles</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                “Your Data” refers to any data, code, files, or information processed or hosted via the Services. You are responsible for ensuring Your Data complies with applicable laws, including data privacy and intellectual property regulations. 
              </p>
              <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-xs text-foreground-muted">
                <span className="font-semibold text-purple-300">GDPR Controller/Processor Roles:</span> When you act as a business entity hosting or processing customer personal data via our SaaS platform, you act as the Data Controller and Nexelix Tech acts as the Data Processor. Processing details and security safeguards are governed by our Privacy Policy and Data Processing Addendum (DPA).
              </div>
            </section>

            {/* Section 7 */}
            <section id="confidentiality" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">7. Confidentiality</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Each party agrees to maintain strict confidentiality of the other party’s non-public business, technical, or financial information (“Confidential Information”). Nexelix Tech will treat Your Data as confidential and will not disclose it to third parties except as authorized by you, required by law, or necessary to deliver the Services through vetted subprocessors bound by non-disclosure obligations. Confidentiality obligations survive termination of these Terms.
              </p>
            </section>

            {/* Section 8 */}
            <section id="warranties" className="scroll-m-24 border-t border-border pt-8">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <AlertTriangle className="h-5 w-5" />
                  8. Warranties & Disclaimers (AS-IS Disclaimer)
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXELIX TECH PROVIDES THE SERVICES “AS IS” AND “AS AVAILABLE.” WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  Nexelix Tech is not liable for system downtime, internet latency, data loss, or third-party service failures. You are advised to maintain independent backups of Your Data. Open-source or third-party components utilized in the Services are subject to their respective licenses.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="liability" className="scroll-m-24 border-t border-border pt-8">
              <div className="rounded-2xl border border-purple-500/30 bg-surface/60 p-6">
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Scale className="h-5 w-5 text-purple-400" />
                  9. Limitation of Liability
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXELIX TECH’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNTS PAID BY YOU TO NEXELIX TECH FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  IN NO EVENT SHALL NEXELIX TECH BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES (INCLUDING LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF GOODWILL, OR LOSS OF DATA), REGARDLESS OF THEORY OF LIABILITY AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="indemnification" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">10. Indemnification</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                You agree to defend, indemnify, and hold harmless Nexelix Tech, its directors, officers, employees, and agents against any third-party claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of: (a) Your Data infringing third-party intellectual property or privacy rights; (b) your violation of these Terms or applicable law; or (c) your gross negligence or willful misconduct.
              </p>
            </section>

            {/* Section 11 */}
            <section id="termination" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">11. Termination and Suspension</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Either party may terminate these Terms for material breach upon 30 days’ written notice if the breach remains uncured. Nexelix Tech reserves the right to suspend or terminate account access immediately without prior notice in cases of illegal activity, platform abuse, security threats, or non-payment.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Upon termination, your access rights cease immediately. Sections 5, 7, 8, 9, 10, 16, and 17 survive termination. Nexelix Tech will delete or anonymize Your Data within 60 days of termination, subject to mandatory legal data retention obligations.
              </p>
            </section>

            {/* Section 12 */}
            <section id="acceptable-use" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">12. Acceptable Use and Export Compliance</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                You agree not to use the Services for any unlawful purpose, including malware distribution, illegal scraping, security probing, IP infringement, or violation of global sanctions. You must comply with all export control laws and export regulations (including U.S., EU, and local export laws). You represent that you are not located in an embargoed jurisdiction or listed on denied-party watchlists.
              </p>
            </section>

            {/* Section 13 */}
            <section id="third-party" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">13. Third-Party Services</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                The Services may integrate with third-party software (e.g., payment gateways, cloud infrastructure providers, AI API models, analytics tools). Your use of third-party services is subject to their respective terms and privacy policies. Nexelix Tech is not responsible or liable for third-party service outages, data handling, or terms modifications.
              </p>
            </section>

            {/* Section 14 */}
            <section id="modifications" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">14. Modifications to Terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Nexelix Tech reserves the right to update or modify these Terms at any time. We will provide 30 days’ notice of material updates via email or prominent website notification. Your continued use of the Services after updated Terms take effect constitutes acceptance. If you do not agree to modified Terms, you must cease using the Services.
              </p>
            </section>

            {/* Section 15 */}
            <section id="notices" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">15. Notices</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Official notices to you will be delivered via email to your registered account email address or posted within the platform interface. Formal legal notices to Nexelix Tech must be submitted via email to <a href="mailto:info@nexelixtech.com" className="text-purple-400 underline">info@nexelixtech.com</a> or sent to our registered corporate office address.
              </p>
            </section>

            {/* Section 16 */}
            <section id="disputes" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">16. Dispute Resolution & Governing Law</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                These Terms are governed by and construed in accordance with applicable regional laws without regard to conflict of law principles. For U.S. customers, governing law is determined by the state of incorporation/operation, and disputes shall be resolved in competent state or federal courts. For international users outside the U.S., European standard contract principles and jurisdiction in designated commercial courts apply. Consumers may retain rights under local mandatory consumer protection laws.
              </p>
            </section>

            {/* Section 17 */}
            <section id="severability" className="scroll-m-24 border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground">17. Severability; Waiver; Entire Agreement</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, the remaining provisions remain in full force. Failure to enforce any right does not constitute a waiver. These Terms (along with our Privacy Policy and Data Processing Addendum) constitute the entire agreement between you and Nexelix Tech regarding the Services.
              </p>
            </section>

            {/* Section 18 */}
            <section id="contact" className="scroll-m-24 border-t border-border pt-8">
              <div className="rounded-2xl border border-purple-500/30 bg-surface/80 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-400" />
                  18. Contact Information
                </h2>
                <p className="mt-3 text-sm text-foreground-muted">
                  If you have questions regarding these Terms of Service or legal inquiries, please contact Nexelix Tech:
                </p>
                <div className="mt-4 space-y-2 text-sm text-foreground">
                  <p><span className="font-semibold text-purple-400">Entity:</span> Nexelix Tech</p>
                  <p><span className="font-semibold text-purple-400">Website:</span> <a href="https://nexelixtech.com" className="hover:underline">https://nexelixtech.com</a></p>
                  <p><span className="font-semibold text-purple-400">Email:</span> <a href="mailto:info@nexelixtech.com" className="hover:underline">info@nexelixtech.com</a></p>
                  <p><span className="font-semibold text-purple-400">Support Email:</span> <a href="mailto:support@nexelixtech.com" className="hover:underline">support@nexelixtech.com</a></p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
