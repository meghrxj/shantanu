import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Industries Served" };

const INDUSTRIES = [
  { num: "01", name: "Automotive & components", body: "Tier-1 to Tier-3 plants — packaging, PPE and housekeeping." },
  { num: "02", name: "Food & beverage", body: "Bottling, processing, packaging — food-grade consumables." },
  { num: "03", name: "Pharmaceuticals", body: "Cleanroom-adjacent supplies, lab consumables, gloves." },
  { num: "04", name: "Electronics & SMT", body: "ESD packaging, anti-static films, IPA, lab supplies." },
  { num: "05", name: "Packaging & converting", body: "BOPP tape, stretch film, strapping, sealing tools." },
  { num: "06", name: "General engineering", body: "Abrasives, finishing chemicals, filters, PPE, housekeeping." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Industries</p>
          <h1 className="mt-6 display-hero">Industries.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            Six sectors. One supplier across all of them.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <article key={ind.num} className="bg-white p-8 lg:p-10 lg:min-h-[260px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {ind.num}
                </p>
                <h2 className="mt-10 font-display text-[24px] leading-[1.15] tracking-tightish text-ink lg:text-[28px]">
                  {ind.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  {ind.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Tell us about your line." />
    </>
  );
}
