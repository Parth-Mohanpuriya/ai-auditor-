import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button'
import { ThemeToggle } from '../components/ThemeToggle'

// ─── Login Page ───────────────────────────────────────────────────────────────

export function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('demo@aiauditor.ai')
  const [password, setPassword] = useState('demo123')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const result = await login(email, password)

    if (result.success) {
      navigate('/dashboard', { replace: true })
    } else {
      setError(result.error ?? 'An unexpected error occurred.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center px-4 relative transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            AI Auditor
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">AI Cost Intelligence</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xl">
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Sign in to your account</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Error alert */}
            {error && (
              <div className="flex items-start gap-2.5 p-3 bg-red-50 dark:bg-rose-950/40 border border-red-200 dark:border-rose-900/50 rounded-md">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-700 dark:text-rose-300">{error}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-700/80 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="you@company.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 text-sm border border-slate-200 dark:border-slate-700/80 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full justify-center"
            >
              Sign in
            </Button>
          </form>
        </div>

        {/* Demo hint */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-md">
          <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
            <strong>Demo credentials:</strong> demo@aiauditor.ai / demo123
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
          This is a presentation demo application.
        </p>
      </div>
    </div>
  )
}
