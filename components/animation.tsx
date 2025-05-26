"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Animation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Background shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-50"
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-[20%] left-[20%] w-16 h-16 rounded-lg bg-blue-500"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-[30%] right-[25%] w-12 h-12 rounded-full bg-purple-400"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-[25%] left-[35%] w-20 h-20 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 rotate-12"
        animate={{
          rotate: [12, -5, 12],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-[30%] right-[20%] w-14 h-14 rounded-full bg-blue-300"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Center element */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 shadow-lg"
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute inset-2 rounded-lg bg-white flex items-center justify-center"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Image src="/images/logo.png" alt="Meszzy Design Logo" width={60} height={60} />
        </motion.div>
      </motion.div>
    </div>
  )
}
