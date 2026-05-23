import { SlidersHorizontal, Globe, Eye } from "lucide-react";
import { MFlag, MLogo, MBottomNav } from "./shared";

type Props = { t: (k: string) => string };

export function MobileScreenDiscover({ t }: Props) {
  const navLabels = {
    discover: t("nav_discover"), matches: t("nav_matches"),
    chat: t("nav_chat"), profile: t("nav_profile"),
  };
  return (
    <div className="w-full h-full flex flex-col bg-paper">
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <MLogo size={20} />
          <span className="font-display text-[15px] tracking-tight">ProjetConnect</span>
        </div>
        <SlidersHorizontal className="w-[18px] h-[18px] text-ink/60" />
      </div>

      <div className="px-3 grid grid-cols-2 gap-1.5">
        <div className="h-[32px] rounded-xl bg-white border border-line shadow-sm flex items-center justify-center gap-1.5 text-[11px] font-medium">
          {t("disc_my_country")} <MFlag code="FR" />
        </div>
        <div className="h-[32px] rounded-xl bg-ink/5 flex items-center justify-center gap-1.5 text-[11px] font-medium text-ink/70">
          <Globe className="w-3 h-3" /> {t("disc_all_countries")}
        </div>
      </div>

      <div className="px-3 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-4 rounded-full bg-ink/15 relative">
            <div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow" />
          </div>
          <span className="text-[10px] text-ink/65">{t("disc_verified_only")}</span>
        </div>
        <div className="text-[10px] text-ink/55">
          <span className="font-medium text-ink/80">3/3</span> {t("disc_likes_left")}
        </div>
      </div>

      <div className="mx-3 rounded-2xl bg-white border border-line shadow-soft overflow-hidden flex-1 flex flex-col">
        <div
          className="relative aspect-[16/11] flex-shrink-0 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #B8923C 0%, #C8A24B 50%, #8a6e2a 100%)" }}
        >
          <span className="absolute right-3 top-2 font-display text-[60px] leading-none text-white/15 select-none">MD</span>
          <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-1.5 h-5 rounded-full bg-white/95 text-[8.5px] font-medium text-ink">
            ✓ {t("badge_capital")}
          </div>
          <div className="absolute left-3 bottom-9 inline-flex items-center gap-1 px-2 h-5 rounded-full bg-ink/65 backdrop-blur text-[9px] font-medium text-white">
            <MFlag code="FR" /> France · Lyon
          </div>
          <div className="absolute left-3 bottom-2.5 text-white">
            <div className="font-display text-[18px] leading-tight">Marie Dubois, 41</div>
          </div>
        </div>

        <div className="px-3 py-2 flex items-start justify-between border-b border-line/70">
          <div>
            <div className="text-[12px] font-medium text-ink">Healthtech</div>
            <div className="text-[9.5px] text-ink/55">12 {t("m_years")} {t("m_experience").toLowerCase()}</div>
          </div>
          <div className="text-right">
            <div className="text-[8px] uppercase tracking-wider text-ink/45 font-medium">{t("m_available")}</div>
            <div className="font-display text-[15px] leading-none mt-0.5">120k€</div>
          </div>
        </div>

        <div className="px-3 py-2 text-[10.5px] text-ink/75 leading-snug">{t("m_demo_summary")}</div>

        <div className="px-3 pb-1.5 flex flex-wrap gap-1">
          {["Seed", "Series A", "Digital Health", "Medtech"].map(tag => (
            <span key={tag} className="px-1.5 h-4 rounded-full bg-ink/[0.06] text-[8.5px] font-medium text-ink/70 inline-flex items-center">{tag}</span>
          ))}
        </div>
        <div className="px-3 pb-2 mt-auto text-[9px] text-ink/50 inline-flex items-center gap-1">
          <Eye className="w-2.5 h-2.5" /> 178 {t("m_views")}
        </div>
      </div>

      <div className="py-2.5 flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white border border-line shadow flex items-center justify-center text-ink/60 text-lg">✕</div>
        <div className="w-10 h-10 rounded-full bg-white border border-line shadow flex items-center justify-center text-red-500 text-lg">♥</div>
      </div>

      <MBottomNav active="discover" labels={navLabels} />
    </div>
  );
}
