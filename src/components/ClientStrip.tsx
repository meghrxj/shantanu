/* eslint-disable @next/next/no-img-element */
import { CLIENT_LOGOS } from "@/lib/site";

export function ClientStrip({ headline }: { headline?: string }) {
  // Duplicate the array so the marquee can loop seamlessly.
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-y border-line bg-cream">
      <div className="container-x py-12 lg:py-14">
        {headline && (
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
            {headline}
          </p>
        )}

        <div
          className="marquee relative overflow-hidden"
          aria-label="Our clients"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex w-max items-center gap-12 sm:gap-16 lg:gap-20">
            {loop.map((src, i) => (
              <div
                key={i}
                className="flex h-12 w-32 shrink-0 items-center justify-center sm:h-14 sm:w-40"
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
