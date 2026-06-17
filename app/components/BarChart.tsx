"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 45 },
  { label: "Apr", value: 70 },
  { label: "May", value: 60 },
  { label: "Jun", value: 85 },
  { label: "Jul", value: 75 },
];

export function BarChart() {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)] h-full flex flex-col">
      <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] mb-4">
        Monthly Revenue
      </h3>
      <div className="flex-1 min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} barCategoryGap="12%" margin={{ left: 0, right: 0 }}>
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--color-ash)",
                fontSize: 12,
                fontFamily: "var(--font-ui)",
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--color-ash)",
                fontSize: 12,
                fontFamily: "var(--font-ui)",
              }}
            />
            <Tooltip
              contentStyle={{
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-hairline)",
                borderRadius: 8,
                fontSize: 13,
                fontFamily: "var(--font-ui)",
              }}
            />
            <Bar
              dataKey="value"
              fill="var(--color-primary)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
