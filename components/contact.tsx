"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, MessageSquare, Mail, Video, Heart, ExternalLink } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:4.motion.teamm@gmail.com" className="text-blue-500 hover:underline">
                        4.motion.teamm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MessageSquare className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <a
                        href="https://wa.me/message/M3DAIT357RI5L1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-center">Follow Me</h3>

                    <div className="flex justify-center gap-4">
                      <Link
                        href="https://www.instagram.com/meszzy_design?igsh=NnN0dHZuOWZ4MDZx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                        aria-label="Instagram"
                      >
                        <Instagram />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@meszzydesign?_t=ZS-8wV6oCk1lMV&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                        aria-label="TikTok"
                      >
                        <TikTokIcon />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-6 h-auto"
                      asChild
                    >
                      <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-5 h-5" />
                        Contact via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Resources & Support</h3>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="text-blue-500 w-5 h-5" />
                      <h4 className="font-semibold text-gray-800">Video Projects</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Check out my video editing and motion graphics work</p>
                    <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
                      <Link href="https://sociabuzz.com/meszzy/shop" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        My Video Project Files
                      </Link>
                    </Button>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Heart className="text-purple-500 w-5 h-5" />
                      <h4 className="font-semibold text-gray-800">Support My Work</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Help support my creative journey and future projects</p>
                    <Button
                      variant="outline"
                      className="w-full border-purple-500 text-purple-500 hover:bg-purple-50"
                      asChild
                    >
                      <Link href="https://saweria.co/Meszzy" target="_blank" rel="noopener noreferrer">
                        <Heart className="mr-2 h-4 w-4" />
                        Donate via Saweria
                      </Link>
                    </Button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <ExternalLink className="text-gray-500 w-5 h-5" />
                      <h4 className="font-semibold text-gray-800">Quick Links</h4>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="https://drive.google.com/drive/folders/1Hpn4vFZsRoTxeYgrqZz3fd59yUSfYt3m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-500 hover:underline"
                      >
                        → Complete Portfolio (Google Drive)
                      </Link>
                      <Link
                        href="https://sociabuzz.com/meszzy/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-500 hover:underline"
                      >
                        → Video Project Files
                      </Link>
                      <Link
                        href="https://saweria.co/Meszzy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-purple-500 hover:underline"
                      >
                        → Support via Donation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
