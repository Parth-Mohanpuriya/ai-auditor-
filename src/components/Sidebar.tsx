import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  TrendingDown,
  Package,
  Users,
  Lightbulb,
  FileText,
  Zap,
  BarChart3,
  Settings,
  X,
} from 'lucide-react'
import { cn } from '../utils/format'

// ─── Navigation items ─────────────────────────────────────────────────────────

const mainNav = [
  { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Cost Optimization', path: '/cost-optimization', icon: TrendingDown },
  { label: 'Materials & Procurement', path: '/materials', icon: Package },
  { label: 'Workforce', path: '/workforce', icon: Users },
  { label: 'AI Insights', path: '/ai-insights', icon: Lightbulb },
  { label: 'Tax & Compliance', path: '/tax-compliance', icon: FileText },
  { label: 'Automation', path: '/automation', icon: Zap },
  { label: 'Reports', path: '/reports', icon: BarChart3 },
]

// ─── Sidebar ──────────────────────────────────────────────────────────────────

interface SidebarProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-60 bg-white border-r border-slate-200 z-40 flex flex-col transition-transform duration-200',
          'lg:static lg:translate-x-0 lg:z-auto',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div>
            <span className="text-sm font-bold text-slate-900 tracking-tight">
              AI Auditor
            </span>
            <span className="block text-[9px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
              AI Cost Intelligence
            </span>
          </div>
          {/* Mobile close */}
          <button
            className="lg:hidden p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={onMobileClose}
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2" aria-label="Main navigation">
          <ul className="space-y-0.5" role="list">
            {mainNav.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onMobileClose}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-100',
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={cn(
                          'w-4 h-4 flex-shrink-0',
                          isActive ? 'text-blue-600' : 'text-slate-400',
                        )}
                      />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-200 py-3 px-2">
          <NavLink
            to="/settings"
            onClick={onMobileClose}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-100',
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Settings
                  className={cn(
                    'w-4 h-4 flex-shrink-0',
                    isActive ? 'text-blue-600' : 'text-slate-400',
                  )}
                />
                <span>Settings</span>
              </>
            )}
          </NavLink>
        </div>
      </aside>
    </>
  )
}
