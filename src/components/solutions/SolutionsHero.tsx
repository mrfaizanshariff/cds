"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CTABanner } from "@/components/services/ServicesCTA";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: "lightbulb",     gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)",  title: "Outsourcing",       desc: "End-to-end IT function delivery — from infrastructure ops to full software development teams." },
  { icon: "analytics",     gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)",   title: "Consulting",        desc: "Strategic advisory, architecture reviews, and technology roadmaps aligned to business goals." },
  { icon: "developer_mode",gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)",  title: "Technology",        desc: "Turnkey platform builds, integrations, and modernisation programs for enterprise environments." },
  { icon: "science",       gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.25)",  title: "Research & Dev",    desc: "Custom R&D initiatives solving complex operational bottlenecks with bespoke engineering." },
];

export default function SolutionsHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(cardRef.current,    { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.7");

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
    <section ref={sectionRef} id="solutions-hero" className="relative w-full overflow-hidden pb-16 pt-6 gradient-mesh-1">
      <div className="hero-orb absolute -top-24 -left-20 w-[500px] h-[400px] bg-gradient-to-br from-indigo-200/20 via-blue-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="hero-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-violet-200/20 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 cyber-dot-grid-subtle pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-secondary font-semibold">SOLUTIONS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-outline-variant/50 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-500 animate-pulse" />
              STRATEGIC ENTERPRISE SOLUTIONS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]" style={{ opacity: 0 }}>
              Solutions That Resolve{" "}
              <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Enterprise Bottlenecks
              </span>
            </h1>

            <div ref={bodyRef} className="text-base text-secondary leading-relaxed max-w-2xl" style={{ opacity: 0 }}>
              <p>
                CData Systems merges software architecture, data engineering, and domain-specific strategy to deliver solutions that eliminate operational friction at enterprise scale — across outsourcing, consulting, technology, and R&amp;D engagements.
              </p>
            </div>
          </div>

          <div ref={cardRef} className="lg:col-span-5 glass-strong rounded-2xl border border-outline-variant/50 shadow-xl overflow-hidden" style={{ opacity: 0 }}>
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-5 py-3.5 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-wider">Solution Areas</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/15 text-white font-semibold">4 PRACTICES</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
