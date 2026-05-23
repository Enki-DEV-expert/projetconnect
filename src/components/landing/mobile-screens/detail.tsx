import { Eye } from "lucide-react";
import { MFlag } from "./shared";

type Props = { t: (k: string) => string };

export function MobileScreenDetail({ t }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-paper relative">
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: "55%", background: "linear-gradient(135deg, #B8923C 0%, #C8A24B 50%, #8a6e2a 100%)" }}
      >
        <span className="absolute right-2 top-5 font-display text-[150px] leading-none text-white/15 select-none">MD</span>

        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-ink/55 backdrop-blur text-white flex items-center justify-center text-sm">✕</div>
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-1.5 h-5 rounded-full bg-white/95 text-[9px] font-medium text-ink">
          ✓ {t("badge_capital")}
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="inline-flex items-center gap-1 px-2 h-5 rounded-full bg-ink/65 backdrop-blur text-[9px] font-medium text-white mb-1.5">
            <MFlag code="FR" /> France · Lyon
          </div>
          <div className="font-display text-[22px] text-white leading-tight">Marie Dubois, 41</div>
          <div className="text-white/85 text-[11px]">Healthtech</div>
          <div className="text-white/65 text-[9px] inline-flex items-center gap-1 mt-1">
            <Eye className="w-2.5 h-2.5" /> 178 {t("m_views")}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-3 bg-paper">
        <div className="rounded-2xl bg-white border border-line p-3 grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="text-[8px] uppercase tracking-wider text-ink/45 font-medium">{t("m_available")}</div>
            <div className="font-display text-[17px] leading-tight mt-0.5">120k€</div>
          </div>
          <div className="pl-3 border-l border-line">
            <div className="text-[8px] uppercase tracking-wider text-ink/45 font-medium">{t("m_experience")}</div>
            <div className="font-display text-[17px] leading-tight mt-0.5">12 <span className="text-[10px] text-ink/55">{t("m_years")}</span></div>
          </div>
        </div>

        <div className="text-[8.5px] uppercase tracking-wider text-ink/45 font-medium mb-1">{t("m_about")}</div>
        <p className="text-[11px] text-ink/85 leading-snug mb-3">{t("m_demo_summary")}</p>

        <div className="text-[8.5px] uppercase tracking-wider text-ink/45 font-medium mb-1.5">{t("m_sectors")}</div>
        <div className="flex flex-wrap gap-1 mb-3">
          {["Seed", "Series A", "Digital Health", "Medtech"].map(tag => (
            <span key={tag} className="px-2 h-5 rounded-full bg-ink/[0.06] text-[9.5px] font-medium text-ink/75 inline-flex items-center">{tag}</span>
          ))}
        </div>

        <div className="rounded-xl bg-gold/12 border border-gold/35 p-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">✓</div>
          <div className="min-w-0">
            <div className="text-[11px] font-semibold text-ink leading-tight">{t("badge_capital")}</div>
            <div className="text-[9px] text-ink/55 leading-tight">{t("m_verified_by")}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <div className="w-11 h-11 rounded-full bg-white border border-line shadow flex items-center justify-center text-ink/65 text-xl">✕</div>
        <div className="w-11 h-11 rounded-full bg-white border border-line shadow flex items-center justify-center text-red-500 text-xl">♥</div>
      </div>
    </div>
  );
}
