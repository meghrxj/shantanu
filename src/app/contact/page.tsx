import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Contact</p>
          <h1 className="mt-6 display-hero">Contact.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            Tell us what you need. Same-day response.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— Direct lines</p>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                    Phone
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="font-display text-[28px] leading-none text-ink hover:text-accent"
                    >
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                    Email
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[18px] text-ink hover:text-accent break-all"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                    Address
                  </dt>
                  <dd className="mt-3 text-[18px] text-ink">{SITE.address}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                    Hours
                  </dt>
                  <dd className="mt-3 text-[16px] text-ink/75">
                    Mon – Sat · 9 AM – 7 PM
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-6 sm:p-10 lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Request a quote
                </p>
                <h2 className="mt-3 font-display text-[28px] leading-[1.1] tracking-tightish text-ink">
                  Tell us a bit about what you need.
                </h2>
                <div className="mt-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
