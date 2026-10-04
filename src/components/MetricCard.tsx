import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { cn } from '../utils/format'

// ─── MetricCard ───────────────────────────────────────────────────────────────

interface MetricCardProps {
  title: string
  value: string
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  trendPositive?: 'up' | 'down' // which direction is "good" — defaults to 'up'
  description?: string
  icon?: React.ReactNode
  className?: string
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel,
  trend = 'neutral',
  trendPositive = 'up',
  description,
  icon,
  className,
}: MetricCardProps) {
  const isPositive =
    (trend === 'up' && trendPositive === 'up') ||
    (trend === 'down' && trendPositive === 'down')
  const isNegative =
    (trend === 'up' && trendPositive === 'down') ||
    (trend === 'down' && trendPositive === 'up')

  const trendColor = isPositive
    ? 'text-emerald-600 dark:text-emerald-400'
    : isNegative
      ? 'text-rose-600 dark:text-rose-400'
      : 'text-slate-500 dark:text-slate-400'

  const TrendIcon =
    trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus

  return (
    <div
      className={cn(
        'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-lg p-5 shadow-sm transition-colors',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
          {title}
        </p>
        {icon && (
          <div className="text-slate-400 dark:text-slate-500 w-4 h-4 flex-shrink-0">{icon}</div>
        )}
      </div>

      <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
        {value}
      </p>

      {(change !== undefined || changeLabel) && (
        <div className={cn('mt-2 flex items-center gap-1 text-xs', trendColor)}>
          <TrendIcon className="w-3 h-3" />
          {change !== undefined && (
            <span className="font-medium">
              {change > 0 ? '+' : ''}
              {change}%
            </span>
          )}
          {changeLabel && <span className="text-slate-500 dark:text-slate-400">{changeLabel}</span>}
        </div>
      )}

      {description && (
        <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-500">{description}</p>
      )}
    </div>
  )
}
