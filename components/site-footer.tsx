import Link from "next/link"
import { CheckCircle2, Shield, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
]

const responsibleLinks = [
  { label: "GamCare", href: "https://www.gamcare.org.uk" },
  { label: "BeGambleAware", href: "https://www.begambleaware.org" },
  { label: "GamblingTherapy", href: "https://www.gamblingtherapy.org" },
  { label: "GAMSTOP", href: "https://www.gamstop.co.uk" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="h-[3px] bg-[hsl(var(--accent))]" />

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.35)]">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))]" aria-hidden="true" />
              </div>
              <span className="text-[14px] font-sans font-bold text-white tracking-wide">
                TrustedUK<span className="text-[hsl(var(--accent))]">BettingList</span>
              </span>
            </Link>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-sm">
              An independent UK betting comparison platform. We review and rank UKGC-licensed bookmakers to help you find the best offers, odds, and features.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-white/40">
              <Shield className="w-3.5 h-3.5 text-[hsl(var(--accent)/0.6)]" aria-hidden="true" />
              <span>UKGC Licensed operators only &bull; 18+ only &bull; T&Cs apply</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[hsl(var(--accent))] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/55 hover:text-[hsl(var(--accent))] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible gambling */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[hsl(var(--accent))] mb-4">
              Responsible Gambling
            </h3>
            <ul className="space-y-2.5">
              {responsibleLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/55 hover:text-[hsl(var(--accent))] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-md bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--accent)/0.2)] w-fit">
              <Phone className="w-3.5 h-3.5 text-[hsl(var(--accent))]" aria-hidden="true" />
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wide">National Helpline</p>
                <p className="text-[13px] font-sans font-semibold text-white">0808 8020 133</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endorsed by */}
        <div className="pt-6 pb-5 border-b border-white/8">
          <p className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[hsl(var(--accent))] mb-3">
            Endorsed by
          </p>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 rounded hover:opacity-85 transition-opacity">
              <img src="/gamble.webp" alt="BeGambleAware" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamblingcommission.gov.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 rounded hover:opacity-85 transition-opacity">
              <img src="/commission.png" alt="UK Gambling Commission" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://gordonmoody.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 rounded hover:opacity-85 transition-opacity">
              <img src="/gordon.png" alt="Gordon Moody" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 rounded hover:opacity-85 transition-opacity">
              <img src="/gamstop.svg" alt="GAMSTOP" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 rounded hover:opacity-85 transition-opacity">
              <img src="/gamecare.svg" alt="GamCare" className="h-6 w-auto object-contain" />
            </a>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 space-y-3">
          <p className="text-[11px] text-white/35 leading-relaxed">
            <strong className="text-white/50">Gambling Warning:</strong> Gambling involves risk. Please only gamble with funds you can afford to lose. If gambling is having a negative impact on your life, seek help at{" "}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent)/0.7)] hover:text-[hsl(var(--accent))] transition-colors">
              BeGambleAware.org
            </a>{" "}
            or call the National Gambling Helpline: <span className="text-white/55">0808 8020 133</span>.
          </p>
          <p className="text-[11px] text-white/35 leading-relaxed">
            TrustedUKBettingList.com is an independent comparison site. We may receive commission from bookmakers listed on our site. This does not affect our editorial independence or review scores. All bookmakers featured are fully licensed and regulated by the UK Gambling Commission.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40">
              18+
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40">
              UKGC Licensed
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40">
              BeGambleAware
            </span>
            <span className="ml-auto text-[11px] text-white/25">
              &copy; {new Date().getFullYear()} TrustedUKBettingList.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
