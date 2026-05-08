import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | TrustedUKBettingList.com",
  description: "Understand how TrustedUKBettingList.com uses cookies and tracking technologies, and how to manage your preferences.",
}

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They make websites function efficiently, provide a better user experience, and supply website owners with valuable analytics.",
  },
  {
    title: "2. Types of Cookies We Use",
    subsections: [
      { title: "2.1 Strictly Necessary Cookies", body: "Essential for website functionality. These cannot be disabled — they respond to actions like setting privacy preferences or completing forms." },
      { title: "2.2 Performance & Analytics Cookies", body: "Help us understand how visitors interact with our website by collecting anonymous statistical information, enabling us to improve the user experience." },
      { title: "2.3 Functional Cookies", body: "Enable enhanced functionality and personalisation such as remembering language selections or region preferences." },
      { title: "2.4 Targeting & Advertising Cookies", body: "Deployed by advertising partners to build a profile of your interests. They do not store directly identifiable personal information." },
    ],
  },
  { title: "3. First-Party vs Third-Party Cookies", body: "First-party cookies are set directly by TrustedUKBettingList.com for functionality and analytics. Third-party cookies are set by external services — Google Analytics, social platforms, advertising networks — each governed by their own privacy policies." },
  {
    title: "4. How to Manage Cookies",
    subsections: [
      { title: "4.1 Through Our Cookie Banner", body: "When you first visit our site, a consent banner allows you to accept or decline non-essential cookies. Update your preferences any time via the Cookie Policy link in our footer." },
      { title: "4.2 Through Your Browser Settings", body: "Most browsers allow you to view and delete existing cookies, block third-party cookies, or block all cookies. Blocking all cookies may impair website functionality." },
      { title: "4.3 Advertising Opt-Out", body: "To opt out of interest-based advertising, visit the Digital Advertising Alliance at www.youronlinechoices.com/uk." },
    ],
  },
  { title: "5. Third-Party Services We Use", body: "We use cookies from: Google Analytics (traffic analysis), social media platforms (content sharing), advertising networks (campaign measurement), and affiliate partners (referral tracking)." },
  { title: "6. Cookie Lifespan", body: "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a predetermined period — from days to years — or until manually deleted." },
  { title: "7. Updates to This Policy", body: "We may update this Cookie Policy periodically. We will notify you of significant changes by updating the date at the top of this page." },
  { title: "8. Contact Us", body: "For questions about our cookie practices, contact us at cookies@trustedukbettinglist.com." },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[65px] bg-[hsl(var(--primary))]">
        <div className="h-[3px] bg-[hsl(var(--accent))]" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] mb-4">
              <Cookie className="w-3.5 h-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">Legal</span>
            </div>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-white mb-2 text-balance">
              Cookie Policy
            </h1>
            <p className="text-[12px] text-white/40">Last updated: 2026</p>
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
                This Cookie Policy explains how TrustedUKBettingList.com uses cookies and similar tracking technologies when you visit our website, in compliance with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
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
