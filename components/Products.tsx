import { FadeIn } from "./FadeIn";

type Product = {
  num: string;
  name: string;
  desc: string;
  tag: string;
  gov?: boolean;
};

const products: Product[] = [
  {
    num: "01",
    name: "HRIS",
    desc: "Human Resources Information System. Personnel records, payroll, leave, and statutory compliance for organizations of any size.",
    tag: "Government · Enterprise",
    gov: true,
  },
  {
    num: "02",
    name: "ePRIME",
    desc: "End-to-end public procurement infrastructure with full audit trails, vendor management, and bid processing.",
    tag: "Government · LGU",
    gov: true,
  },
  {
    num: "03",
    name: "Palarong Pambansa Command Center",
    desc: "Real-time operations platform coordinating athletes, venues, and live results across the country's largest student athletic meet.",
    tag: "Government · Live Ops",
    gov: true,
  },
  {
    num: "04",
    name: "School Management System",
    desc: "Enrollment, academic records, attendance, grading, and a parent portal in one platform for primary and secondary schools.",
    tag: "Education · Private",
  },
  {
    num: "05",
    name: "Point of Sale & Inventory",
    desc: "Counter-grade POS with multi-branch inventory sync, BIR-compliant receipts, and real-time sales reporting.",
    tag: "Private · Retail",
  },
  {
    num: "06",
    name: "Procurement and Asset Management System",
    desc: "Unified procurement workflows and asset lifecycle tracking — from requisition and purchase orders to depreciation, transfers, and disposal.",
    tag: "Government · Enterprise",
    gov: true,
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="border-t border-white/[0.08] py-20 md:py-25"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[11.5px] tracking-[0.12em] text-neutral-500 uppercase">
              01 — Products
            </span>
            <h2 className="mt-3.5 max-w-[22ch] text-[30px] leading-[1.1] font-medium tracking-[-0.02em] sm:text-[clamp(30px,3.6vw,44px)]">
              Some of the systems{" "}
              <em className="not-italic text-neutral-400">we&rsquo;ve built.</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn className="overflow-hidden rounded-xl border border-white/[0.08]">
          <div className="grid grid-cols-1 gap-px bg-white/[0.08] md:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.num}
                className="flex min-h-[240px] flex-col bg-neutral-950 px-7 pt-8 pb-7 transition-colors hover:bg-neutral-900"
              >
                <div className="mb-6 font-mono text-[11px] tracking-[0.05em] text-neutral-500">
                  {p.num}
                </div>
                <h3 className="mb-2.5 text-[19px] leading-[1.25] font-medium tracking-[-0.015em]">
                  {p.name}
                </h3>
                <p className="flex-grow text-sm leading-[1.55] text-neutral-400">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.08em] text-neutral-500 uppercase">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      p.gov ? "bg-[var(--color-accent)]" : "bg-neutral-500"
                    }`}
                  />
                  {p.tag}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
