import { cn } from "@/lib/utils";

type Tone = "default" | "night" | "gold" | "light";

const tones: Record<Tone, string> = {
  default: "bg-ink/5 text-ink/80",
  night:   "bg-night/10 text-night",
  gold:    "bg-gold/15 text-gold",
  light:   "bg-white/10 text-white/80 ring-1 ring-white/15",
};

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
