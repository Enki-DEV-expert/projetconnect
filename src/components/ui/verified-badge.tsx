import { ShieldCheck, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedBadge({
  type,
  label,
  size = "sm",
}: {
  type: "investor" | "talent";
  label: string;
  size?: "sm" | "md";
}) {
  const Icon = type === "investor" ? ShieldCheck : BadgeCheck;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40 font-medium gap-1",
        size === "sm" ? "h-6 px-2.5 text-[11px]" : "h-7 px-3 text-xs gap-1.5"
      )}
    >
      <Icon className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      {label}
    </span>
  );
}
