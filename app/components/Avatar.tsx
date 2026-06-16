import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt = "", size = 40, className = "" }: AvatarProps) {
  return (
    <div
      className={`rounded-full bg-[var(--color-surface-card)] overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
      ) : (
        <div className="w-full h-full bg-[var(--color-surface-subtle)]" />
      )}
    </div>
  );
}
