"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Shared CTA banner component used by Services, Solutions, Staffing pages
interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  watermarkIcon?: string;
}

export function CTABanner({
  eyebrow = "READY TO ENGAGE",
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  watermarkIcon = "architecture",
}: CTABannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(bannerRef.current, { y: 32, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.95, ease: "power3.out",
        scrollTrigger: { trigger: bannerRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative rounded-3xl overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-indigo-600 to-cyan-600" />
      <div className="absolute inset-0 opacity-[0.07] cyber-dot-grid-subtle" />

      {/* Decorative floating blobs */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

      {/* Watermark icon */}
      <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 opacity-[0.06] pointer-events-none select-none">
        <span className="material-symbols-outlined" style={{ fontSize: "18rem", lineHeight: 1 }}>{watermarkIcon}</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 font-mono text-xs text-white/80 font-semibold uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {eyebrow}
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold leading-tight text-white">{heading}</h2>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">{body}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-zinc-50 hover:scale-105 transition-all duration-200"
          >
            <span>{primaryLabel}</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesCTA() {
  return (
    <section id="services-cta" className="w-full py-20 gradient-mesh-2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner
          heading="Need a custom technical roadmap?"
          body="Our solutions architects are ready to scope your initiative. We provide full architectural diagrams, phased delivery plans, and milestone pricing for enterprise engagements."
          primaryLabel="Schedule a Scope Call"
          primaryHref="/contact"
          secondaryLabel="About CData"
          secondaryHref="/about"
          watermarkIcon="architecture"
        />
      </div>
    </section>
  );
}
