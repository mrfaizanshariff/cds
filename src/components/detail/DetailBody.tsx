"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DetailPageConfig } from "./types";

gsap.registerPlugin(ScrollTrigger);

type Props = Pick<
  DetailPageConfig,
  | "overviewLabel"
  | "overviewTitle"
  | "overviewParagraphs"
  | "features"
  | "featuresLabel"
  | "featuresTitle"
  | "featuresColumns"
  | "stages"
  | "stagesLabel"
  | "stagesTitle"
  | "stagesDescription"
  | "metrics"
  | "deliverables"
  | "deliverablesLabel"
  | "deliverablesTitle"
  | "accentBg"
  | "accentText"
>;

// ── Reusable section-header subcomponent ──────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  accentBg = "bg-secondary",
}: {
  eyebrow: string;
  title: string;
  accentBg?: string;
}) {
  return (
    <div className="mb-10">
      <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase font-semibold text-secondary`}>
        <span className={`w-2.5 h-2.5 rounded-sm ${accentBg}`} />
        {eyebrow}
      </div>
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

const colClass: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2 lg:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function DetailBody({
  overviewLabel,
  overviewTitle,
  overviewParagraphs,
  features,
  featuresLabel,
  featuresTitle,
  featuresColumns = 3,
  stages,
  stagesLabel,
  stagesTitle,
  stagesDescription,
  metrics,
  deliverables,
  deliverablesLabel,
  deliverablesTitle,
  accentBg = "bg-secondary",
  accentText = "text-secondary",
}: Props) {
  const overviewRef     = useRef<HTMLElement>(null);
  const featuresRef     = useRef<HTMLDivElement>(null);
  const featuresGridRef = useRef<HTMLDivElement>(null);
  const stagesRef       = useRef<HTMLElement>(null);
  const metricsRef      = useRef<HTMLDivElement>(null);
  const delivRef        = useRef<HTMLElement>(null);

  useEffect(() => {
    // Helper: scroll-triggered fade-up for a heading element
    const revealHeading = (el: HTMLElement | null) => {
      if (!el) return;
      gsap.fromTo(el, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    };

    // Helper: stagger-reveal children tagged with [data-item]
    const staggerItems = (container: HTMLElement | null, selector = "[data-item]") => {
      if (!container) return;
      const els = Array.from(container.querySelectorAll<HTMLElement>(selector));
      if (!els.length) return;
      gsap.fromTo(els, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "play none none none" },
      });
    };

    revealHeading(overviewRef.current);
    revealHeading(featuresRef.current);
    staggerItems(featuresGridRef.current);
    revealHeading(stagesRef.current);
    staggerItems(stagesRef.current, "[data-stage]");
    revealHeading(metricsRef.current);
    staggerItems(metricsRef.current, "[data-metric]");
    revealHeading(delivRef.current);
    staggerItems(delivRef.current, "[data-deliv]");
  }, []);

  const hasOverview     = overviewParagraphs && overviewParagraphs.length > 0;
  const hasFeatures     = features && features.length > 0;
  const hasStages       = stages && stages.length > 0;
  const hasMetrics      = metrics && metrics.length > 0;
  const hasDeliverables = deliverables && deliverables.length > 0;

  return (
    <>
      {/* ── 1. Overview ──────────────────────────────────────────────────── */}
      {hasOverview && (
        <section
          ref={overviewRef}
          id="detail-overview"
          className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
          style={{ opacity: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: label + title */}
              <div className="lg:col-span-4">
                <SectionHeader
                  eyebrow={overviewLabel ?? "OVERVIEW"}
                  title={overviewTitle ?? "What We Deliver"}
                  accentBg={accentBg}
                />
              </div>
              {/* Right: paragraphs */}
              <div className="lg:col-span-8 space-y-4">
                {overviewParagraphs!.map((p, i) => (
                  <p key={i} className="font-sans text-base text-on-surface-variant leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. Feature / Capability Grid ─────────────────────────────────── */}
      {hasFeatures && (
        <section
          id="detail-features"
          className="w-full py-20 bg-surface cyber-dot-grid"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={featuresRef} style={{ opacity: 0 }}>
              <SectionHeader
                eyebrow={featuresLabel ?? "CAPABILITIES"}
                title={featuresTitle ?? "Core Capabilities"}
                accentBg={accentBg}
              />
            </div>

            <div ref={featuresGridRef} className={`grid grid-cols-1 ${colClass[featuresColumns]} gap-5`}>
              {features!.map((f, i) => (
                <div
                  data-item
                  key={i}
                  className="spatial-card spatial-card-hover rounded-2xl border border-outline-variant/60 flex flex-col overflow-hidden"
                  style={{ opacity: 0 }}
                >
                  {/* Colour band top */}
                  <div className="bg-surface-container-low border-b border-outline-variant/40 px-5 py-3 flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl ${f.iconBg ?? "bg-blue-50"} ${f.iconColor ?? accentText} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                    </div>
                    {f.tag && (
                      <span className="font-mono text-[10px] text-outline uppercase">{f.tag}</span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-headline font-semibold text-base text-primary mb-2">{f.title}</h3>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed flex-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Process / Delivery Stages ─────────────────────────────────── */}
      {hasStages && (
        <section
          ref={stagesRef}
          id="detail-process"
          className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
          style={{ opacity: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow={stagesLabel ?? "METHODOLOGY"}
                  title={stagesTitle ?? "Delivery Process"}
                  accentBg={accentBg}
                />
                {stagesDescription && (
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed -mt-4">
                    {stagesDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Stages — horizontal scrollable timeline on mobile, grid on desktop */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-outline-variant/40 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-none lg:flex lg:gap-0 gap-4 relative z-10">
                {stages!.map((s, i) => (
                  <div
                    data-stage
                    key={i}
                    className={`flex-1 group relative flex flex-col ${i < stages!.length - 1 ? "lg:border-r lg:border-outline-variant/30" : ""}`}
                    style={{ opacity: 0 }}
                  >
                    {/* Stage node */}
                    <div className="lg:px-5 lg:pb-5">
                      <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-105 ${
                        s.highlight
                          ? `${accentBg} border-secondary/30 shadow-lg shadow-secondary/20`
                          : "bg-white border-outline-variant/60"
                      }`}>
                        <span className={`font-mono text-sm font-bold ${s.highlight ? "text-white" : accentText}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${accentText}`}>
                        {s.stage}
                      </span>
                      <h4 className="font-headline font-semibold text-sm text-primary mt-1.5 mb-1.5 leading-tight">
                        {s.title}
                      </h4>
                      <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed">
                        {s.desc}
                      </p>
                      {s.tag && (
                        <div className={`mt-3 inline-flex font-mono text-[10px] font-bold ${s.highlight ? accentText : "text-outline"}`}>
                          {s.tag}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Metrics ───────────────────────────────────────────────────── */}
      {hasMetrics && (
        <section
          id="detail-metrics"
          className="w-full py-20 bg-primary cyber-dot-grid-subtle overflow-hidden relative"
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-400" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
                BY THE NUMBERS
              </div>
            </div>

            <div ref={metricsRef} className={`grid grid-cols-2 ${metrics!.length >= 4 ? "lg:grid-cols-4" : metrics!.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6`}>
              {metrics!.map((m, i) => (
                <div
                  data-metric
                  key={i}
                  className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300"
                  style={{ opacity: 0 }}
                >
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                  <div className={`font-headline font-extrabold text-4xl sm:text-5xl tracking-tight mb-2 ${m.color ?? "text-white"}`}>
                    {m.value}
                  </div>
                  <div className="font-headline font-semibold text-sm text-white/90 mb-1">{m.label}</div>
                  {m.sub && <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider">{m.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Deliverables ──────────────────────────────────────────────── */}
      {hasDeliverables && (
        <section
          ref={delivRef}
          id="detail-deliverables"
          className="w-full py-20 bg-surface border-t border-outline-variant/50 cyber-dot-grid"
          style={{ opacity: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: label */}
              <div className="lg:col-span-4">
                <SectionHeader
                  eyebrow={deliverablesLabel ?? "DELIVERABLES"}
                  title={deliverablesTitle ?? "What You Receive"}
                  accentBg={accentBg}
                />
              </div>

              {/* Right: checklist grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliverables!.map((d, i) => (
                    <div
                      data-deliv
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-outline-variant/60 hover:border-secondary/30 transition-colors"
                      style={{ opacity: 0 }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0`}>
                        <span className={`material-symbols-outlined text-[16px] ${accentText}`}>{d.icon}</span>
                      </div>
                      <span className="font-sans text-sm text-on-surface-variant leading-snug">{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
