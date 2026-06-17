"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

interface DeadlineCardProps {
  weekday: string;
  month: string;
  day: number;
  name: string;
  location: string;
  skills: string[];
  status: "Approved" | "Pending" | "Rejected";
}

const statusStyles: Record<string, string> = {
  Approved: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Rejected: "bg-red-50 text-red-700",
};

export function DeadlineCard({
  weekday,
  month,
  day,
  name,
  location,
  skills,
  status,
}: DeadlineCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] border border-[var(--color-hairline)] flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="sm:w-[22%] shrink-0 flex sm:flex-col items-center sm:justify-center gap-0.5 sm:gap-0 px-4 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[var(--color-hairline)]">
        <span className="font-[family-name:var(--font-ui)] text-xs font-semibold leading-none uppercase text-[var(--color-ash)]">
          {weekday}
        </span>
        <span className="font-[family-name:var(--font-ui)] text-xs font-semibold leading-none uppercase text-[var(--color-charcoal)]">
          {month}
        </span>
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold leading-none tracking-tight text-[var(--color-ink)]">
          {day}
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 px-4 py-3 sm:px-5 sm:py-3.5 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-[family-name:var(--font-display)] text-sm font-bold leading-snug tracking-tight text-[var(--color-ink)] truncate">
            {name}
          </span>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium leading-snug shrink-0 ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="size-3 text-[var(--color-ash)] shrink-0" />
          <span className="font-[family-name:var(--font-ui)] text-xs leading-snug text-[var(--color-charcoal)] truncate">
            {location}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 min-w-0">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium leading-snug bg-[var(--color-canvas)] text-[var(--color-ink)] border border-[var(--color-hairline)]"
              >
                {s}
              </span>
            ))}
          </div>
          <button className="font-[family-name:var(--font-ui)] text-xs font-semibold leading-snug text-[var(--color-link)] hover:underline whitespace-nowrap shrink-0 cursor-pointer">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
