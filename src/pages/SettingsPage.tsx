import { Moon, Sun, Monitor } from 'lucide-react'
import { Card } from '../components/Card'
import { useTheme } from '../context/ThemeContext'

export function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Settings</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Manage system preferences, appearance, notifications, and organization details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Appearance Settings */}
          <Card padding="md">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
              Appearance & Theme
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Select your preferred visual theme for the AI Auditor workspace.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTheme('dark')}
                className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-700 shadow-sm">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Dark (Default)</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">High contrast dark UI</p>
                </div>
              </button>

              <button
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 shadow-sm">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Light</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Classic clean light theme</p>
                </div>
              </button>

              <button
                onClick={() => setTheme('dark')}
                className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 opacity-60 cursor-not-allowed"
                disabled
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold">System</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Auto sync OS</p>
                </div>
              </button>
            </div>
          </Card>

          {/* User Profile */}
          <Card padding="md">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
              Account Information
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Demo account details used in this session.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200/60 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  D
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Demo Administrator</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">demo@aiauditor.ai</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Help */}
        <div className="space-y-6">
          <Card padding="md">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              System Info
            </h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>Version</span>
                <span className="font-mono text-slate-900 dark:text-slate-200">v2.4.0 (Demo)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>Default Theme</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Dark Mode</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Environment</span>
                <span className="text-emerald-600 dark:text-emerald-400">Presentation Demo</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
