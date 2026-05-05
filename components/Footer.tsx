import { BrandMark } from "./BrandMark";

const productLinks = [
  { href: "#products", label: "HRIS" },
  { href: "#products", label: "ePRIME" },
  { href: "#products", label: "Palarong Pambansa" },
  { href: "#products", label: "School Management" },
  { href: "#products", label: "POS & Inventory" },
];

const companyLinks = [
  { href: "#approach", label: "Approach" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
  { href: "#", label: "Careers" },
];

const contactLinks = [
  {
    href: "mailto:scorpionkean.112688@gmail.com",
    label: "scorpionkean.112688@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-0 pt-12 pb-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className="flex items-center gap-2.5 text-[15px] font-medium tracking-[-0.015em]"
            >
              <BrandMark />
              <span>Keri Tech</span>
            </a>
            <p className="mt-4 max-w-[32ch] text-sm text-neutral-400">
              Operational software for institutions that depend on it.
              Philippines.
            </p>
          </div>

          <FootCol title="Products" links={productLinks} />
          <FootCol title="Company" links={companyLinks} />
          <FootCol title="Contact" links={contactLinks} />
        </div>

        <div className="flex flex-col flex-wrap items-start justify-between gap-3 border-t border-white/[0.08] pt-6 text-[13px] text-neutral-500 sm:flex-row sm:items-center">
          <span>© 2026 Keri Tech. All rights reserved.</span>
          <span>BIR · DTI · PhilGEPS Platinum</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[11px] font-normal tracking-[0.12em] text-neutral-500 uppercase">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
