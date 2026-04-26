/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ClientStrip } from "@/components/ClientStrip";
import { SITE } from "@/lib/site";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip headline="Trusted by Pune's manufacturers" />
      <Categories />
      <Stats />
      <Heritage />
      <CtaBand
        title="One supplier. Four verticals."
        body="Tell us what you need."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
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
              Pirangut, Pune · Since {SITE.established}
            </p>
            <h1 className="mt-7 display-hero">
              Industrial supplies that
              <br className="hidden sm:block" />
              <span className="italic text-ink/80"> keep Pune&apos;s factories</span>
              <br className="hidden sm:block" /> running.
            </h1>
            <p className="mt-8 max-w-xl body-lead">
              Two decades. Four verticals. One trusted partner.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Request a quote
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="btn-ghost">
                Browse products
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

function Categories() {
  return (
    <section className="border-y border-line bg-cream/40 section-pad">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="eyebrow text-ink">— Verticals</p>
            <h2 className="mt-6 display-h2">Four verticals, deeply stocked.</h2>
          </div>
          <Link href="/products" className="btn-ghost">
            See all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group relative bg-white transition-colors duration-300 hover:bg-cream"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-cream">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-quint group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                    {cat.number}
                  </p>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
                    {cat.subCategories.length} sub-categories
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[26px] leading-[1.1] tracking-tightish text-ink sm:text-[30px]">
                  {cat.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-all duration-300 ease-out-quint group-hover:gap-3">
                  Explore
                  <span aria-hidden="true">→</span>
                </div>
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
    { value: "20+", label: "Years" },
    { value: "200+", label: "SKUs" },
    { value: "04", label: "Verticals" },
    { value: "Same day", label: "Delivery" },
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
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/45">
            — Built across two decades
          </p>
          <p className="mt-10 font-display text-[32px] leading-[1.18] text-cream sm:text-[44px] lg:text-[56px]">
            &ldquo;For twenty years, we&apos;ve supplied & support major industrial companies in Pune.&rdquo;
          </p>
          <p className="mt-10 text-[12px] uppercase tracking-[0.22em] text-cream/45">
            — Established {SITE.established}
          </p>
        </div>
      </div>
    </section>
  );
}
