/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { getCategory, PRODUCT_CATEGORIES } from "@/lib/products";

export function CategoryPage({ slug }: { slug: string }) {
  const cat = getCategory(slug);
  if (!cat) return notFound();

  const idx = PRODUCT_CATEGORIES.findIndex((c) => c.slug === slug);
  const next = PRODUCT_CATEGORIES[(idx + 1) % PRODUCT_CATEGORIES.length];

  return (
    <>
      {/* Hero with text on left, image on right */}
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-14 lg:pt-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow text-ink">Products · {cat.number}</p>
              <h1 className="mt-6 display-h1">{cat.title}</h1>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
                {cat.intro}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-white sm:aspect-[16/11] lg:aspect-[5/4]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-14 lg:mt-20" />
        </div>
      </section>

      {/* Sub-category index */}
      <section className="border-b border-line bg-white">
        <div className="container-x py-8 lg:py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
            On this page
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {cat.subCategories.map((sub, i) => (
              <li key={sub.title}>
                <a
                  href={`#sub-${i}`}
                  className="text-[14px] text-ink/75 underline-offset-4 transition-all hover:text-ink hover:underline"
                >
                  {String(i + 1).padStart(2, "0")} {sub.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sub-categories */}
      <section className="section-pad">
        <div className="container-x">
          <div className="space-y-20 lg:space-y-28">
            {cat.subCategories.map((sub, i) => (
              <article
                key={sub.title}
                id={`sub-${i}`}
                className="grid scroll-mt-24 grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <header className="lg:col-span-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                    Sub-category · {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-6 font-display text-[26px] leading-[1.1] tracking-tightish text-ink lg:text-[34px]">
                    {sub.title}
                  </h2>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-all duration-300 ease-out-quint hover:gap-3 hover:text-accent"
                  >
                    Enquire about this range
                    <span aria-hidden="true">→</span>
                  </Link>
                </header>
                <ul className="lg:col-span-8">
                  {sub.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-6 border-t border-line py-5 last:border-b"
                    >
                      <span className="font-display text-[14px] text-ink/35 pt-1">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[15px] leading-[1.55] text-ink/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next category */}
      <section className="border-y border-line bg-cream">
        <div className="container-x py-12">
          <Link
            href={`/products/${next.slug}`}
            className="group flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                Next vertical · {next.number}
              </p>
              <h3 className="mt-3 font-display text-[28px] leading-[1.1] tracking-tightish text-ink lg:text-[34px]">
                {next.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-all duration-300 ease-out-quint group-hover:gap-3">
              Continue
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Ready to order from ${cat.title.toLowerCase()}?`}
        body="Tell us your sizes, brands and quantities."
        primaryLabel="Request a quote"
      />
    </>
  );
}
