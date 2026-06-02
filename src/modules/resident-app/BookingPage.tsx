import { motion } from "framer-motion"
import { useState } from "react"
import { Dumbbell, Waves, Users2, CheckCircle2, Clock, Calendar } from "lucide-react"
import { facilityBookings } from "../../data/dummy"
import { Badge } from "../../components/ui/badge"

const facilities = [
  { id: "gym", icon: Dumbbell, label: "Gym & Fitness", capacity: 20, available: 12, color: "bg-zinc-900 text-white" },
  { id: "pool", icon: Waves, label: "Swimming Pool", capacity: 30, available: 18, color: "bg-blue-600 text-white" },
  { id: "social", icon: Users2, label: "Social Hub", capacity: 50, available: 35, color: "bg-amber-500 text-white" },
]

const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
const takenSlots = ["07:00", "09:00", "17:00", "18:00"]

export function BookingPage() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState(3)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [booked, setBooked] = useState(false)

  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(2026, 5, i + 2)
    return { day: d.toLocaleDateString("id-ID", { weekday: "short" }), date: i + 2 }
  })

  const handleBook = () => {
    if (!selectedFacility || !selectedSlot) return
    setBooked(true)
    setTimeout(() => { setBooked(false); setSelectedFacility(null); setSelectedSlot(null) }, 2500)
  }

  return (
    <div className="pb-4">
      {booked && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-zinc-900/80 z-50 flex items-center justify-center p-8">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Booking Berhasil!</h3>
            <p className="text-sm text-zinc-500 mt-1">Konfirmasi dikirim ke email Anda</p>
          </motion.div>
        </motion.div>
      )}

      <div className="px-4 pt-4">
        <h2 className="text-base font-bold text-zinc-900">Booking Fasilitas</h2>
        <p className="text-xs text-zinc-500 mt-0.5">Reservasi fasilitas properti secara mudah</p>
      </div>

      {/* Facility cards */}
      <div className="px-4 mt-4 space-y-2.5">
        {facilities.map((fac, i) => (
          <motion.button key={fac.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            onClick={() => setSelectedFacility(selectedFacility === fac.id ? null : fac.id)}
            className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
              selectedFacility === fac.id ? "border-amber-300 shadow-sm bg-amber-50/30" : "bg-white border-zinc-100"
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${fac.color}`}>
              <fac.icon size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-zinc-900">{fac.label}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <div className="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${(fac.available / fac.capacity) * 100}%` }} />
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400">{fac.available}/{fac.capacity} slot</span>
              </div>
            </div>
            <Badge variant={fac.available > 5 ? "success" : "warning"}>
              {fac.available > 5 ? "Tersedia" : "Hampir Penuh"}
            </Badge>
          </motion.button>
        ))}
      </div>

      {/* Date picker */}
      {selectedFacility && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
          <div className="px-4 mt-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Calendar size={14} className="text-zinc-500" />
              <h3 className="text-xs font-semibold text-zinc-700">Pilih Tanggal</h3>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {days.map((d) => (
                <button key={d.date} onClick={() => setSelectedDate(d.date)}
                  className={`shrink-0 flex flex-col items-center px-3.5 py-2.5 rounded-xl border transition-all ${
                    selectedDate === d.date ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-100 text-zinc-600"
                  }`}>
                  <span className="text-[10px] font-medium">{d.day}</span>
                  <span className="text-sm font-bold mt-0.5">{d.date}</span>
                </button>
              ))}
            </div>

            {/* Time slots */}
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-zinc-500" />
                <h3 className="text-xs font-semibold text-zinc-700">Pilih Waktu</h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => {
                  const taken = takenSlots.includes(slot)
                  const selected = selectedSlot === slot
                  return (
                    <button key={slot} disabled={taken} onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        taken ? "bg-zinc-50 text-zinc-300 border-zinc-100 cursor-not-allowed" :
                        selected ? "bg-zinc-900 border-zinc-900 text-white" :
                        "bg-white border-zinc-100 text-zinc-700 hover:border-zinc-300"
                      }`}>
                      {slot}
                    </button>
                  )
                })}
              </div>
            </div>

            {selectedSlot && (
              <motion.button initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                onClick={handleBook}
                className="w-full mt-4 py-3.5 gradient-gold rounded-2xl text-white font-bold text-sm shadow-gold active:scale-95 transition-transform">
                Konfirmasi Booking — {selectedSlot}
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* Upcoming bookings */}
      <div className="px-4 mt-5">
        <h3 className="text-xs font-semibold text-zinc-700 mb-2.5">Booking Saya</h3>
        <div className="space-y-2">
          {facilityBookings.slice(0, 3).map((bk, i) => (
            <motion.div key={bk.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-zinc-100">
              <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                {bk.facility.includes("Gym") ? <Dumbbell size={16} className="text-zinc-600" />
                  : bk.facility.includes("Pool") ? <Waves size={16} className="text-blue-500" />
                  : <Users2 size={16} className="text-amber-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-zinc-900 truncate">{bk.facility}</div>
                <div className="text-[10px] text-zinc-400">{bk.date} · {bk.time}</div>
              </div>
              <Badge variant={bk.status === "confirmed" ? "success" : "warning"}>
                {bk.status === "confirmed" ? "Konfirmasi" : "Pending"}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
