import { motion } from "framer-motion"
import { DollarSign, TrendingUp, ShoppingCart, Coffee } from "lucide-react"
import { KPICard } from "../../components/cards/KPICard"
import { RevenueChart } from "../../components/charts/RevenueChart"
import { Badge } from "../../components/ui/badge"
import { revenueByMonth, revenueChannels, transactions, businessUnits } from "../../data/dummy"
import { formatCurrency } from "../../lib/utils"

export function RevenuePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span><span className="text-zinc-700">Pendapatan</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Laporan Pendapatan</h1>
            <p className="text-sm text-zinc-500 mt-0.5">Monitoring seluruh sumber pendapatan properti</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-xl text-xs font-medium hover:bg-zinc-800 transition-colors">
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Total Pendapatan" value="Rp 1,43M" change={12.4} icon={<DollarSign size={18} />} color="gold" delay={0} />
        <KPICard label="Rental Income" value="Rp 945M" change={8.2} icon={<TrendingUp size={18} />} color="success" delay={0.08} />
        <KPICard label="Non-Rental Income" value="Rp 486M" change={18.6} icon={<ShoppingCart size={18} />} color="default" delay={0.16} />
        <KPICard label="F&B Revenue" value="Rp 105M" change={22.8} icon={<Coffee size={18} />} color="default" delay={0.24} />
      </div>

      {/* Revenue charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900">Pendapatan per Bulan (Area)</h2>
              <p className="text-xs text-zinc-500">Seluruh sumber pendapatan dalam juta Rp</p>
            </div>
          </div>
          <RevenueChart data={revenueByMonth} type="area" height={250} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900">Pendapatan per Bulan (Bar)</h2>
              <p className="text-xs text-zinc-500">Perbandingan bulanan</p>
            </div>
          </div>
          <RevenueChart data={revenueByMonth} type="bar" height={250} />
        </motion.div>
      </div>

      {/* Business units performance */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
        <h2 className="text-sm font-semibold text-zinc-900 mb-4">Performa Unit Bisnis</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                {["Unit Bisnis", "Revenue (Rp juta)", "Margin", "Growth MoM", "Status"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {businessUnits.map((bu) => (
                <tr key={bu.name} className="hover:bg-zinc-50 transition-colors">
                  <td className="py-3 pr-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: bu.color }} />
                      <span className="text-sm font-medium text-zinc-900">{bu.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-6 text-sm font-semibold text-zinc-900">Rp {bu.revenue}M</td>
                  <td className="py-3 pr-6">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-zinc-900" style={{ width: `${bu.margin}%` }} />
                      </div>
                      <span className="text-xs text-zinc-600">{bu.margin}%</span>
                    </div>
                  </td>
                  <td className="py-3 pr-6">
                    <span className="text-xs font-medium text-emerald-600">+{bu.growth}%</span>
                  </td>
                  <td className="py-3">
                    <Badge variant="success">Aktif</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Revenue channel breakdown */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="card-base p-5">
        <h2 className="text-sm font-semibold text-zinc-900 mb-4">Distribusi Channel Pendapatan</h2>
        <div className="space-y-3">
          {revenueChannels.map((ch) => (
            <div key={ch.name} className="flex items-center gap-3">
              <div className="flex items-center gap-2 w-28 shrink-0">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: ch.color === "#e5e7eb" ? "#9ca3af" : ch.color }} />
                <span className="text-xs font-medium text-zinc-600">{ch.name}</span>
              </div>
              <div className="flex-1 h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }} animate={{ width: `${ch.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: ch.color === "#e5e7eb" ? "#9ca3af" : ch.color }}
                />
              </div>
              <span className="text-xs font-semibold text-zinc-900 w-16 text-right">Rp {ch.value}M</span>
              <span className="text-xs text-zinc-400 w-8 text-right">{ch.pct}%</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Transactions table */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
        <h2 className="text-sm font-semibold text-zinc-900 mb-4">Detail Transaksi Masuk</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-100">
                {["Tanggal", "Penghuni", "Unit", "Nominal", "Tipe", "Status"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-zinc-500 pb-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="py-3 pr-4 text-xs text-zinc-500">{tx.date}</td>
                  <td className="py-3 pr-4 text-sm font-medium text-zinc-900">{tx.resident}</td>
                  <td className="py-3 pr-4 text-xs text-zinc-500">{tx.unit}</td>
                  <td className="py-3 pr-4 text-sm font-semibold text-zinc-900">{formatCurrency(tx.amount)}</td>
                  <td className="py-3 pr-4 text-xs capitalize text-zinc-600">{tx.type}</td>
                  <td className="py-3">
                    <Badge variant={tx.status === "paid" ? "success" : tx.status === "pending" ? "warning" : "danger"}>
                      {tx.status === "paid" ? "Lunas" : tx.status === "pending" ? "Pending" : "Overdue"}
                    </Badge>
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
