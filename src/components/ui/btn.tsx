import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "gold" | "ghost" | "outline" | "dark" | "soft";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90",
  gold:    "bg-gold text-ink hover:bg-goldsoft",
  ghost:   "bg-transparent text-ink hover:bg-ink/5",
  outline: "bg-white text-ink border border-ink/15 hover:border-ink/40",
  dark:    "bg-white/10 text-white border border-white/15 hover:bg-white/15",
  soft:    "bg-ink/5 text-ink hover:bg-ink/10",
};

type BtnProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Btn({ variant = "primary", className, children, href, ...rest }: BtnProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-medium text-[15px] transition no-tap cursor-pointer",
    variants[variant],
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
