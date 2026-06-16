"use client";

import { useState } from "react";
import { Button } from "./Button";

const links = [
  { label: "Explore", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-15 bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-primary)]">
            DesignLab
          </span>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-ink)] transition-colors cursor-pointer">
            Sign in
          </button>
          <Button variant="primary">Get started</Button>
        </div>

        <button
          className="lg:hidden size-9 flex items-center justify-center rounded-full border border-[var(--color-hairline)] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm font-bold">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-canvas)] border-b border-[var(--color-hairline)] px-6 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)]"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-[var(--color-hairline)]" />
          <button className="text-left font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)] cursor-pointer">
            Sign in
          </button>
          <Button variant="primary">Get started</Button>
        </div>
      )}
    </nav>
  );
}
