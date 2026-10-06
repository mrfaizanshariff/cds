"use client";

import { useEffect, useRef } from "react";
import NextLink from "next/link";
import gsap from "gsap";
import HudCore from "./HudCore";
import Threads from "./ThreadAnimationComponent";
import BackgroundGradient from "./BackgroundGradient";
import ParallaxFloatingOrbs from "./ParallaxFloatingOrbs";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Still show content, just skip animations
      [pillRef, headingRef, textRef, actionsRef, proofRef].forEach((ref) => {
        if (ref.current) ref.current.style.opacity = "1";
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Parallax on hero background elements
    if (heroRef.current) {
      const bg = heroRef.current.querySelector(".hero-bg");
      if (bg) {
        gsap.to(bg, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }

    tl.fromTo(
      pillRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 50, letterSpacing: "-0.03em" },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.7"
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 25 },
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
    <section
      ref={heroRef}
      className="relative w-full pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="hero-bg absolute inset-0 -z-10">
        <BackgroundGradient />
      </div>

      {/* Floating parallax orbs */}
      <ParallaxFloatingOrbs count={10} />

      {/* Threads animation (interactive WebGL canvas) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Dynamic glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-cyan-200/40 via-blue-100/30 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-secondary/10 blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-fuchsia-300/25 blur-3xl pointer-events-none -z-10 animate-float-med" />

      {/* Noise overlay via CSS class (avoids JSX data URI parsing issues) */}
      <div className="noise-overlay absolute inset-0 pointer-events-none -z-5" />

      <div className="max-w-7xl relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10 lg:pt-14">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Status Pill */}
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-outline-variant/50 shadow-sm text-xs font-mono text-secondary font-semibold opacity-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold">System Health: 100% Operational</span>
              <span className="text-outline">/</span>
              <span className="text-secondary font-medium">Oracle Platinum Spec</span>
            </div>

            {/* Headline */}
            <h1
              ref={headingRef}
              className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.08] opacity-0"
            >
              Precision Infrastructure.
              <br />
              <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Seamless Integration.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={textRef}
              className="font-sans text-lg sm:text-xl text-secondary leading-relaxed max-w-2xl opacity-0"
            >
              C Data Systems is a leading enterprise IT solutions provider and systems integrator specializing in Oracle ERP, cloud computing, data protection, and business intelligence. We help enterprise and mid-market organizations modernize infrastructure, reduce IT costs, and accelerate digital growth through expert consulting, implementation, and managed services.
            </p>

            {/* Action buttons */}
            <div
              ref={actionsRef}
              className="pt-2 flex flex-wrap items-center gap-4 opacity-0"
            >
              <NextLink
                className="group relative inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-2xl bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 text-white font-headline text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-secondary/25 hover:shadow-2xl duration-300 overflow-hidden"
                href="/contact"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Schedule Free Strategy Consultation</span>
                <span className="relative z-10 material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  bolt
                </span>
              </NextLink>
              <NextLink
                className="group inline-flex items-center justify-center gap-2 h-13 px-6 rounded-2xl glass border border-outline-variant/50 text-primary font-headline text-sm font-semibold hover:border-secondary/40 transition-all shadow-sm duration-300"
                href="/services"
              >
                <span className="material-symbols-outlined text-secondary text-[18px] group-hover:scale-110 transition-transform">
                  account_tree
                </span>
                <span>Explore Our Services</span>
              </NextLink>
            </div>

            {/* Proof pills */}
            <div
              ref={proofRef}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-secondary opacity-0"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                  verified
                </span>
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  security
                </span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-600 text-[18px]">
                  database
                </span>
                <span>Enterprise IT experts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive HUD */}
          <div
            className="lg:col-span-5 relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative">
              <HudCore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
