import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'
import { cn } from '../utils/format'

// ─── Toast ────────────────────────────────────────────────────────────────────

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

const typeConfig: Record<
  ToastType,
  { icon: React.ReactNode; classes: string }
> = {
  success: {
    icon: <CheckCircle className="w-4 h-4 text-green-600" />,
    classes: 'border-green-200 bg-green-50',
  },
  error: {
    icon: <XCircle className="w-4 h-4 text-red-600" />,
    classes: 'border-red-200 bg-red-50',
  },
  warning: {
    icon: <AlertCircle className="w-4 h-4 text-yellow-600" />,
    classes: 'border-yellow-200 bg-yellow-50',
  },
  info: {
    icon: <Info className="w-4 h-4 text-blue-600" />,
    classes: 'border-blue-200 bg-blue-50',
  },
}

export function Toast({
  message,
  type = 'info',
  duration = 4000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true)
  const config = typeConfig[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-3 rounded-lg border shadow-sm text-sm transition-opacity duration-300',
        config.classes,
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="mt-0.5 flex-shrink-0">{config.icon}</div>
      <p className="flex-1 text-slate-800">{message}</p>
      <button
        onClick={() => {
          setVisible(false)
          setTimeout(onClose, 300)
        }}
        className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

// ─── ToastContainer ───────────────────────────────────────────────────────────

export interface ToastItem {
  id: string
  message: string
  type?: ToastType
}

interface ToastContainerProps {
  toasts: ToastItem[]
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-80">
      {toasts.map(t => (
        <Toast
          key={t.id}
          message={t.message}
          type={t.type}
          onClose={() => onRemove(t.id)}
        />
      ))}
    </div>
  )
}
