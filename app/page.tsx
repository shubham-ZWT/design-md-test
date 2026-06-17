"use client";

import { useState, useCallback } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaDollarSign,
  FaArrowDown,
} from "react-icons/fa";
import { Sidebar } from "./components/Sidebar";
import { StatCard } from "./components/StatCard";
import { DottedBarGraph } from "./components/DottedBarGraph";
import { DonutChart } from "./components/DonutChart";
import { BarChart } from "./components/BarChart";
import { UsersTable } from "./components/UsersTable";
import { DeadlineCard } from "./components/DeadlineCard";

const stats = [
  {
    label: "Total Users",
    value: "24.5k",
    change: "+12.5% from last month",
    positive: true,
    icon: <FaUsers />,
    iconColor: "#7c3aed",
  },
  {
    label: "Active Users",
    value: "18.2k",
    change: "+8.2% from last month",
    positive: true,
    icon: <FaUserCheck />,
    iconColor: "#0d9488",
  },
  {
    label: "Revenue",
    value: "$48.3k",
    change: "+23.1% from last month",
    positive: true,
    icon: <FaDollarSign />,
    iconColor: "#059669",
  },
  {
    label: "Bounce Rate",
    value: "14.2%",
    change: "-2.4% from last month",
    positive: true,
    icon: <FaArrowDown />,
    iconColor: "#e11d48",
  },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const open = useCallback(() => setSidebarOpen(true), []);
  const close = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="flex h-screen bg-[var(--color-canvas)]">
      <Sidebar mobileOpen={sidebarOpen} onOpen={open} onClose={close} />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="lg:hidden flex items-center gap-3 px-4 h-14 border-b border-[var(--color-hairline)] bg-[var(--color-surface-card)] shrink-0">
          <button
            onClick={open}
            className="size-9 flex items-center justify-center rounded-full hover:bg-[var(--color-surface-subtle)] cursor-pointer"
          >
            <span className="text-lg font-bold leading-none">☰</span>
          </button>
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-primary)]">
            DesignLab
          </span>
        </div>

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold leading-[1.2] tracking-tight text-[var(--color-ink)]">
                Dashboard
              </h1>
              <p className="mt-1 font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
                Welcome back, Alex. Here&apos;s what&apos;s happening.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            <DottedBarGraph />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch">
              <div className="lg:col-span-1">
                <DonutChart />
              </div>
              <div className="lg:col-span-2">
                <BarChart />
              </div>
            </div>

            <UsersTable />

            <div className="flex flex-col gap-3">
              <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-charcoal)]">
                Upcoming Deadlines
              </h3>
              <DeadlineCard
                weekday="Wed"
                month="Jun"
                day={28}
                name="Sarah Johnson"
                location="Ahmedabad, India"
                skills={["React", "Next.js", "TypeScript"]}
                status="Approved"
              />
              <DeadlineCard
                weekday="Fri"
                month="Jul"
                day={5}
                name="Aarav Mehta"
                location="Mumbai, India"
                skills={["Python", "FastAPI", "PostgreSQL"]}
                status="Pending"
              />
              <DeadlineCard
                weekday="Mon"
                month="Jul"
                day={15}
                name="Priya Sharma"
                location="Bangalore, India"
                skills={["UI/UX", "Figma", "Tailwind"]}
                status="Rejected"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
