import { TrendingDown, IndianRupee, Clock, Gauge } from 'lucide-react'
import { MetricCard } from '../components/MetricCard'
import { Card, CardHeader } from '../components/Card'
import { Badge } from '../components/Badge'
import { formatCurrency } from '../utils/format'
import { overviewMetrics, savingsOpportunities, aiInsights } from '../data/mockData'

// ─── Dashboard / Overview Page ────────────────────────────────────────────────

export function DashboardPage() {
  const topInsights = aiInsights.slice(0, 3)
  const topOpportunities = savingsOpportunities
    .filter(s => s.status !== 'implemented')
    .slice(0, 4)

  return (
    <div className="space-y-6">
      {/* Metrics row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Monthly Operating Cost"
          value={formatCurrency(overviewMetrics.monthlyOperatingCost, true)}
          change={2.1}
          changeLabel="vs last month"
          trend="up"
          trendPositive="down"
          icon={<IndianRupee className="w-4 h-4" />}
        />
        <MetricCard
          title="Potential Annual Savings"
          value={formatCurrency(overviewMetrics.potentialAnnualSavings, true)}
          change={12.4}
          changeLabel="new opportunities"
          trend="up"
          trendPositive="up"
          icon={<TrendingDown className="w-4 h-4" />}
        />
        <MetricCard
          title="Cost Efficiency Score"
          value={`${overviewMetrics.costEfficiencyScore}/100`}
          change={3}
          changeLabel="improvement"
          trend="up"
          trendPositive="up"
          icon={<Gauge className="w-4 h-4" />}
        />
        <MetricCard
          title="Time Saved / Month"
          value={`${overviewMetrics.monthlyTimeSaved}h`}
          change={8.2}
          changeLabel="vs last month"
          trend="up"
          trendPositive="up"
          icon={<Clock className="w-4 h-4" />}
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Savings opportunities */}
        <Card className="lg:col-span-2" padding="none">
          <div className="p-5 pb-0">
            <CardHeader
              title="Top Savings Opportunities"
              description="AI-identified cost reduction opportunities ranked by impact"
            />
          </div>
          <div className="divide-y divide-slate-100">
            {topOpportunities.map(op => (
              <div key={op.id} className="flex items-start gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-slate-900">{op.title}</p>
                    <Badge
                      variant={
                        op.priority === 'high'
                          ? 'red'
                          : op.priority === 'medium'
                          ? 'yellow'
                          : 'slate'
                      }
                    >
                      {op.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{op.description}</p>
                  <p className="text-xs text-slate-400 mt-1">{op.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-green-700">
                    {formatCurrency(op.estimatedSavings, true)}
                  </p>
                  <p className="text-xs text-slate-400">est. savings</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insights */}
        <Card padding="none">
          <div className="p-5 pb-0">
            <CardHeader
              title="AI Insights"
              description="Latest recommendations from the AI engine"
            />
          </div>
          <div className="divide-y divide-slate-100">
            {topInsights.map(insight => (
              <div key={insight.id} className="px-5 py-3.5 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                      insight.impact === 'high'
                        ? 'bg-red-500'
                        : insight.impact === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <div>
                    <p className="text-xs font-medium text-slate-900">{insight.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      {insight.description}
                    </p>
                    {insight.estimatedSavings && (
                      <p className="text-xs text-green-600 font-medium mt-1">
                        {formatCurrency(insight.estimatedSavings, true)} potential savings
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100">
            <a href="/ai-insights" className="text-xs text-blue-600 hover:text-blue-800">
              View all insights →
            </a>
          </div>
        </Card>
      </div>

      {/* Cost breakdown summary */}
      <Card>
        <CardHeader
          title="Cost Breakdown — October 2026"
          description="Monthly operating expenses by category"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
          {[
            { label: 'Workforce', value: 1820000, pct: 42.5 },
            { label: 'Materials', value: 980000, pct: 22.9 },
            { label: 'Operations', value: 640000, pct: 15.0 },
            { label: 'Marketing', value: 380000, pct: 8.9 },
            { label: 'Technology', value: 280000, pct: 6.5 },
            { label: 'Admin', value: 180000, pct: 4.2 },
          ].map(item => (
            <div key={item.label} className="text-center p-3 bg-slate-50 rounded-md">
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-slate-900">
                {formatCurrency(item.value, true)}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{item.pct}%</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
