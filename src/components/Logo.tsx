/* eslint-disable @next/next/no-img-element */
type LogoProps = {
  variant?: "ink" | "cream";
  className?: string;
};

export function Logo({ variant = "ink", className = "" }: LogoProps) {
  // On dark (ink) backgrounds in the footer, invert the logo so it reads as light.
  const invert = variant === "cream" ? "brightness-0 invert" : "";

  return (
    <a
      href="/"
      aria-label="Shantanu Enterprises home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/shantanu-logo.png"
        alt="Shantanu Enterprises"
        className={`h-9 w-auto sm:h-10 ${invert}`}
      />
    </a>
  );
}
