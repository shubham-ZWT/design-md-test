interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}

export function StatCard({ label, value, change, positive = true }: StatCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] p-5 border border-[var(--color-hairline)] flex flex-col gap-1">
      <span className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
        {label}
      </span>
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
