import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CLIENT_PLACEHOLDER_COUNT } from "@/lib/site";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="The plants that have grown up with us."
        intro="A selection of marquee manufacturers across the Pune industrial belt — automotive tier-1s, food &amp; beverage, packaging converters, pharmaceuticals, and engineering — all served on the same single-window basis."
      />

      <section className="section-pad">
        <div className="container-x">
          <p className="eyebrow text-ink">— Trusted across Pune&apos;s industrial belt</p>
          <h2 className="mt-6 max-w-3xl display-h2">
            Marquee names. <span className="italic">Long-standing relationships.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-ink/65">
            The company logos below will be added shortly. Until then, the
            placeholders mark each slot.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-px bg-line/60 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: CLIENT_PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="logo-placeholder aspect-[16/7] bg-cream"
                aria-label={`Client logo ${i + 1} placeholder`}
              >
                <span aria-hidden="true">Logo {String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Become our next long-standing client."
        body="Tell us about your plant — what you make, what you need, how often. We&rsquo;ll come back to you the same day."
        primaryLabel="Start a conversation"
      />
    </>
  );
}
