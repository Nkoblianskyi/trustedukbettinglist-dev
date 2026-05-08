"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, CheckCircle2, Users } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const rankBadges = [
  { label: "#1 Top Pick", accent: true },
  { label: "#2 Recommended", accent: false },
  { label: "#3 Top Rated", accent: false },
  { label: "#4 Popular", accent: false },
  { label: "#5 Trusted", accent: false },
  { label: "#6 Editor's Choice", accent: false },
]

function StarRating({ rating }: { rating: number }) {
  const normalized = Math.min(5, Math.max(0, Math.round((rating / 10) * 5 * 5) / 5))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-3.5 h-3.5">
            <Star className="w-3.5 h-3.5 text-muted-foreground/20" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-3.5 h-3.5 text-[hsl(var(--accent))]" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-6 md:py-8 bg-[hsl(var(--sage))]">
      <div className="container mx-auto px-3 md:px-4 max-w-4xl">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[hsl(var(--accent)/0.25)]" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">
              UKGC Licensed &amp; Verified
            </span>
          </div>
          <div className="h-px flex-1 bg-[hsl(var(--accent)/0.25)]" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {bettingSites.map((site, index) => {
            const badge = rankBadges[index] ?? { label: `#${index + 1}`, accent: false }
            const isTop = index === 0

            return (
              <div
                key={site.id}
                className={`relative bg-white rounded-xl border animate-fade-in-up overflow-hidden ${
                  isTop
                    ? "border-[hsl(var(--accent)/0.5)] shadow-[0_4px_24px_hsl(var(--accent)/0.12)]"
                    : "border-border shadow-sm"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Top accent stripe for #1 */}
                {isTop && <div className="h-[3px] bg-[hsl(var(--accent))]" />}

                {/* Rank badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-block text-[9px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${
                    badge.accent
                      ? "bg-[hsl(var(--accent))] text-white"
                      : "bg-[hsl(var(--primary))] text-white"
                  }`}>
                    {badge.label}
                  </span>
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[200px] h-[80px] md:h-[80px] bg-[hsl(var(--sage))] rounded-lg border border-border">
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={180}
                        height={72}
                        className="object-contain max-h-16"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 space-y-2 pt-4 md:pt-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-sans font-bold text-base text-foreground">{site.name}</h2>
                        <div className="flex items-center gap-1.5">
                          <StarRating rating={site.score} />
                          <span className="text-[11px] font-sans font-bold text-[hsl(var(--accent))]">{site.score}/10</span>
                        </div>
                      </div>

                      {/* Bonus banner */}
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[hsl(var(--accent)/0.08)] border border-[hsl(var(--accent)/0.2)]">
                        <span className="text-[12px] font-sans font-bold text-[hsl(var(--accent))] uppercase tracking-wide">Bonus:</span>
                        <span className="text-[15px] font-sans font-bold text-foreground">{site.bonus}</span>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5">
                        {site.features.map((f) => (
                          <span
                            key={f}
                            className="inline-flex items-center gap-1 text-[10px] font-sans text-muted-foreground bg-muted rounded px-2 py-0.5"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-[hsl(var(--accent)/0.7)]" aria-hidden="true" />
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Reviews */}
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Users className="w-3 h-3" aria-hidden="true" />
                        <span>{site.reviews.toLocaleString("en-GB")} verified reviews</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 flex flex-col items-stretch md:items-end gap-2">
                      <Link
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-sans font-bold transition-all duration-200 ${
                          isTop
                            ? "bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.88)] text-white shadow-[0_2px_12px_hsl(var(--accent)/0.3)]"
                            : "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--forest-mid))] text-white"
                        }`}
                        aria-label={`Visit ${site.name}`}
                      >
                        Claim Offer
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                      <p className="text-[9px] text-muted-foreground text-center md:text-right leading-tight">
                        18+ | T&Cs Apply | Gamble Responsibly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-muted-foreground mt-6 leading-relaxed">
          All bookmakers listed are licensed by the UK Gambling Commission &bull; Bonus offers subject to T&Cs &bull; 18+ only
        </p>
      </div>
    </section>
  )
}
