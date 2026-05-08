"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up"
      role="banner"
      aria-label="Cookie consent"
    >
      {/* Emerald top border */}
      <div className="h-[3px] bg-[hsl(var(--accent))]" />

      <div className="bg-[hsl(var(--primary))] px-4 py-4 md:py-5">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.35)] flex items-center justify-center mt-0.5">
              <Cookie className="w-4.5 h-4.5 text-[hsl(var(--accent))]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-[13px] font-sans font-semibold text-white">We use cookies</p>
              <p className="text-[12px] text-white/55 leading-relaxed">
                We use cookies to personalise content, analyse traffic, and improve your experience. See our{" "}
                <Link href="/cookie-policy" className="text-[hsl(var(--accent))] hover:underline underline-offset-2">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[hsl(var(--accent))] hover:underline underline-offset-2">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={declineAll}
              className="px-4 py-2 rounded-lg border border-white/20 text-[12px] font-sans font-medium text-white/65 hover:text-white hover:border-white/40 transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2 rounded-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.88)] text-white text-[12px] font-sans font-bold transition-colors duration-200 shadow-[0_2px_10px_hsl(var(--accent)/0.3)]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
