import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  icon?: ReactNode;
  iconColor?: string;
}

export function StatCard({ label, value, change, positive = true, icon, iconColor }: StatCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)] flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
          {label}
        </span>
        {icon && (
          <span
            className="size-8 flex items-center justify-center rounded-lg text-sm leading-none"
            style={{ background: `${iconColor}30`, color: iconColor }}
          >
            {icon}
          </span>
        )}
      </div>
      <span className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.0] tracking-tight text-[var(--color-ink)]">
        {value}
      </span>
      <span
        className={`font-[family-name:var(--font-ui)] text-sm leading-snug ${
          positive ? "text-[var(--color-badge-success)]" : "text-[var(--color-primary)]"
        }`}
      >
        {change}
      </span>
    </div>
  );
}
