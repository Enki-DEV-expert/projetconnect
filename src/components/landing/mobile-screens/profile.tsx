import { ChevronRight } from "lucide-react";
import { MFlag, MBottomNav } from "./shared";

type Props = { t: (k: string) => string; locale: string };

export function MobileScreenProfile({ t, locale }: Props) {
  const navLabels = {
    discover: t("nav_discover"), matches: t("nav_matches"),
    chat: t("nav_chat"), profile: t("nav_profile"),
  };
  const langLabel = locale === "fr" ? "Français" : locale === "pt" ? "Português" : "English";
  const flagCode = locale === "en" ? "UK" : locale.toUpperCase();

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="flex-shrink-0 pt-3 pb-2 px-3 flex flex-col items-center gap-1.5">
        <div className="font-display text-[15px] leading-tight">{t("m_demo_user")}</div>
        <div className="inline-flex items-center gap-1 text-[9px] text-ink/55">
          <MFlag code="FR" /> France · {t("role_talent")}
        </div>
        <div className="mt-1.5 inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-ink text-gold text-[10px] font-medium">
          ★ {t("nav_premium")}
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-paper">
        <div className="px-3 pt-3 pb-1">
          <div className="text-[8.5px] uppercase tracking-wider text-ink/50 font-medium mb-1.5">{t("m_verification")}</div>
        </div>
        <div className="mx-3 rounded-xl bg-white border border-line divide-y divide-line/70">
          {[
            { label: t("badge_skill"),   bg: "bg-night/10", color: "text-night" },
            { label: t("badge_capital"), bg: "bg-gold/15",  color: "text-gold"  },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2.5 px-3 py-2">
              <div className={`w-7 h-7 rounded-md flex items-center justify-center ${row.bg} ${row.color} flex-shrink-0 text-sm`}>✓</div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-medium leading-tight">{row.label}</div>
                <div className="text-[9px] text-ink/50">{t("m_not_verified")}</div>
              </div>
              <ChevronRight className="w-3 h-3 text-ink/30" />
            </div>
          ))}
        </div>

        <div className="px-3 pt-4 pb-1">
          <div className="text-[8.5px] uppercase tracking-wider text-ink/50 font-medium mb-1.5">{t("m_about")}</div>
        </div>
        <div className="mx-3 rounded-xl bg-white border border-line divide-y divide-line/70">
          {[
            { l: t("profile_country"), v: <span className="inline-flex items-center gap-1"><MFlag code="FR" /> France</span> },
            { l: t("profile_city"),    v: "Paris" },
            { l: t("m_user_skills"),   v: "Python · React · Design" },
            { l: t("m_funding_sought"),v: "50k€" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-1.5">
              <span className="text-[10.5px] text-ink/70">{row.l}</span>
              <span className="text-[10.5px] font-medium text-ink">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="px-3 pt-4 pb-1">
          <div className="text-[8.5px] uppercase tracking-wider text-ink/50 font-medium mb-1.5">{t("m_settings")}</div>
        </div>
        <div className="mx-3 rounded-xl bg-white border border-line divide-y divide-line/70">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-[10.5px] text-ink/70">{t("profile_lang")}</span>
            <span className="text-[10.5px] font-medium text-ink inline-flex items-center gap-1">
              <MFlag code={flagCode} /> {langLabel}
              <ChevronRight className="w-3 h-3 text-ink/30" />
            </span>
          </div>
          <div className="px-3 py-2 text-[10.5px] font-medium text-red-600">{t("logout")}</div>
        </div>
      </div>

      <MBottomNav active="profile" labels={navLabels} />
    </div>
  );
}
