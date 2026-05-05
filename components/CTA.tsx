import { FadeIn } from "./FadeIn";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.08] py-25 text-center md:py-30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 blur-[30px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(199,242,132,0.06), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="mx-auto mb-6 max-w-[18ch] text-[34px] leading-[1.05] font-medium tracking-[-0.03em] sm:text-[clamp(34px,5.4vw,64px)]">
            Have a system that{" "}
            <em className="not-italic text-neutral-400">has to work?</em>
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mx-auto mb-9 max-w-[52ch] text-[17px] leading-[1.55] text-neutral-400">
            Tell us what you&rsquo;re building, who it serves, and what
            you&rsquo;re up against. We&rsquo;ll be honest about whether
            we&rsquo;re the right team.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="inline-flex flex-wrap justify-center">
          <a
            href="mailto:scorpionkean.112688@gmail.com"
            className="group inline-flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-100 px-3.5 py-2.5 text-[13.5px] font-medium text-neutral-950 transition-all hover:border-neutral-400 hover:bg-neutral-400"
          >
            scorpionkean.112688@gmail.com
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
