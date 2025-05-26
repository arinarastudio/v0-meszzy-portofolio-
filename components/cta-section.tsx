"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare, Instagram } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-400">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss your design needs and create something amazing together. Get in touch with me today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-white text-green-500 hover:bg-green-50 px-8 py-6 h-auto text-lg flex items-center gap-2"
              asChild
            >
              <a
                href="https://wa.me/message/M3DAIT357RI5L1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact via WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <Link
              href="https://www.instagram.com/meszzy_design?igsh=NnN0dHZuOWZ4MDZx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-pink-500 hover:bg-opacity-90 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@meszzydesign?_t=ZS-8wV6oCk1lMV&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black hover:bg-opacity-90 transition-all"
              aria-label="TikTok"
            >
              <TikTokIcon width={24} height={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
