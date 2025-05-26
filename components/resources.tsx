"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ExternalLink, Play, Star, Users, MessageSquare } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "After Effects Fundamentals",
    description:
      "Master the basics of After Effects with comprehensive tutorials covering keyframes, compositions, and essential tools.",
    level: "Beginner",
    duration: "4-6 hours",
    topics: ["Interface Overview", "Keyframe Animation", "Basic Effects", "Rendering"],
  },
  {
    id: 2,
    title: "Motion Graphics Essentials",
    description:
      "Learn to create stunning motion graphics, logos animations, and kinetic typography for professional projects.",
    level: "Intermediate",
    duration: "6-8 hours",
    topics: ["Logo Animation", "Typography", "Shape Layers", "Graph Editor"],
  },
  {
    id: 3,
    title: "Advanced Animation Techniques",
    description: "Dive deep into advanced animation principles, expressions, and complex motion graphics workflows.",
    level: "Advanced",
    duration: "8-10 hours",
    topics: ["Expressions", "3D Layers", "Particle Systems", "Advanced Compositing"],
  },
  {
    id: 4,
    title: "Visual Effects & Compositing",
    description: "Master visual effects, green screen compositing, and professional post-production techniques.",
    level: "Intermediate",
    duration: "5-7 hours",
    topics: ["Chroma Key", "Tracking", "Color Correction", "Visual Effects"],
  },
]

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Tutorials",
    description: "Step-by-step video tutorials with project files included",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Free Resources",
    description: "Completely free access to all course materials and assets",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Support",
    description: "Join a community of learners and get help when needed",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Professional Quality",
    description: "Industry-standard techniques used by professional designers",
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Learning Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access my curated collection of free After Effects courses and tutorials. Perfect for beginners and
            professionals looking to enhance their motion graphics skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-400 rounded-2xl p-8 md:p-12 text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Access All Courses Now</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get instant access to our complete library of After Effects courses, project files, and exclusive resources.
            Everything you need to master motion graphics and visual effects.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 h-auto text-lg font-semibold"
            asChild
          >
            <Link
              href="https://drive.google.com/drive/folders/1Z1oY3giXEbIOIEFsXg8zvutiN9K0FgE-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Access Free Courses on Google Drive
            </Link>
          </Button>
        </motion.div>

        {/* Course List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Play className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          course.level === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : course.level === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {course.level}
                      </span>
                      <span className="text-xs text-gray-500">{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">What you'll learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
                <Link
                  href="https://drive.google.com/drive/folders/1Z1oY3giXEbIOIEFsXg8zvutiN9K0FgE-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Access Course
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have questions about the courses or need guidance on which one to start with, feel free to reach
              out. I'm here to help you on your motion graphics journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask Questions on WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
                <Link href="#contact">Contact Me Directly</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
