import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, Bell, ChevronDown, LogOut, Calendar } from 'lucide-react'
import { cn } from '../utils/format'
import type { User } from '../types'
import { ThemeToggle } from './ThemeToggle'

// ─── Route title map ──────────────────────────────────────────────────────────

const routeTitles: Record<string, string> = {
  '/dashboard': 'Overview',
  '/cost-optimization': 'Cost Optimization',
  '/materials': 'Materials & Procurement',
  '/workforce': 'Workforce',
  '/ai-insights': 'AI Insights',
  '/tax-compliance': 'Tax & Compliance',
  '/automation': 'Automation',
  '/reports': 'Reports',
  '/settings': 'Settings',
}

// ─── TopBar ───────────────────────────────────────────────────────────────────

interface TopBarProps {
  user: User
  onMenuClick: () => void
  onLogout: () => void
}

export function TopBar({ user, onMenuClick, onLogout }: TopBarProps) {
  const { pathname } = useLocation()
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  const pageTitle = routeTitles[pathname] ?? 'AI Auditor'
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <header className="h-14 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-4 flex-shrink-0 transition-colors">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{pageTitle}</h1>
        <p className="text-xs text-slate-400 dark:text-slate-400 hidden sm:block">NovaTech Industries</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1.5">
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Date indicator */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/80 rounded-md mr-1 bg-slate-50/50 dark:bg-slate-800/40">
          <Calendar className="w-3.5 h-3.5" />
          <span>{today}</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setNotifOpen(v => !v)
              setProfileOpen(false)
            }}
            className="relative p-2 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
          </button>

          {notifOpen && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setNotifOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 mt-1 z-30 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-1">
                <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Notifications</p>
                </div>
                {[
                  { text: 'Steel supplier price anomaly detected', time: '2h ago', dot: 'bg-red-500' },
                  { text: 'TCS Form 27EQ is overdue', time: '1d ago', dot: 'bg-amber-500' },
                  { text: 'Monthly cost report is ready', time: '2d ago', dot: 'bg-blue-500' },
                ].map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                  >
                    <span className={cn('w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0', n.dot)} />
                    <div>
                      <p className="text-xs text-slate-700 dark:text-slate-300">{n.text}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
                <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800">
                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(v => !v)
              setNotifOpen(false)
            }}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="User menu"
          >
            <div className="w-7 h-7 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-medium text-slate-900 dark:text-white leading-none">{user.name}</p>
              <p className="text-xs text-slate-400 dark:text-slate-400 leading-none mt-0.5">{user.role}</p>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400 hidden sm:block" />
          </button>

          {profileOpen && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setProfileOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 mt-1 z-30 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-1">
                <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-400">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    setProfileOpen(false)
                    onLogout()
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
