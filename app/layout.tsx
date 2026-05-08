import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "TrustedUKBettingList | Best UK Betting Sites 2025 | trustedukbettinglist.com",
  description:
    "The UK's most trusted betting site comparison. Expert-reviewed bookmakers, verified bonuses, and UKGC-licensed operators ranked by our editorial team.",
  keywords:
    "trusted UK betting sites, best bookmakers UK, online betting UK, football betting, Premier League betting, UK gambling sites 2025, trustedukbettinglist",
}

export const viewport: Viewport = {
  themeColor: "#0d2e1e",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
