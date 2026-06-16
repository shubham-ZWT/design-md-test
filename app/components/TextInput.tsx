import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function TextInput({ label, className = "", ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-[family-name:var(--font-ui)] text-sm text-[var(--color-charcoal)]">
          {label}
        </label>
      )}
      <input
        className={`h-11 px-5 py-3 bg-[var(--color-surface-card)] text-[var(--color-ink)] font-[family-name:var(--font-ui)] text-base leading-snug rounded-full border border-[var(--color-hairline)] placeholder:text-[var(--color-ash)] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--color-ring-focus)] focus-visible:border-[var(--color-hairline-strong)] transition-all duration-150 ${className}`}
        {...props}
      />
    </div>
  );
}
