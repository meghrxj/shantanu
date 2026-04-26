import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Why Shantanu" };

const REASONS = [
  {
    num: "01",
    title: "Single-window industrial supply",
    body: "Packaging, safety, finishing and housekeeping from one supplier. One purchase order. One delivery vehicle. One accounts contact.",
  },
  {
    num: "02",
    title: "Two decades of tenure",
    body: "Established 2003. The plants we supplied in our first year are still calling today — that's the only credential that matters.",
  },
  {
    num: "03",
    title: "Same-day Pune-belt logistics",
    body: "Based in Pirangut, Pune, with a stocking model designed for next-day-or-sooner across the surrounding industrial corridor.",
  },
  {
    num: "04",
    title: "Genuine brands, never substitutes",
    body: "Ultra Udyogi, JSP, ROCKLITE, FRONTIER, 3M, Venus, Sico, VAULTEX, Almonard, Asian Paints, Nerolac. We don't substitute.",
  },
  {
    num: "05",
    title: "Compliance-grade product mix",
    body: "ISI-marked PPE, CE-approved respirators, BIS-graded chemicals. The line items that keep your auditor satisfied.",
  },
  {
    num: "06",
    title: "Relationship-led service",
    body: "A small repeat order gets the same care as a large one. We service the buyer, not the order book.",
  },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Shantanu"
        title="Six reasons. Twenty years. One single-window supplier."
        intro="What we offer when a procurement team chooses Shantanu Enterprises over a generic distributor."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <article key={r.num} className="bg-white p-8 lg:p-10 lg:min-h-[300px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {r.num}
                </p>
                <h2 className="mt-10 font-display text-[24px] leading-[1.15] tracking-tightish text-ink lg:text-[28px]">
                  {r.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="One supplier. Twenty years. Hundreds of plants."
        body="Find out how a single relationship can replace four overlapping vendor contracts."
      />
    </>
  );
}
