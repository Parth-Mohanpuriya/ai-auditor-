import { cn } from '../utils/format'

// ─── Badge ────────────────────────────────────────────────────────────────────

type BadgeVariant = 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'slate'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700',
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
  yellow: 'bg-yellow-50 text-yellow-700',
  red: 'bg-red-50 text-red-700',
  slate: 'bg-slate-100 text-slate-500',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────

type StatusType =
  | 'active'
  | 'paused'
  | 'failed'
  | 'on-track'
  | 'over-budget'
  | 'under-budget'
  | 'pending'
  | 'in-progress'
  | 'implemented'
  | 'approved'
  | 'under-review'
  | 'preferred'
  | 'flagged'
  | 'filed'
  | 'overdue'
  | 'estimated'
  | 'ready'
  | 'generating'
  | 'scheduled'
  | 'low'
  | 'adequate'
  | 'excess'
  | 'high'
  | 'medium'

const statusConfig: Record<StatusType, { variant: BadgeVariant; label: string }> = {
  active: { variant: 'green', label: 'Active' },
  paused: { variant: 'yellow', label: 'Paused' },
  failed: { variant: 'red', label: 'Failed' },
  'on-track': { variant: 'green', label: 'On Track' },
  'over-budget': { variant: 'red', label: 'Over Budget' },
  'under-budget': { variant: 'green', label: 'Under Budget' },
  pending: { variant: 'yellow', label: 'Pending' },
  'in-progress': { variant: 'blue', label: 'In Progress' },
  implemented: { variant: 'green', label: 'Implemented' },
  approved: { variant: 'green', label: 'Approved' },
  'under-review': { variant: 'yellow', label: 'Under Review' },
  preferred: { variant: 'blue', label: 'Preferred' },
  flagged: { variant: 'red', label: 'Flagged' },
  filed: { variant: 'green', label: 'Filed' },
  overdue: { variant: 'red', label: 'Overdue' },
  estimated: { variant: 'slate', label: 'Estimated' },
  ready: { variant: 'green', label: 'Ready' },
  generating: { variant: 'blue', label: 'Generating' },
  scheduled: { variant: 'slate', label: 'Scheduled' },
  low: { variant: 'red', label: 'Low' },
  adequate: { variant: 'green', label: 'Adequate' },
  excess: { variant: 'yellow', label: 'Excess' },
  high: { variant: 'red', label: 'High' },
  medium: { variant: 'yellow', label: 'Medium' },
}

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] ?? { variant: 'default' as BadgeVariant, label: status }
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  )
}
