import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* Big "About" heading, short subtitle */}
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">{`Since ${SITE.established}`}</p>
          <h1 className="mt-6 display-hero">About.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            The supplier Pune&apos;s manufacturers have grown up with.
          </p>
        </div>
      </section>

      {/* Short principles, no long story */}
      <section className="section-pad">
        <div className="container-x">
          <p className="eyebrow text-ink">— What we stand for</p>
          <h2 className="mt-6 max-w-3xl display-h2">
            Three principles. <span className="italic">Twenty years.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px bg-line/60 lg:grid-cols-3">
            {[
              { num: "01", t: "Genuine brands.", d: "Authorised distributor. We don't substitute." },
              { num: "02", t: "Single window.", d: "One PO, one delivery, one accounts contact." },
              { num: "03", t: "Relationships.", d: "Same care for a small repeat as a large order." },
            ].map((v) => (
              <div key={v.num} className="bg-white p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  {v.num}
                </p>
                <h3 className="mt-10 font-display text-[28px] leading-[1.1] tracking-tightish text-ink">
                  {v.t}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact contact block */}
      <section className="border-t border-line bg-cream py-20">
        <div className="container-x">
          <p className="eyebrow text-ink">— Where to find us</p>
          <div className="mt-10 grid grid-cols-1 gap-px bg-line/70 sm:grid-cols-3">
            <div className="bg-cream p-8">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Address</dt>
              <dd className="mt-3 text-[16px] text-ink">{SITE.address}</dd>
            </div>
            <div className="bg-cream p-8">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Phone</dt>
              <dd className="mt-3 text-[16px] text-ink">
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div className="bg-cream p-8">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Email</dt>
              <dd className="mt-3 text-[16px] text-ink">
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              </dd>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Twenty years on, still picking up the phone." />
    </>
  );
}
