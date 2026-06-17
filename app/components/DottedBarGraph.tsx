"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "Mon", value: 30 },
  { label: "Tue", value: 50 },
  { label: "Wed", value: 40 },
  { label: "Thu", value: 65 },
  { label: "Fri", value: 55 },
  { label: "Sat", value: 80 },
  { label: "Sun", value: 70 },
];

export function DottedBarGraph() {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)]">
      <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] mb-3">
        Weekly Activity
      </h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--color-primary)"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "var(--color-surface-card)",
              stroke: "var(--color-primary)",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "var(--color-primary)",
              stroke: "var(--color-surface-card)",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
