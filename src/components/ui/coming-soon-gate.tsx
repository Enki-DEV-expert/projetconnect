"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Logo } from "./logo";

/* ── Modal ──────────────────────────────────────────────────────── */
function ComingSoonModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadein"
      role="dialog"
      aria-modal="true"
      aria-label={t("cs_title" as Parameters<typeof t>[0]) as string}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-night/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm animate-pop">
        <div className="bg-paper rounded-3xl shadow-card overflow-hidden">

          {/* Gold top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

          <div className="px-8 pt-8 pb-10 flex flex-col items-center text-center gap-6">

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label={t("cs_close" as Parameters<typeof t>[0]) as string}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ink/[0.07] hover:bg-ink/[0.13] text-ink/40 hover:text-ink/70 flex items-center justify-center transition-colors no-tap"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Logo */}
            <div className="flex flex-col items-center gap-3">
              <Logo size={52} />
              <span className="font-display text-[17px] text-ink tracking-tight">
                ProjetConnect
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 h-px bg-line" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <div className="flex-1 h-px bg-line" />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-[22px] sm:text-[26px] text-ink leading-snug">
                {t("cs_title" as Parameters<typeof t>[0]) as string}
              </h2>

              {/* Subtitle with pulsing dot */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <p className="text-ink/50 text-[15px] font-medium">
                  {t("cs_sub" as Parameters<typeof t>[0]) as string}
                </p>
              </div>
            </div>

            {/* Close pill */}
            <button
              onClick={onClose}
              className="mt-1 h-10 px-6 rounded-full bg-ink text-paper text-[13px] font-medium hover:bg-ink/85 transition-colors no-tap"
            >
              {t("cs_close" as Parameters<typeof t>[0]) as string}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Gate (click interceptor) ───────────────────────────────────── */
export function ComingSoonGate({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;

    // Skip lang picker and any explicitly excluded element
    if (target.closest("[data-no-popup]")) return;

    const link = target.closest("a");
    const button = target.closest("button");

    if (link || button) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    }
  }, []);

  return (
    <div onClick={handleClick}>
      {children}
      {open && <ComingSoonModal onClose={() => setOpen(false)} />}
    </div>
  );
}
