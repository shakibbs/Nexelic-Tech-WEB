export const metadata = {
  title: "Careers | Nexelix Tech",
  description: "Join our elite team of engineers and designers to build the future of software.",
};

export default function CareersPage() {
  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
          Careers at <span className="text-gradient-accent">Nexelix</span>
        </h1>
        <div className="glass-card p-8 sm:p-12 rounded-3xl glow-border">
          <p className="text-lg sm:text-xl leading-8 text-foreground-muted">
            Stay connected with us for further information and future openings!
          </p>
        </div>
      </div>
    </div>
  );
}
