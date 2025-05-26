"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FolderOpen, ExternalLink, MessageSquare } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PasswordProtection from "@/components/password-protection"

const categories = ["All", "Poster"]

const portfolioItems = [
  {
    id: 7,
    title: "Game Promotional Poster",
    category: "Poster",
    images: ["/images/poster1.png", "/images/poster2.png", "/images/poster3.png"],
    titles: ["Game Promotional Poster 1", "Game Promotional Poster 2", "Game Promotional Poster 3"],
    description: "Eye-catching promotional posters for gaming events and product launches.",
    hasAnimation: false,
  },
  {
    id: 8,
    title: "Store Announcement Poster",
    category: "Poster",
    images: ["/images/poster4.png", "/images/poster5.png", "/images/poster6.png"],
    titles: ["Store Announcement Poster 1", "Store Announcement Poster 2", "Store Announcement Poster 3"],
    description: "Attention-grabbing announcement posters for store promotions and special events.",
    hasAnimation: false,
  },
  {
    id: 9,
    title: "Anime-Style Character Poster",
    category: "Poster",
    images: ["/images/poster3.png", "/images/poster1.png", "/images/poster2.png"],
    titles: ["Anime Character Poster 1", "Anime Character Poster 2", "Anime Character Poster 3"],
    description: "Stylized anime-inspired character posters for gaming and entertainment brands.",
    hasAnimation: false,
  },
]

function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

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
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">Introduction to My Creative Works</p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to my portfolio showcase! Here you'll find a curated collection of my design work, ranging from
              promotional posters to motion graphics. Each project represents my passion for creating visually
              compelling designs that tell stories and connect with audiences. I specialize in gaming graphics, brand
              identity, and digital art that brings ideas to life.
            </p>
          </motion.div>

          {/* Google Drive Portfolio Link - Smaller, more compact */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-400 rounded-xl p-6 text-white mb-8">
              <h2 className="text-xl font-bold mb-3">Complete Portfolio Collection</h2>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto text-sm">
                Explore my complete portfolio with hundreds of design projects, including detailed case studies and
                behind-the-scenes content.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 h-auto text-sm font-medium" asChild>
                <Link
                  href="https://drive.google.com/drive/folders/1Hpn4vFZsRoTxeYgrqZz3fd59yUSfYt3m"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FolderOpen className="mr-1.5 h-4 w-4" />
                  View Complete Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
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

          {/* Featured Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Featured Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <ImageCarousel images={item.images} titles={item.titles} autoPlayInterval={5000} />

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      {item.hasAnimation && (
                        <motion.span
                          className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-800"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Animated
                        </motion.span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 py-2 h-auto text-sm"
                    >
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Explore More</h3>
              <p className="text-gray-600 mb-6">
                Want to see more of my work or discuss a potential project? Check out my additional resources and get in
                touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 h-auto text-sm" asChild>
                  <Link href="/resources">
                    <ExternalLink className="mr-1.5 h-4 w-4" />
                    View Resources
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 px-4 py-2 h-auto text-sm"
                  asChild
                >
                  <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-1.5 h-4 w-4" />
                    Contact Me
                  </a>
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

export default function PortfolioPage() {
  return (
    <PasswordProtection title="Portfolio">
      <PortfolioContent />
    </PasswordProtection>
  )
}
