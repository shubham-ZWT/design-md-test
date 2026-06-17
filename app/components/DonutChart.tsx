"use client";

import { useState, useCallback } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { label: "Direct", value: 35, color: "var(--color-primary)" },
  { label: "Organic", value: 25, color: "#3b82f6" },
  { label: "Referral", value: 20, color: "#60a5fa" },
  { label: "Social", value: 12, color: "#93c5fd" },
  { label: "Other", value: 8, color: "#bfdbfe" },
];

export function DonutChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onEnter = useCallback(
    (_: any, index: number) => setActiveIndex(index),
    [],
  );
  const onLeave = useCallback(() => setActiveIndex(undefined), []);

  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)] h-full w-full flex flex-col">
      <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] mb-4">
        Traffic Sources
      </h3>
      <div className="flex items-center gap-6 flex-1 w-full">
        <div className="relative shrink-0" style={{ width: 140, height: 80 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={32}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, i) => (
                  <Cell
                    key={entry.label}
                    fill={entry.color}
                    onMouseEnter={(e: any) => onEnter(e, i)}
                    onMouseLeave={onLeave}
                    style={{
                      cursor: "pointer",
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
                      transform:
                        activeIndex === i
                          ? "translateY(-3px)"
                          : "translateY(0)",
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                    opacity={
                      activeIndex === undefined || activeIndex === i ? 1 : 0.5
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ paddingTop: 56 }}
          >
            <span className="font-[family-name:var(--font-display)] text-base font-bold leading-none text-[var(--color-ink)]">
              100%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 flex-1 min-w-0">
          {data.map((seg, i) => (
            <div
              key={seg.label}
              className="flex items-center gap-2 transition-opacity duration-200"
              style={{
                opacity:
                  activeIndex === undefined || activeIndex === i ? 1 : 0.5,
              }}
            >
              <span
                className="size-2.5 rounded-full shrink-0"
                style={{ background: seg.color }}
              />
              <span className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
                {seg.label}
              </span>
              <span className="font-[family-name:var(--font-ui)] text-sm leading-snug font-semibold text-[var(--color-ink)] ml-auto">
                {seg.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
