"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DetailPageConfig } from "./types";

gsap.registerPlugin(ScrollTrigger);

type Props = Pick<
  DetailPageConfig,
  | "ctaHeading"
  | "ctaBody"
  | "ctaPrimaryLabel"
  | "ctaPrimaryHref"
  | "ctaSecondaryLabel"
  | "ctaSecondaryHref"
  | "ctaWatermarkIcon"
  | "accentBg"
  | "accentText"
>;

export default function DetailCTA({
  ctaHeading = "Ready to get started?",
  ctaBody = "Our solutions architects are available to scope your engagement. Receive a full architectural proposal, phased roadmap, and milestone pricing within 48 hours.",
  ctaPrimaryLabel = "Schedule a Briefing",
  ctaPrimaryHref = "/contact",
  ctaSecondaryLabel,
  ctaSecondaryHref,
  ctaWatermarkIcon = "architecture",
  accentBg = "bg-secondary",
  accentText = "text-secondary",
}: Props) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(bannerRef.current, { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.95, ease: "power3.out",
        scrollTrigger: { trigger: bannerRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
  }, []);

  return (
    <section
      id="detail-cta"
      className="w-full py-20 bg-surface cyber-dot-grid-subtle"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={bannerRef}
          className="rounded-3xl bg-primary text-white p-8 md:p-12 relative overflow-hidden"
          style={{ opacity: 0 }}
        >
          {/* Decorative watermark icon */}
          <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 opacity-[0.05] pointer-events-none select-none">
            <span className="material-symbols-outlined" style={{ fontSize: "18rem", lineHeight: 1 }}>
              {ctaWatermarkIcon}
            </span>
          </div>

          {/* Decorative ring */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-cyan-400/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-white/80 font-semibold uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                READY TO ENGAGE
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold leading-tight">
                {ctaHeading}
              </h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                {ctaBody}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={ctaPrimaryHref!}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-zinc-100 transition-all duration-200"
              >
                <span>{ctaPrimaryLabel}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  {ctaSecondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
