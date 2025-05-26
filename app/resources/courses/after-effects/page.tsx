"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, Play, Clock, Globe, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerPopup from "@/components/disclaimer-popup"
import CourseNote from "@/components/course-note"

const chapters = [
  {
    id: 1,
    title: "Chapter 1 - 2.4",
    description: "Introduction to After Effects and basic fundamentals",
    link: "https://drive.google.com/file/d/1Z9idRhgInXVc6adrihs6yldpZUEuf6oC/view?usp=drivesdk",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Chapter 2.4 - 4.4",
    description: "Working with compositions and basic animations",
    link: "https://drive.google.com/file/d/1Z73_yc0r1fpp4aWW23P-GXIduP6YPbGA/view?usp=drivesdk",
    duration: "60 min",
  },
  {
    id: 3,
    title: "Chapter 4.5 - 5.9",
    description: "Advanced animation techniques and keyframes",
    link: "https://drive.google.com/file/d/1Z9jNHeKwLKykI1wA6BbFTbrxGJmQ3f4-/view?usp=drivesdk",
    duration: "55 min",
  },
  {
    id: 4,
    title: "Chapter 6.0 - 7.5",
    description: "Effects and motion graphics fundamentals",
    link: "https://drive.google.com/file/d/1ZEuBtk3rGHlpJzQa7N1wmTridaKE3V-Y/view?usp=drivesdk",
    duration: "70 min",
  },
  {
    id: 5,
    title: "Chapter 7.6 - 8.9",
    description: "Advanced effects and compositing techniques",
    link: "https://drive.google.com/file/d/1Z5f-yawiFu1uNJoPaZa5exmSFlk-n0yh/view?usp=drivesdk",
    duration: "65 min",
  },
  {
    id: 6,
    title: "Chapter 9.0 - 10",
    description: "Final projects and advanced workflows",
    link: "https://drive.google.com/file/d/1ZD2_ZSNinRbCeMX3v1xf8J67v0wdDzvW/view?usp=drivesdk",
    duration: "80 min",
  },
]

export default function AfterEffectsPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
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
              <Link href="/resources">
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                Back to Resources
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-400 flex items-center justify-center">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">After Effects Course</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Complete After Effects tutorial series to help you master motion graphics and visual effects from beginner
              to advanced level.
            </p>

            {/* Course Info & Disclaimer */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Indonesian & English</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">6+ Hours Total</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-3 py-1.5 h-auto text-sm"
                onClick={() => setShowDisclaimer(true)}
              >
                <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
                Read Disclaimer
              </Button>
              <CourseNote />
            </div>
          </motion.div>

          {/* Full Course Access */}
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-400 rounded-2xl p-8 text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Complete Course Collection</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Access all chapters and additional resources in one convenient location. Perfect for offline learning.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 h-auto font-semibold" asChild>
              <Link
                href="https://drive.google.com/drive/folders/1Z1oY3giXEbIOIEFsXg8zvutiN9K0FgE-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Access Full Course Folder
              </Link>
            </Button>
          </motion.div>

          {/* Individual Chapters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Course Chapters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Play className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{chapter.duration}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{chapter.description}</p>

                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 group-hover:border-blue-600"
                    asChild
                  >
                    <Link href={chapter.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Chapter
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* Disclaimer Popup */}
      <DisclaimerPopup isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
    </main>
  )
}
