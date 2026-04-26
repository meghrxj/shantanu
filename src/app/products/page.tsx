/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Products</p>
          <h1 className="mt-6 display-hero">Products.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            Four verticals. Two hundred-plus SKUs. One purchase order.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group bg-white transition-colors duration-300 hover:bg-cream"
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
                  <h2 className="mt-6 font-display text-[28px] leading-[1.1] tracking-tightish text-ink sm:text-[32px]">
                    {cat.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">
                    {cat.intro}
                  </p>
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

      <CtaBand
        title="Need a SKU not listed?"
        body="Twenty years of supplier relationships. We can probably source it."
        primaryLabel="Send an enquiry"
      />
    </>
  );
}
