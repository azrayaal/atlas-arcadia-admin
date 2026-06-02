import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Wifi, Scan, QrCode, CheckCircle2, Clock, MapPin } from "lucide-react"
import { accessLogs } from "../../data/dummy"
import { Badge } from "../../components/ui/badge"

const accessMethods = [
  {
    id: "nfc",
    icon: Wifi,
    label: "NFC Access",
    desc: "Dekatkan ponsel ke panel akses",
    color: "bg-zinc-900",
    iconColor: "text-white",
  },
  {
    id: "faceid",
    icon: Scan,
    label: "Face ID Gate",
    desc: "Gunakan pengenalan wajah AI",
    color: "bg-amber-500",
    iconColor: "text-white",
  },
  {
    id: "qr",
    icon: QrCode,
    label: "QR Code",
    desc: "Scan QR untuk akses fasilitas",
    color: "bg-blue-600",
    iconColor: "text-white",
  },
]

function NFCAnimation() {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="relative w-28 h-28">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-amber-400"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1.8, delay: i * 0.6, repeat: Infinity }}
          />
        ))}
        <div className="absolute inset-0 rounded-full bg-zinc-900 flex items-center justify-center">
          <Wifi size={36} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export function AccessPage() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null)
  const [accessGranted, setAccessGranted] = useState(false)

  const handleTapAccess = () => {
    setTimeout(() => {
      setAccessGranted(true)
      setTimeout(() => setAccessGranted(false), 2500)
    }, 800)
  }

  return (
    <div className="pb-4">
      <div className="px-4 pt-4">
        <h2 className="text-base font-bold text-zinc-900">Smart Access</h2>
        <p className="text-xs text-zinc-500 mt-0.5">Pilih metode akses untuk membuka pintu</p>
      </div>

      {/* Access methods */}
      <div className="px-4 mt-4 space-y-2.5">
        {accessMethods.map((method, i) => (
          <motion.button
            key={method.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setActiveMethod(activeMethod === method.id ? null : method.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${
              activeMethod === method.id
                ? "border-amber-300 bg-amber-50/50 shadow-sm"
                : "bg-white border-zinc-100"
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${method.color}`}>
              <method.icon size={20} className={method.iconColor} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-zinc-900">{method.label}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{method.desc}</div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              activeMethod === method.id ? "border-amber-500 bg-amber-500" : "border-zinc-300"
            }`}>
              {activeMethod === method.id && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Active access panel */}
      <AnimatePresence>
        {activeMethod === "nfc" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-4 p-5 bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <p className="text-center text-xs text-zinc-400 mb-1">Mode NFC Aktif</p>
            <p className="text-center text-sm font-semibold text-white">Dekatkan ke Panel Akses</p>
            <NFCAnimation />
            <AnimatePresence>
              {accessGranted && (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-4 bg-emerald-500 rounded-2xl flex flex-col items-center justify-center z-10">
                  <CheckCircle2 size={48} className="text-white mb-2" />
                  <span className="text-white font-semibold">Akses Diberikan!</span>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={handleTapAccess}
              className="w-full mt-2 py-3 rounded-xl gradient-gold text-white font-semibold text-sm shadow-gold active:scale-95 transition-transform"
            >
              Tap untuk Akses
            </button>
          </motion.div>
        )}

        {activeMethod === "qr" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-4 p-5 bg-white rounded-2xl border border-zinc-100 overflow-hidden"
          >
            <p className="text-center text-xs text-zinc-500 mb-3">QR Code Akses Social Hub</p>
            <div className="w-40 h-40 mx-auto bg-zinc-900 rounded-xl p-3">
              <div className="w-full h-full grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? "bg-white" : "bg-transparent"}`} />
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-zinc-400 mt-3">QR valid untuk 5 menit</p>
            <div className="mt-2 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 300 }}
                className="h-full bg-amber-500 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Access history */}
      <div className="px-4 mt-5">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Riwayat Akses Hari Ini</h3>
        <div className="space-y-2">
          {accessLogs.filter(l => l.resident === "Rizky Maulana" || l.resident === "Siti Aminah").map((log, i) => (
            <motion.div key={log.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-zinc-100">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${log.status === "granted" ? "bg-emerald-50" : "bg-red-50"}`}>
                {log.status === "granted"
                  ? <CheckCircle2 size={14} className="text-emerald-500" />
                  : <Scan size={14} className="text-red-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-zinc-900">{log.method}</span>
                  <span className="text-[10px] text-zinc-400">·</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-zinc-400" />
                    <span className="text-[10px] text-zinc-400">{log.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Clock size={10} className="text-zinc-300" />
                  <span className="text-[10px] text-zinc-400">{log.time} WIB</span>
                </div>
              </div>
              <Badge variant={log.status === "granted" ? "success" : "danger"}>
                {log.status === "granted" ? "Berhasil" : "Ditolak"}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
