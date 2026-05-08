import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us | TrustedUKBettingList.com",
  description: "Learn about TrustedUKBettingList.com — the UK's most trusted independent betting comparison platform.",
}

const values = [
  {
    icon: Shield,
    title: "Independence",
    body: "We are editorially independent. Bookmakers cannot pay to improve their ranking — every position is earned through performance.",
  },
  {
    icon: CheckCircle2,
    title: "Accuracy",
    body: "Our team verifies every bonus, licence status, and payment method monthly. Outdated information helps no one.",
  },
  {
    icon: Users,
    title: "Responsibility",
    body: "We take responsible gambling seriously. Every listing includes clear warnings and we actively promote gambling support services.",
  },
  {
    icon: TrendingUp,
    title: "Transparency",
    body: "We clearly disclose affiliate relationships and explain exactly how our rankings are calculated.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[65px] bg-[hsl(var(--primary))]">
        <div className="h-[3px] bg-[hsl(var(--accent))]" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">Who We Are</span>
            </div>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-white mb-3 text-balance">
              About TrustedUKBettingList
            </h1>
            <p className="text-[14px] text-white/55 leading-relaxed max-w-lg">
              We are an independent UK betting comparison platform dedicated to helping bettors make informed decisions.
            </p>
          </div>
        </div>
        <div className="h-px bg-white/8" />
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-xl border-l-4 border-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.05)] px-6 py-5 mb-10">
            <p className="text-[14px] text-foreground font-sans font-medium leading-relaxed">
              <strong>Our mission</strong> is simple: cut through the noise and give UK bettors a clear, honest view of the best bookmakers available — so they can focus on the sport, not the small print.
            </p>
          </div>

          <div className="space-y-5 text-[13px] text-muted-foreground leading-relaxed">
            <p>
              TrustedUKBettingList.com was founded by a team of sports betting enthusiasts and digital publishing professionals who were frustrated with biased, affiliate-first comparison sites. We wanted something different: a platform that puts the bettor first.
            </p>
            <p>
              Every bookmaker on our list has been personally tested by our editorial team. We open real accounts, make real deposits, test withdrawals, contact customer support, and evaluate the mobile app. We score each operator across six weighted criteria and update rankings monthly.
            </p>
            <p>
              We only list UKGC-licensed operators. The UK Gambling Commission sets some of the highest consumer protection standards in the world — including rules on responsible gambling tools, fair bonus terms, and prompt payouts. A UKGC licence is our minimum bar for consideration.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-14 bg-[hsl(var(--sage))]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-2xl text-foreground text-balance">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl bg-white border border-border hover:border-[hsl(var(--accent)/0.4)] hover:shadow-sm transition-all duration-200">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--accent)/0.2)] flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[hsl(var(--accent))]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[13px] text-foreground mb-1">{title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible gambling */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-sans font-bold text-2xl text-foreground mb-4 text-balance">Responsible Gambling Commitment</h2>
          <div className="h-px bg-border mb-6" />
          <div className="space-y-4 text-[13px] text-muted-foreground leading-relaxed">
            <p>
              We are committed to promoting safe and responsible gambling. All bookmakers on our platform are required to provide responsible gambling tools including deposit limits, reality checks, self-exclusion, and cooling-off periods.
            </p>
            <p>
              We prominently display 18+ warnings and responsible gambling messaging across our platform. We never market to or encourage gambling by anyone under the age of 18.
            </p>
            <p>
              If you or someone you know is struggling with gambling, please reach out to{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent))] hover:underline underline-offset-2">
                BeGambleAware.org
              </a>{" "}
              or call the free National Gambling Helpline on{" "}
              <a href="tel:08088020133" className="text-[hsl(var(--accent))] hover:underline underline-offset-2">
                0808 8020 133
              </a>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
