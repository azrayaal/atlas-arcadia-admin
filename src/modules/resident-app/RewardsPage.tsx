import { motion } from "framer-motion"
import { Star, Trophy, Gift, Coffee, ShoppingBag, Ticket, ChevronRight } from "lucide-react"

const tiers = [
  { name: "Bronze", min: 0, max: 2000, color: "from-amber-700 to-amber-500" },
  { name: "Silver", min: 2000, max: 5000, color: "from-zinc-400 to-zinc-300" },
  { name: "Gold", min: 5000, max: 10000, color: "from-amber-500 to-yellow-400" },
  { name: "Platinum", min: 10000, max: 999999, color: "from-slate-600 to-slate-400" },
]

const rewards = [
  { id: 1, name: "Kopi Gratis di Cafe", points: 200, icon: Coffee, category: "F&B", available: true },
  { id: 2, name: "1x Free Laundry (5kg)", points: 350, icon: ShoppingBag, category: "Laundry", available: true },
  { id: 3, name: "Tiket Bioskop", points: 750, icon: Ticket, category: "Entertainment", available: true },
  { id: 4, name: "Diskon Sewa 10%", points: 2000, icon: Gift, category: "Rental", available: false },
  { id: 5, name: "Voucher Belanja Rp100K", points: 500, icon: ShoppingBag, category: "Minimarket", available: true },
]

const pointHistory = [
  { desc: "Pembayaran Sewa Mei", points: +350, date: "01 Mei 2026", type: "earn" },
  { desc: "Penggunaan Gym", points: +25, date: "28 Apr 2026", type: "earn" },
  { desc: "Tukar: Kopi Gratis", points: -200, date: "25 Apr 2026", type: "redeem" },
  { desc: "Bonus Referral", points: +500, date: "20 Apr 2026", type: "earn" },
  { desc: "Belanja Minimarket", points: +45, date: "15 Apr 2026", type: "earn" },
]

export function RewardsPage() {
  const currentPoints = 4820
  const currentTierIdx = tiers.findIndex(t => currentPoints >= t.min && currentPoints < t.max)
  const currentTier = tiers[currentTierIdx]
  const nextTier = tiers[Math.min(currentTierIdx + 1, tiers.length - 1)]
  const progress = ((currentPoints - currentTier.min) / (nextTier.min - currentTier.min)) * 100

  return (
    <div className="pb-4">
      {/* Hero loyalty card */}
      <div className="mx-4 mt-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-3xl bg-gradient-to-br ${currentTier.color} relative overflow-hidden shadow-gold`}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <Trophy size={16} className="text-white/80" />
                  <span className="text-xs font-bold text-white/80 tracking-wider">ARCADIA LOYALTY</span>
                </div>
                <div className="mt-3 text-3xl font-bold text-white">{currentPoints.toLocaleString()}</div>
                <div className="text-xs text-white/70 mt-0.5">Total Poin</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/70">Status</div>
                <div className="text-lg font-bold text-white mt-0.5">{currentTier.name}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-white/60 mb-1.5">
                <span>{currentTier.name}</span>
                <span>{nextTier.min - currentPoints} poin ke {nextTier.name}</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 1 }} className="h-full bg-white rounded-full" />
              </div>
            </div>
            <div className="mt-3 text-xs font-semibold text-white/90">Rizky Maulana · Unit 0101</div>
          </div>
        </motion.div>
      </div>

      {/* Tier badges */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tiers.map((tier, i) => (
            <div key={tier.name} className={`shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r ${tier.color} ${i === currentTierIdx ? "ring-2 ring-amber-400 ring-offset-1" : "opacity-60"}`}>
              <div className="text-xs font-bold text-white">{tier.name}</div>
              <div className="text-[10px] text-white/70">{tier.min.toLocaleString()}+ poin</div>
            </div>
          ))}
        </div>
      </div>

      {/* Available rewards */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Tukar Reward</h3>
        <div className="space-y-2">
          {rewards.map((reward, i) => (
            <motion.div key={reward.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
              className={`flex items-center gap-3 p-3.5 rounded-2xl border ${reward.available ? "bg-white border-zinc-100" : "bg-zinc-50 border-zinc-100 opacity-60"}`}>
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <reward.icon size={18} className="text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-zinc-900">{reward.name}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">{reward.category}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 justify-end">
                  <Star size={11} className="text-amber-500" fill="#f59e0b" />
                  <span className="text-xs font-bold text-zinc-900">{reward.points}</span>
                </div>
                {reward.available && currentPoints >= reward.points ? (
                  <button className="mt-1 text-[10px] font-bold text-amber-600 flex items-center gap-0.5">
                    Tukar <ChevronRight size={10} />
                  </button>
                ) : (
                  <span className="text-[10px] text-zinc-300">Kurang poin</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Point history */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Riwayat Poin</h3>
        <div className="space-y-2">
          {pointHistory.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-center gap-3 py-2.5 border-b border-zinc-50 last:border-0">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${h.type === "earn" ? "bg-emerald-50" : "bg-amber-50"}`}>
                {h.type === "earn" ? <Star size={13} className="text-emerald-500" /> : <Gift size={13} className="text-amber-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-zinc-900 truncate">{h.desc}</div>
                <div className="text-[10px] text-zinc-400">{h.date}</div>
              </div>
              <span className={`text-xs font-bold ${h.points > 0 ? "text-emerald-600" : "text-amber-600"}`}>
                {h.points > 0 ? "+" : ""}{h.points}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
