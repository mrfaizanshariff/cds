"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { DetailPageConfig } from "./types";

type Props = Pick<
  DetailPageConfig,
  | "parentLabel"
  | "parentHref"
  | "num"
  | "eyebrow"
  | "heading"
  | "headingAccent"
  | "subheading"
  | "stats"
  | "sidebarCard"
  | "accentBg"
  | "accentText"
>;

export default function DetailHero({
  parentLabel,
  parentHref,
  num,
  eyebrow,
  heading,
  headingAccent,
  subheading,
  stats,
  sidebarCard,
  accentBg = "bg-secondary",
  accentText = "text-secondary",
}: Props) {
  const breadRef   = useRef<HTMLDivElement>(null);
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const sideRef    = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(subRef.current,     { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.65");

    if (statsRef.current) {
      tl.fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55");
    }
    if (sideRef.current) {
      tl.fromTo(sideRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.75");
    }

    // Ambient glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.5,
        scale: 1.06,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      id="detail-hero"
      className="relative w-full overflow-hidden pb-16 pt-6 cyber-dot-grid"
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute -top-20 left-1/2 -translate-x-1/4 w-[560px] h-[360px] bg-gradient-to-b from-cyan-300/20 via-secondary/8 to-transparent blur-3xl pointer-events-none opacity-35"
      />
      <div className="absolute top-1/2 -right-20 w-56 h-56 bg-secondary/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span className="text-outline-variant">/</span>
          <Link href={parentHref} className="hover:text-secondary transition-colors">{parentLabel}</Link>
          <span className="text-outline-variant">/</span>
          <span className={`${accentText} font-semibold truncate max-w-[200px]`}>{heading.toUpperCase()}{headingAccent ? ` ${headingAccent.toUpperCase()}` : ""}</span>
        </div>

        <div className={`grid grid-cols-1 gap-10 items-start ${sidebarCard ? "lg:grid-cols-12" : ""}`}>
          {/* Left: heading + copy */}
          <div className={`space-y-6 ${sidebarCard ? "lg:col-span-7" : ""}`}>
            {/* Eyebrow pill */}
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono font-semibold"
              style={{ opacity: 0 }}
            >
              <span className={`w-2 h-2 rounded-full ${accentBg}`} />
              <span className={accentText}>{eyebrow}</span>
              {num && (
                <span className="ml-1 px-1.5 py-0.5 rounded bg-surface-container font-mono text-[10px] text-outline">
                  {num}
                </span>
              )}
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]"
              style={{ opacity: 0 }}
            >
              {heading}{" "}
              {headingAccent && (
                <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-500 bg-clip-text text-transparent">
                  {headingAccent}
                </span>
              )}
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
              style={{ opacity: 0 }}
            >
              {subheading}
            </p>

            {/* Stat strip */}
            {stats && stats.length > 0 && (
              <div
                ref={statsRef}
                className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-outline-variant/50"
                style={{ opacity: 0 }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-white/90 border border-outline-variant/60 backdrop-blur-sm">
                    <span className="block font-mono text-[10px] uppercase text-outline">{s.label}</span>
                    <span className={`font-headline font-bold text-lg ${s.color ?? accentText}`}>{s.value}</span>
                    {s.sub && <span className="block font-mono text-[11px] text-outline mt-0.5">{s.sub}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: sidebar card */}
          {sidebarCard && (
            <div
              ref={sideRef}
              className="lg:col-span-5 spatial-card rounded-2xl p-6 border border-outline-variant/60 bg-white shadow-sm"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  {sidebarCard.title}
                </span>
                {sidebarCard.badge && (
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 ${accentText} font-semibold`}>
                    {sidebarCard.badge}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {sidebarCard.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className={`material-symbols-outlined text-[18px] ${item.iconColor ?? accentText}`}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-semibold text-sm text-primary">{item.title}</h4>
                      <p className="font-sans text-xs text-on-surface-variant mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {sidebarCard.footerLinkLabel && sidebarCard.footerLinkHref && (
                <div className="mt-6 pt-4 border-t border-outline-variant/40">
                  <Link
                    href={sidebarCard.footerLinkHref}
                    className={`inline-flex items-center gap-2 text-xs font-mono font-semibold ${accentText} hover:text-primary transition-colors`}
                  >
                    <span>{sidebarCard.footerLinkLabel}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
