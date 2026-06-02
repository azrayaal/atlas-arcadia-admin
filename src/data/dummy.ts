import type { Unit, Resident, FacilityBooking, CCTVCamera, Transaction, SmartAccessLog, Bill, Notification } from "../types"

export const revenueByMonth = [
  { month: "Jan", rental: 820, socialHub: 120, laundry: 45, minimarket: 95, cafe: 75 },
  { month: "Feb", rental: 840, socialHub: 135, laundry: 48, minimarket: 98, cafe: 80 },
  { month: "Mar", rental: 855, socialHub: 148, laundry: 52, minimarket: 105, cafe: 88 },
  { month: "Apr", rental: 880, socialHub: 162, laundry: 55, minimarket: 112, cafe: 92 },
  { month: "Mei", rental: 920, socialHub: 178, laundry: 60, minimarket: 120, cafe: 98 },
  { month: "Jun", rental: 945, socialHub: 190, laundry: 63, minimarket: 128, cafe: 105 },
]

export const occupancyTrend = [
  { month: "Jan", rate: 84 },
  { month: "Feb", rate: 87 },
  { month: "Mar", rate: 89 },
  { month: "Apr", rate: 91 },
  { month: "Mei", rate: 94 },
  { month: "Jun", rate: 96 },
]

export const revenueChannels = [
  { name: "Rental", value: 945, color: "#1a1a2e", pct: 58 },
  { name: "Social Hub", value: 190, color: "#d4af37", pct: 12 },
  { name: "Cafe", value: 105, color: "#6b7280", pct: 6 },
  { name: "Minimarket", value: 128, color: "#9ca3af", pct: 8 },
  { name: "Laundry", value: 63, color: "#d1d5db", pct: 4 },
  { name: "Lainnya", value: 189, color: "#e5e7eb", pct: 12 },
]

export const investorProjection = [
  { year: "2024", revenue: 1200, projected: 1200 },
  { year: "2025", revenue: 1650, projected: 1650 },
  { year: "2026", revenue: 1980, projected: 2100 },
  { year: "2027", revenue: null, projected: 2580 },
  { year: "2028", revenue: null, projected: 3120 },
  { year: "2029", revenue: null, projected: 3890 },
]

export const roiData = [
  { year: "Y1", roi: 8.2 },
  { year: "Y2", roi: 11.5 },
  { year: "Y3", roi: 14.8 },
  { year: "Y4", roi: 18.2 },
  { year: "Y5", roi: 22.6 },
]

export const units: Unit[] = [
  { id: "u1", number: "0101", floor: 1, type: "Studio", size: 28, status: "occupied", resident: "Rizky Maulana", rentPrice: 3500000, leaseEnd: "2026-12-31" },
  { id: "u2", number: "0102", floor: 1, type: "1BR", size: 36, status: "occupied", resident: "Siti Aminah", rentPrice: 4800000, leaseEnd: "2027-03-15" },
  { id: "u3", number: "0103", floor: 1, type: "Studio", size: 28, status: "vacant", rentPrice: 3500000 },
  { id: "u4", number: "0104", floor: 1, type: "2BR", size: 52, status: "occupied", resident: "Budi Santoso", rentPrice: 7200000, leaseEnd: "2026-09-30" },
  { id: "u5", number: "0201", floor: 2, type: "Studio", size: 28, status: "occupied", resident: "Dewi Rahayu", rentPrice: 3600000, leaseEnd: "2027-01-20" },
  { id: "u6", number: "0202", floor: 2, type: "1BR", size: 36, status: "occupied", resident: "Ahmad Fauzi", rentPrice: 4900000, leaseEnd: "2026-11-01" },
  { id: "u7", number: "0203", floor: 2, type: "2BR", size: 52, status: "maintenance", rentPrice: 7200000 },
  { id: "u8", number: "0204", floor: 2, type: "3BR", size: 72, status: "occupied", resident: "Kartika Sari", rentPrice: 9800000, leaseEnd: "2027-06-30" },
  { id: "u9", number: "0301", floor: 3, type: "Studio", size: 28, status: "occupied", resident: "Yusuf Ibrahim", rentPrice: 3700000, leaseEnd: "2026-08-15" },
  { id: "u10", number: "0302", floor: 3, type: "1BR", size: 36, status: "vacant", rentPrice: 5000000 },
  { id: "u11", number: "0303", floor: 3, type: "2BR", size: 52, status: "occupied", resident: "Nadia Putri", rentPrice: 7400000, leaseEnd: "2027-02-28" },
  { id: "u12", number: "0304", floor: 3, type: "3BR", size: 72, status: "occupied", resident: "Hendra Kusuma", rentPrice: 10000000, leaseEnd: "2027-05-01" },
]

export const residents: Resident[] = [
  { id: "r1", name: "Rizky Maulana", unit: "0101", email: "rizky@email.com", phone: "0812-3456-7890", joinDate: "2023-01-15", status: "active", loyaltyPoints: 4820, loyaltyTier: "Gold" },
  { id: "r2", name: "Siti Aminah", unit: "0102", email: "siti@email.com", phone: "0813-2345-6789", joinDate: "2022-08-20", status: "active", loyaltyPoints: 8350, loyaltyTier: "Platinum" },
  { id: "r3", name: "Budi Santoso", unit: "0104", email: "budi@email.com", phone: "0811-4567-8901", joinDate: "2023-04-10", status: "active", loyaltyPoints: 2100, loyaltyTier: "Silver" },
  { id: "r4", name: "Dewi Rahayu", unit: "0201", email: "dewi@email.com", phone: "0815-6789-0123", joinDate: "2024-01-05", status: "active", loyaltyPoints: 950, loyaltyTier: "Bronze" },
  { id: "r5", name: "Ahmad Fauzi", unit: "0202", email: "ahmad@email.com", phone: "0817-8901-2345", joinDate: "2023-09-12", status: "active", loyaltyPoints: 3200, loyaltyTier: "Silver" },
  { id: "r6", name: "Kartika Sari", unit: "0204", email: "kartika@email.com", phone: "0819-0123-4567", joinDate: "2022-11-30", status: "active", loyaltyPoints: 12400, loyaltyTier: "Platinum" },
]

export const facilityBookings: FacilityBooking[] = [
  { id: "fb1", facility: "Gym", resident: "Rizky Maulana", date: "2026-06-03", time: "07:00 - 08:00", status: "confirmed" },
  { id: "fb2", facility: "Swimming Pool", resident: "Siti Aminah", date: "2026-06-03", time: "09:00 - 10:00", status: "confirmed" },
  { id: "fb3", facility: "Social Hub - Meeting Room", resident: "Budi Santoso", date: "2026-06-04", time: "14:00 - 16:00", status: "pending" },
  { id: "fb4", facility: "Gym", resident: "Dewi Rahayu", date: "2026-06-04", time: "18:00 - 19:00", status: "confirmed" },
  { id: "fb5", facility: "Swimming Pool", resident: "Ahmad Fauzi", date: "2026-06-05", time: "07:00 - 08:30", status: "confirmed" },
  { id: "fb6", facility: "Social Hub - Cinema", resident: "Kartika Sari", date: "2026-06-05", time: "20:00 - 22:00", status: "pending" },
]

export const cctvCameras: CCTVCamera[] = [
  { id: "cam1", name: "Main Gate", location: "Entrance Road", status: "recording", lastEvent: "Tamu masuk — 2 menit lalu" },
  { id: "cam2", name: "Lobby Tower A", location: "Ground Floor", status: "recording", lastEvent: "Resident keluar — 5 menit lalu" },
  { id: "cam3", name: "Social Hub Area", location: "Level 2", status: "recording", lastEvent: "Tidak ada aktivitas" },
  { id: "cam4", name: "Parkir B1", location: "Basement 1", status: "recording", lastEvent: "Kendaraan masuk — 12 menit lalu" },
  { id: "cam5", name: "RTH / Taman", location: "Outdoor Area", status: "online", lastEvent: "Tidak ada aktivitas" },
  { id: "cam6", name: "Koridor Lt. 3", location: "Floor 3", status: "recording", lastEvent: "Resident masuk unit — 8 menit lalu" },
]

export const transactions: Transaction[] = [
  { id: "t1", date: "2026-06-01", resident: "Rizky Maulana", unit: "0101", amount: 3500000, type: "rent", status: "paid" },
  { id: "t2", date: "2026-06-01", resident: "Siti Aminah", unit: "0102", amount: 4800000, type: "rent", status: "paid" },
  { id: "t3", date: "2026-06-02", resident: "Budi Santoso", unit: "0104", amount: 7200000, type: "rent", status: "pending" },
  { id: "t4", date: "2026-06-02", resident: "Dewi Rahayu", unit: "0201", amount: 85000, type: "laundry", status: "paid" },
  { id: "t5", date: "2026-06-03", resident: "Ahmad Fauzi", unit: "0202", amount: 4900000, type: "rent", status: "paid" },
  { id: "t6", date: "2026-06-03", resident: "Kartika Sari", unit: "0204", amount: 320000, type: "cafe", status: "paid" },
  { id: "t7", date: "2026-06-03", resident: "Rizky Maulana", unit: "0101", amount: 175000, type: "minimarket", status: "paid" },
]

export const accessLogs: SmartAccessLog[] = [
  { id: "al1", resident: "Rizky Maulana", method: "NFC", location: "Main Gate", time: "07:02", status: "granted" },
  { id: "al2", resident: "Siti Aminah", method: "Face ID", location: "Lobby Tower A", time: "07:45", status: "granted" },
  { id: "al3", resident: "Unknown", method: "PIN", location: "Main Gate", time: "08:12", status: "denied" },
  { id: "al4", resident: "Budi Santoso", method: "QR Code", location: "Social Hub", time: "09:30", status: "granted" },
  { id: "al5", resident: "Dewi Rahayu", method: "Face ID", location: "Lobby Tower A", time: "10:15", status: "granted" },
  { id: "al6", resident: "Ahmad Fauzi", method: "NFC", location: "Main Gate", time: "11:22", status: "granted" },
]

export const residentBills: Bill[] = [
  {
    id: "b1",
    month: "Juni 2026",
    items: [
      { label: "Sewa Unit Studio (0101)", amount: 3500000 },
      { label: "Listrik", amount: 185000 },
      { label: "Air", amount: 75000 },
      { label: "Internet 100Mbps", amount: 250000 },
      { label: "Service Charge", amount: 150000 },
    ],
    total: 4160000,
    dueDate: "2026-06-10",
    status: "pending",
  },
  {
    id: "b2",
    month: "Mei 2026",
    items: [
      { label: "Sewa Unit Studio (0101)", amount: 3500000 },
      { label: "Listrik", amount: 162000 },
      { label: "Air", amount: 68000 },
      { label: "Internet 100Mbps", amount: 250000 },
      { label: "Service Charge", amount: 150000 },
    ],
    total: 4130000,
    dueDate: "2026-05-10",
    status: "paid",
  },
]

export const notifications: Notification[] = [
  { id: "n1", title: "Tagihan Juni Tersedia", message: "Tagihan bulan Juni 2026 Anda sebesar Rp 4.160.000 telah tersedia.", time: "2 jam lalu", type: "info", read: false },
  { id: "n2", title: "Booking Gym Dikonfirmasi", message: "Booking Gym untuk besok pukul 07:00-08:00 telah dikonfirmasi.", time: "5 jam lalu", type: "success", read: false },
  { id: "n3", title: "Promo Social Hub Weekend", message: "Nikmati 2x poin untuk setiap penggunaan Social Hub akhir pekan ini!", time: "1 hari lalu", type: "info", read: true },
  { id: "n4", title: "Maintenance Kolam Renang", message: "Kolam renang akan dalam maintenance Sabtu, 6 Juni 2026 pukul 08:00-12:00.", time: "2 hari lalu", type: "warning", read: true },
]

export const smartEcosystemFeatures = [
  { id: 1, name: "Smart NFC Access", icon: "Wifi", desc: "Akses tanpa sentuh dengan teknologi NFC untuk semua pintu unit dan fasilitas", category: "Security" },
  { id: 2, name: "Face ID Gate", icon: "Scan", desc: "Pengenalan wajah AI untuk akses gerbang utama dan area premium", category: "Security" },
  { id: 3, name: "AI CCTV Surveillance", icon: "Camera", desc: "32 titik CCTV dengan analitik AI untuk deteksi anomali real-time", category: "Security" },
  { id: 4, name: "Loyalty Ecosystem", icon: "Star", desc: "Program poin terintegrasi dengan reward dari seluruh merchant dalam properti", category: "Resident" },
  { id: 5, name: "Smart Billing", icon: "CreditCard", desc: "Tagihan otomatis dengan breakdown detail dan pembayaran digital terintegrasi", category: "Finance" },
  { id: 6, name: "Facility Booking", icon: "Calendar", desc: "Booking fasilitas real-time melalui aplikasi dengan manajemen slot otomatis", category: "Resident" },
  { id: 7, name: "High-Speed Internet", icon: "Zap", desc: "Infrastruktur fiber optik dedicated 1Gbps untuk setiap unit", category: "Infrastructure" },
  { id: 8, name: "Smart Energy", icon: "Lightbulb", desc: "Monitoring konsumsi energi real-time dengan sistem efisiensi otomatis", category: "Infrastructure" },
]

export const investorKPIs = [
  { label: "Total Unit Tersedia", value: "248 Unit", sub: "Tower A & B" },
  { label: "Tingkat Hunian", value: "94.8%", sub: "+2.3% MoM" },
  { label: "Rata-rata Sewa/Unit", value: "Rp 5,8M", sub: "per bulan" },
  { label: "Total Revenue (Annualized)", value: "Rp 19.8M", sub: "+12.4% YoY" },
  { label: "Net Operating Income", value: "Rp 14.2M", sub: "72% margin" },
  { label: "Projected IRR (5Y)", value: "22.6%", sub: "Sangat atraktif" },
]

export const businessUnits = [
  { name: "Rental Unit", revenue: 945, margin: 78, growth: 8.2, color: "#1a1a2e" },
  { name: "Social Hub", revenue: 190, margin: 65, growth: 15.4, color: "#d4af37" },
  { name: "Minimarket", revenue: 128, margin: 32, growth: 10.1, color: "#6b7280" },
  { name: "Cafe & F&B", revenue: 105, margin: 42, growth: 22.8, color: "#9ca3af" },
  { name: "Laundry", revenue: 63, margin: 55, growth: 8.5, color: "#d1d5db" },
]
