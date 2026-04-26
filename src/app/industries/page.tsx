import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Industries Served" };

const INDUSTRIES = [
  {
    num: "01",
    name: "Automotive & auto components",
    body: "Tier-1, tier-2 and Tier-3 plants across the Pune corridor — packaging, PPE and housekeeping for high-volume body, paint, assembly and component lines.",
  },
  {
    num: "02",
    name: "Food & beverage",
    body: "Bottling, processing and packaging facilities — food-grade gloves, hairnets, ISI-marked PPE, sanitation chemicals and dispatch packaging.",
  },
  {
    num: "03",
    name: "Pharmaceuticals",
    body: "Cleanroom-adjacent supplies — disposables, gowning consumables, surgical and examination gloves, finishing chemicals and laboratory consumables.",
  },
  {
    num: "04",
    name: "Electronics & SMT",
    body: "ESD-aware packaging, anti-static films, foam, isolated component handling supplies, IPA and lab consumables.",
  },
  {
    num: "05",
    name: "Packaging & converting",
    body: "BOPP tape ranges, stretch film, strapping, edge boards, sealing tools and adhesive consumables — same-day where the press is hot.",
  },
  {
    num: "06",
    name: "General engineering & machine shops",
    body: "Abrasives, finishing chemicals, polishing media, filters, shop consumables, PPE and housekeeping for high-mix metalwork.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries served"
        title="Six sectors. One supplier across all of them."
        intro="The verticals we know best — and the plants that have made Shantanu Enterprises a single-window industrial supplier for two decades."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <article key={ind.num} className="bg-white p-8 lg:p-10 lg:min-h-[320px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {ind.num}
                </p>
                <h2 className="mt-10 font-display text-[24px] leading-[1.15] tracking-tightish text-ink lg:text-[28px]">
                  {ind.name}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
                  {ind.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-20 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— Cross-sector reliability</p>
              <h2 className="mt-6 display-h2">
                Different lines, <span className="italic">same fundamentals.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.65] text-ink/75">
                A bottling plant and an automotive press shop need different
                things — but they both need genuine brands, accurate sizing,
                same-day delivery and one phone call when something runs
                short. After twenty years, that&apos;s the part we&apos;ve
                stopped getting wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about your line."
        body="Whatever you make, we probably already supply someone who makes it nearby. Let&rsquo;s talk."
      />
    </>
  );
}
