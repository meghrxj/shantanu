/* eslint-disable @next/next/no-img-element */
import { CtaBand } from "@/components/CtaBand";
import { CLIENT_LOGOS } from "@/lib/site";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ink">Clients</p>
          <h1 className="mt-6 display-hero">Clients.</h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] text-ink/70 sm:text-[20px]">
            The plants that have grown up with us.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
  <div className="grid grid-cols-2 gap-px bg-line/60">
    {CLIENT_LOGOS.slice(0, CLIENT_LOGOS.length - (CLIENT_LOGOS.length % 2)).map((src, i) => (
      <div
        key={i}
        className="flex aspect-[16/9] items-center justify-center bg-white p-8"
      >
        <img src={src} alt="" aria-hidden="true" className="max-h-full max-w-full object-contain" />
      </div>
    ))}
  </div>
  {CLIENT_LOGOS.length % 2 === 1 && (
    <div className="mt-px flex justify-center">
      <div className="flex aspect-[16/9] w-1/2 items-center justify-center bg-white p-8">
        <img
          src={CLIENT_LOGOS[CLIENT_LOGOS.length - 1]}
          alt=""
          aria-hidden="true"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  )}
</div>
        </div>
      </section>

      <CtaBand
        title="Become our next long-standing client."
        primaryLabel="Start a conversation"
      />
    </>
  );
}
