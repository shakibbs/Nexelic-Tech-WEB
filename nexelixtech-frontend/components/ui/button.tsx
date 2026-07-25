import { cn } from "@/lib/utils";

// Button variants
type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-indigo to-accent-cyan text-white hover:opacity-90 shadow-lg shadow-accent-indigo/20",
  secondary: "card-solid text-foreground hover:border-white/20",
  ghost: "text-foreground-muted hover:text-foreground hover:bg-white/5",
  outline:
    "border border-border text-foreground hover:border-accent-cyan hover:text-accent-cyan",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
