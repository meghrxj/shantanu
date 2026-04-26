import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Why Shantanu" };

const REASONS = [
  { num: "01", title: "Single window.", body: "One PO across all four verticals." },
  { num: "02", title: "Twenty years.", body: "Established 2003. Still picking up the phone." },
  { num: "03", title: "Same-day delivery.", body: "Across the Pune industrial belt." },
  { num: "04", title: "Genuine brands.", body: "3M, JSP, Ultra Udyogi, Venus, Sico, VAULTEX." },
  { num: "05", title: "Compliance-grade.", body: "ISI-marked, CE-approved, BIS-graded." },
  { num: "06", title: "Relationships.", body: "Small repeat or large order — same care." },
];

export default function WhyPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Why Shantanu</p>
          <h1 className="mt-6 display-hero">Why us.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            Six reasons. Twenty years. One single-window supplier.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <article key={r.num} className="bg-white p-8 lg:p-10 lg:min-h-[240px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {r.num}
                </p>
                <h2 className="mt-10 font-display text-[24px] leading-[1.15] tracking-tightish text-ink lg:text-[28px]">
                  {r.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="One supplier. Twenty years." />
    </>
  );
}
