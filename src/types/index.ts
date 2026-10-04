// ─── Auth ────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  path: string
  icon: string
  badge?: number
}

// ─── Metrics ─────────────────────────────────────────────────────────────────

export interface MetricCardData {
  title: string
  value: string
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  description?: string
}

// ─── Cost Data ───────────────────────────────────────────────────────────────

export type TrendDirection = 'up' | 'down' | 'neutral'

export interface CostItem {
  id: string
  category: string
  vendor?: string
  amount: number
  budgeted: number
  variance: number
  trend: TrendDirection
  status: 'on-track' | 'over-budget' | 'under-budget'
}

export interface SavingsOpportunity {
  id: string
  title: string
  description: string
  estimatedSavings: number
  difficulty: 'low' | 'medium' | 'high'
  category: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'implemented'
}

// ─── Materials ───────────────────────────────────────────────────────────────

export interface Supplier {
  id: string
  name: string
  category: string
  annualSpend: number
  qualityScore: number
  deliveryScore: number
  priceScore: number
  overallScore: number
  status: 'preferred' | 'approved' | 'under-review'
  contactEmail: string
  location: string
}

export interface MaterialItem {
  id: string
  name: string
  category: string
  unitCost: number
  quantity: number
  totalCost: number
  supplier: string
  lastOrdered: string
  stockLevel: 'low' | 'adequate' | 'excess'
}

// ─── Workforce ───────────────────────────────────────────────────────────────

export interface Department {
  id: string
  name: string
  headcount: number
  totalCost: number
  budgeted: number
  variance: number
  manager: string
}

export interface EmployeeExpense {
  id: string
  employee: string
  department: string
  category: string
  amount: number
  date: string
  status: 'approved' | 'pending' | 'flagged'
}

// ─── AI Insights ─────────────────────────────────────────────────────────────

export interface AIInsight {
  id: string
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  category: string
  estimatedSavings?: number
  action?: string
  timestamp: string
  type: 'recommendation' | 'anomaly' | 'forecast' | 'alert'
}

// ─── Tax ─────────────────────────────────────────────────────────────────────

export interface TaxItem {
  id: string
  type: string
  period: string
  amount: number
  dueDate: string
  status: 'filed' | 'pending' | 'overdue' | 'estimated'
}

// ─── Automation ──────────────────────────────────────────────────────────────

export interface AutomationTask {
  id: string
  name: string
  description: string
  frequency: string
  lastRun: string
  nextRun: string
  status: 'active' | 'paused' | 'failed'
  timeSavedPerMonth: number
  category: string
}

// ─── Reports ─────────────────────────────────────────────────────────────────

export interface Report {
  id: string
  name: string
  description: string
  category: string
  generatedAt: string
  period: string
  status: 'ready' | 'generating' | 'scheduled'
  size: string
}

// ─── Chart ───────────────────────────────────────────────────────────────────

export interface ChartDataPoint {
  label: string
  value: number
  [key: string]: string | number
}
