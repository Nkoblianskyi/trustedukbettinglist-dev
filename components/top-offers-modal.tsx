"use client"

import { useState, useEffect } from "react"
import { X, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { bettingSites } from "@/data/betting-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  const topSites = bettingSites.slice(0, 3)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="offers-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
        <div className="h-[4px] bg-[hsl(var(--accent))]" />

        {/* Header */}
        <div className="bg-[hsl(var(--primary))] px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.4)]">
              <Zap className="w-5 h-5 text-[hsl(var(--accent))]" aria-hidden="true" />
            </div>
            <div>
              <h2 id="offers-modal-title" className="font-sans font-bold text-white text-base leading-tight">
                Top Offers Today
              </h2>
              <p className="text-[11px] text-white/50 mt-0.5">Exclusive UK bookmaker bonuses</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors duration-200 mt-0.5"
            aria-label="Close top offers"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Offers */}
        <div className="p-5 space-y-3">
          {topSites.map((site, index) => (
            <div
              key={site.id}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                index === 0
                  ? "border-[hsl(var(--accent)/0.4)] bg-[hsl(var(--accent)/0.04)] shadow-sm"
                  : "border-border bg-white"
              }`}
            >
              {/* Logo */}
              <div className="flex-shrink-0 w-[72px] h-[38px] bg-[hsl(var(--sage))] rounded-lg border border-border flex items-center justify-center">
                <Image
                  src={site.logo}
                  alt={`${site.name} logo`}
                  width={60}
                  height={28}
                  className="object-contain max-h-7"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {index === 0 && (
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[hsl(var(--accent))] text-white">
                      Top Pick
                    </span>
                  )}
                  <span className="text-[12px] font-sans font-bold text-foreground">{site.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[hsl(var(--accent))] flex-shrink-0" aria-hidden="true" />
                  <span className="text-[11px] text-[hsl(var(--accent))] font-sans font-semibold truncate">{site.bonus}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={site.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={onClose}
                className={`flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-sans font-bold transition-colors duration-200 ${
                  index === 0
                    ? "bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.88)] text-white"
                    : "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--forest-mid))] text-white"
                }`}
                aria-label={`Claim offer at ${site.name}`}
              >
                Claim
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          ))}

          <p className="text-[10px] text-muted-foreground text-center pt-1">
            18+ only &bull; T&Cs apply &bull; Gamble Responsibly &bull; BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
