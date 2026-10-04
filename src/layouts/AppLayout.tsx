import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { TopBar } from '../components/TopBar'
import { useAuth } from '../hooks/useAuth'

// Application layout — used for all authenticated pages
export function AppLayout() {
  const { isAuthenticated, isLoading, user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 dark:bg-slate-950 text-slate-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-5 h-5 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Loading…</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-150">
      <Sidebar
        mobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          user={user}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={logout}
        />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0B0F19]">
          <div className="p-6 max-w-screen-xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
