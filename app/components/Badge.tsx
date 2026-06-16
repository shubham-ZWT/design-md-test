type BadgeVariant = "status" | "tag";

interface BadgeProps {
  variant?: BadgeVariant;
  children: string;
}

const base =
  "inline-flex items-center font-[family-name:var(--font-ui)] text-xs leading-tight rounded-full px-[10px] py-[4px]";

const variants: Record<BadgeVariant, string> = {
  status:
    "bg-[var(--color-badge-success)] text-[var(--color-on-dark)]",
  tag:
    "bg-[var(--color-canvas)] text-[var(--color-ink)] border border-[var(--color-hairline)]",
};

export function Badge({ variant = "tag", children }: BadgeProps) {
  return (
    <span className={`${base} ${variants[variant]}`}>
      {children}
    </span>
  );
}
