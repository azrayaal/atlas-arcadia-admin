import { motion } from "framer-motion"
import { CreditCard, CheckCircle2, Clock, ChevronRight, Zap, Droplets, Wifi, Home } from "lucide-react"
import { residentBills } from "../../data/dummy"
import { Badge } from "../../components/ui/badge"
import { formatCurrency } from "../../lib/utils"

const billIcons: Record<string, React.ReactNode> = {
  "Sewa": <Home size={14} className="text-zinc-600" />,
  "Listrik": <Zap size={14} className="text-amber-500" />,
  "Air": <Droplets size={14} className="text-blue-500" />,
  "Internet": <Wifi size={14} className="text-green-500" />,
  "Service": <Home size={14} className="text-purple-500" />,
}

function getIcon(label: string) {
  const key = Object.keys(billIcons).find(k => label.includes(k))
  return key ? billIcons[key] : <CreditCard size={14} className="text-zinc-500" />
}

export function BillingPage() {
  const currentBill = residentBills[0]

  return (
    <div className="pb-4">
      <div className="px-4 pt-4">
        <h2 className="text-base font-bold text-zinc-900">Tagihan & Pembayaran</h2>
        <p className="text-xs text-zinc-500 mt-0.5">Kelola tagihan bulanan Anda</p>
      </div>

      {/* Current bill card */}
      <div className="px-4 mt-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-3xl bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-amber-500/10 -translate-y-1/2 translate-x-1/3" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-zinc-400">Tagihan {currentBill.month}</span>
                <div className="text-3xl font-bold text-white mt-1">{formatCurrency(currentBill.total)}</div>
              </div>
              <Badge variant={currentBill.status === "paid" ? "success" : "warning"} className="mt-1">
                {currentBill.status === "pending" ? "Belum Bayar" : "Lunas"}
              </Badge>
            </div>
            <div className="mt-2 text-xs text-zinc-500">Jatuh tempo: {currentBill.dueDate}</div>
            {currentBill.status === "pending" && (
              <motion.button
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="mt-4 w-full py-3 gradient-gold rounded-xl text-white font-bold text-sm shadow-gold"
              >
                Bayar Sekarang
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bill detail */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Rincian Tagihan</h3>
        <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
          {currentBill.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
              className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-50 last:border-0">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                {getIcon(item.label)}
              </div>
              <div className="flex-1 text-xs font-medium text-zinc-700">{item.label}</div>
              <div className="text-xs font-semibold text-zinc-900">{formatCurrency(item.amount)}</div>
            </motion.div>
          ))}
          <div className="flex items-center justify-between px-4 py-3.5 bg-zinc-50">
            <span className="text-sm font-bold text-zinc-900">Total</span>
            <span className="text-sm font-bold text-zinc-900">{formatCurrency(currentBill.total)}</span>
          </div>
        </div>
      </div>

      {/* Payment methods */}
      {currentBill.status === "pending" && (
        <div className="px-4 mt-4">
          <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Metode Pembayaran</h3>
          <div className="space-y-2">
            {[
              { label: "Transfer Bank", sub: "BCA, Mandiri, BNI, BRI", icon: "🏦" },
              { label: "QRIS / E-Wallet", sub: "GoPay, OVO, Dana, ShopeePay", icon: "📱" },
              { label: "Kartu Kredit/Debit", sub: "Visa, Mastercard, JCB", icon: "💳" },
            ].map((m, i) => (
              <motion.button key={m.label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.06 }}
                className="w-full flex items-center gap-3 p-3.5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-300 transition-colors text-left">
                <div className="text-xl w-9 h-9 flex items-center justify-center shrink-0">{m.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-zinc-900">{m.label}</div>
                  <div className="text-[10px] text-zinc-400">{m.sub}</div>
                </div>
                <ChevronRight size={14} className="text-zinc-300" />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Riwayat Pembayaran</h3>
        <div className="space-y-2">
          {residentBills.map((bill, i) => (
            <motion.div key={bill.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-zinc-100">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${bill.status === "paid" ? "bg-emerald-50" : "bg-amber-50"}`}>
                {bill.status === "paid"
                  ? <CheckCircle2 size={16} className="text-emerald-500" />
                  : <Clock size={16} className="text-amber-500" />}
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-zinc-900">{bill.month}</div>
                <div className="text-[10px] text-zinc-400">Jatuh tempo: {bill.dueDate}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-zinc-900">{formatCurrency(bill.total)}</div>
                <Badge variant={bill.status === "paid" ? "success" : "warning"} className="mt-0.5">
                  {bill.status === "paid" ? "Lunas" : "Pending"}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
