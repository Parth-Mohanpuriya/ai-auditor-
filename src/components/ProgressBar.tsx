import { cn } from '../utils/format'

// ─── ProgressBar ──────────────────────────────────────────────────────────────

interface ProgressBarProps {
  value: number      // 0–100
  max?: number
  size?: 'sm' | 'md'
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'slate'
  showLabel?: boolean
  className?: string
}

const colorClasses = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  slate: 'bg-slate-400',
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-1.5',
}

export function ProgressBar({
  value,
  max = 100,
  size = 'md',
  color = 'blue',
  showLabel = false,
  className,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn('flex-1 bg-slate-100 rounded-full overflow-hidden', sizeClasses[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-300', colorClasses[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-slate-500 w-8 text-right">{Math.round(pct)}%</span>
      )}
    </div>
  )
}
