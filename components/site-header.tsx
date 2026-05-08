import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[hsl(var(--primary))]">
      {/* Emerald top bar */}
      <div className="h-[3px] bg-[hsl(var(--accent))]" />

      <div className="relative flex items-center justify-center h-[62px] px-4">
        {/* Logo — centered */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="TrustedUKBettingList Home">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.35)] group-hover:bg-[hsl(var(--accent)/0.25)] transition-colors duration-200">
            <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))]" aria-hidden="true" />
          </div>
          <span className="text-[15px] font-sans font-bold text-white tracking-wide group-hover:text-[hsl(var(--accent))] transition-colors duration-200">
            TrustedUK<span className="text-[hsl(var(--accent))]">BettingList</span>
          </span>
        </Link>

        {/* 18+ badge — absolute right */}
        <div className="absolute right-4 flex items-center justify-center w-8 h-8 rounded border border-[hsl(var(--accent)/0.4)] bg-[hsl(var(--accent)/0.1)]" aria-label="18+ only">
          <span className="text-[10px] font-sans font-bold text-[hsl(var(--accent))] leading-none">18+</span>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="h-px bg-white/8" />
    </header>
  )
}
