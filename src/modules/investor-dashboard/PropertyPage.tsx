import { motion } from "framer-motion"
import { Building2, MapPin, Ruler, Star, CheckCircle2 } from "lucide-react"

const specs = [
  { label: "Total Unit", value: "248 Unit" },
  { label: "Tower", value: "Tower A & B" },
  { label: "Jumlah Lantai", value: "12 Lantai" },
  { label: "Luas Lahan", value: "8.200 m²" },
  { label: "Luas Total GFA", value: "32.400 m²" },
  { label: "Parkir", value: "Basement 2 Lantai" },
]

const unitTypes = [
  { type: "Studio", size: "28 m²", count: 80, price: "Rp 3,5–3,8M/bln", occupancy: 96 },
  { type: "1 Bedroom", size: "36 m²", count: 72, price: "Rp 4,8–5,2M/bln", occupancy: 95 },
  { type: "2 Bedroom", size: "52 m²", count: 64, price: "Rp 7,2–7,8M/bln", occupancy: 94 },
  { type: "3 Bedroom", size: "72 m²", count: 32, price: "Rp 9,8–11M/bln", occupancy: 91 },
]

const amenities = [
  "Rooftop Sky Garden", "Olympic Swimming Pool", "Fitness Center 24H",
  "Social Hub & Co-working", "Minimarket", "Cafe & Restaurant",
  "Laundry Service", "Smart Security System", "EV Charging Station",
  "High-Speed Fiber 1Gbps", "CCTV 32 Titik AI", "Concierge Service",
]

const location = [
  { label: "Pusat Kota", value: "5 menit" },
  { label: "Stasiun MRT", value: "800 meter" },
  { label: "Mall", value: "1,2 km" },
  { label: "Rumah Sakit", value: "1,5 km" },
  { label: "Kampus/Perkantoran", value: "2 km" },
]

export function PropertyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
          <Building2 size={13} className="text-amber-400" />
          <span className="text-xs font-semibold text-amber-400 tracking-wide">PROPERTY OVERVIEW</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Atlas Arcadia — Property Specification</h1>
        <p className="text-zinc-400 mt-2 text-sm">Detail spesifikasi properti dan informasi investasi</p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main spec card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold shrink-0">
              <Building2 size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Atlas Arcadia</h2>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={13} className="text-amber-400" />
                <span className="text-sm text-zinc-400">Jakarta Selatan, Indonesia</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={13} className="text-amber-400" fill="#f59e0b" />)}
                <span className="text-xs text-zinc-500 ml-1">Premium Residence</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="text-xs text-zinc-500 mb-1">{spec.label}</div>
                <div className="text-sm font-bold text-white">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} className="text-amber-400" />
            <h2 className="text-sm font-semibold text-white">Aksesibilitas Lokasi</h2>
          </div>
          <div className="space-y-3">
            {location.map((loc) => (
              <div key={loc.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-xs text-zinc-400">{loc.label}</span>
                <span className="text-xs font-bold text-amber-400">{loc.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <div className="text-xs font-semibold text-amber-400 mb-1">Prime Location</div>
            <div className="text-xs text-zinc-500">Lokasi strategis di koridor bisnis premium dengan akses transportasi publik terintegrasi</div>
          </div>
        </motion.div>
      </div>

      {/* Unit types */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <h2 className="text-lg font-bold text-white mb-5">Tipe Unit & Harga</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {unitTypes.map((unit, i) => (
            <motion.div key={unit.type} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.06 }}
              className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <Ruler size={14} className="text-amber-400" />
                </div>
                <span className="text-sm font-bold text-white">{unit.type}</span>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-1">{unit.count}</div>
              <div className="text-xs text-zinc-500 mb-3">Unit tersedia</div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Luas</span>
                  <span className="text-zinc-300 font-medium">{unit.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Harga Sewa</span>
                  <span className="text-zinc-300 font-medium">{unit.price}</span>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500">Occupancy</span>
                    <span className="text-emerald-400 font-bold">{unit.occupancy}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${unit.occupancy}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.06 }}
                      className="h-full rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Amenities */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <h2 className="text-lg font-bold text-white mb-5">Fasilitas & Amenitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {amenities.map((am, i) => (
            <motion.div key={am} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.04 }}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
              <span className="text-sm text-zinc-300">{am}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
