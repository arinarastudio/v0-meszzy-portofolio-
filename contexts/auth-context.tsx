"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  authenticate: (password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const CORRECT_PASSWORD = "GAKBAHAYATA"
const AUTH_KEY = "meszzy_auth_token"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user was previously authenticated
    const authToken = localStorage.getItem(AUTH_KEY)
    if (authToken === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
    }
  }, [])

  const authenticate = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(AUTH_KEY, password)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(AUTH_KEY)
  }

  return <AuthContext.Provider value={{ isAuthenticated, authenticate, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
