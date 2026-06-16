"use client";

const segments = [
  { label: "Direct", value: 35, color: "var(--color-primary)" },
  { label: "Organic", value: 25, color: "#3b82f6" },
  { label: "Referral", value: 20, color: "#60a5fa" },
  { label: "Social", value: 12, color: "#93c5fd" },
  { label: "Other", value: 8, color: "#bfdbfe" },
];

const radius = 45;
const circumference = 2 * Math.PI * radius;

export function DonutChart() {
  let offset = 0;

  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)]">
      <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] mb-4">
        Traffic Sources
      </h3>
      <div className="flex items-center gap-6">
        <div className="relative size-[140px] shrink-0">
          <svg className="size-full -rotate-90" viewBox="0 0 100 100">
            {segments.map((seg) => {
              const segLen = (seg.value / 100) * circumference;
              const dash = `${segLen} ${circumference - segLen}`;
              const stroke = offset;
              offset += segLen;
              return (
                <circle
                  key={seg.label}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="8"
                  strokeDasharray={dash}
                  strokeDashoffset={-stroke}
                  className="transition-all duration-500"
                />
              );
            })}
            <circle cx="50" cy="50" r="28" fill="var(--color-surface-card)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold leading-none text-[var(--color-ink)]">
              100%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
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
