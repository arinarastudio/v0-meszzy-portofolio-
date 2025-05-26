"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Info, X } from "lucide-react"

export default function CourseNote() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-3 py-1.5 h-auto text-sm"
        onClick={() => setIsOpen(true)}
      >
        <Info className="mr-1.5 h-3.5 w-3.5" />
        Important Note
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Info className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-xl font-bold text-gray-900">📝 Important Course Information</h2>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Indonesian Version */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    🇮🇩 Versi Indonesia
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      Course yang disediakan di sini berbasis teks. Mohon maaf jika kualitasnya mungkin minim atau
                      kurang dikarenakan file-file ini berasal dari web atau AI. Walaupun demikian, course ini gratis
                      untuk digunakan. Yang kami bisa ucapkan hanyalah course ini mungkin bisa membantu Anda mencapai
                      skill yang Anda inginkan ke depannya. Terima kasih banyak.
                    </p>
                  </div>
                </div>

                {/* English Version */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    🇺🇸 English Version
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      The courses provided here are text-based. We apologize if the quality might be minimal or lacking
                      since these files originate from web sources or AI. However, these courses are free to use. What
                      we can say is that these courses might help you achieve the skills you're aiming for in the
                      future. Thank you very much.
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Text-based learning materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Content sourced from web and AI-generated materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Completely free access to all course content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Designed to help you develop practical skills</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-xl">
                <Button onClick={() => setIsOpen(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  I Understand
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
