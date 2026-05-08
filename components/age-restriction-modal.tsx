"use client"

import { useState, useEffect } from "react"
import { X, ShieldAlert } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-modal-title"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
        {/* Emerald top stripe */}
        <div className="h-[4px] bg-[hsl(var(--accent))]" />

        {/* Header */}
        <div className="bg-[hsl(var(--primary))] px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.4)]">
              <ShieldAlert className="w-5 h-5 text-[hsl(var(--accent))]" aria-hidden="true" />
            </div>
            <div>
              <h2 id="age-modal-title" className="font-sans font-bold text-white text-base leading-tight">
                Age Verification
              </h2>
              <p className="text-[11px] text-white/50 mt-0.5">You must be 18 or over to continue</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors duration-200 mt-0.5"
            aria-label="Close age verification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent)/0.1)] border-2 border-[hsl(var(--accent)/0.3)] flex items-center justify-center">
              <span className="font-sans font-black text-2xl text-[hsl(var(--accent))]">18+</span>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              This website contains information about gambling products and services. You must be <strong className="text-foreground">18 years of age or older</strong> to access this content.
            </p>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              By continuing you confirm you are of legal gambling age in your jurisdiction. If you are struggling with gambling, call <strong className="text-foreground">0808 8020 133</strong> (free, 24/7).
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.88)] text-white text-[13px] font-sans font-bold transition-colors duration-200 shadow-[0_2px_12px_hsl(var(--accent)/0.25)]"
            >
              I am 18 or older — Continue
            </button>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg border border-border text-[12px] font-sans text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200 text-center"
            >
              I need gambling support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
