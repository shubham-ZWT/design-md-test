const footerLinks = [
  {
    label: "Product",
    links: ["Explore", "Pricing", "Changelog", "Documentation"],
  },
  {
    label: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    label: "Support",
    links: ["Help center", "Contact", "Status", "Security"],
  },
  {
    label: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-deep)] text-[var(--color-on-dark)] font-[family-name:var(--font-ui)] text-sm leading-snug">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h4 className="font-semibold text-sm mb-4">{group.label}</h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[var(--color-on-dark-mute)] hover:text-[var(--color-on-dark)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-8 border-[var(--color-divider-dark)]" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-primary)]">
            DesignLab
          </span>
          <p className="text-xs leading-tight text-[var(--color-on-dark-mute)]">
            &copy; {new Date().getFullYear()} DesignLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
