"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageCarouselProps {
  images: string[]
  titles: string[]
  autoPlayInterval?: number
}

export default function ImageCarousel({ images, titles, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current
    if (touchDiff > 50) {
      nextSlide() // Swipe left
    } else if (touchDiff < -50) {
      prevSlide() // Swipe right
    }
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Set up auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isAutoPlaying, autoPlayInterval])

  return (
    <div className="relative w-full overflow-hidden rounded-t-xl">
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative w-full flex justify-center bg-gray-100">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={titles[currentIndex]}
                width={800}
                height={600}
                className="w-auto h-auto object-contain max-h-[400px]"
                style={{ margin: "0 auto" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 backdrop-blur-sm border-none shadow-md h-8 w-8 pointer-events-auto"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          onClick={nextSlide}
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 backdrop-blur-sm border-none shadow-md h-8 w-8 pointer-events-auto"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Pagination indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <Button
        onClick={toggleAutoPlay}
        size="icon"
        variant="outline"
        className="absolute bottom-2 right-2 rounded-full bg-white/80 backdrop-blur-sm border-none shadow-md h-7 w-7 pointer-events-auto"
      >
        {isAutoPlaying ? (
          <Pause className="h-3.5 w-3.5 text-gray-700" />
        ) : (
          <Play className="h-3.5 w-3.5 text-gray-700" />
        )}
        <span className="sr-only">{isAutoPlaying ? "Pause" : "Play"} slideshow</span>
      </Button>
    </div>
  )
}
