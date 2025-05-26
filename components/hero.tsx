"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Animation from "@/components/animation"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-400/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute top-32 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/15 to-blue-400/15 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-purple-300/10 rounded-full blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-xl mx-auto md:mx-0 md:ml-6 py-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center md:text-left">
                Creative{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Design
                </span>{" "}
                Solutions
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left leading-relaxed">
                Hi, I'm Meszzy. I create stunning visual designs and animations that help brands stand out and connect
                with their audience. Proudly serving over 85 satisfied customers and counting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  className="bg-blue-500 text-white px-5 py-2 h-auto rounded-md hover:bg-blue-600 transition-colors shadow-md"
                  asChild
                >
                  <Link href="#portfolio">View My Work</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-5 py-2 h-auto rounded-md transition-colors shadow-sm"
                  asChild
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Animation background gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-50/60 to-purple-50/60 rounded-2xl backdrop-blur-sm border border-purple-100/50 shadow-lg" />
            <div className="relative z-10 p-6">
              <Animation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
