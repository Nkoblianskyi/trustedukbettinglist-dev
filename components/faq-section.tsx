"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How do we select and rank betting sites?",
    a: "Our editorial team independently evaluates each bookmaker across six criteria: licensing (UKGC), welcome bonus value, odds competitiveness, payment speed, mobile experience, and customer support. Rankings are updated monthly.",
  },
  {
    q: "Are all listed bookmakers safe to use?",
    a: "Yes. We only feature operators fully licensed by the UK Gambling Commission (UKGC). We verify every bookmaker's licence status before listing and conduct annual reviews to ensure ongoing compliance.",
  },
  {
    q: "Do you receive commission from bookmakers?",
    a: "We may earn an affiliate commission when you sign up via our links. This does not influence our rankings or reviews — our editorial process is completely independent of commercial relationships.",
  },
  {
    q: "What does UKGC licensed mean?",
    a: "The UK Gambling Commission is the regulatory body responsible for licensing gambling operators in Great Britain. A UKGC licence means the operator must comply with strict rules protecting players, including responsible gambling tools, fair play standards, and prompt payouts.",
  },
  {
    q: "How do welcome bonuses work?",
    a: "Welcome bonuses are promotional offers for new customers. They typically require you to deposit a minimum amount and place a qualifying bet. Always read the full T&Cs — especially wagering requirements, minimum odds, and time limits.",
  },
  {
    q: "What should I do if I have a gambling problem?",
    a: "If gambling is affecting your life negatively, help is available. Contact GamCare on 0808 8020 133 (free, 24/7), visit BeGambleAware.org, or self-exclude through GAMSTOP — the free national self-exclusion scheme for UK gambling sites.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[hsl(var(--accent))]">
            FAQs
          </span>
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mt-2 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-[hsl(var(--accent)/0.35)] shadow-sm"
                  : "border-border"
              }`}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[hsl(var(--sage)/0.5)] transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-[13px] font-sans font-semibold text-foreground leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-[hsl(var(--accent))] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-5 py-4 bg-[hsl(var(--sage)/0.4)] border-t border-[hsl(var(--accent)/0.15)]"
                >
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
