export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block w-[18px] h-[18px] bg-neutral-100 rounded-[4px] overflow-hidden ${className}`}
      aria-hidden
    >
      <span className="absolute inset-y-1 left-2 right-1 bg-neutral-950 rounded-[1px]" />
    </span>
  );
}
