"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedLogoProps {
  src: string
  alt: string
  size?: number
}

export default function AnimatedLogo({ src, alt, size = 60 }: AnimatedLogoProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background glow effect */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-70"
        style={{ width: size * 1.5, height: size * 1.5 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Rotating outer ring */}
      <motion.div
        className="absolute rounded-full border-2 border-dashed border-blue-400"
        style={{ width: size * 1.3, height: size * 1.3 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Logo container with subtle bounce */}
      <motion.div
        className="relative rounded-full bg-white p-2 shadow-md"
        style={{ width: size, height: size }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={size - 10}
          height={size - 10}
          className="object-contain"
          style={{ margin: "0 auto" }}
        />
      </motion.div>
    </div>
  )
}
