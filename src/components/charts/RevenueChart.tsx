import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

interface RevenueChartProps {
  data: Array<Record<string, number | string>>
  type?: "area" | "bar"
  dataKeys?: Array<{ key: string; color: string; name: string }>
  height?: number
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl shadow-card-hover p-3 text-xs">
        <p className="font-semibold text-stone-800 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-stone-500">{entry.name}:</span>
            <span className="font-semibold text-stone-800">Rp {entry.value}M</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const defaultKeys = [
  { key: "rental", color: "#1a1a2e", name: "Rental" },
  { key: "socialHub", color: "#d4af37", name: "Social Hub" },
  { key: "laundry", color: "#9ca3af", name: "Laundry" },
  { key: "minimarket", color: "#6b7280", name: "Minimarket" },
  { key: "cafe", color: "#d1d5db", name: "Cafe" },
]

export function RevenueChart({ data, type = "area", dataKeys = defaultKeys, height = 280 }: RevenueChartProps) {
  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} barGap={2}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
        <Tooltip content={<CustomTooltip />} />
        {dataKeys.map((dk) => (
          <Bar key={dk.key} dataKey={dk.key} name={dk.name} fill={dk.color} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          {dataKeys.map((dk) => (
            <linearGradient key={dk.key} id={`grad-${dk.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={dk.color} stopOpacity={0.15} />
              <stop offset="95%" stopColor={dk.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
        <Tooltip content={<CustomTooltip />} />
        {dataKeys.map((dk) => (
          <Area
            key={dk.key}
            type="monotone"
            dataKey={dk.key}
            name={dk.name}
            stroke={dk.color}
            strokeWidth={2}
            fill={`url(#grad-${dk.key})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )
}
