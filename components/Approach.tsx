import { FadeIn } from "./FadeIn";

const principles = [
  {
    num: "01",
    title: "Built to outlast administrations",
    body: "Government systems run for ten, fifteen, twenty years. We engineer for that horizon — boring stacks, exhaustive docs, handover-ready code.",
  },
  {
    num: "02",
    title: "Compliance is the floor",
    body: "Data Privacy Act, COA, BIR, DepEd — we treat regulatory requirements as a starting point, then design for what officers actually need.",
  },
  {
    num: "03",
    title: "Local team, local context",
    body: "Every engineer on staff has worked inside Philippine institutions. We know what an LGU procurement cycle looks like in July.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="border-t border-white/[0.08] py-20 md:py-25"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[11.5px] tracking-[0.12em] text-neutral-500 uppercase">
              03 — Approach
            </span>
            <h2 className="mt-3.5 max-w-[22ch] text-[30px] leading-[1.1] font-medium tracking-[-0.02em] sm:text-[clamp(30px,3.6vw,44px)]">
              Built for the{" "}
              <em className="not-italic text-neutral-400">long view.</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
          {principles.map((p, i) => (
            <FadeIn key={p.num} delay={i * 80}>
              <div className="mb-4 font-mono text-[11px] tracking-[0.08em] text-[var(--color-accent)]">
                {p.num}
              </div>
              <h4 className="mb-2.5 text-[17px] font-medium tracking-[-0.01em]">
                {p.title}
              </h4>
              <p className="max-w-[36ch] text-sm leading-[1.6] text-neutral-400">
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
