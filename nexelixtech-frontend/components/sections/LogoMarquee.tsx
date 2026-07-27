// Infinite social proof logo marquee (SRS §2 homepage section)
const clients = [
  "TechFlow",
  "DataSync",
  "CloudPeak",
  "NeuralSoft",
  "QuantumLabs",
  "FinEdge",
  "MediCore",
  "RetailX",
];

export function LogoMarquee() {
  // Hidden for now as requested
  return null;

  /*
  // Duplicate list for seamless infinite loop
  const loop = [...clients, ...clients];

  return (
    <section
      className="overflow-hidden py-12"
      aria-label="Trusted by 30+ startups and SMEs"
    >
      <p className="mb-8 text-center text-sm text-foreground-muted">
        Trusted by 30+ startups & SMEs worldwide
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-12">
          {loop.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-display text-xl font-bold text-foreground-muted/60"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
  */
}
