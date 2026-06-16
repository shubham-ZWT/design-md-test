import { Button } from "./Button";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export function PricingTier({ name, price, description, features, featured = false }: PricingTierProps) {
  const container = featured
    ? "bg-[var(--color-surface-dark)] text-[var(--color-on-dark)] rounded-[16px] p-8 border border-[var(--color-primary)]"
    : "bg-[var(--color-surface-card)] text-[var(--color-ink)] rounded-[16px] p-8 border border-[var(--color-hairline)]";

  return (
    <div className={container}>
      {featured && (
        <span className="inline-block mb-3 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Recommended
        </span>
      )}
      <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.0] tracking-tight">
        {name}
      </h3>
      <p className={`text-3xl font-bold leading-[1.2] tracking-tight mt-3 font-[family-name:var(--font-display)]`}>
        {price}
        <span className="text-sm font-normal leading-snug text-[var(--color-mute)]"> /mo</span>
      </p>
      <p className={`mt-3 font-[family-name:var(--font-ui)] text-base leading-snug ${featured ? "text-[var(--color-on-dark-mute)]" : "text-[var(--color-charcoal)]"}`}>
        {description}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-[family-name:var(--font-ui)] text-sm leading-snug">
            <svg className="mt-[2px] size-4 shrink-0 text-[var(--color-badge-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {featured ? (
          <Button variant="primary" className="w-full">Get started</Button>
        ) : (
          <Button variant="outline" className="w-full">Get started</Button>
        )}
      </div>
    </div>
  );
}
