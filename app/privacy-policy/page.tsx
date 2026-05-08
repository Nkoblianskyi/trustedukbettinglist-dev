import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Lock } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | TrustedUKBettingList.com",
  description: "Read TrustedUKBettingList.com's privacy policy to understand how we collect, use, and protect your personal data.",
}

const sections = [
  {
    title: "1. Who We Are",
    body: "TrustedUKBettingList.com is an independent betting comparison website. For data protection purposes we are the data controller. Contact: privacy@trustedukbettinglist.com.",
  },
  {
    title: "2. Data We Collect",
    subsections: [
      { title: "2.1 Information You Provide", body: "If you contact us via email or form we collect your name and email address to respond to your query." },
      { title: "2.2 Automatically Collected Data", body: "When you visit our site we automatically collect your IP address, browser type, device type, pages visited, and time spent. This is done through cookies and analytics tools." },
      { title: "2.3 Cookies", body: "Please see our Cookie Policy for full details of cookies used on this website." },
    ],
  },
  {
    title: "3. How We Use Your Data",
    body: "We use collected data to operate and improve the website, analyse traffic patterns, comply with legal obligations, and respond to enquiries. We do not sell personal data to third parties.",
  },
  {
    title: "4. Legal Basis for Processing",
    body: "We process data under the following legal bases: legitimate interests (website analytics and improvement), consent (non-essential cookies), and legal obligation (compliance with UKGC and GDPR requirements).",
  },
  {
    title: "5. Third-Party Services",
    body: "We use Google Analytics for traffic analysis. Bookmaker links on our site are affiliate links — when you click through, those operators' own privacy policies apply. We are not responsible for third-party data practices.",
  },
  {
    title: "6. Data Retention",
    body: "Analytics data is retained for 26 months. Contact enquiry data is retained for 12 months after resolution unless a longer retention period is required by law.",
  },
  {
    title: "7. Your Rights",
    body: "Under UK GDPR you have the right to: access data we hold about you, request correction or erasure, object to processing, request restriction, and data portability. To exercise any right, email privacy@trustedukbettinglist.com.",
  },
  {
    title: "8. International Transfers",
    body: "Some third-party services (such as Google Analytics) may transfer data outside the UK. Where this occurs we ensure appropriate safeguards are in place in accordance with UK GDPR.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy periodically. Significant changes will be reflected with an updated date at the top of this page.",
  },
  {
    title: "10. Contact & Complaints",
    body: "For privacy queries contact privacy@trustedukbettinglist.com. If you believe we have not handled your data correctly, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[65px] bg-[hsl(var(--primary))]">
        <div className="h-[3px] bg-[hsl(var(--accent))]" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] mb-4">
              <Lock className="w-3.5 h-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">Legal</span>
            </div>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-white mb-2 text-balance">
              Privacy Policy
            </h1>
            <p className="text-[12px] text-white/40">Last updated: January 2025</p>
          </div>
        </div>
        <div className="h-px bg-white/8" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.05)] px-5 py-4 mb-10">
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                This Privacy Policy explains how TrustedUKBettingList.com collects, uses, and protects your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-sans font-bold text-[18px] text-foreground mb-2">{section.title}</h2>
                    <div className="h-px bg-border" />
                  </div>
                  {section.body && (
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                  {section.subsections && (
                    <div className="space-y-3">
                      {section.subsections.map((sub) => (
                        <div key={sub.title} className="rounded-lg bg-muted/50 px-4 py-3">
                          <h3 className="font-sans font-semibold text-[13px] text-foreground mb-1.5">{sub.title}</h3>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
