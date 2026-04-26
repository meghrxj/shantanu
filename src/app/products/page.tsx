import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Four verticals. Two hundred-plus SKUs. One purchase order."
        intro="The full Shantanu Enterprises catalogue, organised the way a procurement team actually thinks about it. Click any vertical to see its sub-categories and line items."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group flex flex-col justify-between bg-white p-8 transition-colors duration-300 hover:bg-cream sm:p-12 lg:p-16 lg:min-h-[440px]"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                      {cat.number}
                    </p>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
                      {cat.subCategories.length} sub-categories
                    </span>
                  </div>
                  <h2 className="mt-12 font-display text-[28px] leading-[1.05] tracking-tighter-display text-ink sm:text-[36px] lg:mt-16 lg:text-[44px]">
                    {cat.title}
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
                    {cat.intro}
                  </p>
                </div>
                <div className="mt-12 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-ink transition-all duration-300 ease-out-quint group-hover:gap-3">
                  Explore vertical
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a SKU not listed here?"
        body="With twenty years of supplier relationships, we can almost always source it. Tell us what you need."
        primaryLabel="Send an enquiry"
      />
    </>
  );
}
