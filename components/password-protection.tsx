"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Eye, EyeOff, ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

interface PasswordProtectionProps {
  children: React.ReactNode
  title: string
}

export default function PasswordProtection({ children, title }: PasswordProtectionProps) {
  const { isAuthenticated, authenticate } = useAuth()
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [error, setError] = useState("")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      setIsUnlocking(true)
      const timer = setTimeout(() => {
        setShowContent(true)
        setIsUnlocking(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (authenticate(password)) {
      setIsUnlocking(true)
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
      // Add shake animation to the form
      const form = e.target as HTMLFormElement
      form.classList.add("animate-shake")
      setTimeout(() => form.classList.remove("animate-shake"), 500)
    }
  }

  if (isAuthenticated && showContent) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-200/30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-purple-200/30"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-pink-200/30"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-blue-300/30"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-12"
          animate={{
            rotate: [12, 192, 12],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Blurred Content Preview */}
      <div className="absolute inset-0 filter blur-lg opacity-30 pointer-events-none">{children}</div>

      {/* Lock Screen Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isUnlocking ? (
            <motion.div
              key="unlocking"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
              >
                <Lock className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                className="text-2xl font-bold text-green-600 mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                Unlocking...
              </motion.h2>
              <p className="text-gray-600">Access granted! Loading content...</p>
            </motion.div>
          ) : (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
            >
              {/* Back Button */}
              <div className="mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 px-3 py-1.5 h-auto text-sm"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                    Back to Main Page
                  </Link>
                </Button>
              </div>

              {/* Lock Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-400 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Lock className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
              <h2 className="text-lg font-semibold text-center text-orange-600 mb-6">Under Development</h2>

              {/* Message */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-center text-gray-700 leading-relaxed">
                  Under development, Please Go back To the Main page Or Insert Password To continue
                </p>
              </div>

              {/* Password Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-400 hover:from-blue-600 hover:to-purple-500 text-white font-semibold py-3"
                  disabled={!password.trim()}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Unlock Content
                </Button>
              </form>

              {/* Hint */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Need access? Contact me for the password.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom CSS for shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}
