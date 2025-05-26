import Link from "next/link"
import { Instagram, Mail, MessageSquare } from "lucide-react"
import { TikTokIcon } from "./icons/tiktok-icon"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="Meszzy Design Logo" width={40} height={40} className="mr-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Meszzy Design
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Creating stunning visual designs and animations that help brands stand out.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/meszzy_design?igsh=NnN0dHZuOWZ4MDZx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.tiktok.com/@meszzydesign?_t=ZS-8wV6oCk1lMV&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok Design"
              >
                <TikTokIcon />
              </Link>
              <Link
                href="https://www.tiktok.com/@mezzyyy_y?_t=ZS-8wfYFQt6Pze&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok Main"
              >
                <TikTokIcon />
              </Link>
              <Link
                href="https://wa.me/message/M3DAIT357RI5L1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:4.motion.teamm@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  4.motion.teamm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <a
                  href="https://wa.me/message/M3DAIT357RI5L1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Meszzy Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
