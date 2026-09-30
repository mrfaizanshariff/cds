"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    region: "HEADQUARTERS",
    city: "United States",
    icon: "flag",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
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
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
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
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    address: "Marina Bay Sands Towers, Suite 120",
    address2: "Singapore 018956",
    tag: "APAC DELIVERY",
    dot: "bg-emerald-500",
    dotLabel: "OPERATIONAL",
  },
];

const channels = [
  {
    icon: "mail",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    label: "General Inquiries",
    value: "contact@cdatasystems.com",
    tag: "GENERAL & MEDIA",
  },
  {
    icon: "phone",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    label: "Main Office Line",
    value: "+1 (800) 555-0199",
    tag: "MON–FRI 9AM–6PM EST",
  },
  {
    icon: "headset_mic",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    label: "24/7 Client SLA Hotline",
    value: "+1 (800) 555-0180",
    tag: "ACTIVE CONTRACTS ONLY",
  },
  {
    icon: "newspaper",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    label: "Media & Press",
    value: "media@cdatasystems.com",
    tag: "PR & PARTNERSHIPS",
  },
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
        gsap.fromTo(items, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ref, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    };

    animate(officesRef.current);
    animate(chansRef.current);
  }, []);

  return (
    <section
      id="contact-channels"
      className="w-full py-20 bg-surface cyber-dot-grid-subtle border-t border-outline-variant/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              GLOBAL PRESENCE
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Offices & Direct Channels
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              Reach us through any channel below. All communication is handled by our
              in-house enterprise team — never outsourced.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">
            3 GLOBAL NODES ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Office nodes */}
          <div ref={officesRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {offices.map((o) => (
              <div
                data-item
                key={o.region}
                className="spatial-card spatial-card-hover rounded-2xl border border-outline-variant/60 overflow-hidden flex flex-col"
                style={{ opacity: 0 }}
              >
                {/* Top band */}
                <div className="bg-surface-container-low border-b border-outline-variant/40 px-4 py-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-secondary uppercase">{o.region}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${o.dot}`} />
                    <span className="font-mono text-[9px] text-outline">{o.dotLabel}</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className={`w-9 h-9 rounded-xl ${o.iconBg} ${o.iconColor} flex items-center justify-center mb-3`}>
                    <span className="material-symbols-outlined text-[18px]">{o.icon}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-sm text-primary mb-1">{o.city}</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">{o.address}</p>
                  <p className="font-sans text-xs text-on-surface-variant">{o.address2}</p>
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
                className="group spatial-card spatial-card-hover rounded-xl border border-outline-variant/60 px-4 py-3.5 flex items-center gap-4 cursor-default"
                style={{ opacity: 0 }}
              >
                <div className={`w-10 h-10 rounded-xl ${c.iconBg} ${c.iconColor} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-[18px]">{c.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] text-outline uppercase">{c.label}</span>
                  <span className="block font-headline font-semibold text-sm text-primary group-hover:text-secondary transition-colors">{c.value}</span>
                </div>
                <span className="font-mono text-[9px] text-outline bg-surface-container px-2 py-0.5 rounded-full shrink-0 hidden sm:block">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
