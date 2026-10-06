"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const telemetry = [
  { label: "RESPONSE SLA", value: "< 1 HR",  gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.25)" },
  { label: "UPTIME",        value: "99.999%", gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.25)" },
  { label: "NDA PROTECTED", value: "ALWAYS",  gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.25)" },
  { label: "ENGAGEMENTS",   value: "ACTIVE",  gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.25)" },
];

export default function ContactHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(subRef.current,     { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.65")
      .fromTo(stripRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
      .fromTo(actionsRef.current, { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.75 }, "-=0.65");

    // Ambient glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.55, scale: 1.08, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }

    // Parallax orbs
    if (sectionRef.current) {
      const orbs = sectionRef.current.querySelectorAll<HTMLElement>(".contact-orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, { y: (i % 2 === 0 ? -30 : 30), ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 + i * 0.3 },
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact-hero" className="relative w-full overflow-hidden pb-14 pt-6 gradient-mesh-1">
      {/* Orbs */}
      <div ref={glowRef} className="contact-orb absolute -top-24 left-1/2 -translate-x-1/4 w-[600px] h-[380px] bg-gradient-to-b from-cyan-300/22 via-secondary/10 to-transparent blur-3xl pointer-events-none opacity-40" />
      <div className="contact-orb absolute top-1/3 -right-24 w-64 h-64 bg-indigo-300/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-dot-grid-subtle pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-secondary font-semibold">CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left: Copy */}
          <div className="lg:col-span-8 space-y-5">
            <div ref={pillRef} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-outline-variant/50 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              ENTERPRISE ENGAGEMENT — ARCHITECTS AVAILABLE
            </div>

            <h1 ref={headingRef} className="font-headline text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-primary tracking-tight leading-[1.08]" style={{ opacity: 0 }}>
              Let&apos;s Architect{" "}
              <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Something Exceptional
              </span>
            </h1>

            <p ref={subRef} className="font-sans text-base sm:text-lg text-secondary max-w-2xl leading-relaxed" style={{ opacity: 0 }}>
              Reach our Principal Solutions Architects directly. Whether you need an Oracle EBS implementation, a cloud migration roadmap, or a staffing engagement — expect a substantive response within one business hour.
            </p>

            {/* Telemetry stat strip */}
            <div ref={stripRef} className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-outline-variant/50" style={{ opacity: 0 }}>
              {telemetry.map((t) => (
                <div key={t.label} className="group glass-card glass-card-hover p-3.5 rounded-xl text-center relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${t.gradient}`} />
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center mx-auto mb-2 shadow-sm`}
                    style={{ boxShadow: `0 3px 10px -2px ${t.glow}` }}>
                    <span className="font-headline font-extrabold text-white text-[10px] leading-tight text-center px-0.5">{t.value}</span>
                  </div>
                  <span className="block font-mono text-[10px] uppercase text-secondary">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick-action cards */}
          <div ref={actionsRef} className="lg:col-span-4 flex flex-col gap-3" style={{ opacity: 0 }}>
            {[
              { icon: "calendar_today", gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.2)",   label: "Schedule a Briefing",    sub: "30-min architecture consult", href: "#contact-form" },
              { icon: "mail",           gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.2)",    label: "Send a Message",          sub: "General & project inquiries", href: "#contact-form" },
              { icon: "support_agent",  gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.2)",   label: "Enterprise Support",      sub: "Existing client escalation",  href: "#contact-form" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 p-3.5 rounded-xl glass-card glass-card-hover relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b ${item.gradient}`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md`}
                  style={{ boxShadow: `0 3px 12px -2px ${item.glow}` }}>
                  <span className="material-symbols-outlined text-white text-[18px]">{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-headline font-semibold text-sm text-primary group-hover:text-secondary transition-colors">{item.label}</span>
                  <span className="block font-mono text-[10px] text-outline truncate">{item.sub}</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-secondary group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
