import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Smartphone, TrendingUp, ArrowRight, Zap, Shield, Users, Building2 } from "lucide-react"

const modules = [
  {
    path: "/owner",
    icon: Building2,
    badge: "Management",
    title: "Owner Dashboard",
    desc: "Panel manajemen operasional properti dengan monitoring pendapatan, hunian, CCTV, dan data penghuni secara real-time.",
    features: ["Revenue monitoring", "Occupancy analytics", "CCTV surveillance", "Resident management"],
    color: "from-zinc-800 to-zinc-900",
    accent: "bg-zinc-700",
    cta: "Buka Dashboard",
  },
  {
    path: "/resident",
    icon: Smartphone,
    badge: "Mobile App",
    title: "Resident App",
    desc: "Aplikasi super app untuk penghuni dengan akses NFC/Face ID, booking fasilitas, program loyalitas, dan tagihan digital.",
    features: ["Smart NFC Access", "Facility booking", "Loyalty rewards", "Digital billing"],
    color: "from-amber-600 to-amber-700",
    accent: "bg-amber-500",
    cta: "Buka App",
  },
  {
    path: "/investor",
    icon: TrendingUp,
    badge: "Investor",
    title: "Investor Dashboard",
    desc: "Dashboard presentasi eksklusif untuk investor dan tim sales dengan proyeksi ROI, analisis bisnis, dan showcase ekosistem.",
    features: ["ROI projection", "Business analytics", "Smart ecosystem", "Growth visualization"],
    color: "from-slate-700 to-slate-900",
    accent: "bg-slate-600",
    cta: "Lihat Presentasi",
  },
]

const highlights = [
  { icon: Zap, label: "Smart Technology", desc: "NFC, Face ID, AI CCTV" },
  { icon: Shield, label: "Security First", desc: "24/7 monitoring terintegrasi" },
  { icon: Users, label: "Resident Experience", desc: "Super app untuk penghuni" },
  { icon: TrendingUp, label: "Data-Driven", desc: "Analytics & dashboard real-time" },
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212,175,55,0.08) 0%, transparent 50%)"
        }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center mb-8">
              <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-20 w-auto object-contain drop-shadow-2xl" />
            </div>
            <div className="text-xs font-bold tracking-widest text-amber-400 mb-4">SMART LIVING POC</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Property Intelligence<br />
              <span className="text-gradient-gold">Platform</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Proof of Concept — Ekosistem properti residensial premium terintegrasi teknologi smart living. 
              Tiga pengalaman berbeda dalam satu platform.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <h.icon size={14} className="text-amber-400" />
                <span className="text-xs font-medium text-zinc-300">{h.label}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-500">{h.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Module cards */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white">Pilih Perspektif</h2>
          <p className="text-zinc-500 mt-2 text-sm">Tiga modul terpisah untuk pengalaman berbeda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.path}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${mod.color} p-6 border border-white/10 overflow-hidden h-full`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-black/20 translate-y-1/3 -translate-x-1/3" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${mod.accent} flex items-center justify-center`}>
                      <mod.icon size={22} className="text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-white/50 tracking-wider border border-white/20 px-2.5 py-1 rounded-full">
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">{mod.desc}</p>

                  <div className="space-y-2 mb-6">
                    {mod.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-xs text-white/70">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={mod.path}
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl text-sm font-semibold text-white transition-all group-hover:border-white/30"
                  >
                    <span>{mod.cta}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="text-center mt-16 pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-600">
            Atlas Arcadia Smart Living POC · Untuk keperluan investor presentation & sales pitch · Semua data bersifat simulasi
          </p>
        </motion.div>
      </div>
    </div>
  )
}
