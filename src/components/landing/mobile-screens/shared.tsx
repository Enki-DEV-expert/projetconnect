// Shared primitives used by all 6 mobile screen components
import { type LucideIcon } from "lucide-react";

export function MFlag({ code, className = "text-[10px]" }: { code: string; className?: string }) {
  const map: Record<string, string> = {
    FR:"🇫🇷", PT:"🇵🇹", BE:"🇧🇪", CH:"🇨🇭", UK:"🇬🇧",
    DE:"🇩🇪", ES:"🇪🇸", LU:"🇱🇺", CA:"🇨🇦", US:"🇺🇸", BR:"🇧🇷", MA:"🇲🇦",
    AO:"🇦🇴", SN:"🇸🇳",
  };
  return <span className={className}>{map[code] ?? code}</span>;
}

export function MLogo({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md bg-ink text-gold flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16 L12 5 L19 16" />
      </svg>
    </span>
  );
}

export function MAvatar({
  initials,
  color = "from-night to-ink",
  size = 32,
  className = "",
}: {
  initials: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${color} text-white font-display font-medium flex-shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

export function MIcon({
  Icon,
  className = "w-3 h-3",
  strokeWidth = 1.7,
}: {
  Icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
}) {
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

export function MBottomNav({ active, labels }: {
  active: "discover" | "matches" | "chat" | "profile";
  labels: { discover: string; matches: string; chat: string; profile: string };
}) {
  const items = [
    { key: "discover", icon: "🧭" },
    { key: "matches",  icon: "🤍" },
    { key: "chat",     icon: "💬" },
    { key: "profile",  icon: "👤" },
  ] as const;
  return (
    <div className="flex-shrink-0 border-t border-line bg-white grid grid-cols-4 px-2 pt-1.5 pb-1">
      {items.map(({ key, icon }) => (
        <div
          key={key}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 ${active === key ? "text-ink" : "text-ink/35"}`}
        >
          <span className="text-[12px]">{icon}</span>
          <span className="text-[8.5px] font-medium tracking-tight">{labels[key]}</span>
        </div>
      ))}
    </div>
  );
}

export function DateDivider({ label }: { label: string }) {
  return (
    <div className="text-center text-[8px] uppercase tracking-[0.12em] text-ink/40 font-semibold py-0.5">
      {label}
    </div>
  );
}

export function ChatBubble({
  side,
  mono,
  children,
}: {
  side: "left" | "right";
  mono?: boolean;
  children: React.ReactNode;
}) {
  const isLeft = side === "left";
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] px-2.5 py-1.5 text-[10px] leading-snug ${mono ? "font-mono" : ""} ${
          isLeft
            ? "bg-white border border-line/80 text-ink/90 rounded-2xl rounded-bl-md"
            : "bg-ink text-white rounded-2xl rounded-br-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function AudioBubble({ side, duration }: { side: "left" | "right"; duration: string }) {
  const isLeft = side === "left";
  const bars = [3, 6, 9, 5, 8, 11, 7, 4, 9, 12, 6, 9, 5, 8, 4, 7, 10, 6, 4];
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] px-2.5 py-1.5 inline-flex items-center gap-2 ${
          isLeft
            ? "bg-white border border-line/80 text-ink rounded-2xl rounded-bl-md"
            : "bg-ink text-white rounded-2xl rounded-br-md"
        }`}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isLeft ? "bg-ink text-gold" : "bg-white/15 text-gold"}`}>
          <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor">
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        </div>
        <div className="flex items-center gap-[2px] h-4">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`w-[1.5px] rounded-full ${
                i < 6
                  ? isLeft ? "bg-ink/70" : "bg-gold"
                  : isLeft ? "bg-ink/25" : "bg-white/35"
              }`}
              style={{ height: h }}
            />
          ))}
        </div>
        <span className={`text-[9px] font-mono leading-none ${isLeft ? "text-ink/55" : "text-white/65"}`}>{duration}</span>
      </div>
    </div>
  );
}
