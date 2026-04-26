import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBand({
  eyebrow = "Talk to us",
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Request a quote",
}: CtaBandProps) {
  return (
    <section className="bg-ink">
      <div className="container-x py-24 lg:py-32">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/45">
              — {eyebrow}
            </p>
            <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-tighter-display text-cream sm:text-[48px] lg:text-[64px]">
              {title}
            </h2>
            {body && (
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream/65">
                {body}
              </p>
            )}
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 text-[13px] font-semibold tracking-tight transition-all duration-300 ease-out-quint hover:bg-accent hover:text-white"
            >
              {primaryLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
