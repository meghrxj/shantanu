import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Quality & Compliance" };

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="The credentials your auditor will actually ask about."
        intro="We stock to the marks that matter — ISI, BIS, CE, ISO — and we keep documentation traceable to source."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— What we guarantee</p>
              <h2 className="mt-6 display-h2">Genuine, marked, traceable.</h2>
            </div>
            <div className="space-y-6 text-[16px] leading-[1.7] text-ink/75 lg:col-span-7">
              <p>
                Every PPE line item we ship is brand-genuine and carries the
                applicable certification — ISI for Indian standards,
                CE for European-aligned respiratory and head protection,
                BIS for graded chemicals.
              </p>
              <p>
                We work directly with authorised distributors of the brands
                we carry, which means batch traceability when you need it
                and authentic compliance documentation when audit season
                arrives.
              </p>
              <p>
                After twenty years, we&apos;ve learned that the cheapest
                box of gloves is rarely the cheapest box of gloves. We
                stock what holds up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow text-ink">— Marks &amp; standards</p>
          <h2 className="mt-6 max-w-3xl display-h2">
            The certifications you&apos;ll see on our invoices.
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-px bg-line/60 sm:grid-cols-4">
            {[
              { mark: "ISI", body: "Indian Standards on PPE — helmets, harnesses, surgical gloves, dust masks." },
              { mark: "CE", body: "European-aligned respiratory protection (FFP1, FFP2, FFP3) and CE-marked helmets." },
              { mark: "BIS", body: "Graded industrial chemicals and acids to specified purity." },
              { mark: "Brand-genuine", body: "Authorised channel for 3M, Venus, JSP, Sico, VAULTEX, FRONTIER, Udyogi, and others." },
            ].map((m) => (
              <div key={m.mark} className="bg-cream p-8">
                <p className="font-display text-[36px] leading-none tracking-tighter-display text-ink">
                  {m.mark}
                </p>
                <p className="mt-6 text-[14px] leading-relaxed text-ink/65">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need compliance documentation for a specific line item?"
        body="Send us the SKU and the certification you need — we&rsquo;ll come back to you with the paperwork."
        primaryLabel="Request documentation"
      />
    </>
  );
}
