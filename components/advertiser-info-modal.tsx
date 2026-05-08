"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="advertiser-modal-title"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
        <div className="h-[4px] bg-[hsl(var(--accent))]" />

        <div className="bg-[hsl(var(--primary))] px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.4)]">
              <Info className="w-5 h-5 text-[hsl(var(--accent))]" aria-hidden="true" />
            </div>
            <div>
              <h2 id="advertiser-modal-title" className="font-sans font-bold text-white text-base leading-tight">
                Advertiser Disclosure
              </h2>
              <p className="text-[11px] text-white/50 mt-0.5">How we make money</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors duration-200 mt-0.5"
            aria-label="Close advertiser disclosure"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          <div className="rounded-lg bg-[hsl(var(--sage))] border border-[hsl(var(--accent)/0.2)] px-4 py-3">
            <p className="text-[12px] font-sans font-semibold text-[hsl(var(--accent))]">Editorial Independence Guaranteed</p>
          </div>

          <div className="space-y-3 text-[13px] text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">TrustedUKBettingList.com</strong> is an independent comparison website. We may earn a commission when you click on links to bookmakers and sign up for an account.
            </p>
            <p>
              These commercial relationships do <strong className="text-foreground">not</strong> influence our rankings, review scores, or editorial content. Our team independently evaluates every bookmaker based on odds, bonuses, withdrawal speed, customer service, and licensing.
            </p>
            <p>
              Only UKGC-licensed operators are listed on our platform. We actively exclude operators that fail our editorial standards regardless of commercial arrangements.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-[hsl(var(--primary))] hover:bg-[hsl(var(--forest-mid))] text-white text-[13px] font-sans font-bold transition-colors duration-200 mt-2"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  )
}
