"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Lineage",           value: "20+ Years",   sub: "SDLC Engineering",    gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)" },
  { label: "Engineered",        value: "Multi-Tier",  sub: "Object Databases",    gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)" },
  { label: "Disaster Recovery", value: "<15 Min RTO", sub: "Air-Gapped Vaults",   gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)" },
  { label: "Governance",        value: "ISO & SOC 2", sub: "Full Audit Trail",    gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.25)" },
];

const pillars = [
  { icon: "developer_mode", gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)",  title: "Multi-Tier Application Stacks", desc: "Decoupled presentation, business logic, and transactional persistence layers designed for horizontal elasticity." },
  { icon: "database",       gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)",   title: "Object-Oriented & Relational Core", desc: "Sub-second querying across complex relational schemas, RAC clusters, and modern distributed object stores." },
  { icon: "verified",       gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)",  title: "Rigorous Quality Assurance", desc: "Automated integration testing, continuous regression matrices, and benchmark stress-testing at peak load." },
];

export default function AboutHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, delay: 0.2 })
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(statsRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
      .fromTo(sidebarRef.current, { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.75");

    // Parallax orbs
    if (sectionRef.current) {
      const orbs = sectionRef.current.querySelectorAll<HTMLElement>(".about-orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, { y: (i % 2 === 0 ? -40 : 40), ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 + i * 0.4 },
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full overflow-hidden pb-16 pt-6 gradient-mesh-1">
      {/* Parallax orbs */}
      <div className="about-orb absolute -top-20 -left-20 w-[500px] h-[400px] bg-gradient-to-br from-cyan-200/20 via-blue-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="about-orb absolute bottom-0 right-0 w-[400px] h-[350px] bg-gradient-to-tl from-indigo-200/15 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 cyber-dot-grid-subtle pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-10 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-8 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-outline-variant/50 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-cyan-500 animate-pulse" />
              FOUNDED BY EXPERIENCED TECH ENTREPRENEURS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]" style={{ opacity: 0 }}>
              Enterprise IT Solutions &amp; Software Development Services |{" "}
              <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                CData Systems
              </span>
            </h1>

            <div ref={bodyRef} className="text-base sm:text-lg text-secondary font-normal leading-relaxed space-y-4" style={{ opacity: 0 }}>
              <p>
                Founded by seasoned technology entrepreneurs with deep lineage across mission-critical infrastructure, CData Systems is an established enterprise IT and software development powerhouse. We architect, implement, and maintain resilient multi-tier enterprise systems engineered around high-performance object-oriented databases and fault-tolerant cloud backbones.
              </p>
              <p className="text-base text-secondary/90">
                Our practice is built upon uncompromising Software Development Life Cycle (SDLC) rigor. Whether deploying end-to-end Oracle E-Business Suite instances, fine-tuning petabyte-scale EMC storage fabrics, or orchestrating zero-downtime data center migrations, CData Systems bridges legacy technical depth with modern multi-cloud agility.
              </p>
            </div>

            {/* Stat Strip */}
            <div ref={statsRef} className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-outline-variant/50" style={{ opacity: 0 }}>
              {stats.map((s) => (
                <div key={s.label} className="group glass-card glass-card-hover p-3.5 rounded-xl text-center overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient}`} />
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center mx-auto mb-2 shadow-sm`}
                    style={{ boxShadow: `0 3px 10px -2px ${s.glow}` }}>
                    <span className="font-headline font-extrabold text-white text-[9px] leading-tight text-center px-0.5">{s.value}</span>
                  </div>
                  <span className="block font-sans text-xs font-semibold text-primary leading-tight">{s.label}</span>
                  <span className={`block font-mono text-[10px] bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="lg:col-span-4 glass-strong rounded-2xl border border-outline-variant/50 shadow-xl overflow-hidden" style={{ opacity: 0 }}>
            <div className="bg-gradient-to-r from-secondary via-indigo-600 to-cyan-600 px-5 py-3.5 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-wider">SDLC Operational Model</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/15 text-white font-semibold">ENTERPRISE SPEC</span>
            </div>

            <div className="p-5 space-y-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shrink-0 mt-0.5 shadow-md`}
                    style={{ boxShadow: `0 3px 12px -2px ${p.glow}` }}>
                    <span className="material-symbols-outlined text-white text-[17px]">{p.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-sm text-primary">{p.title}</h4>
                    <p className="font-sans text-xs text-secondary mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 pb-5 border-t border-outline-variant/40 pt-4">
              <Link
                href="https://www.cdatasystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-secondary hover:text-primary transition-colors"
              >
                <span>WWW.CDATASYSTEMS.COM</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
