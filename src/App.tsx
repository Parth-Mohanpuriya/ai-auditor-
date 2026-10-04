import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// Layouts
import { PublicLayout } from './layouts/PublicLayout'
import { AppLayout } from './layouts/AppLayout'

// Public pages
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'

// App pages
import { DashboardPage } from './pages/DashboardPage'
import { CostOptimizationPage } from './pages/CostOptimizationPage'
import { MaterialsPage } from './pages/MaterialsPage'
import { WorkforcePage } from './pages/WorkforcePage'
import { AIInsightsPage } from './pages/AIInsightsPage'
import { TaxCompliancePage } from './pages/TaxCompliancePage'
import { AutomationPage } from './pages/AutomationPage'
import { ReportsPage } from './pages/ReportsPage'
import { SettingsPage } from './pages/SettingsPage'

// ─── Router ───────────────────────────────────────────────────────────────────

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Authenticated app routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/cost-optimization" element={<CostOptimizationPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/workforce" element={<WorkforcePage />} />
          <Route path="/ai-insights" element={<AIInsightsPage />} />
          <Route path="/tax-compliance" element={<TaxCompliancePage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
