import { motion } from "framer-motion"
import { Wifi, Scan, Camera, Star, CreditCard, Calendar, Zap, Lightbulb, Shield, CheckCircle2 } from "lucide-react"
import { smartEcosystemFeatures } from "../../data/dummy"

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={22} />,
  Scan: <Scan size={22} />,
  Camera: <Camera size={22} />,
  Star: <Star size={22} />,
  CreditCard: <CreditCard size={22} />,
  Calendar: <Calendar size={22} />,
  Zap: <Zap size={22} />,
  Lightbulb: <Lightbulb size={22} />,
}

const categoryColors: Record<string, string> = {
  Security: "bg-red-500/20 text-red-400 border-red-500/20",
  Resident: "bg-amber-500/20 text-amber-400 border-amber-500/20",
  Finance: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
  Infrastructure: "bg-blue-500/20 text-blue-400 border-blue-500/20",
}

const techStack = [
  { name: "NFC / RFID", desc: "ISO 14443-A/B compatible", category: "Access" },
  { name: "Face Recognition AI", desc: "99.7% accuracy, <300ms", category: "Security" },
  { name: "4K IP Camera", desc: "32 titik, AI motion detection", category: "Surveillance" },
  { name: "Fiber Optic 1Gbps", desc: "Dedicated per unit", category: "Network" },
  { name: "IoT Gateway", desc: "Monitoring energi real-time", category: "Smart Energy" },
  { name: "Cloud PMS", desc: "Automated billing & reporting", category: "Management" },
]

const metrics = [
  { label: "Smart Access Transactions / Hari", value: "1.284+", icon: Wifi },
  { label: "Uptime Sistem", value: "99.9%", icon: Zap },
  { label: "CCTV Coverage", value: "100%", icon: Camera },
  { label: "Resident App Downloads", value: "235", icon: Star },
]

export function SmartEcosystemPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
          <Zap size={13} className="text-blue-400" />
          <span className="text-xs font-semibold text-blue-400 tracking-wide">TECHNOLOGY PLATFORM</span>
        </div>
        <h1 className="text-3xl font-bold text-white">Smart Living Ecosystem</h1>
        <p className="text-zinc-400 mt-2 text-sm max-w-2xl">
          Infrastruktur teknologi terintegrasi yang menjadi keunggulan kompetitif Atlas Arcadia dibanding properti konvensional
        </p>
      </motion.div>

      {/* Metrics bar */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
              <m.icon size={18} className="text-amber-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{m.value}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{m.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Feature cards */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Fitur Teknologi Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {smartEcosystemFeatures.map((feat, i) => (
            <motion.div key={feat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 group hover:border-amber-500/30 transition-all cursor-default">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4 group-hover:bg-amber-500/25 transition-colors">
                <span className="text-amber-400">{iconMap[feat.icon]}</span>
              </div>
              <div className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-semibold mb-3 ${categoryColors[feat.category]}`}>
                {feat.category}
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{feat.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-white">Technology Stack</h2>
            <p className="text-sm text-zinc-500 mt-0.5">Komponen infrastruktur teknologi yang digunakan</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Enterprise Grade</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {techStack.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + i * 0.05 }}
              className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Shield size={14} className="text-zinc-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{tech.name}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{tech.desc}</div>
              </div>
              <span className="ml-auto text-[10px] px-2 py-0.5 bg-white/10 rounded-md text-zinc-400 shrink-0">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Competitive advantage */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="border border-amber-500/20 rounded-3xl p-8 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h2 className="text-xl font-bold text-white mb-6">Keunggulan Kompetitif vs Properti Konvensional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ["Smart Access NFC & Face ID", "Properti konvensional: kunci manual"],
            ["Monitoring operasional real-time", "Laporan manual bulanan"],
            ["Loyalty ecosystem terintegrasi", "Tidak ada program loyalitas"],
            ["AI CCTV dengan anomaly detection", "CCTV pasif tanpa analitik"],
            ["Automated billing & payment", "Tagihan manual & cash"],
            ["Resident super app", "Komunikasi via WhatsApp"],
          ].map(([advantage, comparison], i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 + i * 0.05 }}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
              <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white">{advantage}</div>
                <div className="text-xs text-zinc-600 mt-0.5 line-through">{comparison}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
