"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, AlertTriangle } from "lucide-react"

interface DisclaimerPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function DisclaimerPopup({ isOpen, onClose }: DisclaimerPopupProps) {
  return (
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
            onClick={onClose}
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
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-xl font-bold text-gray-900">📢 PEMBERITAHUAN PENTING</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">COURSE AFTER EFFECTS GRATIS</h3>
                <p className="text-gray-700">Kepada Para Peserta yang Terhormat,</p>
                <p className="text-gray-700 mt-2">
                  Kami ingin memberikan transparansi penuh mengenai course After Effects gratis yang sedang Anda ikuti.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  🤖 Tentang Konten Course
                </h4>
                <p className="text-gray-700">
                  Sebagian besar materi dalam course ini dibuat menggunakan teknologi Generative AI Claude 4 Sonnet.
                  Oleh karena itu, kami memohon pengertian Anda apabila menemukan hal-hal berikut:
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">Yang Perlu Dimaklumi:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <div>
                      <strong>Penggunaan Bahasa Campuran:</strong> Anda mungkin akan menemukan teks yang menggunakan
                      campuran bahasa Indonesia dan bahasa Inggris
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <div>
                      <strong>Variasi Gaya Penulisan:</strong> Konsistensi gaya bahasa mungkin tidak selalu seragam
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <div>
                      <strong>Terminologi Teknis:</strong> Beberapa istilah teknis mungkin tetap menggunakan bahasa
                      Inggris
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  ✅ Komitmen Kualitas Kami
                </h4>
                <p className="text-gray-700 mb-2">Meskipun menggunakan AI, kami berkomitmen untuk:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Menjaga Kualitas Informasi:</strong> Rating kualitas informasi yang kami targetkan adalah{" "}
                      <strong>7-8 dari skala 1-10</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <div>
                      <strong>Relevansi Konten:</strong> Semua materi tetap relevan dan applicable untuk pembelajaran
                      After Effects
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">🎯 Harapan Kami</h4>
                <p className="text-gray-700 mb-2">Walaupun terdapat keterbatasan dalam aspek bahasa, kami berharap:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Informasi yang disampaikan tetap bermanfaat dan mudah dipahami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Peserta dapat mengaplikasikan teknik-teknik yang diajarkan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Course ini dapat membantu Anda menguasai dasar-dasar After Effects</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">🙏 Penutup</h4>
                <p className="text-gray-700 mb-2">
                  Terima kasih atas pengertian dan kesabaran Anda. Feedback dan saran dari peserta sangat kami hargai
                  untuk terus meningkatkan kualitas course ini.
                </p>
                <p className="text-gray-700">
                  Jika ada pertanyaan atau kendala dalam pembelajaran, jangan ragu untuk menghubungi kami.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-center text-gray-900 font-semibold">Selamat Belajar dan Semoga Sukses! 🚀</p>
                <p className="text-center text-gray-600 mt-2">- Meszzy</p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-xl">
              <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Saya Mengerti
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
