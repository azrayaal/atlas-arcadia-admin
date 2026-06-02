import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts"

interface OccupancyLineProps {
  data: Array<{ month: string; rate: number }>
  height?: number
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl shadow-card-hover p-3 text-xs">
        <p className="font-semibold text-stone-800">{label}</p>
        <p className="text-stone-500 mt-1">Hunian: <span className="font-bold text-stone-800">{payload[0].value}%</span></p>
      </div>
    )
  }
  return null
}

export function OccupancyLineChart({ data, height = 200 }: OccupancyLineProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} />
        <YAxis domain={[75, 100]} tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="rate"
          stroke="#d4af37"
          strokeWidth={2.5}
          dot={{ fill: "#d4af37", r: 4, strokeWidth: 2, stroke: "#fff" }}
          activeDot={{ r: 6, fill: "#d4af37" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

interface RadialOccupancyProps {
  rate: number
  size?: number
}

export function OccupancyRadial({ rate, size = 120 }: RadialOccupancyProps) {
  const data = [{ value: rate, fill: "#d4af37" }, { value: 100 - rate, fill: "#f4f4f5" }]

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <RadialBarChart width={size} height={size} innerRadius="70%" outerRadius="90%" data={data} startAngle={90} endAngle={-270}>
        <RadialBar dataKey="value" cornerRadius={4} />
      </RadialBarChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-zinc-900">{rate}%</span>
        <span className="text-xs text-zinc-500">Hunian</span>
      </div>
    </div>
  )
}
