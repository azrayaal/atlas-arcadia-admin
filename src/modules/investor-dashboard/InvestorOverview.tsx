import { motion } from "framer-motion"
import { TrendingUp, Building2, DollarSign, ArrowRight, Percent, Star } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts"
import { investorProjection, roiData, occupancyTrend, investorKPIs } from "../../data/dummy"
import { Link } from "react-router-dom"

const statCards = [
  { label: "Total Unit", value: "248", sub: "Tower A & B", icon: Building2, iconBg: "bg-white/10" },
  { label: "Tingkat Hunian", value: "94.8%", sub: "+2.3% MoM", icon: Percent, iconBg: "bg-amber-500/20" },
  { label: "Monthly Revenue", value: "Rp 1,43M", sub: "Net Rp 1,02M", icon: DollarSign, iconBg: "bg-emerald-500/20" },
  { label: "Projected IRR (5Y)", value: "22.6%", sub: "Sangat Atraktif", icon: TrendingUp, iconBg: "bg-blue-500/20" },
]

const CustomTooltipDark = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-white/10 rounded-xl shadow-xl p-3 text-xs">
        <p className="font-semibold text-white mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-zinc-400">{entry.name}:</span>
            <span className="font-semibold text-white">Rp {entry.value}M</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function InvestorOverview() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
          <Star size={13} className="text-amber-400" fill="#f59e0b" />
          <span className="text-xs font-semibold text-amber-400 tracking-wide">SMART LIVING ECOSYSTEM</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Atlas Arcadia<br />
          <span className="text-gradient-gold">Property Intelligence Platform</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Properti residensial premium terintegrasi teknologi smart living. Sistem manajemen terpusat, 
          ekosistem loyalitas terintegrasi, dan infrastruktur IoT modern untuk ROI maksimal.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link to="/investor/business" className="flex items-center gap-2 px-6 py-3 gradient-gold rounded-xl text-sm font-semibold text-white shadow-gold hover:opacity-90 transition-opacity">
            Lihat Business Case <ArrowRight size={16} />
          </Link>
          <Link to="/investor/ecosystem" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-sm font-semibold text-white hover:bg-white/15 transition-colors">
            Smart Ecosystem
          </Link>
        </div>
      </motion.div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.iconBg}`}>
              <s.icon size={18} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
            <div className="text-xs text-amber-400 mt-2 font-medium">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Revenue projection chart */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white">Revenue Projection</h2>
            <p className="text-sm text-zinc-500 mt-0.5">Aktual & proyeksi pendapatan 2024–2029 (Rp miliar)</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-amber-400" /><span className="text-zinc-500">Aktual</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-white/30 border-dashed border-t" /><span className="text-zinc-500">Proyeksi</span></div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={investorProjection}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4af37" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="projGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6b7280" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
            <Tooltip content={<CustomTooltipDark />} />
            <Area type="monotone" dataKey="revenue" name="Aktual" stroke="#d4af37" strokeWidth={2.5} fill="url(#revGrad)" connectNulls={false} />
            <Area type="monotone" dataKey="projected" name="Proyeksi" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" fill="url(#projGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ROI + Occupancy */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4">Proyeksi ROI per Tahun</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={({ active, payload, label }) => active && payload?.length ? (
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-3 text-xs">
                  <p className="text-white font-semibold">{label}: <span className="text-amber-400">{payload[0].value}%</span></p>
                </div>
              ) : null} />
              <Bar dataKey="roi" radius={[6, 6, 0, 0]}>
                {roiData.map((_, i) => <Cell key={i} fill={`hsl(40, 60%, ${35 + i * 8}%)`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4">Tren Tingkat Hunian</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={occupancyTrend}>
              <defs>
                <linearGradient id="occGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
              <YAxis domain={[75, 100]} tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={({ active, payload, label }) => active && payload?.length ? (
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-3 text-xs">
                  <p className="text-white font-semibold">{label}: <span className="text-amber-400">{payload[0].value}%</span></p>
                </div>
              ) : null} />
              <Area type="monotone" dataKey="rate" stroke="#d4af37" strokeWidth={2.5} fill="url(#occGrad)" dot={{ fill: "#d4af37", r: 4, stroke: "#1a1a1a", strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Investor KPI table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-6">KPI Investasi Utama</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {investorKPIs.map((kpi, i) => (
            <motion.div key={kpi.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.05 }}
              className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="text-xs text-zinc-500 mb-2">{kpi.label}</div>
              <div className="text-xl font-bold text-white">{kpi.value}</div>
              <div className="text-xs text-amber-400 font-medium mt-1">{kpi.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="text-center py-8 border border-amber-500/20 rounded-3xl bg-amber-500/5">
        <h2 className="text-2xl font-bold text-white mb-3">Siap Berinvestasi?</h2>
        <p className="text-zinc-400 text-sm mb-6">Hubungi tim sales kami untuk presentasi eksklusif dan proposal investasi</p>
        <button className="px-8 py-3.5 gradient-gold rounded-xl text-white font-bold shadow-gold hover:opacity-90 transition-opacity">
          Jadwalkan Pertemuan
        </button>
      </motion.div>
    </div>
  )
}
