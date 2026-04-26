import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About · Since ${SITE.established}`}
        title="The supplier Pune's manufacturers have grown up with."
        intro="For two decades, Shantanu Enterprises has stocked, sourced and delivered the everyday consumables that keep Pune's industrial belt moving — packaging, safety, finishing chemicals and housekeeping, all from one trusted source."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— Our story</p>
              <h2 className="mt-6 display-h2">Built one relationship at a time.</h2>
            </div>
            <div className="space-y-6 text-[16px] leading-[1.7] text-ink/75 lg:col-span-7">
              <p>
                Shantanu Enterprises started in {SITE.established} as a small,
                relationship-led industrial supplier in Pirangut, Pune. In the
                two decades since, we&apos;ve watched the corridor grow from a
                handful of fledgling units into one of western India&apos;s
                most strategically important manufacturing clusters — and
                we&apos;ve supplied the plants that built it from day one.
              </p>
              <p>
                We do one thing well: we keep the consumables flowing.
                Stretch wrap when the dispatch line is loading. FFP2
                respirators when EHS calls. Industrial acid when finishing
                runs hot. Floor phenol when housekeeping rounds the corner.
                Four verticals, hundreds of SKUs, one phone number, one
                invoice.
              </p>
              <p>
                Two decades is an enormous tenure in Indian industrial
                distribution. It is also the only credential that matters:
                the plants we supplied in our first year are still calling
                today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream section-pad">
        <div className="container-x">
          <p className="eyebrow text-ink">— What we stand for</p>
          <h2 className="mt-6 max-w-3xl display-h2">
            Three principles, two decades old.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-px bg-line/60 lg:grid-cols-3">
            {[
              {
                num: "01",
                t: "Genuine brands, always.",
                d: "We distribute Ultra Udyogi, JSP, ROCKLITE, FRONTIER, 3M, Venus, Sico, VAULTEX, Almonard, Asian Paints, Nerolac and others. We do not substitute.",
              },
              {
                num: "02",
                t: "Single-window convenience.",
                d: "Packaging, safety, finishing and housekeeping from one supplier — one purchase order, one delivery vehicle, one accounts contact.",
              },
              {
                num: "03",
                t: "Relationships over transactions.",
                d: "A small repeat order gets the same care as a large one. We service the buyer, not the order book.",
              },
            ].map((v) => (
              <div key={v.num} className="bg-cream p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  {v.num}
                </p>
                <h3 className="mt-10 font-display text-[26px] leading-[1.15] tracking-tightish text-ink lg:text-[30px]">
                  {v.t}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— Where we operate</p>
              <h2 className="mt-6 display-h2">
                Based in <span className="italic">Pirangut, Pune.</span> Delivering across the belt.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.65] text-ink/75">
                Our base is Pirangut, Pune — at the heart of the
                manufacturing corridor we serve. From here we deliver same-day
                or next-day across the Pune industrial belt to plants
                producing for automotive, food &amp; beverage, pharmaceuticals,
                electronics, packaging, and general engineering.
              </p>
              <dl className="mt-12 grid grid-cols-1 gap-px bg-line/70 sm:grid-cols-2">
                <div className="bg-white p-6">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Address</dt>
                  <dd className="mt-3 text-[16px] text-ink">{SITE.address}</dd>
                </div>
                <div className="bg-white p-6">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Phone</dt>
                  <dd className="mt-3 text-[16px] text-ink">
                    <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div className="bg-white p-6 sm:col-span-2">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Email</dt>
                  <dd className="mt-3 text-[16px] text-ink">
                    <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Twenty years on, still picking up the phone."
        body="Tell us what you need — we&rsquo;ll come back to you the same day."
      />
    </>
  );
}
