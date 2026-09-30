"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const stats = [
  { label: "Placement Speed", value: "48 hrs",     sub: "CV DELIVERY",         color: "text-secondary" },
  { label: "Talent Pool",     value: "Pre-Vetted",  sub: "SENIOR ENGINEERS",    color: "text-secondary" },
  { label: "Retention",       value: "90-Day",      sub: "HIRE WARRANTY",       color: "text-emerald-600" },
  { label: "Engagement",      value: "Flexible",    sub: "CONTRACT / DIRECT",   color: "text-secondary" },
];

const overview = [
  {
    icon: "groups",
    color: "text-secondary",
    title: "Team Augmentation",
    desc: "Cross-functional squads integrating into your agile cycles within 5 business days.",
  },
  {
    icon: "person_search",
    color: "text-cyan-600",
    title: "IT Contractors",
    desc: "Senior specialists placed on flexible 1099 contracts for critical project gaps.",
  },
  {
    icon: "verified_user",
    color: "text-emerald-600",
    title: "Direct Hire & Executive Search",
    desc: "CTO, VP, and Principal Engineer placements with a 90-day retention warranty.",
  },
];

export default function StaffingHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(statsRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
      .fromTo(cardRef.current,    { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.75");
  }, []);

  return (
    <section
      id="staffing-hero"
      className="relative w-full overflow-hidden pb-16 pt-6 cyber-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-semibold">STAFFING SERVICES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              ENTERPRISE STAFFING SOLUTIONS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]" style={{ opacity: 0 }}>
              Top 1% of Technical Talent,{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-600 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>

            <div ref={bodyRef} className="text-base text-on-surface-variant leading-relaxed max-w-2xl" style={{ opacity: 0 }}>
              <p>
                CData Systems bypasses generic recruitment by running engineer-led code audits and
                architectural assessments on every candidate. You only interview pre-verified senior
                practitioners ready to contribute from day one.
              </p>
            </div>

            <div ref={statsRef} className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-variant/50" style={{ opacity: 0 }}>
              {stats.map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-white border border-outline-variant/50">
                  <span className="block font-mono text-[10px] uppercase text-outline">{s.label}</span>
                  <span className="font-headline font-bold text-lg text-primary">{s.value}</span>
                  <span className={`block font-mono text-[11px] ${s.color}`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engagement overview card */}
          <div ref={cardRef} className="lg:col-span-5 spatial-card rounded-2xl p-6 border border-outline-variant/60 bg-white shadow-sm" style={{ opacity: 0 }}>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Engagement Models</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-secondary font-semibold">3 PATHWAYS</span>
            </div>
            <div className="space-y-4">
              {overview.map((item) => (
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
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-secondary hover:text-primary transition-colors">
                <span>REQUEST CANDIDATE PROFILES</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
