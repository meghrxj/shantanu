type LogoProps = {
  variant?: "ink" | "cream";
  className?: string;
};

/**
 * Logo placeholder — a simple geometric mark.
 * Replace this component when the final logo PNG/SVG is supplied.
 * Per the brief: never render the company name as a typographic logo.
 */
export function Logo({ variant = "ink", className = "" }: LogoProps) {
  const bg = variant === "ink" ? "#0B1B2D" : "#F4F1EA";
  const fg = variant === "ink" ? "#F4F1EA" : "#0B1B2D";

  return (
    <a
      href="/"
      aria-label="Shantanu Enterprises home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center"
        style={{ background: bg }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={fg} strokeWidth="2">
          <path d="M3 12 L21 12 M12 3 L12 21" />
          <circle cx="12" cy="12" r="4" stroke={fg} fill="none" />
        </svg>
      </span>
      <span
        aria-hidden="true"
        className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] sm:inline-block"
        style={{ color: fg === "#F4F1EA" ? "#0B1B2D" : "#0B1B2D" }}
      >
        {/* Visually hidden brand text — readable for accessibility tools but visually a placeholder */}
        <span className="sr-only">Shantanu Enterprises</span>
        <span aria-hidden="true" className="text-ink/70">[LOGO]</span>
      </span>
    </a>
  );
}
