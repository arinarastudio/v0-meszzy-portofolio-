"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Palette, Users, Award } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import PasswordProtection from "@/components/password-protection"

function AboutContent() {
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">Let me introduce myself</p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Who am I?</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    [Your introduction text will go here. This is where you'll tell your story about who you are, your
                    background, and what makes you unique as a designer.]
                  </p>
                  <p>
                    [Additional paragraphs about your personality, interests, and what drives you in your creative
                    work.]
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-400 p-1">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="Meszzy Design"
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why I Love Design Section */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h2 className="text-3xl font-bold mb-4">Why I Love Design?</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <p>
                  [Your passion for design will be described here. Talk about what sparked your interest in design, what
                  keeps you motivated, and how design impacts your life.]
                </p>
                <p>
                  [Additional content about your design philosophy, what you believe good design should accomplish, and
                  how you approach creative challenges.]
                </p>
              </div>
            </motion.div>

            {/* Skills & Achievements */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">85+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>

              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">100+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>

              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">∞</h3>
                <p className="text-gray-600">Passion for Design</p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create
                  something amazing together.
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
                    <Link href="/portfolio">View My Portfolio</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function AboutPage() {
  return (
    <PasswordProtection title="About Me">
      <AboutContent />
    </PasswordProtection>
  )
}
