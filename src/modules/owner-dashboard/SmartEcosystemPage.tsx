import { motion } from "framer-motion"
import { Wifi, Scan, Camera, Star, CreditCard, Calendar, Zap, Lightbulb, Shield, CheckCircle2 } from "lucide-react"
import { KPICard } from "../../components/cards/KPICard"
import { smartEcosystemFeatures } from "../../data/dummy"

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={20} />,
  Scan: <Scan size={20} />,
  Camera: <Camera size={20} />,
  Star: <Star size={20} />,
  CreditCard: <CreditCard size={20} />,
  Calendar: <Calendar size={20} />,
  Zap: <Zap size={20} />,
  Lightbulb: <Lightbulb size={20} />,
}

const categoryColors: Record<string, string> = {
  Security: "bg-red-50 text-red-600 border-red-100",
  Resident: "bg-amber-50 text-amber-700 border-amber-100",
  Finance: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Infrastructure: "bg-blue-50 text-blue-700 border-blue-100",
}

const categoryIconBg: Record<string, string> = {
  Security: "bg-red-50 text-red-500",
  Resident: "bg-amber-50 text-amber-600",
  Finance: "bg-emerald-50 text-emerald-600",
  Infrastructure: "bg-blue-50 text-blue-600",
}

const techStack = [
  { name: "NFC / RFID", desc: "ISO 14443-A/B compatible", category: "Access" },
  { name: "Face Recognition AI", desc: "99.7% accuracy, <300ms latency", category: "Security" },
  { name: "4K IP Camera", desc: "32 titik, AI motion detection", category: "Surveillance" },
  { name: "Fiber Optic 1Gbps", desc: "Dedicated bandwidth per unit", category: "Network" },
  { name: "IoT Energy Gateway", desc: "Monitoring konsumsi real-time", category: "Smart Energy" },
  { name: "Cloud PMS", desc: "Automated billing & reporting", category: "Management" },
]

const advantages = [
  ["Smart Access NFC & Face ID", "Properti konvensional: kunci fisik manual"],
  ["Monitoring operasional real-time", "Laporan manual mingguan/bulanan"],
  ["Loyalty ecosystem terintegrasi", "Tidak ada program loyalitas resident"],
  ["AI CCTV dengan anomaly detection", "CCTV pasif tanpa analitik"],
  ["Automated billing & digital payment", "Tagihan manual & pembayaran tunai"],
  ["Resident super app", "Komunikasi informal via WhatsApp"],
]

export function SmartEcosystemPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span>
          <span className="text-stone-500">Potensi Bisnis</span><span>/</span>
          <span className="text-stone-700">Smart Ecosystem</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900">Smart Living Ecosystem</h1>
        <p className="text-sm text-stone-500 mt-0.5">Infrastruktur teknologi terintegrasi sebagai keunggulan kompetitif Atlas Arcadia</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label="Smart Access / Hari" value="1.284+" change={8.7} icon={<Wifi size={18} />} color="gold" delay={0} />
        <KPICard label="Uptime Sistem" value="99.9%" icon={<Zap size={18} />} color="success" delay={0.08} />
        <KPICard label="CCTV Coverage" value="100%" icon={<Camera size={18} />} color="default" delay={0.16} />
        <KPICard label="Active Users App" value="235" change={4.1} icon={<Star size={18} />} color="default" delay={0.24} />
      </div>

      {/* Feature cards */}
      <div>
        <h2 className="text-sm font-semibold text-stone-800 mb-3">Fitur Teknologi Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {smartEcosystemFeatures.map((feat, i) => (
            <motion.div key={feat.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="card-base p-5 group hover:shadow-card-hover transition-all cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${categoryIconBg[feat.category]}`}>
                {iconMap[feat.icon]}
              </div>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-semibold mb-2.5 ${categoryColors[feat.category]}`}>
                {feat.category}
              </span>
              <h3 className="text-sm font-bold text-stone-800 mb-1.5">{feat.name}</h3>
              <p className="text-xs text-stone-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech stack + competitive advantage side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="card-base p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-stone-800">Technology Stack</h2>
              <p className="text-xs text-stone-400 mt-0.5">Komponen infrastruktur yang digunakan</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl">
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span className="text-[10px] font-semibold text-emerald-700">Enterprise Grade</span>
            </div>
          </div>
          <div className="space-y-2">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.05 }}
                className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0">
                  <Shield size={14} className="text-stone-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-stone-800">{tech.name}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">{tech.desc}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-white border border-stone-200 rounded-md text-stone-500 shrink-0">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-stone-800">Keunggulan vs Properti Konvensional</h2>
            <p className="text-xs text-stone-400 mt-0.5">Diferensiasi kompetitif yang memperkuat nilai investasi</p>
          </div>
          <div className="space-y-2.5">
            {advantages.map(([advantage, comparison], i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.05 }}
                className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-stone-800">{advantage}</div>
                  <div className="text-[10px] text-stone-300 mt-0.5 line-through">{comparison}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
