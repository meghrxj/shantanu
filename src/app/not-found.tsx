import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-x flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="eyebrow text-ink">— Error 404</p>
        <h1 className="mt-6 display-h1 max-w-3xl">
          That page doesn&apos;t exist. <span className="italic">Yet.</span>
        </h1>
        <p className="mt-8 max-w-xl body-lead">
          The address you tried isn&apos;t part of the site. Head back home,
          or browse our products.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/products" className="btn-outline">
            Browse products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
