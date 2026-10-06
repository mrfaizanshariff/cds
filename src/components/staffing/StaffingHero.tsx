"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Placement Speed", value: "48 hrs",     sub: "CV DELIVERY",         gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)" },
  { label: "Talent Pool",     value: "Pre-Vetted",  sub: "SENIOR ENGINEERS",    gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)" },
  { label: "Retention",       value: "90-Day",      sub: "HIRE WARRANTY",       gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)" },
  { label: "Engagement",      value: "Flexible",    sub: "CONTRACT / DIRECT",   gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.25)" },
];

const overview = [
  { icon: "groups",         gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)",  title: "Team Augmentation",             desc: "Cross-functional squads integrating into your agile cycles within 5 business days." },
  { icon: "person_search",  gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)",   title: "IT Contractors",                desc: "Senior specialists placed on flexible 1099 contracts for critical project gaps." },
  { icon: "verified_user",  gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)",  title: "Direct Hire & Executive Search", desc: "CTO, VP, and Principal Engineer placements with a 90-day retention warranty." },
];

export default function StaffingHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(statsRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
      .fromTo(cardRef.current,    { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.75");

    if (sectionRef.current) {
      const orbs = sectionRef.current.querySelectorAll<HTMLElement>(".hero-orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, { y: (i % 2 === 0 ? -35 : 35), ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 + i * 0.3 },
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="staffing-hero" className="relative w-full overflow-hidden pb-16 pt-6 gradient-mesh-1">
      <div className="hero-orb absolute -top-20 -left-20 w-[500px] h-[400px] bg-gradient-to-br from-blue-200/20 via-indigo-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="hero-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-emerald-200/15 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 cyber-dot-grid-subtle pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-secondary font-semibold">STAFFING SERVICES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-outline-variant/50 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 animate-pulse" />
              ENTERPRISE STAFFING SOLUTIONS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]" style={{ opacity: 0 }}>
              Top 1% of Technical Talent,{" "}
              <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>

            <div ref={bodyRef} className="text-base text-secondary leading-relaxed max-w-2xl" style={{ opacity: 0 }}>
              <p>
                CData Systems bypasses generic recruitment by running engineer-led code audits and architectural assessments on every candidate. You only interview pre-verified senior practitioners ready to contribute from day one.
              </p>
            </div>

            <div ref={statsRef} className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-outline-variant/50" style={{ opacity: 0 }}>
              {stats.map((s) => (
                <div key={s.label} className="group glass-card glass-card-hover p-3.5 rounded-xl text-center overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient}`} />
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center mx-auto mb-2 shadow-sm`}
                    style={{ boxShadow: `0 3px 10px -2px ${s.glow}` }}>
                    <span className="font-headline font-extrabold text-white text-[10px] leading-tight text-center px-0.5">{s.value}</span>
                  </div>
                  <span className="block font-sans text-xs font-semibold text-primary leading-tight">{s.label}</span>
                  <span className={`block font-mono text-[10px] bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={cardRef} className="lg:col-span-5 glass-strong rounded-2xl border border-outline-variant/50 shadow-xl overflow-hidden" style={{ opacity: 0 }}>
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3.5 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-wider">Engagement Models</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/15 text-white font-semibold">3 PATHWAYS</span>
            </div>
            <div className="p-5 space-y-4">
              {overview.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 mt-0.5 shadow-md`}
                    style={{ boxShadow: `0 3px 12px -2px ${item.glow}` }}>
                    <span className="material-symbols-outlined text-white text-[17px]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-sm text-primary">{item.title}</h4>
                    <p className="font-sans text-xs text-secondary mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5 border-t border-outline-variant/40 pt-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-headline text-xs font-semibold hover:scale-105 transition-all shadow-md">
                <span>Request Candidate Profiles</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
