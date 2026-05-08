export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
  badge?: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    score: 9.8,
    bonus: "£30 Welcome Bonus — Min. £5 deposit",
    features: ["Live Betting", "Cash Out", "Best Odds Guaranteed", "In-Play Streaming"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/en/sports",
    reviews: 8971,
    badge: "Editor's Pick",
  },
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    score: 9.6,
    bonus: "Get £50 Free Bets",
    features: ["Fast Payouts", "Best Odds Guaranteed", "Live Streaming", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/sports",
    reviews: 9317,
    badge: "Popular",
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    score: 9.4,
    bonus: "£40 Welcome Offer",
    features: ["Great Odds", "Football Specials", "Mobile App", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.boylesports.com",
    reviews: 9204,
    badge: "Great Odds",
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    score: 9.2,
    bonus: "Get £30 Free Bets",
    features: ["Competitive Odds", "Cash Out", "Bet Builder", "In-Play Markets"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/en-gb/",
    reviews: 9088,
    badge: "High Value",
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    score: 9.0,
    bonus: "Get £30 in Free Bets",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals", "Competitive Odds"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 8742,
    badge: "Trending",
  },
  {
    id: "spreadex",
    name: "Spreadex",
    logo: "/spreadex.webp",
    score: 8.8,
    bonus: "Bet £10, Get £60 in Free Bets",
    features: ["Live Streaming", "In-Play Betting", "Cash Out", "Spread Betting"],
    paymentMethods: ["Visa/Mastercard", "Bank Transfer"],
    link: "https://www.spreadex.com/sports",
    reviews: 8619,
    badge: "Best Value",
  },
]
