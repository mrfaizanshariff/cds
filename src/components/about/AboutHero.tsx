"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// React is used by JSX transpilation
// DotField is a plain JS component — cast to any to satisfy strict TSC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DotField = require('../DotField').default as React.ComponentType<any>;
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const stats = [
  { label: "Lineage", value: "20+ Years", sub: "SDLC Engineering", color: "text-secondary" },
  { label: "Engineered", value: "Multi-Tier", sub: "Object Databases", color: "text-secondary" },
  { label: "Disaster Recovery", value: "<15 Min RTO", sub: "Air-Gapped Vaults", color: "text-emerald-600" },
  { label: "Governance", value: "ISO & SOC 2", sub: "Full Audit Trail", color: "text-secondary" },
];

const pillars = [
  {
    icon: "developer_mode",
    iconColor: "text-secondary",
    title: "Multi-Tier Application Stacks",
    desc: "Decoupled presentation, business logic, and transactional persistence layers designed for horizontal elasticity.",
  },
  {
    icon: "database",
    iconColor: "text-cyan-600",
    title: "Object-Oriented & Relational Core",
    desc: "Sub-second querying across complex relational schemas, RAC clusters, and modern distributed object stores.",
  },
  {
    icon: "verified",
    iconColor: "text-emerald-600",
    title: "Rigorous Quality Assurance",
    desc: "Automated integration testing, continuous regression matrices, and benchmark stress-testing at peak load.",
  },
];

export default function AboutHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, delay: 0.2 })
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(statsRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
      .fromTo(sidebarRef.current, { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.75");
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pb-16 pt-6 cyber-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Sub-Telemetry */}
        {/* <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-outline-variant/40">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant">
            <span className="text-secondary font-semibold">ABOUT CDATA SYSTEMS</span>
            <span className="text-outline-variant">/</span>
            <span>CORPORATE PROFILE &amp; CAPABILITY MATRIX</span>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-outline">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ESTABLISHED 2004
            </span>
            <span>•</span>
            <span>MULTI-TIER CORE</span>
          </div>
        </div> */}
<div className="absolute inset-0 w-full h-full z-1 pointer-events-none">


<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <DotField
    dotRadius={4.5}
    dotSpacing={14}
    bulgeStrength={50}
    glowRadius={1}
    sparkle={false}
    gradientFrom="rgba(8, 145, 178, 0.3)"
    gradientTo="rgba(8, 145, 178, 0.3)"
    glowColor="#fff"
    waveAmplitude={0}
  />
</div>
</div > 
        {/* Main Grid */}
        <div className="pt-10  relative z-20 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Title & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              FOUNDED BY EXPERIENCED TECH ENTREPRENEURS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]" style={{ opacity: 0 }}>
              Enterprise IT Solutions &amp; Software Development Services |{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-600 bg-clip-text text-transparent">
                CData Systems
              </span>
            </h1>

            <div ref={bodyRef} className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed space-y-4" style={{ opacity: 0 }}>
              <p>
                Founded by seasoned technology entrepreneurs with deep lineage across mission-critical
                infrastructure, CData Systems is an established enterprise IT and software development
                powerhouse. We architect, implement, and maintain resilient multi-tier enterprise systems
                engineered around high-performance object-oriented databases and fault-tolerant cloud backbones.
              </p>
              <p className="text-base text-on-surface-variant/90">
                Our practice is built upon uncompromising Software Development Life Cycle (SDLC) rigor.
                Whether deploying end-to-end Oracle E-Business Suite instances, fine-tuning petabyte-scale
                EMC storage fabrics, or orchestrating zero-downtime data center migrations, CData Systems
                bridges legacy technical depth with modern multi-cloud agility.
              </p>
            </div>

            {/* Credential Stats Strip */}
            <div ref={statsRef} className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-variant/50" style={{ opacity: 0 }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl bg-white border border-outline-variant/50"
                >
                  <span className="block font-mono text-[10px] uppercase text-outline">{s.label}</span>
                  <span className="font-headline font-bold text-lg text-primary">{s.value}</span>
                  <span className={`block font-mono text-[11px] ${s.color}`}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SDLC Architecture Pillars Sidebar */}
          <div ref={sidebarRef} className="lg:col-span-4 spatial-card rounded-2xl p-6 sm:p-7 border border-outline-variant/60 shadow-lg relative bg-white" style={{ opacity: 0 }}>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                SDLC Operational Model
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-secondary font-semibold">
                ENTERPRISE SPEC
              </span>
            </div>

            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className={`material-symbols-outlined text-[18px] ${p.iconColor}`}>
                      {p.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-sm text-primary">{p.title}</h4>
                    <p className="font-sans text-xs text-on-surface-variant mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40">
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
