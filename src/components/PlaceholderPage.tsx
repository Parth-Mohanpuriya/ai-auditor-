import { Construction } from 'lucide-react'

// ─── PlaceholderPage ──────────────────────────────────────────────────────────
// Reusable placeholder used for pages not yet fully designed.

interface PlaceholderPageProps {
  title: string
  description?: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3">
        <Construction className="w-5 h-5 text-slate-400" />
      </div>
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="text-xs text-slate-400 mt-1 max-w-xs">
        {description ?? 'This page is being built and will be ready in the next iteration.'}
      </p>
    </div>
  )
}
