"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Clock, CheckCircle2, TrendingUp, Star, Info } from "lucide-react"

const trustIndicators = [
  { icon: Shield, label: "UKGC Licensed Only" },
  { icon: CheckCircle2, label: "Independent Reviews" },
  { icon: Award, label: "Verified Bonuses" },
  { icon: Star, label: "Expert Tested" },
  { icon: TrendingUp, label: "Monthly Updated" },
]

const whyTrustPoints = [
  {
    icon: CheckCircle2,
    title: "Independent Editorial",
    body: "Our reviews are written by experienced betting analysts with no commercial influence. Every ranking is earned, not bought.",
  },
  {
    icon: Shield,
    title: "UKGC Licensed Only",
    body: "We only feature bookmakers fully regulated by the UK Gambling Commission — no exceptions.",
  },
  {
    icon: Clock,
    title: "Updated Monthly",
    body: "Bonus offers, odds quality, and withdrawal times change. We re-review every bookmaker monthly to keep rankings current.",
  },
  {
    icon: Star,
    title: "Exclusive Offers",
    body: "Our partnerships allow us to secure enhanced welcome bonuses unavailable on the bookmakers' own sites.",
  },
]

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[65px]">

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[hsl(var(--primary))] max-h-[250px] md:max-h-[400px] flex flex-col justify-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/premier-league-football-stadium-crowd-atmosphere-n.jpg"
              alt="UK football stadium crowd"
              fill
              className="object-cover object-center opacity-20"
              priority
            />
          </div>

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="w-3 h-3 text-[hsl(var(--accent))]" aria-hidden="true" />
                <span className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-[hsl(var(--accent))]">
                  UKGC Licensed &amp; Verified
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-sans font-extrabold text-[22px] md:text-[38px] leading-tight text-white mb-2 md:mb-3 text-balance">
                The UK&apos;s Most{" "}
                <span className="text-[hsl(var(--accent))]">Trusted</span>
                {" "}Betting Sites Ranked
              </h1>

              {/* Sub */}
              <p className="text-[12px] md:text-[13px] text-white/55 max-w-lg mx-auto mb-4 md:mb-6 text-pretty hidden sm:block">
                Independent expert reviews of every UKGC-licensed bookmaker — odds, bonuses, withdrawals, and support compared monthly.
              </p>

              {/* Trust indicators — no stats, just credibility signals */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-7">
                {trustIndicators.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon className="w-3 h-3 text-[hsl(var(--accent))] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[12px] md:text-[13px] text-white/70 font-sans font-medium">{label}</span>
                  </div>
                ))}
                <div className="w-full h-px bg-white/8 my-0.5" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[hsl(var(--accent))] flex-shrink-0" aria-hidden="true" />
                  <span className="text-[11px] md:text-[12px] text-white/40 font-sans">
                    Rankings updated <span className="text-white/65 font-medium">{currentDate}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[3px] bg-[hsl(var(--accent))] mt-auto" />
        </section>

        {/* ── Advertiser disclosure banner ──────────────── */}
        <div className="bg-[hsl(var(--sage))] border-b border-[hsl(var(--accent)/0.2)]">
          <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[hsl(var(--accent)/0.7)] flex-shrink-0" aria-hidden="true" />
              <p className="text-[11px] text-muted-foreground">
                Updated {currentDate} &bull; Rankings are independent &bull; We may earn commission from bookmakers
              </p>
            </div>
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-[11px] text-[hsl(var(--accent))] hover:underline underline-offset-2 font-sans font-medium whitespace-nowrap flex-shrink-0"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* ── Betting Sites List ────────────────────────── */}
        <BettingSitesList />

        {/* ── Why Trust Us ─────────────────────────────── */}
        <section className="py-12 md:py-16 bg-white border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <span className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[hsl(var(--accent))]">
                Our Approach
              </span>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mt-2 text-balance">
                Why Trust TrustedUKBettingList?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyTrustPoints.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl border border-border bg-white hover:border-[hsl(var(--accent)/0.4)] hover:shadow-sm transition-all duration-200">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--accent)/0.2)] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-[hsl(var(--accent))]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[13px] text-foreground mb-1">{title}</h3>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Review ────────────────────────────── */}
        <section className="py-12 md:py-16 bg-[hsl(var(--sage))]">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <span className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[hsl(var(--accent))]">
                Methodology
              </span>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mt-2 text-balance">
                How We Review Bookmakers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { step: "01", title: "Licensing Check", body: "We verify every operator holds a valid UKGC licence before considering them for our list." },
                { step: "02", title: "Expert Analysis", body: "Our analysts open real accounts, make real deposits, and test every feature hands-on." },
                { step: "03", title: "Monthly Updates", body: "Rankings are refreshed every month. New bonuses, changed odds policies, or customer service issues affect scores immediately." },
              ].map(({ step, title, body }) => (
                <div key={step} className="relative bg-white rounded-xl border border-border p-5 hover:border-[hsl(var(--accent)/0.4)] hover:shadow-sm transition-all duration-200">
                  <span className="text-[32px] font-sans font-black text-[hsl(var(--accent)/0.12)] leading-none mb-3 block">{step}</span>
                  <h3 className="font-sans font-bold text-[14px] text-foreground mb-2">{title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <FaqSection />

        {/* ── Responsible Gambling Banner ───────────────── */}
        <section className="py-8 bg-[hsl(var(--primary))]">
          <div className="h-[3px] bg-[hsl(var(--accent))] mb-8" />
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.35)] mx-auto">
              <Shield className="w-6 h-6 text-[hsl(var(--accent))]" aria-hidden="true" />
            </div>
            <h2 className="font-sans font-bold text-xl text-white">Gamble Responsibly</h2>
            <p className="text-[13px] text-white/55 leading-relaxed max-w-xl mx-auto">
              Gambling should be entertaining, not a source of financial stress. Set a budget, never chase losses, and take breaks. If you feel gambling is becoming a problem, free help is available 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {[
                { label: "GamCare", href: "https://www.gamcare.org.uk" },
                { label: "BeGambleAware", href: "https://www.begambleaware.org" },
                { label: "GAMSTOP", href: "https://www.gamstop.co.uk" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-lg border border-white/15 text-[12px] text-white/55 hover:text-white hover:border-[hsl(var(--accent)/0.5)] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:08088020133"
                className="px-4 py-1.5 rounded-lg bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.35)] text-[12px] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.25)] transition-colors duration-200"
              >
                Helpline: 0808 8020 133
              </a>
            </div>
          </div>
          <div className="h-[3px] bg-[hsl(var(--accent))] mt-8" />
        </section>

      </div>

      <SiteFooter />

      {/* Modals */}
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TopOffersModal isOpen={isOffersModalOpen} onClose={() => setIsOffersModalOpen(false)} />
    </main>
  )
}
