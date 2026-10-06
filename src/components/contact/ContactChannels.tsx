"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    region: "HEADQUARTERS",
    city: "United States",
    icon: "flag",
    gradient: "from-blue-400 to-indigo-500",
    glow: "rgba(59,130,246,0.2)",
    address: "100 Innovation Way, Suite 400",
    address2: "Tech City, TC 94016, USA",
    tag: "PRIMARY OPERATIONS",
    dot: "bg-emerald-500",
    dotLabel: "OPERATIONAL",
  },
  {
    region: "EMEA HUB",
    city: "London, UK",
    icon: "location_city",
    gradient: "from-indigo-400 to-violet-500",
    glow: "rgba(99,102,241,0.2)",
    address: "25 Finsbury Square",
    address2: "London EC2A 1AD, United Kingdom",
    tag: "EU DELIVERY",
    dot: "bg-emerald-500",
    dotLabel: "OPERATIONAL",
  },
  {
    region: "APAC HUB",
    city: "Singapore",
    icon: "public",
    gradient: "from-cyan-400 to-sky-500",
    glow: "rgba(6,182,212,0.2)",
    address: "Marina Bay Sands Towers, Suite 120",
    address2: "Singapore 018956",
    tag: "APAC DELIVERY",
    dot: "bg-emerald-500",
    dotLabel: "OPERATIONAL",
  },
];

const channels = [
  { icon: "mail",        gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.2)",  label: "General Inquiries",    value: "contact@cdatasystems.com", tag: "GENERAL & MEDIA" },
  { icon: "phone",       gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.2)",  label: "Main Office Line",     value: "+1 (800) 555-0199",        tag: "MON–FRI 9AM–6PM EST" },
  { icon: "headset_mic", gradient: "from-amber-400 to-orange-500",  glow: "rgba(245,158,11,0.2)",  label: "24/7 Client SLA Hotline", value: "+1 (800) 555-0180",     tag: "ACTIVE CONTRACTS ONLY" },
  { icon: "newspaper",   gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.2)",  label: "Media & Press",        value: "media@cdatasystems.com",   tag: "PR & PARTNERSHIPS" },
];

export default function ContactChannels() {
  const headingRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);
  const chansRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }

    const animate = (ref: HTMLDivElement | null) => {
      if (!ref) return;
      const items = Array.from(ref.querySelectorAll<HTMLElement>("[data-item]"));
      if (items.length) {
        gsap.fromTo(items, { y: 28, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ref, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    };

    animate(officesRef.current);
    animate(chansRef.current);
  }, []);

  return (
    <section id="contact-channels" className="w-full py-20 gradient-mesh-2 border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-cyan-500" />
              GLOBAL PRESENCE
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Offices &amp; Direct Channels
            </h2>
            <p className="font-sans text-base text-secondary mt-2 max-w-2xl">
              Reach us through any channel below. All communication is handled by our in-house enterprise team — never outsourced.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">3 GLOBAL NODES ACTIVE</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Office nodes */}
          <div ref={officesRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {offices.map((o) => (
              <div
                data-item
                key={o.region}
                className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col relative"
                style={{ opacity: 0 }}
              >
                {/* Top gradient strip */}
                <div className={`h-0.5 bg-gradient-to-r ${o.gradient}`} />

                {/* Header band */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${o.gradient} opacity-[0.07]`} />
                  <div className="relative px-4 py-3 flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-bold bg-gradient-to-r ${o.gradient} bg-clip-text text-transparent uppercase`}>{o.region}</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${o.dot}`} />
                      <span className="font-mono text-[9px] text-outline">{o.dotLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${o.gradient} flex items-center justify-center mb-3 shadow-md`}
                    style={{ boxShadow: `0 3px 10px -2px ${o.glow}` }}>
                    <span className="material-symbols-outlined text-white text-[17px]">{o.icon}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-sm text-primary mb-1">{o.city}</h3>
                  <p className="font-sans text-xs text-secondary leading-relaxed">{o.address}</p>
                  <p className="font-sans text-xs text-secondary">{o.address2}</p>
                  <div className="mt-auto pt-3 border-t border-outline-variant/40 mt-3">
                    <span className="font-mono text-[10px] text-outline">{o.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct channels */}
          <div ref={chansRef} className="lg:col-span-5 flex flex-col gap-3">
            {channels.map((c) => (
              <div
                data-item
                key={c.label}
                className="group glass-card glass-card-hover rounded-xl px-4 py-3.5 flex items-center gap-4 cursor-default relative overflow-hidden"
                style={{ opacity: 0 }}
              >
                <div className={`absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b ${c.gradient}`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 shadow-md`}
                  style={{ boxShadow: `0 3px 10px -2px ${c.glow}` }}>
                  <span className="material-symbols-outlined text-white text-[17px]">{c.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] text-outline uppercase">{c.label}</span>
                  <span className="block font-headline font-semibold text-sm text-primary group-hover:text-secondary transition-colors">{c.value}</span>
                </div>
                <span className="font-mono text-[9px] text-outline glass px-2 py-0.5 rounded-full shrink-0 hidden sm:block">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
