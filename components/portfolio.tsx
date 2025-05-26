"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FolderOpen } from "lucide-react"
import ImageCarousel from "./image-carousel"
import Link from "next/link"

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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work. I specialize in creating visually appealing designs and animations.
          </p>
        </motion.div>

        {/* Google Drive Portfolio Link */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-400 text-white px-6 py-3 h-auto rounded-md hover:from-blue-600 hover:to-purple-500 transition-all shadow-md"
            asChild
          >
            <Link
              href="https://drive.google.com/drive/folders/1Hpn4vFZsRoTxeYgrqZz3fd59yUSfYt3m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View Complete Portfolio on Google Drive
            </Link>
          </Button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "border-blue-500 text-blue-500 hover:bg-blue-50"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-md transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
