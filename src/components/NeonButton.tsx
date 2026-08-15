import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-glow hover:-translate-y-0.5 glow-pulse",
  outline:
    "border border-border bg-white/5 text-foreground hover:border-primary hover:bg-primary/15",
  ghost: "text-foreground/80 hover:text-primary-glow",
  gold: "bg-gold text-background hover:brightness-110 hover:-translate-y-0.5",
  whatsapp: "bg-[oklch(0.72_0.17_150)] text-background hover:brightness-110 hover:-translate-y-0.5",
} as const;

export type NeonVariant = keyof typeof variants;

export function NeonButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: NeonVariant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function NeonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: NeonVariant; children: ReactNode }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
