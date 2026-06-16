const users = [
  { name: "Olivia Rhye", email: "olivia@email.com", role: "Admin", status: "Active", date: "Mar 12, 2025" },
  { name: "Phoenix Baker", email: "phoenix@email.com", role: "Editor", status: "Active", date: "Feb 8, 2025" },
  { name: "Lana Steiner", email: "lana@email.com", role: "Viewer", status: "Inactive", date: "Jan 20, 2025" },
  { name: "Demi Wilkinson", email: "demi@email.com", role: "Editor", status: "Active", date: "Dec 3, 2024" },
  { name: "Candice Wu", email: "candice@email.com", role: "Admin", status: "Active", date: "Nov 15, 2024" },
  { name: "Natali Craig", email: "natali@email.com", role: "Viewer", status: "Inactive", date: "Oct 28, 2024" },
  { name: "Drew Cano", email: "drew@email.com", role: "Editor", status: "Active", date: "Sep 4, 2024" },
];

const cols = ["Name", "Email", "Role", "Status", "Joined"];

export function UsersTable() {
  return (
    <div className="bg-[var(--color-surface-card)] rounded-[10px] border border-[var(--color-hairline)] overflow-hidden">
      <div className="px-5 py-4 border-b border-[var(--color-hairline)]">
        <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold text-[var(--color-ink)]">
          Users
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--color-hairline)]">
              {cols.map((col) => (
                <th
                  key={col}
                  className="px-5 py-3 font-[family-name:var(--font-ui)] text-xs font-semibold leading-snug text-[var(--color-ash)] uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.email}
                className="border-b border-[var(--color-hairline)] last:border-none hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-[var(--color-surface-subtle)] border border-[var(--color-hairline)] flex items-center justify-center font-[family-name:var(--font-ui)] text-xs font-semibold text-[var(--color-charcoal)]">
                      {u.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="font-[family-name:var(--font-ui)] text-sm font-medium leading-snug text-[var(--color-ink)]">
                      {u.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
                  {u.email}
                </td>
                <td className="px-5 py-3">
                  <span className="font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
                    {u.role}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-snug ${
                      u.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-[var(--color-surface-subtle)] text-[var(--color-ash)]"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="px-5 py-3 font-[family-name:var(--font-ui)] text-sm leading-snug text-[var(--color-charcoal)]">
                  {u.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
