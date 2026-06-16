import { Badge } from "./Badge";

interface ModelCardProps {
  title: string;
  description: string;
  author: string;
  status?: string;
  tags?: string[];
}

export function ModelCard({ title, description, author, status, tags }: ModelCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] text-[var(--color-ink)] rounded-[10px] p-4 border border-[var(--color-hairline)] flex flex-col gap-3">
      <div className="aspect-square rounded-[10px] bg-[var(--color-surface-subtle)] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-hero-wash)] to-[var(--color-surface-subtle)]" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
          {author}
        </span>
        <h3 className="font-[family-name:var(--font-ui)] text-base leading-snug font-semibold">
          {title}
        </h3>
      </div>
      <p className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)] line-clamp-2">
        {description}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        {status && <Badge variant="status">{status}</Badge>}
        {tags?.map((tag) => (
          <Badge key={tag} variant="tag">{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
