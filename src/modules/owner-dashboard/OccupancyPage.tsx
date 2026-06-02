import { motion } from "framer-motion"
import { Building2, TrendingUp, Users, Wrench } from "lucide-react"
import { KPICard } from "../../components/cards/KPICard"
import { OccupancyLineChart } from "../../components/charts/OccupancyChart"
import { units, occupancyTrend } from "../../data/dummy"
import { formatCurrency } from "../../lib/utils"

const statusColors = {
  occupied: "bg-emerald-500",
  vacant: "bg-zinc-300",
  maintenance: "bg-amber-400",
}

const typeColors: Record<string, string> = {
  Studio: "bg-blue-50 text-blue-700",
  "1BR": "bg-purple-50 text-purple-700",
  "2BR": "bg-amber-50 text-amber-700",
  "3BR": "bg-rose-50 text-rose-700",
}

export function OccupancyPage() {
  const occupied = units.filter(u => u.status === "occupied").length
  const vacant = units.filter(u => u.status === "vacant").length
  const maintenance = units.filter(u => u.status === "maintenance").length

  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span><span className="text-zinc-700">Hunian</span>
        </div>
        <h1 className="text-2xl font-bold text-zinc-900">Monitoring Hunian</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Status unit dan tingkat occupancy real-time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Tingkat Hunian" value="94,8%" change={2.3} icon={<TrendingUp size={18} />} color="gold" delay={0} />
        <KPICard label="Unit Terisi" value={occupied} icon={<Building2 size={18} />} color="success" delay={0.08} />
        <KPICard label="Unit Kosong" value={vacant} icon={<Users size={18} />} color="default" delay={0.16} />
        <KPICard label="Maintenance" value={maintenance} icon={<Wrench size={18} />} color="warning" delay={0.24} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-base p-5 xl:col-span-2">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Tren Tingkat Hunian</h2>
          <OccupancyLineChart data={occupancyTrend} height={220} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Distribusi Status</h2>
          <div className="space-y-4">
            {[
              { label: "Terisi", count: occupied, total: units.length, color: "bg-emerald-500" },
              { label: "Kosong", count: vacant, total: units.length, color: "bg-zinc-300" },
              { label: "Maintenance", count: maintenance, total: units.length, color: "bg-amber-400" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-zinc-600 font-medium">{s.label}</span>
                  <span className="text-zinc-900 font-semibold">{s.count} unit</span>
                </div>
                <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: `${(s.count / s.total) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`h-full rounded-full ${s.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100">
            <h3 className="text-xs font-semibold text-zinc-600 mb-3">Tipe Unit</h3>
            {["Studio", "1BR", "2BR", "3BR"].map((type) => {
              const count = units.filter(u => u.type === type).length
              const occ = units.filter(u => u.type === type && u.status === "occupied").length
              return (
                <div key={type} className="flex items-center justify-between py-2 border-b border-zinc-50 last:border-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${typeColors[type]}`}>{type}</span>
                  <span className="text-xs text-zinc-500">{occ}/{count} terisi</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Unit grid */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-zinc-900">Daftar Unit</h2>
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            {["occupied", "vacant", "maintenance"].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${statusColors[s as keyof typeof statusColors]}`} />
                <span className="capitalize">{s === "occupied" ? "Terisi" : s === "vacant" ? "Kosong" : "Maintenance"}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">Unit</th>
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">Lantai</th>
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">Tipe</th>
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">Penghuni</th>
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">Harga Sewa</th>
                <th className="text-left text-xs font-semibold text-zinc-500 pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {units.map((unit) => (
                <tr key={unit.id} className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-3 pr-4 text-sm font-semibold text-zinc-900">{unit.number}</td>
                  <td className="py-3 pr-4 text-xs text-zinc-500">Lt. {unit.floor}</td>
                  <td className="py-3 pr-4">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${typeColors[unit.type]}`}>{unit.type}</span>
                  </td>
                  <td className="py-3 pr-4 text-xs text-zinc-700">{unit.resident || <span className="text-zinc-300">—</span>}</td>
                  <td className="py-3 pr-4 text-xs font-medium text-zinc-900">{formatCurrency(unit.rentPrice)}/bln</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${statusColors[unit.status]}`} />
                      <span className="text-xs text-zinc-600 capitalize">
                        {unit.status === "occupied" ? "Terisi" : unit.status === "vacant" ? "Kosong" : "Maintenance"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
