import { cn } from "@/lib/utils";

// Button variants
type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:opacity-90 hover:shadow-purple-500/40 shadow-lg shadow-purple-600/20",
  secondary: "card-solid text-foreground hover:border-purple-500/50 hover:bg-purple-500/10",
  ghost: "text-foreground-muted hover:text-white hover:bg-purple-500/10",
  outline:
    "border border-border text-foreground hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10",
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
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
