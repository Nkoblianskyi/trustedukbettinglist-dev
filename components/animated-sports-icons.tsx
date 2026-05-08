"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import {
  ClubIcon as Football,
  TurtleIcon as Tennis,
  Target,
  Dices,
  Trophy,
  Timer,
  Flag,
  Shirt,
  BellIcon as Whistle,
  RatIcon as Racquet,
} from "lucide-react"

interface IconProps {
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
}

export function AnimatedSportsIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const iconsRef = useRef<IconProps[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create icons if not already created
    if (iconsRef.current.length === 0) {
      const icons = [
        { key: 0, element: <Football className="text-green-500" /> },
        { key: 1, element: <Tennis className="text-orange-500" /> },
        { key: 2, element: <Target className="text-green-400" /> },
        { key: 3, element: <Dices className="text-orange-400" /> },
        { key: 4, element: <Trophy className="text-green-300" /> },
        { key: 5, element: <Timer className="text-orange-300" /> },
        { key: 6, element: <Flag className="text-green-200" /> },
        { key: 7, element: <Shirt className="text-orange-200" /> },
        { key: 8, element: <Whistle className="text-green-100" /> },
        { key: 9, element: <Racquet className="text-orange-100" /> },
      ]

      // Create 20 random icons
      for (let i = 0; i < 20; i++) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)]
        iconsRef.current.push({
          icon: randomIcon.element,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 20 + Math.random() * 30,
          speed: 0.2 + Math.random() * 0.5,
          opacity: 0.05 + Math.random() * 0.1,
          rotation: Math.random() * 360,
        })
      }
    }

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw icons
      iconsRef.current.forEach((icon) => {
        // Move icon
        icon.y += icon.speed
        icon.rotation += 0.1

        // Reset position if out of bounds
        if (icon.y > canvas.height) {
          icon.y = -icon.size
          icon.x = Math.random() * canvas.width
        }

        // Draw icon (using a simple circle as placeholder since we can't directly render React components on canvas)
        ctx.save()
        ctx.translate(icon.x, icon.y)
        ctx.rotate((icon.rotation * Math.PI) / 180)
        ctx.globalAlpha = icon.opacity
        ctx.fillStyle = "#22c55e" // Green-500 color
        ctx.beginPath()
        ctx.arc(0, 0, icon.size / 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
