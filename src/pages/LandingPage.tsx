import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Building2, Smartphone, ArrowRight, Zap, Shield, Users, TrendingUp, PieChart, Cpu } from "lucide-react"

const modules = [
  {
    path: "/owner",
    icon: Building2,
    badge: "Management & Investor",
    title: "Owner Dashboard",
    desc: "Panel manajemen operasional lengkap dengan monitoring revenue, hunian, CCTV, penghuni, dan analisis potensi bisnis untuk investor.",
    features: [
      "Revenue & financial monitoring",
      "Occupancy analytics",
      "CCTV surveillance",
      "Business units & ROI analysis",
      "Smart ecosystem showcase",
      "Property investment data",
    ],
    color: "from-stone-700 to-stone-900",
    accent: "bg-stone-600",
    cta: "Buka Dashboard",
    highlight: true,
  },
  {
    path: "/resident",
    icon: Smartphone,
    badge: "Mobile App",
    title: "Resident App",
    desc: "Aplikasi super app untuk penghuni dengan akses NFC/Face ID, booking fasilitas, program loyalitas, dan tagihan digital.",
    features: [
      "Smart NFC & Face ID access",
      "Facility booking calendar",
      "Loyalty rewards ecosystem",
      "Digital billing & payment",
    ],
    color: "from-amber-600 to-amber-800",
    accent: "bg-amber-500",
    cta: "Buka App",
    highlight: false,
  },
]

const highlights = [
  { icon: Zap, label: "Smart Technology", desc: "NFC, Face ID, AI CCTV" },
  { icon: Shield, label: "Security First", desc: "24/7 monitoring" },
  { icon: Users, label: "Resident Experience", desc: "Super app terintegrasi" },
  { icon: TrendingUp, label: "Investor Ready", desc: "Data & proyeksi ROI" },
]

const investorFeatures = [
  { icon: PieChart, label: "Business Units", desc: "Analisis revenue & margin per unit bisnis" },
  { icon: Cpu, label: "Smart Ecosystem", desc: "Showcase teknologi & keunggulan kompetitif" },
  { icon: Building2, label: "Property Intel", desc: "Spesifikasi, lokasi, dan proyeksi investasi" },
  { icon: TrendingUp, label: "ROI Projection", desc: "IRR, yield, dan capital gain 5 tahun" },
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

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center mb-8">
              <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-20 w-auto object-contain drop-shadow-2xl" />
            </div>
            <div className="text-xs font-bold tracking-widest text-amber-400 mb-4">SMART LIVING POC</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Property Intelligence<br />
              <span className="text-gradient-gold">Platform</span>
            </h1>
            <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
              Ekosistem properti residensial premium terintegrasi teknologi smart living.
              Dua pengalaman berbeda dalam satu platform.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <h.icon size={13} className="text-amber-400" />
                <span className="text-xs font-medium text-zinc-300">{h.label}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-xs text-zinc-500">{h.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Module cards */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-center mb-10">
          <h2 className="text-xl font-bold text-white">Pilih Perspektif</h2>
          <p className="text-zinc-500 mt-1.5 text-sm">Dua modul terpisah untuk pengalaman berbeda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.path}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${mod.color} p-6 border border-white/10 overflow-hidden h-full flex flex-col`}>
                {mod.highlight && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[10px] font-bold text-amber-400">Investor View Included</span>
                  </div>
                )}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-black/20 translate-y-1/3 -translate-x-1/3" />

                <div className="relative flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${mod.accent} flex items-center justify-center shrink-0`}>
                      <mod.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white/50 tracking-wider">{mod.badge}</span>
                      <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed mb-4">{mod.desc}</p>

                  <div className="space-y-1.5 mb-5">
                    {mod.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
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

        {/* Investor section highlights */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
          className="mt-10 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-3">
                <TrendingUp size={12} className="text-amber-400" />
                <span className="text-xs font-semibold text-amber-400">INVESTOR & SALES READY</span>
              </div>
              <h3 className="text-sm font-bold text-white">Fitur Investor tersedia di Owner Dashboard</h3>
              <p className="text-xs text-zinc-500 mt-1">Bagian "Potensi Bisnis" menyediakan semua data untuk presentasi investor</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {investorFeatures.map((feat, i) => (
                <motion.div key={feat.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 + i * 0.06 }}
                  className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center mx-auto mb-2">
                    <feat.icon size={15} className="text-amber-400" />
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{feat.label}</div>
                  <div className="text-[10px] text-zinc-500 leading-tight">{feat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-center mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-700">
            Atlas Arcadia Smart Living POC · Investor presentation & sales pitch · Semua data bersifat simulasi
          </p>
        </motion.div>
      </div>
    </div>
  )
}
