import { ChevronRight } from "lucide-react";
import { MFlag, MAvatar, MBottomNav } from "./shared";

type Props = { t: (k: string) => string };

const liked = [
  { name: "Marie",    city: "Lyon",      country: "FR", grad: "linear-gradient(160deg,#C8A24B,#8a6e2a)" },
  { name: "Henrique", city: "Lisboa",    country: "PT", grad: "linear-gradient(160deg,#B85C7A,#7A2F4A)" },
  { name: "João",     city: "Luanda",    country: "AO", grad: "linear-gradient(160deg,#1B3470,#08142E)" },
  { name: "Hugo",     city: "São Paulo", country: "BR", grad: "linear-gradient(160deg,#7A4B25,#3A220F)" },
  { name: "Aicha",    city: "Dakar",     country: "SN", grad: "linear-gradient(160deg,#C8A24B,#7A5A1F)" },
];

const newMatches = [
  { name: "Sophie Laurent", role: "AI Engineering",  city: "Paris",     country: "FR", initials: "SL", color: "from-night to-ink" },
  { name: "Pierre Moreau",  role: "Greentech",       city: "Marseille", country: "FR", initials: "PM", color: "from-emerald-700 to-emerald-900" },
  { name: "Carlos Pinto",   role: "iOS Engineering", city: "Porto",     country: "PT", initials: "CP", color: "from-amber-800 to-stone-900" },
];

export function MobileScreenMatches({ t }: Props) {
  const navLabels = {
    discover: t("nav_discover"), matches: t("nav_matches"),
    chat: t("nav_chat"), profile: t("nav_profile"),
  };
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="text-center font-display text-[15px] py-2.5 border-b border-line/70">{t("nav_matches")}</div>

      <div className="flex-1 overflow-hidden px-3 pt-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8.5px] uppercase tracking-wider text-ink/55 font-medium">{t("m_liked_you")} · 5</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {liked.map((p, i) => (
            <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden" style={{ background: p.grad }}>
              <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-gold flex items-center justify-center text-white text-[8px] font-bold">✓</div>
              <div className="absolute bottom-1 left-1 right-1 text-white">
                <div className="inline-flex items-center gap-0.5 px-1 h-3.5 rounded bg-black/45 text-[7.5px] font-medium mb-0.5">
                  <MFlag code={p.country} className="text-[7.5px]" />{p.city}
                </div>
                <div className="font-display text-[10px] leading-tight">{p.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[8.5px] uppercase tracking-wider text-ink/55 font-medium mb-1.5">{t("m_new_matches")} · 3</div>
        <div className="space-y-2">
          {newMatches.map((m, i) => (
            <div key={i} className="flex items-center gap-2.5 py-1.5">
              <MAvatar initials={m.initials} color={m.color} size={32} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-semibold text-ink truncate">{m.name}</span>
                  <span className="w-3 h-3 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white text-[7px] font-bold">✓</span>
                </div>
                <div className="text-[9.5px] text-ink/55 inline-flex items-center gap-0.5">
                  <MFlag code={m.country} /> {m.role} · {m.city}
                </div>
              </div>
              <ChevronRight className="w-3 h-3 text-ink/30" />
            </div>
          ))}
        </div>
      </div>

      <MBottomNav active="matches" labels={navLabels} />
    </div>
  );
}
