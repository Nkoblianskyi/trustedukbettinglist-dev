"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentContextType {
  consent: CookieConsent
  showBanner: boolean
  acceptAll: () => void
  declineAll: () => void
  savePreferences: (preferences: CookieConsent) => void
  toggleBanner: (show: boolean) => void
}

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [showBanner, setShowBanner] = useState<boolean>(true)

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem("cookieConsent")
      if (storedConsent) {
        // Try to parse as JSON, but handle non-JSON values
        try {
          const parsedConsent = JSON.parse(storedConsent)
          // Validate that parsedConsent has the expected structure
          if (typeof parsedConsent === "object" && parsedConsent !== null) {
            setConsent({
              necessary: parsedConsent.necessary ?? true,
              analytics: parsedConsent.analytics ?? false,
              marketing: parsedConsent.marketing ?? false,
            })
            setShowBanner(false)
          } else {
            // If it's not an object, reset to default
            localStorage.removeItem("cookieConsent")
          }
        } catch (error) {
          // If parsing fails, remove the invalid value
          console.error("Invalid cookie consent data in localStorage:", error)
          localStorage.removeItem("cookieConsent")
        }
      }
    } catch (error) {
      // This catches errors when localStorage is not available (e.g., in SSR or when cookies are disabled)
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    try {
      setConsent(newConsent)
      localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveConsent(allAccepted)
    setShowBanner(false)
  }

  const declineAll = () => {
    saveConsent({ ...defaultConsent })
    setShowBanner(false)
  }

  const savePreferences = (preferences: CookieConsent) => {
    saveConsent({ ...preferences, necessary: true })
    setShowBanner(false)
  }

  const toggleBanner = (show: boolean) => {
    setShowBanner(show)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        declineAll,
        savePreferences,
        toggleBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}
