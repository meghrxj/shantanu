import { CLIENT_PLACEHOLDER_COUNT } from "@/lib/site";

export function ClientStrip({ headline }: { headline?: string }) {
  return (
    <section className="border-y border-line bg-cream">
      <div className="container-x py-14 lg:py-16">
        {headline && (
          <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
            {headline}
          </p>
        )}
        <div className="grid grid-cols-2 gap-px bg-line/60 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: CLIENT_PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="logo-placeholder aspect-[16/7] bg-cream"
              aria-label={`Client logo ${i + 1} placeholder`}
            >
              <span aria-hidden="true">Logo {String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[12px] text-ink/40">
          Client logos to be added.
        </p>
      </div>
    </section>
  );
}
