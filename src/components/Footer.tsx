import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/site";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/85">
      <div className="container-x py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[26px] leading-none tracking-tightish text-cream/85">
  Shantanu Enterprises
</p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/65">
              Two decades of single-window industrial supply for Pune&apos;s manufacturers.
            </p>
            <div className="mt-8 space-y-2 text-[14px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
                Get in touch
              </p>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="block text-cream hover:text-accent"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block text-cream hover:text-accent"
              >
                {SITE.email}
              </a>
              <p className="text-cream/65">{SITE.address}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-[14px]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Product verticals
            </p>
            <ul className="mt-5 space-y-3 text-[14px]">
              {PRODUCT_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-[12px] text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-cream/40">
            Established {SITE.established} · {SITE.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
