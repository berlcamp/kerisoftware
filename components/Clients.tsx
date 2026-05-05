import { FadeIn } from "./FadeIn";

const clients = [
  "Department of Education",
  "Pharmaceutical Companies",
  "Local Government Units",
  "Private Businesses",
];

export function Clients() {
  return (
    <section
      id="clients"
      className="border-t border-white/[0.08] py-20 md:py-25"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[11.5px] tracking-[0.12em] text-neutral-500 uppercase">
              02 — Clients
            </span>
            <h2 className="mt-3.5 max-w-[22ch] text-[30px] leading-[1.1] font-medium tracking-[-0.02em] sm:text-[clamp(30px,3.6vw,44px)]">
              Trusted by the public sector{" "}
              <em className="not-italic text-neutral-400">
                and the boardroom.
              </em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn className="overflow-hidden rounded-xl border border-white/[0.08]">
          <div className="grid grid-cols-2 gap-px bg-white/[0.08] sm:grid-cols-3 md:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c}
                className="flex min-h-[96px] items-center justify-center bg-neutral-950 px-5 py-8 text-center text-sm text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
              >
                {c}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
