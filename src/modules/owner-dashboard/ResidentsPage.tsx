import { motion } from "framer-motion"
import { Users, Star, Trophy, Crown } from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { KPICard } from "../../components/cards/KPICard"
import { residents } from "../../data/dummy"

const tierColors = {
  Bronze: { bg: "bg-amber-100", text: "text-amber-700", icon: <Star size={11} /> },
  Silver: { bg: "bg-zinc-200", text: "text-zinc-600", icon: <Star size={11} /> },
  Gold: { bg: "bg-yellow-100", text: "text-yellow-700", icon: <Trophy size={11} /> },
  Platinum: { bg: "bg-slate-100", text: "text-slate-700", icon: <Crown size={11} /> },
}

export function ResidentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span><span className="text-zinc-700">Penghuni</span>
        </div>
        <h1 className="text-2xl font-bold text-zinc-900">Data Penghuni</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Kelola data dan informasi resident aktif</p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Total Penghuni" value="235" change={4.1} icon={<Users size={18} />} color="gold" delay={0} />
        <KPICard label="Penghuni Platinum" value="12" icon={<Crown size={18} />} color="default" delay={0.08} />
        <KPICard label="Penghuni Gold" value="38" icon={<Trophy size={18} />} color="warning" delay={0.16} />
        <KPICard label="Rata-rata Poin" value="3.840" icon={<Star size={18} />} color="default" delay={0.24} />
      </div>

      {/* Tier distribution */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["Bronze", "Silver", "Gold", "Platinum"] as const).map((tier, i) => {
          const count = residents.filter(r => r.loyaltyTier === tier).length
          const tc = tierColors[tier]
          return (
            <motion.div key={tier} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }} className="card-base p-4 text-center">
              <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${tc.bg} ${tc.text}`}>
                {tc.icon}
                {tier}
              </div>
              <div className="text-2xl font-bold text-zinc-900">{count}</div>
              <div className="text-xs text-zinc-500">Penghuni</div>
            </motion.div>
          )
        })}
      </div>

      {/* Residents table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="card-base p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-zinc-900">Daftar Penghuni Aktif</h2>
          <button className="text-xs px-3 py-1.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            + Tambah Penghuni
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                {["Penghuni", "Unit", "Kontak", "Bergabung", "Loyalty Tier", "Poin", "Status"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {residents.map((r) => {
                const tc = tierColors[r.loyaltyTier]
                return (
                  <tr key={r.id} className="hover:bg-zinc-50 transition-colors group">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {r.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-900">{r.name}</div>
                          <div className="text-xs text-zinc-400">{r.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-sm font-semibold text-zinc-900">{r.unit}</td>
                    <td className="py-3 pr-4 text-xs text-zinc-500">{r.phone}</td>
                    <td className="py-3 pr-4 text-xs text-zinc-500">{r.joinDate}</td>
                    <td className="py-3 pr-4">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${tc.bg} ${tc.text}`}>
                        {tc.icon}
                        {r.loyaltyTier}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-sm font-semibold text-zinc-900">{r.loyaltyPoints.toLocaleString()}</td>
                    <td className="py-3">
                      <Badge variant={r.status === "active" ? "success" : "default"}>
                        {r.status === "active" ? "Aktif" : "Tidak Aktif"}
                      </Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
