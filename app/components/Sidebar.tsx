"use client";

import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "◻" },
  { id: "analytics", label: "Analytics", icon: "▤" },
  { id: "users", label: "Users", icon: "◎" },
  { id: "settings", label: "Settings", icon: "⚙" },
  { id: "support", label: "Support", icon: "?" },
];

export function Sidebar({
  mobileOpen,
  onOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [active, setActive] = useState("dashboard");
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"open" | "closing">("open");
  const touchX = useRef(0);

  useEffect(() => {
    if (mobileOpen) {
      setVisible(true);
      requestAnimationFrame(() => setPhase("open"));
    } else if (visible) {
      setPhase("closing");
      const t = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  const handleClose = () => {
    setPhase("closing");
    setTimeout(() => onClose(), 200);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchStart = (e: TouchEvent) => {
      touchX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (visible && dx < -50) {
        handleClose();
      } else if (!visible && touchX.current < 40 && dx > 50) {
        onOpen();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [visible, onOpen]);

  const isOpen = phase === "open";

  const content = (
    <>
      <div className="px-6 pt-8 pb-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-primary)]">
          DesignLab
        </span>
        <button
          onClick={handleClose}
          className="lg:hidden size-8 flex items-center justify-center rounded-full hover:bg-[var(--color-surface-subtle)] cursor-pointer"
        >
          ✕
        </button>
      </div>
      <nav className="flex-1 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); handleClose(); }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-semibold leading-none transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  : "text-[var(--color-charcoal)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-ink)]"
              }`}
            >
              <span className="w-4 text-center text-base leading-none">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="px-3 pb-6">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full text-[var(--color-charcoal)] text-sm font-semibold">
          <span className="size-8 rounded-full bg-[var(--color-surface-subtle)] border border-[var(--color-hairline)]" />
          <div className="flex flex-col">
            <span className="text-[var(--color-ink)] text-sm font-semibold leading-tight">Alex Chen</span>
            <span className="text-[var(--color-ash)] text-xs leading-tight">alex@designlab.dev</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <aside className="hidden lg:flex w-60 h-screen bg-[var(--color-surface-card)] border-r border-[var(--color-hairline)] flex-col shrink-0">
        {content}
      </aside>

      {visible && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 transition-opacity duration-200 ease-out"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClose}
          />
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-[var(--color-surface-card)] border-r border-[var(--color-hairline)] flex flex-col z-50 shadow-xl transition-transform duration-200 ease-out"
            style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
          >
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
