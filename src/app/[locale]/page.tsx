import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { Target, ShieldCheck, MessageCircle, UserPlus, Layers, Users } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Btn } from "@/components/ui/btn";
import { LangPicker } from "@/components/ui/lang-picker";
import { HeroCardStack } from "@/components/landing/hero-card-stack";
import { MobileShowcase } from "@/components/landing/mobile-showcase";
import type { Lang } from "@/lib/data";

type Props = { params: Promise<{ locale: string }> };

const SOCIAL_AVATARS = [5, 14, 22, 33, 41];
const TESTIMONIAL_PHOTOS = [25, 52, 48];

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const lang = locale as Lang;

  const benefits = [
    { icon: <Target className="w-5 h-5" />, title: t("b1_t"), desc: t("b1_d") },
    { icon: <ShieldCheck className="w-5 h-5" />, title: t("b2_t"), desc: t("b2_d") },
    { icon: <MessageCircle className="w-5 h-5" />, title: t("b3_t"), desc: t("b3_d") },
  ];

  const steps = [
    { n: 1, icon: <UserPlus className="w-4 h-4" />, title: t("how1_t"), desc: t("how1_d") },
    { n: 2, icon: <Layers className="w-4 h-4" />,   title: t("how2_t"), desc: t("how2_d") },
    { n: 3, icon: <Users className="w-4 h-4" />,    title: t("how3_t"), desc: t("how3_d") },
  ];

  const testimonials = [
    { q: t("t1"), a: t("t1_a"), photo: TESTIMONIAL_PHOTOS[0] },
    { q: t("t2"), a: t("t2_a"), photo: TESTIMONIAL_PHOTOS[1] },
    { q: t("t3"), a: t("t3_a"), photo: TESTIMONIAL_PHOTOS[2] },
  ];

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 h-16 bg-paper/90 backdrop-blur-md border-b border-line/60">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-2.5 no-tap">
            <Logo size={32} />
            <span className="font-display text-[18px] hidden sm:block">{t("brand")}</span>
          </Link>

          <LangPicker locale={locale} />

          <nav className="flex items-center gap-2">
            <Btn
              href={`/${locale}/auth/login`}
              variant="ghost"
              className="hidden sm:inline-flex h-10 px-4 text-[14px]"
            >
              {t("nav_login")}
            </Btn>
            <Btn
              href={`/${locale}/auth/register`}
              variant="primary"
              className="h-10 px-5 text-[14px]"
            >
              {t("nav_register")} →
            </Btn>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: copy */}
            <div className="max-w-xl">
              {/* Kicker — outlined pill with gold dot */}
              <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full border border-ink/15 bg-white text-ink/60 text-[12px] font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {t("hero_kicker")}
              </div>

              {/* Headline */}
              <h1 className="font-display text-[54px] sm:text-[68px] lg:text-[76px] leading-[1.02] text-ink mb-6">
                {t("hero_l1")}<br />
                <span className="italic">{t("hero_l2_pre")} </span>
                <span className="italic text-gold">{t("hero_l2_hi")}</span>
                <span className="text-gold">{t("hero_l2_suf")}</span>
              </h1>

              <p className="text-ink/55 text-[17px] leading-relaxed mb-8 max-w-[400px]">
                {t("hero_sub")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Btn
                  href={`/${locale}/auth/register`}
                  variant="primary"
                  className="h-12 px-7 text-[15px]"
                >
                  {t("cta_start")} →
                </Btn>
                <Btn href="#how" variant="ghost" className="h-12 text-[15px]">
                  {t("cta_see")}
                </Btn>
              </div>

              {/* Social proof — avatar stack */}
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-2">
                  {SOCIAL_AVATARS.map(n => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/32?img=${n}`}
                      alt=""
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full border-2 border-paper object-cover"
                    />
                  ))}
                </div>
                <p className="text-ink/40 text-[13px]">{t("social_proof")}</p>
              </div>
            </div>

            {/* Right: card stack (desktop only) */}
            <div className="hidden lg:block">
              <HeroCardStack lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sell strip — 3 static columns with icons ────────────── */}
      <div className="bg-ink py-7 select-none">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {([t("sell1"), t("sell2"), t("sell3")] as string[]).map((text, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 sm:py-0">
                <div className="w-8 h-8 rounded-full border border-gold/40 bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-modern text-gold text-[15px] font-medium leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ────────────────────────────────────────────── */}
      <section id="benefits" className="py-20 bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Title + horizontal rule */}
          <div className="flex items-end gap-8 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight flex-shrink-0">
              {t("bullets_title")}
            </h2>
            <div className="flex-1 h-px bg-line mb-2.5 hidden sm:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-7 flex flex-col gap-5 ${
                  i === 1
                    ? "bg-ink border-ink"
                    : "bg-white border-line"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === 1 ? "bg-gold/20 text-gold" : "bg-ink/[0.06] text-ink/55"
                  }`}
                >
                  {b.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold text-[17px] mb-2 leading-snug ${
                      i === 1 ? "text-paper" : "text-ink"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`text-[14.5px] leading-relaxed ${
                      i === 1 ? "text-paper/60" : "text-ink/55"
                    }`}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works — dark navy background ─────────────────── */}
      <section id="how" className="py-20 bg-night">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Kicker pill */}
          <div className="inline-flex items-center h-7 px-3 rounded-full border border-white/15 text-white/50 text-[12px] font-medium mb-7">
            {t("how_step")} 1 → 3
          </div>

          {/* Title left-aligned, white */}
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16 leading-tight">
            {t("how_title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col gap-4">
                {/* Large number + icon circle inline */}
                <div className="flex items-center gap-3">
                  <span className="font-display text-[72px] sm:text-[80px] leading-none text-gold">
                    {String(s.n).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-white/60 flex items-center justify-center flex-shrink-0 self-center">
                    {s.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-[17px] mb-1.5">{s.title}</h3>
                  <p className="text-white/50 text-[14.5px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile Showcase ─────────────────────────────────────── */}
      <MobileShowcase locale={locale} />

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Title left-aligned */}
          <h2 className="font-display text-4xl sm:text-5xl text-ink mb-12 leading-tight">
            {t("testimonials_title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((card, i) => (
              <div key={i} className="rounded-2xl border border-line bg-white p-6 flex flex-col gap-4">
                {/* Double-quote mark */}
                <div className="text-gold font-display text-2xl leading-none">❝</div>
                <p className="text-ink/75 text-[15px] leading-relaxed flex-1">{card.q}</p>
                {/* Avatar + name */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-line/60">
                  <img
                    src={`https://i.pravatar.cc/40?img=${card.photo}`}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="text-ink/50 text-[13px] font-medium">{card.a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA — dark card on bg-paper ───────────────────── */}
      <section className="py-16 bg-paper px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-ink relative overflow-hidden px-10 py-16 sm:px-20 sm:py-20">
            {/* Soft radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(11,27,58,0.8) 0%, transparent 70%)",
              }}
            />
            <div className="relative text-center">
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
                {t("cta_final_t")}
              </h2>
              <p className="text-white/45 text-[17px] mb-10">{t("cta_final_d")}</p>
              <Btn
                href={`/${locale}/auth/register`}
                variant="gold"
                className="h-12 px-8 text-[16px]"
              >
                {t("cta_start")} →
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand + slogan */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 no-tap">
            <Logo size={28} />
            <span className="font-display text-[16px]">{t("brand")}</span>
            <span className="text-ink/35 text-[13px] hidden sm:inline">· {t("slogan")}</span>
          </Link>

          {/* Lang picker + copyright */}
          <div className="flex items-center gap-4">
            <LangPicker locale={locale} />
            <p className="text-ink/35 text-sm hidden sm:block">
              © {new Date().getFullYear()} · {t("footer_rights")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
