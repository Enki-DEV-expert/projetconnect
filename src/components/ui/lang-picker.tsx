"use client";

import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const FLAGS: Record<string, string> = { fr: "🇫🇷", en: "🇬🇧", pt: "🇵🇹" };
const LANGS = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
] as const;

export function LangPicker({
  locale,
  variant = "light",
}: {
  locale: string;
  variant?: "light" | "dark";
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    // Replace /fr/ or /en/ or /pt/ at start of path
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  }

  const base =
    variant === "dark"
      ? "text-white/80 hover:bg-white/10"
      : "text-ink/70 hover:bg-ink/5";
  const active =
    variant === "dark" ? "bg-white text-ink" : "bg-ink text-white";
  const wrapper =
    variant === "dark"
      ? "border-white/15 bg-white/5"
      : "border-line bg-white";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-full border no-tap",
        wrapper
      )}
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "h-8 px-2.5 rounded-full flex items-center gap-1.5 text-xs font-medium transition",
            locale === code ? active : base
          )}
        >
          <span className="text-base leading-none">{FLAGS[code]}</span>
          <span className="tracking-wide">{label}</span>
        </button>
      ))}
    </div>
  );
}
