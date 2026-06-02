import { motion } from "framer-motion"
import { Key, CalendarDays, Gift, CreditCard, Wifi, Thermometer, Lightbulb, Shield, ChevronRight, Bell } from "lucide-react"
import { Link } from "react-router-dom"
import { notifications } from "../../data/dummy"

const quickActions = [
  { icon: Key, label: "Akses NFC", path: "/resident/access", color: "bg-zinc-900 text-white" },
  { icon: CalendarDays, label: "Booking", path: "/resident/booking", color: "bg-amber-50 text-amber-600" },
  { icon: Gift, label: "Reward", path: "/resident/rewards", color: "bg-purple-50 text-purple-600" },
  { icon: CreditCard, label: "Tagihan", path: "/resident/billing", color: "bg-blue-50 text-blue-600" },
]

const smartStatus = [
  { icon: Wifi, label: "Internet", value: "98 Mbps", status: "good" },
  { icon: Thermometer, label: "Suhu", value: "22°C", status: "good" },
  { icon: Lightbulb, label: "Listrik", value: "2.4 kWh", status: "good" },
  { icon: Shield, label: "Keamanan", value: "Aman", status: "good" },
]

export function ResidentHome() {
  return (
    <div className="pb-4">
      {/* Welcome banner */}
      <div className="mx-4 mt-3 p-4 rounded-2xl bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-amber-500/10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-12 w-16 h-16 rounded-full bg-amber-500/5 translate-y-1/3" />
        <div className="relative">
          <p className="text-xs text-zinc-400">Selamat datang,</p>
          <h2 className="text-lg font-bold text-white mt-0.5">Rizky Maulana 👋</h2>
          <p className="text-xs text-zinc-400 mt-0.5">Unit 0101 · Tower A · Lt. 1</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-500/20 rounded-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold text-amber-400">Gold Member</span>
            </div>
            <span className="text-xs text-zinc-500">4.820 poin</span>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action, i) => (
            <motion.div key={action.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
              <Link to={action.path} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white border border-zinc-100 hover:shadow-card-hover transition-all active:scale-95">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${action.color}`}>
                  <action.icon size={18} />
                </div>
                <span className="text-[10px] font-medium text-zinc-600 text-center leading-tight">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smart home status */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Status Unit Saya</h3>
        <div className="grid grid-cols-2 gap-2">
          {smartStatus.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-zinc-100">
              <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                <s.icon size={15} className="text-zinc-500" />
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-900">{s.value}</div>
                <div className="text-[10px] text-zinc-400">{s.label}</div>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Loyalty summary */}
      <div className="px-4 mt-4">
        <Link to="/resident/rewards">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/3" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-100">Total Poin Reward</p>
                <div className="text-2xl font-bold text-white mt-0.5">4.820</div>
                <p className="text-xs text-amber-200 mt-0.5">Gold Member · 180 poin ke Platinum</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Gift size={28} className="text-white/40" />
                <div className="flex items-center gap-1 text-xs text-amber-100">
                  <span>Tukar</span>
                  <ChevronRight size={12} />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="h-1.5 bg-amber-400/40 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "96%" }} transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-white/70 rounded-full" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Notifications */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-semibold text-zinc-700">Notifikasi Terbaru</h3>
          <span className="text-xs text-amber-600 font-medium">Semua</span>
        </div>
        <div className="space-y-2">
          {notifications.slice(0, 3).map((notif, i) => (
            <motion.div key={notif.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.05 }}
              className={`flex items-start gap-3 p-3 rounded-2xl border transition-colors ${notif.read ? "bg-white border-zinc-100" : "bg-amber-50/50 border-amber-100"}`}>
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                notif.type === "success" ? "bg-emerald-100" : notif.type === "warning" ? "bg-amber-100" : "bg-blue-100"
              }`}>
                <Bell size={12} className={
                  notif.type === "success" ? "text-emerald-600" : notif.type === "warning" ? "text-amber-600" : "text-blue-600"
                } />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-zinc-900">{notif.title}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed line-clamp-2">{notif.message}</div>
                <div className="text-[10px] text-zinc-300 mt-1">{notif.time}</div>
              </div>
              {!notif.read && <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
