import { motion } from "framer-motion"
import { Building2, TrendingUp, Users, Zap, ArrowRight, Activity, AlertCircle, CheckCircle2 } from "lucide-react"
import { KPICard } from "../../components/cards/KPICard"
import { RevenueChart } from "../../components/charts/RevenueChart"
import { OccupancyLineChart } from "../../components/charts/OccupancyChart"
import { Badge } from "../../components/ui/badge"
import { revenueByMonth, occupancyTrend, transactions, accessLogs } from "../../data/dummy"
import { formatCurrency } from "../../lib/utils"
import { Link } from "react-router-dom"

const kpis = [
  { label: "Total Pendapatan Bulan Ini", value: "Rp 1,43M", change: 12.4, icon: <TrendingUp size={18} />, color: "gold" as const, changeLabel: "vs bulan lalu" },
  { label: "Tingkat Hunian", value: "94,8%", change: 2.3, icon: <Building2 size={18} />, color: "success" as const, changeLabel: "dari 248 unit aktif" },
  { label: "Total Penghuni Aktif", value: "235", change: 4.1, icon: <Users size={18} />, color: "default" as const, changeLabel: "resident terdaftar" },
  { label: "Smart Access Hari Ini", value: "1.284", change: 8.7, icon: <Zap size={18} />, color: "default" as const, changeLabel: "akses tercatat" },
]

const revenueKPIs = [
  { label: "Rental", value: "Rp 945M", change: 8.2, pct: 58 },
  { label: "Social Hub", value: "Rp 190M", change: 15.4, pct: 12 },
  { label: "Minimarket", value: "Rp 128M", change: 10.1, pct: 8 },
  { label: "Cafe", value: "Rp 105M", change: 22.8, pct: 6 },
  { label: "Laundry", value: "Rp 63M", change: 8.5, pct: 4 },
]

export function OwnerDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb + title */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span>
          <span>/</span>
          <span className="text-zinc-700">Dashboard</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Dashboard Operasional</h1>
            <p className="text-sm text-zinc-500 mt-0.5">Pantau seluruh operasional properti secara real-time</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-700">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <KPICard key={kpi.label} {...kpi} delay={i * 0.08} />
        ))}
      </div>

      {/* Revenue Sources */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-base p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Sumber Pendapatan</h2>
            <p className="text-xs text-zinc-500">Distribusi revenue bulan berjalan</p>
          </div>
          <Link to="/owner/revenue" className="flex items-center gap-1 text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors">
            Lihat detail <ArrowRight size={13} />
          </Link>
        </div>
        <div className="space-y-3">
          {revenueKPIs.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <div className="text-xs font-medium text-zinc-600 w-24 shrink-0">{r.label}</div>
              <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-full rounded-full bg-zinc-900"
                  style={{ background: r.label === "Social Hub" ? "#d4af37" : undefined }}
                />
              </div>
              <div className="text-xs font-semibold text-zinc-900 w-20 text-right">{r.value}</div>
              <div className="text-xs text-emerald-600 font-medium w-14 text-right">+{r.change}%</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="card-base p-5 xl:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900">Tren Pendapatan</h2>
              <p className="text-xs text-zinc-500">Perbandingan seluruh sumber pendapatan (Rp juta)</p>
            </div>
            <select className="text-xs border border-zinc-200 rounded-lg px-2 py-1.5 text-zinc-600 bg-white">
              <option>6 Bulan Terakhir</option>
              <option>1 Tahun</option>
            </select>
          </div>
          <RevenueChart data={revenueByMonth} type="area" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900">Tingkat Hunian</h2>
              <p className="text-xs text-zinc-500">Persentase bulan berjalan</p>
            </div>
          </div>
          <OccupancyLineChart data={occupancyTrend} height={200} />
          <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-xl font-bold text-zinc-900">235</div>
              <div className="text-xs text-zinc-500">Unit Terisi</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-zinc-900">13</div>
              <div className="text-xs text-zinc-500">Unit Kosong</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom row: transactions + access logs */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Recent transactions */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-zinc-900">Transaksi Terbaru</h2>
            <Link to="/owner/revenue" className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
              Semua <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((tx) => (
              <div key={tx.id} className="flex items-center gap-3 py-1.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  tx.type === "rent" ? "bg-zinc-100" : tx.type === "cafe" ? "bg-amber-50" : "bg-blue-50"
                }`}>
                  <Activity size={14} className={tx.type === "rent" ? "text-zinc-500" : tx.type === "cafe" ? "text-amber-500" : "text-blue-500"} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-zinc-900 truncate">{tx.resident}</div>
                  <div className="text-xs text-zinc-400 capitalize">{tx.type} · Unit {tx.unit}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-zinc-900">{formatCurrency(tx.amount)}</div>
                  <Badge variant={tx.status === "paid" ? "success" : tx.status === "pending" ? "warning" : "danger"} className="mt-0.5">
                    {tx.status === "paid" ? "Lunas" : tx.status === "pending" ? "Pending" : "Overdue"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Smart access log */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-zinc-900">Smart Access Log</h2>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-600 font-medium">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            {accessLogs.map((log) => (
              <div key={log.id} className="flex items-center gap-3 py-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  log.status === "granted" ? "bg-emerald-50" : "bg-red-50"
                }`}>
                  {log.status === "granted"
                    ? <CheckCircle2 size={14} className="text-emerald-500" />
                    : <AlertCircle size={14} className="text-red-500" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-zinc-900 truncate">{log.resident}</div>
                  <div className="text-xs text-zinc-400">{log.method} · {log.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-500">{log.time}</div>
                  <Badge variant={log.status === "granted" ? "success" : "danger"}>
                    {log.status === "granted" ? "Granted" : "Denied"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
