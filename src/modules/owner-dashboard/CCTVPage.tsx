import { motion } from "framer-motion"
import { Camera, Radio, AlertCircle, CheckCircle2, Activity, Eye } from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { cctvCameras, accessLogs } from "../../data/dummy"
import { CCTVScene } from "../../components/cctv/CCTVScene"

function CCTVCard({ camera, delay }: { camera: typeof cctvCameras[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="card-base overflow-hidden group cursor-pointer"
    >
      {/* Camera preview area */}
      <div className="relative aspect-video bg-zinc-900 overflow-hidden">
        {/* Animated CCTV scene */}
        <CCTVScene cameraId={camera.id} />

        <div className="absolute inset-0">
          {/* Corner brackets */}
          {[["top-2 left-2", "border-t border-l"], ["top-2 right-2", "border-t border-r"], ["bottom-2 left-2", "border-b border-l"], ["bottom-2 right-2", "border-b border-r"]].map(([pos, borders]) => (
            <div key={pos} className={`absolute ${pos} w-5 h-5 ${borders} border-amber-400/60 z-20`} />
          ))}
        </div>

        {/* Status indicator */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-30">
          <div className={`w-2 h-2 rounded-full ${camera.status === "recording" ? "bg-red-500 animate-pulse" : camera.status === "online" ? "bg-emerald-400" : "bg-zinc-500"}`} />
          <span className="text-[10px] font-medium text-white/90">{camera.status === "recording" ? "REC" : camera.status === "online" ? "LIVE" : "OFFLINE"}</span>
        </div>

        {/* Camera ID */}
        <div className="absolute top-2.5 right-2.5 z-30">
          <span className="text-[10px] text-white/60 font-mono">{camera.id.toUpperCase()}</span>
        </div>

        {/* Timestamp */}
        <div className="absolute bottom-2 left-2 text-[10px] text-white/50 font-mono z-30">
          {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium">
            <Eye size={13} />
            Tampilkan Penuh
          </button>
        </div>
      </div>

      {/* Card info */}
      <div className="p-3.5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-900">{camera.name}</div>
            <div className="text-xs text-zinc-400 mt-0.5">{camera.location}</div>
          </div>
          <Badge variant={camera.status === "recording" ? "danger" : camera.status === "online" ? "success" : "default"}>
            {camera.status === "recording" ? "Recording" : camera.status === "online" ? "Online" : "Offline"}
          </Badge>
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100">
          <div className="flex items-center gap-1.5">
            <Activity size={11} className="text-zinc-400" />
            <span className="text-[11px] text-zinc-400">{camera.lastEvent}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function CCTVPage() {
  const online = cctvCameras.filter(c => c.status !== "offline").length
  const recording = cctvCameras.filter(c => c.status === "recording").length

  return (
    <div className="p-6 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
          <span>Atlas Arcadia</span><span>/</span><span className="text-zinc-700">CCTV Monitor</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">CCTV Monitoring</h1>
            <p className="text-sm text-zinc-500 mt-0.5">Pantau seluruh area properti secara real-time</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-red-600">{recording} Recording</span>
            </div>
            <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-600">{online}/{cctvCameras.length} Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Kamera", value: cctvCameras.length, icon: Camera, color: "bg-zinc-100 text-zinc-500" },
          { label: "Recording", value: recording, icon: Radio, color: "bg-red-50 text-red-500" },
          { label: "Online", value: online, icon: CheckCircle2, color: "bg-emerald-50 text-emerald-500" },
          { label: "Insiden Hari Ini", value: 1, icon: AlertCircle, color: "bg-amber-50 text-amber-500" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card-base p-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon size={18} />
            </div>
            <div className="text-2xl font-bold text-zinc-900">{s.value}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Camera grid */}
      <div>
        <h2 className="text-sm font-semibold text-zinc-900 mb-3">Feed Kamera</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {cctvCameras.map((cam, i) => (
            <CCTVCard key={cam.id} camera={cam} delay={0.1 + i * 0.07} />
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="card-base p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-zinc-900">Log Aktivitas Keamanan</h2>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-emerald-600 font-medium">Live</span>
          </div>
        </div>
        <div className="space-y-3">
          {accessLogs.map((log) => (
            <div key={log.id} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${log.status === "granted" ? "bg-emerald-50" : "bg-red-50"}`}>
                {log.status === "granted"
                  ? <CheckCircle2 size={15} className="text-emerald-500" />
                  : <AlertCircle size={15} className="text-red-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-zinc-900">{log.resident}</div>
                <div className="text-xs text-zinc-400">{log.method} · {log.location}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-zinc-500">{log.time}</div>
                <Badge variant={log.status === "granted" ? "success" : "danger"} className="mt-0.5">
                  {log.status === "granted" ? "Akses Diberikan" : "Ditolak"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
