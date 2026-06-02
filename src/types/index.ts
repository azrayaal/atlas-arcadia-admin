export interface KPIData {
  label: string
  value: string | number
  change: number
  changeLabel?: string
  icon?: string
  color?: string
  suffix?: string
}

export interface RevenueItem {
  source: string
  amount: number
  change: number
  color: string
}

export interface ChartDataPoint {
  month: string
  value: number
  projected?: number
}

export interface Unit {
  id: string
  number: string
  floor: number
  type: "Studio" | "1BR" | "2BR" | "3BR"
  size: number
  status: "occupied" | "vacant" | "maintenance"
  resident?: string
  rentPrice: number
  leaseEnd?: string
}

export interface Resident {
  id: string
  name: string
  unit: string
  email: string
  phone: string
  joinDate: string
  status: "active" | "inactive"
  loyaltyPoints: number
  loyaltyTier: "Bronze" | "Silver" | "Gold" | "Platinum"
  avatar?: string
}

export interface FacilityBooking {
  id: string
  facility: string
  resident: string
  date: string
  time: string
  status: "confirmed" | "pending" | "cancelled"
}

export interface CCTVCamera {
  id: string
  name: string
  location: string
  status: "online" | "offline" | "recording"
  lastEvent?: string
}

export interface Transaction {
  id: string
  date: string
  resident: string
  unit: string
  amount: number
  type: "rent" | "facility" | "laundry" | "minimarket" | "cafe"
  status: "paid" | "pending" | "overdue"
}

export interface SmartAccessLog {
  id: string
  resident: string
  method: "NFC" | "Face ID" | "QR Code" | "PIN"
  location: string
  time: string
  status: "granted" | "denied"
}

export interface Bill {
  id: string
  month: string
  items: BillItem[]
  total: number
  dueDate: string
  status: "paid" | "pending" | "overdue"
}

export interface BillItem {
  label: string
  amount: number
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  type: "info" | "warning" | "success" | "alert"
  read: boolean
}
