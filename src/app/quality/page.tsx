import { CtaBand } from "@/components/CtaBand";

export const metadata = { title: "Quality & Compliance" };

export default function QualityPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Quality & Compliance</p>
          <h1 className="mt-6 display-hero">Quality.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            Genuine, marked, traceable.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <p className="eyebrow text-ink">— Marks &amp; standards</p>
          <h2 className="mt-6 max-w-3xl display-h2">
            The certifications on our invoices.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-px bg-line/60 sm:grid-cols-4">
            {[
              { mark: "ISI", body: "Indian standards on PPE." },
              { mark: "CE", body: "European-aligned respiratory protection." },
              { mark: "BIS", body: "Graded industrial chemicals." },
              { mark: "Genuine", body: "Authorised channel for all major brands." },
            ].map((m) => (
              <div key={m.mark} className="bg-white p-8">
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
        title="Need documentation for a SKU?"
        primaryLabel="Request docs"
      />
    </>
  );
}
