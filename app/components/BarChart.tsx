"use client";

const data = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 45 },
  { label: "Apr", value: 70 },
  { label: "May", value: 60 },
  { label: "Jun", value: 85 },
  { label: "Jul", value: 75 },
];

const maxVal = Math.max(...data.map((d) => d.value));
const barWidth = 100 / data.length;

export function BarChart() {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)]">
      <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] mb-4">
        Monthly Revenue
      </h3>
      <div className="flex items-end gap-2 h-[160px]">
        {data.map((d) => {
          const height = (d.value / maxVal) * 100;
          return (
            <div
              key={d.label}
              className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
            >
              <span className="font-[family-name:var(--font-code)] text-xs leading-none text-[var(--color-ash)]">
                {d.value}k
              </span>
              <div
                className="w-full rounded-[4px] bg-[var(--color-primary)] transition-all duration-300 hover:opacity-80"
                style={{ height: `${height}%` }}
              />
              <span className="font-[family-name:var(--font-ui)] text-xs leading-none text-[var(--color-ash)]">
                {d.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
