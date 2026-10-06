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
    <section id="detail-cta" className="w-full py-20 gradient-mesh-2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={bannerRef}
          className="relative rounded-3xl overflow-hidden"
          style={{ opacity: 0 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-indigo-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-[0.07] cyber-dot-grid-subtle" />

          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

          {/* Watermark */}
          <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 opacity-[0.06] pointer-events-none select-none">
            <span className="material-symbols-outlined" style={{ fontSize: "18rem", lineHeight: 1 }}>{ctaWatermarkIcon}</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 font-mono text-xs text-white/80 font-semibold uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                READY TO ENGAGE
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold leading-tight text-white">{ctaHeading}</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{ctaBody}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={ctaPrimaryHref!}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-zinc-50 hover:scale-105 transition-all duration-200"
              >
                <span>{ctaPrimaryLabel}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
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
