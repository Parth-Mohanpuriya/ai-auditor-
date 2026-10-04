// ─── Currency ─────────────────────────────────────────────────────────────────

/**
 * Format a number as Indian Rupees.
 * Uses abbreviated notation for large numbers (L = Lakh, Cr = Crore).
 */
export function formatCurrency(value: number, abbreviated = false): string {
  if (abbreviated) {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`
    }
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`
    }
    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`
    }
    return `₹${value.toLocaleString('en-IN')}`
  }
  return `₹${value.toLocaleString('en-IN')}`
}

// ─── Dates ────────────────────────────────────────────────────────────────────

export function formatDate(dateString: string): string {
  if (!dateString) return '—'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(dateString: string): string {
  if (!dateString) return '—'
  const date = new Date(dateString)
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function getRelativeTime(dateString: string): string {
  if (!dateString) return '—'
  const now = new Date()
  const date = new Date(dateString)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(dateString)
}

// ─── Numbers ──────────────────────────────────────────────────────────────────

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-IN')
}

// ─── Variance ─────────────────────────────────────────────────────────────────

export function getVarianceColor(variance: number): string {
  if (variance > 0) return 'text-red-600'
  if (variance < 0) return 'text-green-600'
  return 'text-slate-500'
}

export function getVarianceSign(variance: number): string {
  if (variance > 0) return '+'
  return ''
}

// ─── Class utilities ──────────────────────────────────────────────────────────

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
