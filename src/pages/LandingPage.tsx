import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Zap, Shield, TrendingDown } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'

// ─── Landing Page ─────────────────────────────────────────────────────────────

export function LandingPage() {
  const features = [
    {
      icon: TrendingDown,
      title: 'Cost Analysis',
      desc: 'Identify inefficiencies and overspending across procurement, workforce, and operations.',
    },
    {
      icon: BarChart3,
      title: 'Financial Reports',
      desc: 'Generate comprehensive reports with real-time insights across all cost categories.',
    },
    {
      icon: Zap,
      title: 'Automation',
      desc: 'Automate repetitive financial tasks like invoice routing, reconciliation, and alerts.',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      desc: 'Track GST, TDS, and advance tax obligations with automated filing reminders.',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-150">
      {/* Nav */}
      <nav className="border-b border-slate-200 dark:border-slate-800/80 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <span className="text-sm font-bold text-slate-900 dark:text-white">AI Auditor</span>
          <span className="ml-2 text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest hidden sm:inline">
            AI Cost Intelligence
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/login"
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors shadow-sm"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 rounded-full text-xs text-blue-700 dark:text-blue-300 font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
          Demo Application
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
          AI-powered cost intelligence for smarter businesses.
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          AI Auditor helps businesses analyze costs, identify savings opportunities,
          and automate financial operations — without the complexity.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
          >
            Try the demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors shadow-sm"
          >
            View dashboard
          </Link>
        </div>
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
          Use <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">demo@aiauditor.ai</code> / <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">demo123</code> to sign in
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-16">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center mb-10">
            Platform capabilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="p-5 bg-slate-50/50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl transition-colors">
                <f.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            © 2026 AI Auditor · Presentation demo application
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Not for production use
          </span>
        </div>
      </footer>
    </div>
  )
}
