"use client";

import DotGrid from './DotGrid';
import { useEffect, useRef } from "react";
import NextLink from "next/link";
import HudCore from "./HudCore";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      pillRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        proofRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative w-full overflow-hidden pb-20 pt-4">
      {/* Premium GSAP Interactive DotGrid Background */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={18}
          baseColor="#e4ecfa"
          activeColor="#0050d7"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{}}
        />
      </div>

      {/* Glow ambient light cones */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-cyan-200/40 via-blue-100/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-secondary/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Status Pill / Header Telemetry */}
        {/* <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-outline-variant/60">
          <div
            ref={pillRef}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-outline-variant shadow-sm text-xs font-mono text-on-surface opacity-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-primary">System Health: 100% Operational</span>
            <span className="text-outline">/</span>
            <span className="text-secondary font-medium">Oracle Platinum Spec</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant">
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-tertiary">speed</span>
              ACTIVE TELEMETRY SYNC
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-primary">v2.4.9 LIGHT</span>
          </div>
        </div> */}

        {/* Main Hero Grid: Left Copy & Right Kinetic HUD Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10 lg:pt-14">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-secondary font-semibold">
              <span className="w-4 h-0.5 bg-secondary" />
              <span>ENTERPRISE ARCHITECTURE // HIGH-AVAILABILITY CLUSTER</span>
            </div>
            <h1
              ref={headingRef}
              className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.08] opacity-0"
            >
              Precision Infrastructure.
              <br />
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-500 bg-clip-text text-transparent">
                Seamless Integration.
              </span>
            </h1>
            <p
              ref={textRef}
              className="font-sans text-lg sm:text-xl text-on-surface-variant max-w-2xl font-normal leading-relaxed opacity-0"
            >
              C Data Systems is a leading enterprise IT solutions provider and systems integrator specializing in Oracle ERP, cloud computing, data protection, and business intelligence. We help enterprise and mid-market organizations modernize infrastructure, reduce IT costs, and accelerate digital growth through expert consulting, implementation, and managed services.

            </p>

            {/* Action buttons */}
            <div ref={actionsRef} className="pt-2 flex flex-wrap items-center gap-4 opacity-0">
              <NextLink
                className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-xl bg-secondary text-white font-headline text-sm font-semibold hover:bg-secondary-container transition-all shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-0.5 duration-200"
                href="/contact"
              >
                <span>Schedule Free Strategy Consultation</span>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </NextLink>
              <NextLink
                className="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl bg-white border border-outline-variant text-primary font-headline text-sm font-semibold hover:bg-surface-container-low hover:border-secondary/40 transition-all shadow-sm duration-200"
                href="/services"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">account_tree</span>
                <span>Explore Our Services</span>
              </NextLink>
            </div>

            {/* Kinetic Micro-proof Pills */}
            <div ref={proofRef} className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-on-surface-variant opacity-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">security</span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-600 text-[18px]">database</span>
                <span>Enterprise IT experts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive / Kinetic HUD Visual */}
          <div className="lg:col-span-5 relative">
            <HudCore />
          </div>
        </div>
      </div>
    </section>
  );
}
