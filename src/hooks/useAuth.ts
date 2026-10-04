import { useCallback, useEffect, useState } from 'react'
import type { User } from '../types'

// ─── Demo credentials ─────────────────────────────────────────────────────────

const DEMO_EMAIL = 'demo@aiauditor.ai'
const DEMO_PASSWORD = 'demo123'
const STORAGE_KEY = 'ai_auditor_auth'

const DEMO_USER: User = {
  id: 'user-001',
  name: 'Priya Sharma',
  email: 'demo@aiauditor.ai',
  role: 'CFO',
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

interface UseAuthReturn extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

export function useAuth(): UseAuthReturn {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const user = JSON.parse(stored) as User
        setState({ user, isAuthenticated: true, isLoading: false })
      } else {
        setState(prev => ({ ...prev, isLoading: false }))
      }
    } catch {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))

      if (
        email.trim().toLowerCase() === DEMO_EMAIL &&
        password === DEMO_PASSWORD
      ) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_USER))
        setState({ user: DEMO_USER, isAuthenticated: true, isLoading: false })
        return { success: true }
      }

      return {
        success: false,
        error: 'Invalid credentials. Use demo@aiauditor.ai / demo123.',
      }
    },
    [],
  )

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setState({ user: null, isAuthenticated: false, isLoading: false })
  }, [])

  return { ...state, login, logout }
}
