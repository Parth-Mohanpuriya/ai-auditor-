import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Zap, Shield, TrendingDown } from 'lucide-react'

// ─── Landing Page (placeholder — will be fully designed in a later prompt) ───

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
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-200 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <span className="text-sm font-bold text-slate-900">AI Auditor</span>
          <span className="ml-2 text-xs text-slate-400 font-medium uppercase tracking-widest hidden sm:inline">
            AI Cost Intelligence
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-700 font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
          Demo Application
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight max-w-2xl mx-auto leading-tight">
          AI-powered cost intelligence for smarter businesses.
        </h1>
        <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          AI Auditor helps businesses analyze costs, identify savings opportunities,
          and automate financial operations — without the complexity.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Try the demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            View dashboard
          </Link>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Use demo@aiauditor.ai / demo123 to sign in
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-100 pt-16">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-10">
            Platform capabilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="p-5 border border-slate-200 rounded-lg">
                <f.icon className="w-5 h-5 text-blue-600 mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xs text-slate-400">
            © 2026 AI Auditor · Demo application only
          </span>
          <span className="text-xs text-slate-400">
            Not for production use
          </span>
        </div>
      </footer>
    </div>
  )
}
