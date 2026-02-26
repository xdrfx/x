"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts"

const data = [
  { month: "Янв", value: 12400 },
  { month: "Фев", value: 18200 },
  { month: "Мар", value: 9800 },
  { month: "Апр", value: 22100 },
  { month: "Май", value: 15600 },
  { month: "Июн", value: 28300 },
  { month: "Июл", value: 19500 },
  { month: "Авг", value: 24700 },
  { month: "Сен", value: 16800 },
  { month: "Окт", value: 31200 },
  { month: "Ноя", value: 21400 },
  { month: "Дек", value: 27900 },
]

export function PerformanceDashboard() {
  return (
    <div className="animate-float w-full max-w-md">
      <div className="rounded-2xl border border-primary/10 bg-card/80 p-6 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Годовые Результаты
            </p>
            <p className="font-heading text-3xl font-bold text-primary">
              +$180,000
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Онлайн</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-6 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="20%">
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "hsl(260, 10%, 55%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.value > 20000
                        ? "hsl(153, 100%, 50%)"
                        : "hsl(153, 100%, 50%, 0.3)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Signal indicators */}
        <div className="flex gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 11L7 3M7 3L3 7M7 3L11 7" stroke="hsl(153, 100%, 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Сигнал</p>
              <p className="text-sm font-bold text-primary">ПОКУПКА</p>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="hsl(260, 10%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Сигнал</p>
              <p className="text-sm font-bold text-muted-foreground">ПРОДАЖА</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
