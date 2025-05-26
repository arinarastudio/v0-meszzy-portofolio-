"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const posters = [
  {
    id: 1,
    src: "/images/poster1.png",
    alt: "JASA JOKI MLBB TERMURAH poster with game ranks and pricing",
  },
  {
    id: 2,
    src: "/images/poster2.png",
    alt: "WELCOME TO YIU STORE poster with game characters",
  },
  {
    id: 3,
    src: "/images/poster3.png",
    alt: "BEYOND THE CLOUDS poster with anime-style characters",
  },
  {
    id: 4,
    src: "/images/poster4.png",
    alt: "YOUR STORE poster with blue theme and game characters",
  },
  {
    id: 5,
    src: "/images/poster5.png",
    alt: "GAMEPLAY SEASON LAMA FREE FIRE poster with pirate character",
  },
  {
    id: 6,
    src: "/images/poster6.png",
    alt: "OFFICIAL STORE poster with character and purple flames",
  },
]

export default function PosterResults() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" })
    }
  }

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Poster Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Swipe through some of my recent poster designs for gaming and mobile applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:-ml-5">
            <Button
              onClick={scrollLeft}
              size="icon"
              variant="outline"
              className="rounded-full bg-white shadow-md hover:bg-blue-50 border-blue-200 h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-6 pt-2 px-2 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posters.map((poster) => (
              <motion.div
                key={poster.id}
                className="flex-shrink-0 snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="relative">
                    <Image
                      src={poster.src || "/placeholder.svg"}
                      alt={poster.alt}
                      width={250}
                      height={250}
                      className="object-contain w-auto max-h-[350px]"
                      style={{ aspectRatio: "auto" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:-mr-5">
            <Button
              onClick={scrollRight}
              size="icon"
              variant="outline"
              className="rounded-full bg-white shadow-md hover:bg-blue-50 border-blue-200 h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}
