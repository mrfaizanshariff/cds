"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const telemetry = [
  { label: "RESPONSE SLA",    value: "< 1 HR",     color: "text-emerald-600" },
  { label: "UPTIME",          value: "99.999%",     color: "text-secondary"  },
  { label: "NDA PROTECTED",   value: "ALWAYS",      color: "text-secondary"  },
  { label: "ENGAGEMENTS",     value: "ACTIVE",      color: "text-cyan-600"   },
];

export default function ContactHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(subRef.current,     { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.65")
      .fromTo(stripRef.current,   { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.55");

    // Ambient glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.55,
        scale: 1.08,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      id="contact-hero"
      className="relative w-full overflow-hidden pb-14 pt-6 cyber-dot-grid"
    >
      {/* Ambient glow orb */}
      <div
        ref={glowRef}
        className="absolute -top-24 left-1/2 -translate-x-1/4 w-[600px] h-[380px] bg-gradient-to-b from-cyan-300/25 via-secondary/10 to-transparent blur-3xl pointer-events-none opacity-40"
      />
      <div className="absolute top-1/3 -right-24 w-64 h-64 bg-secondary/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-semibold">CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left: Copy */}
          <div className="lg:col-span-8 space-y-5">
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono text-secondary font-semibold"
              style={{ opacity: 0 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              ENTERPRISE ENGAGEMENT — ARCHITECTS AVAILABLE
            </div>

            <h1
              ref={headingRef}
              className="font-headline text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-primary tracking-tight leading-[1.08]"
              style={{ opacity: 0 }}
            >
              Let&apos;s Architect{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-500 bg-clip-text text-transparent">
                Something Exceptional
              </span>
            </h1>

            <p
              ref={subRef}
              className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
              style={{ opacity: 0 }}
            >
              Reach our Principal Solutions Architects directly. Whether you need an Oracle EBS
              implementation, a cloud migration roadmap, or a staffing engagement — expect a
              substantive response within one business hour.
            </p>

            {/* Telemetry stat strip */}
            <div
              ref={stripRef}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-outline-variant/50"
              style={{ opacity: 0 }}
            >
              {telemetry.map((t) => (
                <div key={t.label} className="p-3 rounded-xl bg-white/90 border border-outline-variant/60 backdrop-blur-sm">
                  <span className="block font-mono text-[10px] uppercase text-outline">{t.label}</span>
                  <span className={`font-headline font-bold text-lg ${t.color}`}>{t.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick-action chips */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { icon: "calendar_today",  label: "Schedule a Briefing",    sub: "30-min architecture consult", href: "#contact-form" },
              { icon: "mail",            label: "Send a Message",          sub: "General & project inquiries", href: "#contact-form" },
              { icon: "support_agent",   label: "Enterprise Support",      sub: "Existing client escalation",  href: "#contact-form" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-outline-variant/60 hover:border-secondary/40 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-secondary">{item.icon}</span>
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
