export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-25 md:pt-30 md:pb-35">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[200px] left-1/2 h-[700px] w-[900px] -translate-x-[30%] blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(199,242,132,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <span className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-neutral-900 px-3 py-1.5 font-mono text-[11.5px] text-neutral-400">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
            style={{ boxShadow: "0 0 8px var(--color-accent)" }}
          />
          Software studio · Manila, Philippines
        </span>

        <h1 className="mb-7 max-w-[18ch] text-[42px] leading-[1.02] font-medium tracking-[-0.035em] sm:text-[clamp(42px,6.6vw,88px)]">
          Software for the institutions that{" "}
          <em className="not-italic text-neutral-400">keep things running.</em>
        </h1>

        <p className="mb-11 max-w-[58ch] text-base leading-[1.55] text-neutral-400 sm:text-[clamp(16px,1.4vw,19px)]">
          Keri Tech builds operational systems for Philippine government
          agencies and private enterprises — from HR and procurement to school
          management, command centers, and retail.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-100 px-3.5 py-2.5 text-[13.5px] font-medium text-neutral-950 transition-all hover:border-neutral-400 hover:bg-neutral-400"
          >
            View products
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] px-3.5 py-2.5 text-[13.5px] font-medium transition-all hover:border-neutral-400 hover:bg-white/[0.05]"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-8 md:grid-cols-3">
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-[0.1em] text-neutral-500 uppercase">
              Active deployments
            </div>
            <div className="text-[28px] font-medium tracking-[-0.02em]">
              47
              <span className="ml-1 text-[18px] font-normal text-neutral-500">
                sites
              </span>
            </div>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-[0.1em] text-neutral-500 uppercase">
              Records managed
            </div>
            <div className="text-[28px] font-medium tracking-[-0.02em]">
              2.4M
              <span className="ml-1 text-[18px] font-normal text-neutral-500">
                +
              </span>
            </div>
          </div>
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-[0.1em] text-neutral-500 uppercase">
              In operation since
            </div>
            <div className="text-[28px] font-medium tracking-[-0.02em]">
              2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
