"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { ShieldCheck, BadgeCheck, MapPin, Landmark, Hammer } from "lucide-react";
import { SEED_PROFILES, HERO_POOL_IDS, FLAGS, type Profile } from "@/lib/data";
import type { Lang } from "@/lib/data";

function ProfileCard({ p, lang, isExiting, exitDir }: {
  p: Profile;
  lang: Lang;
  isExiting: boolean;
  exitDir: "left" | "right";
}) {
  const [imgErr, setImgErr] = useState(false);
  const headline = p[`headline_${lang}`];
  const isInv = p.type === "investor";
  const initials = p.name.split(" ").map(s => s[0]).slice(0, 2).join("");

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      {isExiting && (
        <div className={`absolute top-8 z-30 pointer-events-none ${exitDir === "right" ? "left-6" : "right-6"}`}>
          <span className={`inline-block px-4 py-1.5 rounded-lg border-[2.5px] font-display text-2xl tracking-[0.15em] uppercase bg-white/85 backdrop-blur ${exitDir === "right" ? "border-emerald-500 text-emerald-500 -rotate-[14deg]" : "border-red-500 text-red-500 rotate-[14deg]"}`}>
            {exitDir === "right" ? "LIKE" : "SKIP"}
          </span>
        </div>
      )}

      {/* Photo */}
      <div className="relative h-[42%] overflow-hidden bg-gradient-to-br from-night to-ink flex-shrink-0">
        {!imgErr && (
          <Image
            src={`https://i.pravatar.cc/600?img=${p.photo}`}
            alt={p.name}
            fill
            className="object-cover"
            onError={() => setImgErr(true)}
            unoptimized
            draggable={false}
          />
        )}
        {imgErr && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl text-white/20">{initials}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span>{FLAGS[p.country]}</span> {p.city}
          </span>
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/15 backdrop-blur capitalize">
            {isInv ? <Landmark className="w-3 h-3" /> : <Hammer className="w-3 h-3" />}
            {isInv ? "Investor" : "Talent"}
          </span>
        </div>

        <div className="absolute bottom-3 left-5 right-5 text-white">
          <h3 className="font-display text-[26px] leading-tight">{p.name}</h3>
          <p className="text-white/85 text-sm mt-0.5 truncate">{headline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-4 flex flex-col min-h-0">
        <div className="flex items-center gap-1.5 flex-wrap mb-2.5">
          {p.verified && (
            <span className="inline-flex items-center gap-1 h-6 px-2.5 text-[11px] rounded-full bg-gold/15 text-gold ring-1 ring-gold/40 font-medium">
              {isInv ? <ShieldCheck className="w-3.5 h-3.5" /> : <BadgeCheck className="w-3.5 h-3.5" />}
              {isInv ? "Capital Vérifié" : "Compétence Vérifiée"}
            </span>
          )}
        </div>

        {isInv && p.ticket && (
          <div className="mb-3 p-3 rounded-2xl bg-gradient-to-br from-night to-ink text-white flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold/25 text-gold flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💰</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] uppercase tracking-[0.12em] text-gold/90 font-semibold leading-none mb-1">Capital disponible</div>
              <div className="font-display text-[20px] leading-tight truncate">{p.ticket}</div>
            </div>
          </div>
        )}

        <ul className="space-y-1 text-[12.5px] text-ink/80 leading-snug mb-3 overflow-hidden flex-1">
          {p.details_fr.slice(0, 5).map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
              <span className="line-clamp-1">{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-1.5 pt-3 border-t border-line">
          {p.linkedin && (
            <span className="flex-1 flex items-center gap-2 h-9 px-2.5 rounded-xl bg-ink/[0.04] text-[11.5px] text-ink/80 min-w-0">
              <span className="w-5 h-5 rounded bg-[#0A66C2] text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0">in</span>
              <span className="truncate">{p.linkedin}</span>
            </span>
          )}
          {p.website && (
            <span className="flex-1 flex items-center gap-2 h-9 px-2.5 rounded-xl bg-ink/[0.04] text-[11.5px] text-ink/80 min-w-0">
              <MapPin className="w-3.5 h-3.5 text-ink/55 flex-shrink-0" />
              <span className="truncate">{p.website}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function HeroCardStack({ lang }: { lang: Lang }) {
  const pool = useMemo(
    () => HERO_POOL_IDS.map(id => SEED_PROFILES.find(p => p.id === id)!),
    []
  );

  const [stack, setStack] = useState(() => pool.slice(0, 3));
  const [exitingId, setExitingId] = useState<number | null>(null);
  const [exitDir, setExitDir] = useState<"left" | "right">("right");
  const cursorRef = useRef(3);
  const cycleRef = useRef(0);
  const stackRef = useRef(stack);
  useEffect(() => { stackRef.current = stack; }, [stack]);

  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;

    const swipeOut = () => {
      if (!alive) return;
      const top = stackRef.current[0];
      if (!top) return;
      const dir = cycleRef.current % 4 === 1 ? "left" : "right";
      setExitDir(dir);
      setExitingId(top.id);
      timer = setTimeout(advance, 650);
    };

    const advance = () => {
      if (!alive) return;
      cycleRef.current += 1;
      setStack(prev => {
        const next = pool[cursorRef.current % pool.length];
        cursorRef.current += 1;
        return [...prev.slice(1), next];
      });
      setExitingId(null);
      timer = setTimeout(swipeOut, 2700);
    };

    timer = setTimeout(swipeOut, 2200);
    return () => { alive = false; clearTimeout(timer); };
  }, [pool]);

  return (
    <div className="relative h-[680px] mx-auto w-full max-w-sm">
      {stack.map((p, i) => {
        const isExiting = exitingId === p.id;
        let transform = `translateY(${i * 14}px) scale(${1 - i * 0.045}) rotate(${i === 1 ? -1.5 : i === 2 ? 1.5 : 0}deg)`;
        if (isExiting) {
          transform = `translateX(${exitDir === "right" ? 560 : -560}px) translateY(40px) rotate(${exitDir === "right" ? 22 : -22}deg)`;
        }
        return (
          <div
            key={p.id}
            style={{
              transform,
              transition: "transform .65s cubic-bezier(.3,.85,.25,1)",
              zIndex: 100 - i,
            }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-card border border-line bg-white"
          >
            <ProfileCard p={p} lang={lang} isExiting={isExiting} exitDir={exitDir} />
          </div>
        );
      })}

      {/* Decorative action buttons */}
      <div className="absolute -bottom-5 inset-x-0 flex items-center justify-center gap-4 pointer-events-none opacity-60">
        <div className="w-12 h-12 rounded-full bg-white border border-line shadow-soft flex items-center justify-center">
          <span className="text-ink/50 text-xl">✕</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-ink shadow-card flex items-center justify-center">
          <span className="text-gold text-xl">♥</span>
        </div>
      </div>
    </div>
  );
}
