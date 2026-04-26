import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need."
        intro="The fastest way to reach us is the form below. Same-day response on every working enquiry."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink">— Direct lines</p>
              <h2 className="mt-6 display-h3">
                We pick up the phone.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
                If your need is urgent, call or WhatsApp us. For
                everything else, the form on the right reaches the
                same team within minutes.
              </p>

              <dl className="mt-12 space-y-8">
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
                      className="text-[18px] text-ink hover:text-accent"
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
                    Monday – Saturday · 9:00 AM – 7:00 PM
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
