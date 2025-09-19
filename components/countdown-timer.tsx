"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-red-600 text-white py-2 md:py-3 px-4 text-center font-bold">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm md:text-base">🔥 OFERTA LIMITADA - TERMINA EM:</span>
        <div className="flex gap-1 sm:gap-2 text-base sm:text-lg md:text-xl">
          <div className="bg-white text-red-600 px-1 sm:px-2 py-1 rounded font-mono text-sm sm:text-base md:text-lg">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span className="text-sm sm:text-base md:text-lg">:</span>
          <div className="bg-white text-red-600 px-1 sm:px-2 py-1 rounded font-mono text-sm sm:text-base md:text-lg">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span className="text-sm sm:text-base md:text-lg">:</span>
          <div className="bg-white text-red-600 px-1 sm:px-2 py-1 rounded font-mono text-sm sm:text-base md:text-lg">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  )
}
