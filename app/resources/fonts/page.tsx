"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Type, Download, Star } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FontsPage() {
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
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center">
              <Type className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Free Fonts Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Access over 1,400 premium fonts for your design and editing projects. Perfect for motion graphics, video
              editing, and graphic design work.
            </p>

            {/* Collection Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-lg">
                <Type className="w-4 h-4" />
                <span className="text-sm font-medium">1,400+ Fonts</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Free Download</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Main Download Section */}
          <motion.div
            className="bg-gradient-to-r from-green-500 to-teal-400 rounded-2xl p-8 md:p-12 text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Download Complete Collection</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get instant access to our curated collection of 1,400+ premium fonts. Includes various styles: serif,
              sans-serif, script, display, and decorative fonts.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold"
              asChild
            >
              <Link
                href="https://drive.google.com/file/d/10zOgYb2h3ymvuDDpl3rf6Q5ZHYgVYKXp/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Font Collection
              </Link>
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Type className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Variety of Styles</h3>
              <p className="text-gray-600 text-sm">
                Serif, sans-serif, script, display, decorative, and specialty fonts for every project need.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Download</h3>
              <p className="text-gray-600 text-sm">
                Single download link for the complete collection. No registration or signup required.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Carefully curated collection of high-quality fonts suitable for professional projects.
              </p>
            </div>
          </motion.div>

          {/* Usage Guidelines */}
          <motion.div
            className="bg-blue-50 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ Allowed Uses:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Personal design projects</li>
                  <li>• Educational purposes</li>
                  <li>• Video editing and motion graphics</li>
                  <li>• Social media content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ Please Note:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Check individual font licenses</li>
                  <li>• Some fonts may require attribution</li>
                  <li>• Commercial use may vary by font</li>
                  <li>• Respect original creators' rights</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Having trouble downloading or installing fonts? Need recommendations for specific projects? Feel free to
                reach out for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                    Contact via WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
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
