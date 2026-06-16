import { ButtonHTMLAttributes } from "react";

interface SubNavPillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: string;
}

export function SubNavPill({ active = false, children, className = "", ...props }: SubNavPillProps) {
  return (
    <button
      className={`inline-flex items-center px-[14px] py-[6px] font-[family-name:var(--font-ui)] text-sm font-semibold leading-none rounded-full border transition-all duration-150 cursor-pointer ${
        active
          ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] border-[var(--color-primary)]"
          : "bg-[var(--color-surface-card)] text-[var(--color-ink)] border-[var(--color-hairline)] hover:border-[var(--color-charcoal)]"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
