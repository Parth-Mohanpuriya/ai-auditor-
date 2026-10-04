import { Outlet } from 'react-router-dom'

// Public layout — used for landing page and login
export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-150">
      <Outlet />
    </div>
  )
}
