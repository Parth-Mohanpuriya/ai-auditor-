import { Outlet } from 'react-router-dom'

// Public layout — used for landing page and login
export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Outlet />
    </div>
  )
}
