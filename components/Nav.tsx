import { BrandMark } from "./BrandMark";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-neutral-950/72 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2.5 text-[15px] font-medium tracking-[-0.015em]"
        >
          <BrandMark />
          <span>Keri Tech</span>
        </a>
        <ul className="flex items-center gap-7">
          <li className="hidden md:block">
            <a
              href="#products"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              Products
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#clients"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              Clients
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#approach"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              Approach
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.14] px-3.5 py-2 text-sm font-medium transition-all hover:border-neutral-400 hover:bg-white/[0.05]"
            >
              Contact
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
