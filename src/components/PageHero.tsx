type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="container-x pt-16 pb-20 lg:pt-24 lg:pb-28">
        <p className="eyebrow text-ink">{eyebrow}</p>
        <h1 className="mt-6 display-h1 max-w-4xl">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-2xl body-lead">{intro}</p>
        )}
      </div>
    </section>
  );
}
