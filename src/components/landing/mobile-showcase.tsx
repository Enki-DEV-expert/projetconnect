"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Compass,
  FileText,
  Heart,
  MessageCircle,
  Calendar,
  User,
  Smartphone,
} from "lucide-react";
import { MobilePhone } from "./mobile-phone";
import {
  MobileScreenDiscover,
  MobileScreenDetail,
  MobileScreenMatches,
  MobileScreenChat,
  MobileScreenChatMeeting,
  MobileScreenProfile,
} from "./mobile-screens";

type FeatureIcon = React.ComponentType<{ className?: string }>;

const FEATURES: { tk: string; dk: string; Icon: FeatureIcon }[] = [
  { tk: "ms_t1", dk: "ms_d1", Icon: Compass },
  { tk: "ms_t2", dk: "ms_d2", Icon: FileText },
  { tk: "ms_t3", dk: "ms_d3", Icon: Heart },
  { tk: "ms_t4", dk: "ms_d4", Icon: MessageCircle },
  { tk: "ms_t5", dk: "ms_d5", Icon: Calendar },
  { tk: "ms_t6", dk: "ms_d6", Icon: User },
];

export function MobileShowcase({ locale }: { locale: string }) {
  const rawT = useTranslations();
  const t = (k: string): string => rawT(k as Parameters<typeof rawT>[0]) as string;

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % 6), 3500);
    return () => clearInterval(id);
  }, []);

  // Screen order matches FEATURES order exactly
  const screens = [
    <MobileScreenDiscover key="disc" t={t} />,
    <MobileScreenDetail key="det" t={t} />,
    <MobileScreenMatches key="mat" t={t} />,
    <MobileScreenChat key="chat" t={t} />,
    <MobileScreenChatMeeting key="meet" t={t} />,
    <MobileScreenProfile key="prof" t={t} locale={locale} />,
  ];

  function getStyle(i: number) {
    let diff = i - active;
    const n = screens.length;
    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;

    switch (diff) {
      case 0:
        return { transform: "translate3d(0,0,0) scale(1) rotate(0deg)", opacity: 1, zIndex: 30 };
      case -1:
        return {
          transform: "translate3d(-72px,16px,0) scale(0.82) rotate(-7deg)",
          opacity: 0.5,
          zIndex: 20,
        };
      case 1:
        return {
          transform: "translate3d(72px,16px,0) scale(0.82) rotate(7deg)",
          opacity: 0.5,
          zIndex: 20,
        };
      default:
        return { transform: "translate3d(0,28px,0) scale(0.68)", opacity: 0, zIndex: 10 };
    }
  }

  return (
    <section id="app" className="py-20 bg-paper overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

          {/* ── LEFT: kicker + title + feature list + badges ──────── */}
          <div className="w-full lg:max-w-[480px] flex-shrink-0">
            {/* Kicker */}
            <div className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full border border-ink/15 bg-white text-ink/55 text-[12px] font-medium mb-5">
              <Smartphone className="w-3.5 h-3.5" />
              {t("ms_kicker")}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-ink mb-3 leading-tight">
              {t("ms_title")}
            </h2>
            <p className="text-ink/55 text-[16px] leading-relaxed mb-8">
              {t("ms_sub")}
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-2 mb-6">
              {FEATURES.map(({ tk, dk, Icon }, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-xl px-4 py-3 transition-all duration-200 no-tap flex items-center gap-3 ${
                    active === i
                      ? "bg-ink shadow-card"
                      : "bg-white border border-line hover:border-ink/20"
                  }`}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      active === i ? "bg-gold/20 text-gold" : "bg-ink/[0.06] text-ink/45"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-[13px] font-semibold leading-snug ${
                        active === i ? "text-paper" : "text-ink"
                      }`}
                    >
                      {t(tk)}
                    </div>
                    {active === i && (
                      <div className="text-paper/55 text-[12px] leading-snug mt-0.5">
                        {t(dk)}
                      </div>
                    )}
                  </div>

                  {/* Step number */}
                  <div
                    className={`text-[11px] font-medium flex-shrink-0 tabular-nums ${
                      active === i ? "text-paper/30" : "text-ink/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </button>
              ))}
            </div>

            {/* Store badges */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-2.5 h-12 px-4 rounded-xl bg-ink text-paper hover:bg-night transition-colors no-tap"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-[9px] text-paper/50 leading-none uppercase tracking-wide">
                    {t("ms_download")}
                  </div>
                  <div className="text-[13px] font-semibold leading-tight">{t("ms_app_store")}</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 h-12 px-4 rounded-xl bg-ink text-paper hover:bg-night transition-colors no-tap"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.73.74l12.56-7.35-2.89-2.9zm16.12-10.43L16.76 11 13.82 8.1l-9.96-5.84A2 2 0 0 0 1 4.23v15.54l9.97-9.97 2.54 2.54zM22.46 10.7l-3.72-2.18-3.04 3.04 3.04 3.04 3.76-2.2a2 2 0 0 0-.04-3.7zM5.91.5 18.47 7.85 15.53 10.8l-2.89-2.9L2.18.74A2 2 0 0 1 5.91.5z" />
                </svg>
                <div>
                  <div className="text-[9px] text-paper/50 leading-none uppercase tracking-wide">
                    {t("ms_download")}
                  </div>
                  <div className="text-[13px] font-semibold leading-tight">{t("ms_play_store")}</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT: phone fan ───────────────────────────────────── */}
          <div className="relative w-[260px] h-[520px] flex-shrink-0 mx-auto lg:mx-0 lg:ml-auto">
            {screens.map((screen, i) => {
              const s = getStyle(i);
              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    ...s,
                    transition: "transform .9s cubic-bezier(.4,0,.2,1), opacity .7s ease",
                    willChange: "transform, opacity",
                  }}
                >
                  <MobilePhone>{screen}</MobilePhone>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
