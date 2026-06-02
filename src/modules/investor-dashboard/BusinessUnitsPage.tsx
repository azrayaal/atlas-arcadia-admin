import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { businessUnits, revenueChannels, revenueByMonth } from "../../data/dummy"

const COLORS = ["#1a1a2e", "#d4af37", "#6b7280", "#9ca3af", "#d1d5db"]

const CustomTooltipDark = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0]
    return (
      <div className="bg-zinc-800 border border-white/10 rounded-xl p-3 text-xs">
        <p className="text-white font-semibold">{d.name}</p>
        <p className="text-amber-400 mt-1">Rp {d.value}M</p>
      </div>
    )
  }
  return null
}

export function BusinessUnitsPage() {
  const totalRevenue = businessUnits.reduce((a, b) => a + b.revenue, 0)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white">Business Unit Performance</h1>
        <p className="text-zinc-400 mt-2 text-sm">Analisis performa seluruh unit bisnis dan diversifikasi pendapatan</p>
      </motion.div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">
        {businessUnits.map((bu, i) => (
          <motion.div key={bu.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: bu.color === "#1a1a2e" ? "#d4af37" : bu.color }} />
              <span className="text-xs text-zinc-400 font-medium">{bu.name}</span>
            </div>
            <div className="text-xl font-bold text-white">Rp {bu.revenue}M</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={11} className="text-emerald-400" />
              <span className="text-xs text-emerald-400 font-medium">+{bu.growth}%</span>
            </div>
            <div className="mt-2">
              <div className="text-[10px] text-zinc-600 mb-1">Margin: {bu.margin}%</div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-amber-400" style={{ width: `${bu.margin}%` }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pie + bar charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4">Proporsi Revenue</h2>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={revenueChannels} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={2}>
                  {revenueChannels.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltipDark />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {revenueChannels.map((ch, i) => (
                <div key={ch.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="text-xs text-zinc-400 flex-1">{ch.name}</span>
                  <span className="text-xs font-semibold text-white">{ch.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <div className="text-2xl font-bold text-white">Rp {totalRevenue}M</div>
            <div className="text-xs text-zinc-500">Total Revenue Bulan Ini</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4">Pertumbuhan Revenue</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
              <Tooltip content={<CustomTooltipDark />} />
              <Legend wrapperStyle={{ fontSize: "10px", color: "#71717a" }} />
              <Bar dataKey="rental" name="Rental" fill="#d4af37" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="socialHub" name="Social Hub" fill="#6b7280" stackId="a" />
              <Bar dataKey="cafe" name="Cafe" fill="#9ca3af" stackId="a" />
              <Bar dataKey="minimarket" name="Minimarket" fill="#d1d5db" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Margin analysis */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-white mb-5">Analisis Profitabilitas per Unit Bisnis</h2>
        <div className="space-y-4">
          {businessUnits.map((bu, i) => (
            <motion.div key={bu.name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.07 }}
              className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: bu.color === "#1a1a2e" ? "#d4af37" : bu.color }} />
                <span className="text-xs text-zinc-300 font-medium truncate">{bu.name}</span>
              </div>
              <div className="col-span-2 text-sm font-bold text-white text-right">Rp {bu.revenue}M</div>
              <div className="col-span-5">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${bu.margin}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.07 }}
                      className="h-full rounded-full bg-amber-400"
                    />
                  </div>
                  <span className="text-xs text-amber-400 font-medium w-10 text-right">{bu.margin}%</span>
                </div>
                <div className="text-[10px] text-zinc-600 mt-0.5">Net margin</div>
              </div>
              <div className="col-span-2 text-right">
                <div className="flex items-center gap-1 justify-end">
                  <TrendingUp size={11} className="text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-bold">+{bu.growth}%</span>
                </div>
                <div className="text-[10px] text-zinc-600">MoM growth</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
