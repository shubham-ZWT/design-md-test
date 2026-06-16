import { Button } from "./Button";

export function HeroBand() {
  return (
    <section className="relative bg-[var(--color-primary)] text-[var(--color-on-dark)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, var(--color-hero-glow) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 80%, var(--color-hero-wash) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-8 py-24 md:py-32 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight">
            Build
            <br />
            something great
          </h1>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-ui)] text-lg md:text-xl leading-relaxed text-[var(--color-on-dark-mute)]">
            A modern platform designed for teams who care about craft. Ship faster
            without cutting corners.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="dark">Start building</Button>
            <Button variant="outline">View docs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
