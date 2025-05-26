"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, Code, Clock, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CourseNote from "@/components/course-note"

export default function CSSCoursePage() {
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">CSS Intermediate Course</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Master CSS from basics to advanced techniques for modern web development. Learn responsive design,
              animations, and advanced styling techniques.
            </p>

            {/* Course Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Indonesian & English</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-800 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Text-based Learning</span>
              </div>
              <CourseNote />
            </div>
          </motion.div>

          {/* Course Access */}
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-red-400 rounded-2xl p-8 text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Complete CSS Course Collection</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Access comprehensive CSS learning materials covering everything from basics to advanced techniques.
              Perfect for web developers looking to enhance their styling skills.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 h-auto font-semibold" asChild>
              <Link
                href="https://drive.google.com/drive/folders/1zO25oGEHrqYj72oj59TGJDOFWntBstz-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Access CSS Course Materials
              </Link>
            </Button>
          </motion.div>

          {/* Course Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">What You'll Learn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "CSS Fundamentals",
                  description: "Learn the basics of CSS including selectors, properties, and values",
                  icon: "🎯",
                },
                {
                  title: "Layout Techniques",
                  description: "Master Flexbox, Grid, and modern layout methods",
                  icon: "📐",
                },
                {
                  title: "Responsive Design",
                  description: "Create websites that work on all devices and screen sizes",
                  icon: "📱",
                },
                {
                  title: "CSS Animations",
                  description: "Add life to your websites with smooth animations and transitions",
                  icon: "✨",
                },
                {
                  title: "Advanced Selectors",
                  description: "Use complex selectors and pseudo-classes effectively",
                  icon: "🎪",
                },
                {
                  title: "Modern CSS Features",
                  description: "Explore CSS custom properties, calc(), and modern techniques",
                  icon: "🚀",
                },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">{topic.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-600 mb-6">
                This course is designed for developers who want to take their CSS skills to the next level. All
                materials are provided for free and can be accessed anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 h-auto text-sm" asChild>
                  <Link
                    href="https://drive.google.com/drive/folders/1zO25oGEHrqYj72oj59TGJDOFWntBstz-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-4 w-4" />
                    Start Learning CSS
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 h-auto text-sm"
                  asChild
                >
                  <Link href="/resources">Browse Other Courses</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
