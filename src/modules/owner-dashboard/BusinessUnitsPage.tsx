import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Percent, BarChart2 } from "lucide-react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { KPICard } from "../../components/cards/KPICard"
import { businessUnits, revenueChannels, revenueByMonth } from "../../data/dummy"

const COLORS = ["#292524", "#d4af37", "#78716c", "#a8a29e", "#d6d3d1"]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl shadow-card-hover p-3 text-xs">
        <p className="text-stone-800 font-semibold">{payload[0].name}</p>
        <p className="text-stone-600 mt-1">Rp {payload[0].value}M</p>
      </div>
    )
  }
  return null
}

export function BusinessUnitsPage() {
  const totalRevenue = businessUnits.reduce((a, b) => a + b.revenue, 0)

  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span>
          <span className="text-stone-500">Potensi Bisnis</span><span>/</span>
          <span className="text-stone-700">Business Units</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900">Business Unit Performance</h1>
        <p className="text-sm text-stone-500 mt-0.5">Analisis performa seluruh unit bisnis dan diversifikasi pendapatan properti</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Total Revenue" value={`Rp ${totalRevenue}M`} change={12.4} icon={<DollarSign size={18} />} color="gold" delay={0} />
        <KPICard label="Revenue Rental" value="Rp 945M" change={8.2} icon={<TrendingUp size={18} />} color="success" delay={0.08} />
        <KPICard label="Revenue Non-Rental" value="Rp 486M" change={18.6} icon={<BarChart2 size={18} />} color="default" delay={0.16} />
        <KPICard label="Rata-rata Margin" value="54,4%" change={2.1} icon={<Percent size={18} />} color="default" delay={0.24} />
      </div>

      {/* Unit bisnis summary */}
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">
        {businessUnits.map((bu, i) => (
          <motion.div key={bu.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}
            className="card-base p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: bu.color === "#1a1a2e" ? "#d4af37" : bu.color }} />
              <span className="text-xs text-stone-500 font-medium truncate">{bu.name}</span>
            </div>
            <div className="text-xl font-bold text-stone-900">Rp {bu.revenue}M</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={11} className="text-emerald-500" />
              <span className="text-xs text-emerald-600 font-medium">+{bu.growth}%</span>
            </div>
            <div className="mt-2.5">
              <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                <span>Margin</span>
                <span className="font-semibold text-stone-600">{bu.margin}%</span>
              </div>
              <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${bu.margin}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.07 }}
                  className="h-full rounded-full bg-amber-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-stone-800 mb-1">Proporsi Revenue per Channel</h2>
          <p className="text-xs text-stone-400 mb-4">Distribusi pendapatan bulan berjalan</p>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={revenueChannels} cx="50%" cy="50%" innerRadius={52} outerRadius={82} dataKey="value" paddingAngle={2}>
                  {revenueChannels.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {revenueChannels.map((ch, i) => (
                <div key={ch.name} className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="text-xs text-stone-500 flex-1">{ch.name}</span>
                  <div className="text-right">
                    <div className="text-xs font-bold text-stone-800">{ch.pct}%</div>
                    <div className="text-[10px] text-stone-400">Rp {ch.value}M</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 text-center">
            <div className="text-xl font-bold text-stone-900">Rp {totalRevenue}M</div>
            <div className="text-xs text-stone-400">Total Revenue Bulan Ini</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-stone-800 mb-1">Pertumbuhan Revenue Bulanan</h2>
          <p className="text-xs text-stone-400 mb-4">Stacked per unit bisnis (Rp juta)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueByMonth} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f0ea" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "10px", color: "#a8a29e" }} />
              <Bar dataKey="rental" name="Rental" fill="#292524" stackId="a" />
              <Bar dataKey="socialHub" name="Social Hub" fill="#d4af37" stackId="a" />
              <Bar dataKey="cafe" name="Cafe" fill="#78716c" stackId="a" />
              <Bar dataKey="minimarket" name="Minimarket" fill="#d6d3d1" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Profitability table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
        <h2 className="text-sm font-semibold text-stone-800 mb-5">Analisis Profitabilitas Detail</h2>
        <div className="space-y-4">
          {businessUnits.map((bu, i) => (
            <motion.div key={bu.name} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.07 }}
              className="grid grid-cols-12 items-center gap-4 py-2 border-b border-stone-50 last:border-0">
              <div className="col-span-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: bu.color === "#1a1a2e" ? "#d4af37" : bu.color }} />
                <span className="text-sm font-medium text-stone-800 truncate">{bu.name}</span>
              </div>
              <div className="col-span-2 text-sm font-bold text-stone-900 text-right">Rp {bu.revenue}M</div>
              <div className="col-span-5">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${bu.margin}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.07 }}
                      className="h-full rounded-full bg-amber-400" />
                  </div>
                  <span className="text-xs text-amber-600 font-semibold w-10 text-right">{bu.margin}%</span>
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">Net margin</div>
              </div>
              <div className="col-span-2 text-right">
                <div className="flex items-center gap-1 justify-end">
                  <TrendingUp size={11} className="text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-bold">+{bu.growth}%</span>
                </div>
                <div className="text-[10px] text-stone-400">MoM</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
