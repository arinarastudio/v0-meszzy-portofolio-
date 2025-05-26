"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Pause, Repeat } from "lucide-react"

export default function LogoAnimationSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logo Animation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bringing brands to life through captivating motion design. Watch how we transform static logos into dynamic
            visual experiences.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="w-full"
              src="/videos/logo-animation.mp4"
              onEnded={handleVideoEnded}
              playsInline
            />

            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <motion.button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Play className="w-8 h-8" />
                </motion.button>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex justify-between items-center">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" /> Play
                    </>
                  )}
                </button>
                <button
                  onClick={restartVideo}
                  className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Repeat className="w-5 h-5" /> Replay
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              This is just one example of our logo animation work. Contact us to bring your brand to life!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
