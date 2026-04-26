import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ClientStrip } from "@/components/ClientStrip";
import { SITE } from "@/lib/site";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip headline={`Trusted across Pune's industrial belt for ${SITE.yearsInIndustry} years`} />
      <ValueProp />
      <Categories />
      <Stats />
      <Heritage />
      <Testimonials />
      <CtaBand
        title="Need a custom quote? Talk to a specialist today."
        body="One purchase order, one delivery, one trusted partner across packaging, safety, finishing and housekeeping."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Subtle geometric backdrop — no photo, all CSS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-br from-ink/5 to-transparent blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <svg
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#0B1B2D" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-x relative pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-9">
            <p className="eyebrow text-ink">
              Industrial supply · Pirangut, Pune · Since {SITE.established}
            </p>
            <h1 className="mt-7 display-hero">
              Industrial supplies that
              <br className="hidden sm:block" />
              <span className="italic text-ink/80"> keep Pune&apos;s factories</span>
              <br className="hidden sm:block" /> running.
            </h1>
            <p className="mt-8 max-w-2xl body-lead">
              Two decades of single-window supply across packaging, safety,
              finishing chemicals and housekeeping — for the manufacturers
              that built Pune&apos;s industrial corridor.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Request a quote
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="btn-ghost">
                Browse our products
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <div className="border-l border-ink/15 pl-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                At a glance
              </p>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Years</dt>
                  <dd className="font-display text-[40px] leading-none text-ink">{SITE.yearsInIndustry}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">SKUs</dt>
                  <dd className="font-display text-[40px] leading-none text-ink">{SITE.skuCount}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Verticals</dt>
                  <dd className="font-display text-[40px] leading-none text-ink">04</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink">— What we do</p>
            <h2 className="mt-6 display-h2">
              One supplier. <span className="italic">Four verticals.</span> Every working consumable a Pune plant needs.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-7">
            <p className="text-[18px] leading-[1.65] text-ink/75">
              From hand-grade stretch wrap in the morning to FFP2 respirators
              after lunch, hydrochloric acid for the finishing line and floor
              phenol for the housekeeping team — Shantanu Enterprises is the
              partner that turns four separate purchase orders into one.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/65">
              We stock genuine brands only — Ultra Udyogi, JSP, ROCKLITE, FRONTIER, 3M, Venus, Sico, VAULTEX, Almonard, Asian Paints, Nerolac — and ship same-day across the Pune industrial belt. ISI-marked PPE, CE-approved respirators, BIS-graded chemicals: compliance-grade, every line item.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="border-y border-line bg-cream/40 section-pad">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="eyebrow text-ink">— Product verticals</p>
            <h2 className="mt-6 display-h2">Four verticals, deeply stocked.</h2>
          </div>
          <Link href="/products" className="btn-ghost">
            See all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-cream sm:p-10 lg:p-14"
            >
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {cat.number}
                </p>
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
                  {cat.subCategories.length} sub-categories
                </span>
              </div>
              <h3 className="mt-12 font-display text-[28px] leading-[1.1] tracking-tightish text-ink sm:text-[34px] lg:mt-20 lg:text-[40px]">
                {cat.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">
                {cat.intro}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-all duration-300 ease-out-quint group-hover:gap-3">
                Explore
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "20+", label: "Years in industry" },
    { value: "200+", label: "Active SKUs" },
    { value: "10+", label: "Marquee clients" },
    { value: "Same day", label: "Pune-wide delivery" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px bg-line/70 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-12 lg:px-10 lg:py-16">
              <p className="font-display text-[44px] leading-none tracking-tighter-display text-ink lg:text-[64px]">
                {s.value}
              </p>
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section className="bg-ink py-28 lg:py-40">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/45">
            — Built across two decades
          </p>
          <p className="mt-10 font-display text-[32px] leading-[1.18] text-cream sm:text-[44px] lg:text-[60px]">
            &ldquo;For twenty years, we&apos;ve supplied the plants that
            built Pirangut.&rdquo;
          </p>
          <p className="mt-10 text-[12px] uppercase tracking-[0.22em] text-cream/45">
            — Shantanu Enterprises · Established {SITE.established}
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Shantanu has been our single-window for packaging and PPE for years. One call, one invoice, and the dispatch line keeps moving.",
      attr: "Plant procurement, automotive tier-1, Pirangut",
    },
    {
      quote:
        "What we like is the depth — they actually stock the brands we specify, in the sizes we need, without the usual back-orders.",
      attr: "EHS lead, food & beverage processor",
    },
    {
      quote:
        "Reliable, technical, and unfussy. Shantanu treats a small repeat order with the same care as a large one.",
      attr: "Sourcing manager, packaging converter",
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow text-ink">— What our clients say</p>
          <h2 className="mt-6 display-h2">
            Trusted by the people who keep <span className="italic">Pune&apos;s plants</span> running.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line/60 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="bg-white p-8 lg:p-10">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink/20" fill="currentColor">
                <path d="M9 7H5v4c0 2.5-1 4.5-3 6h3c3 0 5-2 5-5V7zm10 0h-4v4c0 2.5-1 4.5-3 6h3c3 0 5-2 5-5V7z" />
              </svg>
              <blockquote className="mt-6 text-[17px] leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-[12px] uppercase tracking-[0.18em] text-ink/45">
                {t.attr}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
