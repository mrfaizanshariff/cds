"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const stats = [
  { label: "Service Lines", value: "10+", sub: "CORE DISCIPLINES", color: "text-secondary" },
  { label: "Delivery Model", value: "On-Site / Remote", sub: "HYBRID ENGAGEMENT", color: "text-secondary" },
  { label: "Response SLA", value: "<15 Min", sub: "CRITICAL INCIDENTS", color: "text-emerald-600" },
  { label: "Architecture", value: "Enterprise", sub: "SDLC CERTIFIED", color: "text-secondary" },
];

export default function ServicesHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(statsRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55");
  }, []);

  return (
    <section
      id="services-hero"
      className="relative w-full overflow-hidden pb-16 pt-6 cyber-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-semibold">SERVICES</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono text-secondary font-semibold"
              style={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              ENTERPRISE SERVICE PORTFOLIO
            </div>

            <h1
              ref={headingRef}
              className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]"
              style={{ opacity: 0 }}
            >
              Enterprise IT Services &amp;{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-600 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>

            <div
              ref={bodyRef}
              className="text-base text-on-surface-variant leading-relaxed max-w-2xl"
              style={{ opacity: 0 }}
            >
              <p>
                CData Systems delivers a comprehensive portfolio of enterprise IT services — from
                Oracle EBS implementations and petabyte-scale storage engineering to custom application
                development, cloud migration, and managed operations.
              </p>
            </div>

            {/* Stat Strip */}
            <div
              ref={statsRef}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-variant/50"
              style={{ opacity: 0 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-white border border-outline-variant/50">
                  <span className="block font-mono text-[10px] uppercase text-outline">{s.label}</span>
                  <span className="font-headline font-bold text-lg text-primary">{s.value}</span>
                  <span className={`block font-mono text-[11px] ${s.color}`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick-nav prompt */}
          <div className="lg:col-span-5 spatial-card rounded-2xl p-6 border border-outline-variant/60 bg-white shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                How We Engage
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-secondary font-semibold">
                DELIVERY SPEC
              </span>
            </div>
            <div className="space-y-4">
              {[
                { icon: "search_insights", color: "text-secondary", title: "Discovery & Assessment", desc: "A structured 7-stage diagnostic of your current environment." },
                { icon: "architecture", color: "text-cyan-600", title: "Solution Design", desc: "Architecture blueprints, phased roadmaps, and milestone pricing." },
                { icon: "rocket_launch", color: "text-emerald-600", title: "Implementation", desc: "Zero-downtime deployment with continuous QA and stakeholder sign-off." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className={`material-symbols-outlined text-[18px] ${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-sm text-primary">{item.title}</h4>
                    <p className="font-sans text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/40">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-secondary hover:text-primary transition-colors"
              >
                <span>SCHEDULE A BRIEFING</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
