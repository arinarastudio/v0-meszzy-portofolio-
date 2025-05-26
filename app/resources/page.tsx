"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Type, Globe, Layers, Video, Camera, Star, Info, Code, FileText } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PasswordProtection from "@/components/password-protection"

const categories = ["All", "Courses", "Typography", "Design Elements", "Video Assets", "Photo Assets"]

const resources = [
  {
    id: 1,
    title: "After Effects Course",
    description: "Complete After Effects tutorial series from beginner to advanced level",
    icon: <Play className="w-8 h-8" />,
    color: "from-blue-500 to-purple-400",
    link: "/resources/courses/after-effects",
    chapters: "10 Chapters",
    language: "Indonesian & English",
    category: "Courses",
    rating: 4.8,
    external: false,
  },
  {
    id: 2,
    title: "CSS Intermediate Course",
    description: "Master CSS from basics to advanced techniques for modern web development",
    icon: <Code className="w-8 h-8" />,
    color: "from-orange-500 to-red-400",
    link: "/resources/courses/css",
    chapters: "Text-based",
    language: "Indonesian & English",
    category: "Courses",
    rating: 4.6,
    external: false,
  },
  {
    id: 3,
    title: "Python Programming Course",
    description: "Learn Python programming from beginner to intermediate level",
    icon: <FileText className="w-8 h-8" />,
    color: "from-green-500 to-blue-400",
    link: "/resources/courses/python",
    chapters: "Text-based",
    language: "Indonesian & English",
    category: "Courses",
    rating: 4.7,
    external: false,
  },
  {
    id: 4,
    title: "Free Fonts Collection",
    description: "1.4K+ premium fonts collection for your design and editing projects",
    icon: <Type className="w-8 h-8" />,
    color: "from-green-500 to-teal-400",
    link: "/resources/fonts",
    chapters: "1400+ Fonts",
    language: "Universal",
    category: "Typography",
    rating: 4.9,
    external: false,
  },
  {
    id: 5,
    title: "Premium Design Elements",
    description: "400+ premium overlays, backgrounds, elements, animations and much more for free",
    icon: <Layers className="w-8 h-8" />,
    color: "from-purple-500 to-pink-400",
    link: "https://drive.google.com/drive/folders/10QQf5SJNoa_g79b89V2JixcCshuvTSqo",
    chapters: "400+ Elements",
    language: "Universal",
    category: "Design Elements",
    rating: 4.7,
    external: true,
  },
  {
    id: 6,
    title: "Video Assets Collection",
    description: "15+ premium video assets for your motion graphics and video editing projects",
    icon: <Video className="w-8 h-8" />,
    color: "from-red-500 to-orange-400",
    link: "https://drive.google.com/drive/folders/1UL3mG9McGz78uyr9688qoqvGmFsGfkmx",
    chapters: "15+ Videos",
    language: "Universal",
    category: "Video Assets",
    rating: 4.6,
    external: true,
  },
  {
    id: 7,
    title: "Photo Assets Library",
    description: "400+ high-quality photo assets for your design and creative projects",
    icon: <Camera className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-400",
    link: "https://drive.google.com/drive/folders/1UP6SjfycSR76m5DT-sG1ZSgHF1v0auhp",
    chapters: "400+ Photos",
    language: "Universal",
    category: "Photo Assets",
    rating: 4.5,
    external: true,
  },
]

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : star <= rating
                ? "text-yellow-400 fill-yellow-400/50"
                : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  )
}

function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredResources =
    activeCategory === "All" ? resources : resources.filter((resource) => resource.category === activeCategory)

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
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">The place We share and Love</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of free learning resources, tools, and assets to enhance your creative journey.
            </p>
          </motion.div>

          {/* Language & License Notice */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg text-sm">
              <Globe className="w-3.5 h-3.5" />
              <span className="font-medium">Course Language: Indonesian & English</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1.5 rounded-lg text-sm">
              <Info className="w-3.5 h-3.5" />
              <span className="font-medium">
                License CC BY - Free to use, but please leave credit no matter how small it is
              </span>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={
                  activeCategory === category
                    ? "bg-blue-500 text-white px-4 py-2 h-auto text-sm"
                    : "border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 h-auto text-sm"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {resource.external ? (
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {resource.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </h3>

                        {/* Rating */}
                        <div className="mb-3">
                          <StarRating rating={resource.rating} />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">{resource.description}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {resource.chapters}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {resource.language}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            {resource.category}
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-sm">
                          <span>Access Resource</span>
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={resource.link}>
                    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {resource.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </h3>

                        {/* Rating */}
                        <div className="mb-3">
                          <StarRating rating={resource.rating} />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">{resource.description}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {resource.chapters}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {resource.language}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            {resource.category}
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-sm">
                          <span>Explore Resource</span>
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Help Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                If you have questions about any of our resources or need technical support, feel free to contact me.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 h-auto text-sm" asChild>
                  <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                    Contact via WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 h-auto text-sm"
                  asChild
                >
                  <Link href="/#contact">Contact Me Directly</Link>
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

export default function ResourcesPage() {
  return (
    <PasswordProtection title="Resources">
      <ResourcesContent />
    </PasswordProtection>
  )
}
