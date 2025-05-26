"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Star } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PasswordProtection from "@/components/password-protection"

function JourneyContent() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back to Home - Smaller, minimalist style */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-3 py-1.5 h-auto text-sm"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">The path that led me to design</p>
          </motion.div>

          {/* Placeholder Content */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Coming Soon Section */}
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm currently working on documenting my design journey - from the early days of discovering my passion
                for visual arts to building Meszzy Design. This section will feature key milestones, challenges
                overcome, and lessons learned along the way.
              </p>

              {/* Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                  <Calendar className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-700 mb-2">Timeline</h3>
                  <p className="text-sm text-gray-500">Key moments and milestones in my design career</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                  <Star className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-700 mb-2">Achievements</h3>
                  <p className="text-sm text-gray-500">Projects and recognition that shaped my path</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-700 mb-2">Lessons</h3>
                  <p className="text-sm text-gray-500">Insights and wisdom gained through experience</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Stay Tuned!</h3>
                <p className="text-gray-600 mb-6">
                  This page is under construction. Follow me on social media to get updates when new content is
                  available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 h-auto text-sm" asChild>
                    <Link href="/about">Learn About Me</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-50 px-4 py-2 h-auto text-sm"
                    asChild
                  >
                    <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function JourneyPage() {
  return (
    <PasswordProtection title="My Journey">
      <JourneyContent />
    </PasswordProtection>
  )
}
