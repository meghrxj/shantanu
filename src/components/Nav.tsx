"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ease-out-quint ${
          scrolled
            ? "border-b border-line/80 bg-white/90"
            : "border-b border-transparent bg-white/70"
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between">
          <Logo variant="ink" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-medium tracking-tight text-ink/80 transition-colors duration-200 hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ink transition-all duration-300 ease-out-quint group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 text-[12px] font-semibold tracking-tight transition-all duration-300 ease-out-quint hover:bg-accent hover:text-white"
            >
              Request a quote
              <span aria-hidden="true">→</span>
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center text-ink lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 block h-px w-full bg-ink transition-transform duration-300 ease-out-quint ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-ink transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-px w-full bg-ink transition-transform duration-300 ease-out-quint ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — full screen, always reachable */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-cream transition-transform duration-500 ease-out-quint ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <Logo variant="ink" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 5 L19 19 M19 5 L5 19" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile primary">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-line/80 py-5 transition-colors duration-200 hover:border-ink"
                  >
                    <span className="font-display text-[28px] leading-none tracking-tightish text-ink">
                      {link.label}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-2 text-[13px] text-ink/70">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                Get in touch
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="block hover:text-ink">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block hover:text-ink">
                {SITE.email}
              </a>
              <p>{SITE.address}</p>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink text-cream px-6 py-4 text-sm font-semibold tracking-tight transition-all duration-300 ease-out-quint hover:bg-accent hover:text-white"
            >
              Request a quote
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
