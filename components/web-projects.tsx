"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Gaming Channel Graphics",
    description:
      "Custom YouTube channel graphics and promotional materials for gaming content creators. Includes banners, thumbnails, and social media assets.",
    image: "/images/web-project1.png",
    tags: ["Graphic Design", "Social Media", "Branding"],
  },
  {
    id: 2,
    title: "Meszzy Design Promotional",
    description: "Promotional graphic design showcasing design services with pricing information and contact details.",
    image: "/images/web-project2.png",
    tags: ["Branding", "Promotional", "Graphic Design"],
  },
  {
    id: 3,
    title: "Game Character Showcase",
    description: "Dynamic character showcase design for gaming content with animated elements and contact information.",
    image: "/images/web-project3.png",
    tags: ["Character Design", "Gaming", "Poster"],
  },
  {
    id: 4,
    title: "Game Skin Review Design",
    description: "Visual design for reviewing and showcasing premium game skins with detailed visual analysis.",
    image: "/images/web-project4.png",
    tags: ["Gaming", "Poster", "Promotional"],
  },
]

export default function DesignProjects() {
  return (
    <section id="design-projects" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest graphic design work. Each project showcases creative visual solutions for gaming,
            branding, and promotional materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "none" }}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-400 text-white px-8" asChild>
            <Link href="https://meszzy.carrd.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
