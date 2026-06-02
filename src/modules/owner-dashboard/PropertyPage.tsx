import { motion } from "framer-motion"
import { Building2, MapPin, Ruler, Star, CheckCircle2, TrendingUp } from "lucide-react"
import { investorKPIs } from "../../data/dummy"

const specs = [
  { label: "Total Unit", value: "248 Unit" },
  { label: "Tower", value: "Tower A & B" },
  { label: "Jumlah Lantai", value: "12 Lantai" },
  { label: "Luas Lahan", value: "8.200 m²" },
  { label: "Luas Total GFA", value: "32.400 m²" },
  { label: "Area Parkir", value: "Basement 2 Lantai" },
]

const unitTypes = [
  { type: "Studio", size: "28 m²", count: 80, price: "Rp 3,5–3,8M/bln", occupancy: 96, color: "bg-blue-50 text-blue-700" },
  { type: "1 Bedroom", size: "36 m²", count: 72, price: "Rp 4,8–5,2M/bln", occupancy: 95, color: "bg-purple-50 text-purple-700" },
  { type: "2 Bedroom", size: "52 m²", count: 64, price: "Rp 7,2–7,8M/bln", occupancy: 94, color: "bg-amber-50 text-amber-700" },
  { type: "3 Bedroom", size: "72 m²", count: 32, price: "Rp 9,8–11M/bln", occupancy: 91, color: "bg-rose-50 text-rose-700" },
]

const amenities = [
  "Rooftop Sky Garden", "Olympic Swimming Pool", "Fitness Center 24H",
  "Social Hub & Co-working", "Minimarket 24H", "Cafe & Restaurant",
  "Laundry Service", "Smart Security System", "EV Charging Station",
  "High-Speed Fiber 1Gbps", "AI CCTV 32 Titik", "Concierge Service",
]

const location = [
  { label: "Pusat Kota", value: "5 menit", sub: "via tol" },
  { label: "Stasiun MRT", value: "800 m", sub: "jalan kaki" },
  { label: "Mall Premium", value: "1,2 km", sub: "5 menit" },
  { label: "Rumah Sakit", value: "1,5 km", sub: "7 menit" },
  { label: "Perkantoran CBD", value: "2 km", sub: "10 menit" },
]

export function PropertyPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span>
          <span className="text-stone-500">Potensi Bisnis</span><span>/</span>
          <span className="text-stone-700">Properti</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900">Spesifikasi Properti</h1>
        <p className="text-sm text-stone-500 mt-0.5">Detail properti, unit, fasilitas, dan nilai investasi Atlas Arcadia</p>
      </div>

      {/* Investor KPIs */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
        {investorKPIs.map((kpi, i) => (
          <motion.div key={kpi.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="card-base p-4">
            <div className="text-xs text-stone-400 mb-1.5">{kpi.label}</div>
            <div className="text-xl font-bold text-stone-900">{kpi.value}</div>
            <div className="text-xs text-amber-600 font-medium mt-1">{kpi.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Main info row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Spec card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="card-base p-5 xl:col-span-2">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold shrink-0">
              <Building2 size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">Atlas Arcadia</h2>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={13} className="text-amber-500" />
                <span className="text-sm text-stone-400">Jakarta Selatan, Indonesia</span>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className="text-amber-400" fill="#f59e0b" />)}
                <span className="text-xs text-stone-400 ml-1">Premium Residence</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {specs.map((spec, i) => (
              <motion.div key={spec.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 + i * 0.05 }}
                className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <div className="text-[10px] text-stone-400 mb-1">{spec.label}</div>
                <div className="text-sm font-bold text-stone-800">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="card-base p-5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={15} className="text-amber-500" />
            <h2 className="text-sm font-semibold text-stone-800">Aksesibilitas Lokasi</h2>
          </div>
          <div className="space-y-2">
            {location.map((loc, i) => (
              <motion.div key={loc.label} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center justify-between py-2.5 border-b border-stone-50 last:border-0">
                <div>
                  <span className="text-xs font-medium text-stone-700">{loc.label}</span>
                  <div className="text-[10px] text-stone-400">{loc.sub}</div>
                </div>
                <span className="text-sm font-bold text-amber-600">{loc.value}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
            <div className="text-xs font-semibold text-amber-700 mb-0.5">Prime Location</div>
            <div className="text-xs text-amber-600/80">Koridor bisnis premium dengan akses MRT terintegrasi</div>
          </div>
        </motion.div>
      </div>

      {/* Unit types */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-base p-5">
        <h2 className="text-sm font-semibold text-stone-800 mb-4">Tipe Unit & Harga Sewa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {unitTypes.map((unit, i) => (
            <motion.div key={unit.type} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.07 }}
              className="bg-stone-50 rounded-2xl p-4 border border-stone-100 hover:border-amber-200 hover:shadow-card transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center">
                  <Ruler size={14} className="text-stone-400" />
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${unit.color}`}>{unit.type}</span>
              </div>
              <div className="text-2xl font-bold text-stone-900 mb-0.5">{unit.count}</div>
              <div className="text-[10px] text-stone-400 mb-3">Unit tersedia</div>
              <div className="space-y-2 text-xs border-t border-stone-100 pt-3">
                <div className="flex justify-between">
                  <span className="text-stone-400">Luas</span>
                  <span className="font-semibold text-stone-700">{unit.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Harga Sewa</span>
                  <span className="font-semibold text-stone-700">{unit.price}</span>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-stone-400">Occupancy</span>
                    <span className="font-bold text-emerald-600">{unit.occupancy}%</span>
                  </div>
                  <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${unit.occupancy}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.07 }}
                      className="h-full rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Amenities + ROI side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-stone-800 mb-4">Fasilitas & Amenitas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {amenities.map((am, i) => (
              <motion.div key={am} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.04 }}
                className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-100">
                <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                <span className="text-xs text-stone-700">{am}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="card-base p-5">
          <h2 className="text-sm font-semibold text-stone-800 mb-4">Proyeksi Nilai Investasi</h2>
          <div className="space-y-4">
            {[
              { label: "Nilai Properti (estimasi)", value: "Rp 85M", sub: "per unit rata-rata", icon: Building2, color: "bg-stone-100 text-stone-500" },
              { label: "Gross Yield", value: "8,2% / tahun", sub: "berdasarkan harga sewa current", icon: TrendingUp, color: "bg-emerald-50 text-emerald-500" },
              { label: "Net Yield (setelah biaya)", value: "6,4% / tahun", sub: "estimasi net operating income", icon: TrendingUp, color: "bg-blue-50 text-blue-500" },
              { label: "Capital Gain Proyeksi (5Y)", value: "+35%", sub: "berdasarkan tren harga area", icon: TrendingUp, color: "bg-amber-50 text-amber-500" },
              { label: "IRR Proyeksi (5 Tahun)", value: "22,6%", sub: "sangat atraktif vs deposito", icon: Star, color: "bg-yellow-50 text-yellow-500" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.06 }}
                className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-stone-500">{item.label}</div>
                  <div className="text-[10px] text-stone-400">{item.sub}</div>
                </div>
                <div className="text-sm font-bold text-stone-900 shrink-0">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
