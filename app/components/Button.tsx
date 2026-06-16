import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "dark"
  | "outline"
  | "ghost"
  | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children?: ReactNode;
  icon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-[family-name:var(--font-ui)] font-semibold text-base leading-none rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--color-ring-focus)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-deep)] active:bg-[var(--color-primary-deep)] px-6 h-11",
  dark:
    "bg-[var(--color-surface-dark)] text-[var(--color-on-dark)] hover:brightness-125 active:brightness-150 px-6 h-11",
  outline:
    "bg-[var(--color-surface-card)] text-[var(--color-ink)] border border-[var(--color-hairline-strong)] hover:bg-[var(--color-surface-subtle)] active:bg-[var(--color-surface-subtle)] px-6 h-11",
  ghost:
    "bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-surface-subtle)] active:bg-[var(--color-surface-subtle)] px-4 h-9",
  icon:
    "bg-[var(--color-surface-card)] text-[var(--color-ink)] border border-[var(--color-hairline)] size-9 p-0",
};

export function Button({ variant = "primary", children, icon, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="size-4">{icon}</span>}
      {children}
    </button>
  );
}
