import { motion } from "framer-motion"
import { DollarSign, TrendingUp, TrendingDown, BarChart2 } from "lucide-react"
import { KPICard } from "../../components/cards/KPICard"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const cashflowData = [
  { month: "Jan", income: 820, expense: 310, net: 510 },
  { month: "Feb", income: 855, expense: 295, net: 560 },
  { month: "Mar", income: 880, expense: 320, net: 560 },
  { month: "Apr", income: 910, expense: 305, net: 605 },
  { month: "Mei", income: 1050, expense: 340, net: 710 },
  { month: "Jun", income: 1430, expense: 355, net: 1075 },
]

const expenseCategories = [
  { name: "Operasional", amount: 145, pct: 41 },
  { name: "SDM", amount: 89, pct: 25 },
  { name: "Maintenance", amount: 65, pct: 18 },
  { name: "Marketing", amount: 32, pct: 9 },
  { name: "Lainnya", amount: 24, pct: 7 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-zinc-100 rounded-xl shadow-card-hover p-3 text-xs">
        <p className="font-semibold text-zinc-900 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-zinc-600">{entry.name}:</span>
            <span className="font-semibold text-zinc-900">Rp {entry.value}M</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function FinancialPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span><span className="text-zinc-700">Keuangan</span>
        </div>
        <h1 className="text-2xl font-bold text-zinc-900">Laporan Keuangan</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Monitoring arus kas, pendapatan, dan pengeluaran operasional</p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Total Pendapatan" value="Rp 1,43M" change={12.4} icon={<DollarSign size={18} />} color="gold" delay={0} />
        <KPICard label="Net Income" value="Rp 1,07M" change={15.2} icon={<TrendingUp size={18} />} color="success" delay={0.08} />
        <KPICard label="Total Biaya" value="Rp 355M" change={-2.1} icon={<TrendingDown size={18} />} color="warning" delay={0.16} />
        <KPICard label="Net Margin" value="75,2%" change={2.3} icon={<BarChart2 size={18} />} color="default" delay={0.24} />
      </div>

      {/* Cashflow chart */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-base p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Arus Kas Bulanan</h2>
            <p className="text-xs text-zinc-500">Pendapatan, biaya, dan net cashflow (Rp juta)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={cashflowData} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="income" name="Pendapatan" fill="#1a1a2e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" name="Biaya" fill="#d4af37" radius={[4, 4, 0, 0]} />
            <Bar dataKey="net" name="Net Cashflow" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Income trend */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Tren Net Income</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={cashflowData}>
              <defs>
                <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="net" name="Net" stroke="#10b981" strokeWidth={2.5} fill="url(#netGrad)" dot={{ fill: "#10b981", r: 4, stroke: "#fff", strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Expense breakdown */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Rincian Biaya Bulan Ini</h2>
          <div className="space-y-3">
            {expenseCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-zinc-700">{cat.name}</span>
                  <span className="font-semibold text-zinc-900">Rp {cat.amount}M <span className="text-zinc-400 font-normal">({cat.pct}%)</span></span>
                </div>
                <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: `${cat.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-full rounded-full bg-zinc-900"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-between">
            <span className="text-sm font-bold text-zinc-900">Total Biaya</span>
            <span className="text-sm font-bold text-zinc-900">Rp 355M</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
