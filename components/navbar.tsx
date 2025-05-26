"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TikTokIcon } from "./icons/tiktok-icon"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Meszzy Design Logo" width={40} height={40} className="mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              Meszzy Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
              About Me
            </Link>
            <Link href="/journey" className="text-gray-700 hover:text-blue-500 transition-colors">
              My Journey
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-500 transition-colors">
              Resources
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-500 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/meszzy_design?igsh=NnN0dHZuOWZ4MDZx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@meszzydesign?_t=ZS-8wV6oCk1lMV&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon width={20} height={20} />
              </Link>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2" asChild>
              <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/journey"
              className="text-gray-700 hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              My Journey
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 py-2">
              <Link
                href="https://www.instagram.com/meszzy_design?igsh=NnN0dHZuOWZ4MDZx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@meszzydesign?_t=ZS-8wV6oCk1lMV&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon width={20} height={20} />
              </Link>
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href="https://wa.me/message/M3DAIT357RI5L1" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4" />
                Contact via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
