"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Tab = "briefing" | "inquiry" | "support";

const tabs: { id: Tab; icon: string; label: string; sub: string }[] = [
  { id: "briefing", icon: "calendar_today", label: "Architecture Briefing", sub: "30-min consult" },
  { id: "inquiry",  icon: "mail",           label: "Project Inquiry",       sub: "Scoping & quotes" },
  { id: "support",  icon: "support_agent",  label: "Client Support",        sub: "Escalation hotline" },
];

const focusOptions: Record<Tab, { value: string; label: string }[]> = {
  briefing: [
    { value: "oracle",      label: "Oracle EBS / OCI Migration" },
    { value: "cloud",       label: "Hybrid & Multi-Cloud Architecture" },
    { value: "backup",      label: "Backup, DR & Storage Engineering" },
    { value: "audit",       label: "IT Architecture & Licensing Audit" },
    { value: "dev",         label: "Custom Application Development" },
  ],
  inquiry: [
    { value: "services",    label: "Services & Capabilities Overview" },
    { value: "staffing",    label: "IT Staffing & Talent Solutions" },
    { value: "partnership", label: "Strategic Partnerships" },
    { value: "pricing",     label: "Project Scoping & Pricing" },
  ],
  support: [
    { value: "incident",    label: "Active Incident (P1 / P2)" },
    { value: "change",      label: "Change Request / Patch" },
    { value: "performance", label: "Performance Degradation" },
    { value: "license",     label: "License / Access Issue" },
  ],
};

export default function ContactPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("briefing");
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  const sectionRef = useRef<HTMLElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<Tab>(activeTab);

  // Orbs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  // Scroll-trigger entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Parallax orbs
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.4 },
        });
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.8 },
        });
      }

      gsap.fromTo(
        section.querySelectorAll<HTMLElement>("[data-panel-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 86%", toggleActions: "play none none none" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Tab switch animation
  useEffect(() => {
    if (prevTabRef.current !== activeTab && panelRef.current) {
      gsap.fromTo(panelRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.38, ease: "power2.out" });
      prevTabRef.current = activeTab;
    }
  }, [activeTab]);

  // Success animation
  useEffect(() => {
    if (state?.success && successRef.current) {
      gsap.fromTo(successRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
    }
  }, [state?.success]);

  const inputClass =
    "w-full h-12 pl-9 pr-4 rounded-xl bg-white/60 border border-blue-100/80 font-sans text-sm text-[#0a1120] placeholder:text-[#7b8fa8] focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200 disabled:opacity-60 backdrop-blur-sm";

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="relative w-full py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 0% 40%, rgba(0,212,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 45% at 100% 60%, rgba(59,130,246,0.08) 0%, transparent 55%), #f5f7fb",
      }}
    >
      {/* Parallax orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)", filter: "blur(80px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: Context Panel ──────────────────────────────────── */}
          <div className="lg:col-span-4 space-y-6" data-panel-reveal>

            {/* Heading */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-semibold text-blue-600 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                OPEN CHANNEL
              </div>
              <h2 className="font-headline text-3xl font-bold text-[#040810] mt-1 tracking-tight leading-tight">
                Connect with Our Architects
              </h2>
              <p className="font-sans text-sm text-[#526382] mt-3 leading-relaxed">
                All submissions are NDA-protected. Our enterprise architects review every
                request personally — no automated ticket bots.
              </p>
            </div>

            {/* SLA commitment card */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div
                className="px-5 py-3.5 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #040810 0%, #0f2044 100%)" }}
              >
                <span className="font-mono text-[10px] font-bold text-white/70 uppercase tracking-widest">
                  RESPONSE COMMITMENT
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { icon: "bolt",          color: "text-amber-500",   bg: "bg-amber-50",   label: "Briefing Requests",    sla: "< 1 Hour"     },
                  { icon: "mail",          color: "text-blue-600",    bg: "bg-blue-50",    label: "Project Inquiries",     sla: "< 4 Hours"    },
                  { icon: "support_agent", color: "text-emerald-600", bg: "bg-emerald-50", label: "Client Support P1/P2", sla: "< 15 Minutes" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg ${r.bg} flex items-center justify-center shrink-0`}>
                        <span className={`material-symbols-outlined text-[15px] ${r.color}`}>{r.icon}</span>
                      </div>
                      <span className="font-sans text-xs text-[#526382]">{r.label}</span>
                    </div>
                    <span className={`font-mono text-xs font-bold ${r.color}`}>{r.sla}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#7b8fa8] pt-3 border-t border-blue-50">
                  <span className="material-symbols-outlined text-blue-500 text-sm">lock</span>
                  NDA Protected · Zero Sales Spam
                </div>
              </div>
            </div>

            {/* Quick contact chips */}
            <div className="space-y-2.5">
              {[
                { icon: "mail",        label: "contact@cdatasystems.com", sub: "General & media"         },
                { icon: "phone",       label: "+1 (800) 555-0199",        sub: "Mon–Fri 9am–6pm EST"     },
                { icon: "headset_mic", label: "+1 (800) 555-0180",        sub: "24/7 client SLA hotline" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 p-3 rounded-xl glass-card border-0"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-white">{c.icon}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-semibold text-[#040810]">{c.label}</span>
                    <span className="block font-mono text-[10px] text-[#7b8fa8]">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Interactive Form Card ─────────────────────────── */}
          <div className="lg:col-span-8" data-panel-reveal>
            <div className="glass-strong rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px -16px rgba(10,17,32,0.12), 0 4px 20px -4px rgba(59,130,246,0.08)" }}>

              {/* Card top-bar */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #040810 0%, #0f2044 60%, #1a1060 100%)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase pl-2">
                    CDATA ENGAGEMENT TERMINAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SECURE CHANNEL OPEN
                </div>
              </div>

              {/* Tab selector */}
              <div className="flex border-b border-blue-100/60" style={{ background: "rgba(245,247,251,0.7)" }}>
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id)}
                    className={`flex-1 flex flex-col items-center gap-0.5 px-3 py-4 text-center transition-all duration-200 relative cursor-pointer ${
                      activeTab === t.id
                        ? "bg-white/90 text-blue-600"
                        : "text-[#526382] hover:text-[#040810] hover:bg-white/50"
                    }`}
                  >
                    {activeTab === t.id && (
                      <span
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 rounded-full"
                        style={{ background: "linear-gradient(90deg, #3b82f6, #00d4ff)" }}
                      />
                    )}
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        activeTab === t.id ? "text-blue-500" : "text-[#7b8fa8]"
                      }`}
                    >
                      {t.icon}
                    </span>
                    <span className="font-headline font-semibold text-xs">{t.label}</span>
                    <span className="font-mono text-[9px] text-[#7b8fa8]">{t.sub}</span>
                  </button>
                ))}
              </div>

              {/* Form body */}
              <div ref={panelRef} className="p-6 sm:p-8" style={{ background: "rgba(255,255,255,0.75)" }}>
                {state?.success ? (
                  <div
                    ref={successRef}
                    className="py-12 rounded-2xl text-center space-y-4"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%), rgba(240,253,244,0.8)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                      style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
                    >
                      <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-[#040810]">Transmission Received</h3>
                    <p className="font-sans text-sm text-[#526382] max-w-md mx-auto leading-relaxed">
                      {state.message}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 font-mono text-xs text-emerald-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      RESPONSE SLA: &lt; 1 HOUR
                    </div>
                  </div>
                ) : (
                  <form action={formAction} className="space-y-5">
                    {/* Error banner */}
                    {state?.success === false && state.message && (
                      <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                        <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                        <span>{state.message}</span>
                      </div>
                    )}

                    <input type="hidden" name="engagement_type" value={activeTab} />

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] font-bold text-[#526382] uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                            person
                          </span>
                          <input
                            name="name"
                            type="text"
                            required
                            disabled={isPending}
                            placeholder="e.g. Sarah Jenkins"
                            className={inputClass}
                          />
                        </div>
                        {state?.errors?.name && (
                          <p className="mt-1 text-xs text-red-600 font-mono font-semibold">{state.errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] font-bold text-[#526382] uppercase tracking-wider mb-2">
                          Corporate Email *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                            alternate_email
                          </span>
                          <input
                            name="email"
                            type="email"
                            required
                            disabled={isPending}
                            placeholder="name@enterprise.com"
                            className={inputClass}
                          />
                        </div>
                        {state?.errors?.email && (
                          <p className="mt-1 text-xs text-red-600 font-mono font-semibold">{state.errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company + Focus area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] font-bold text-[#526382] uppercase tracking-wider mb-2">
                          Organization
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                            corporate_fare
                          </span>
                          <input
                            name="company"
                            type="text"
                            disabled={isPending}
                            placeholder="e.g. Continental Energy Corp"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] font-bold text-[#526382] uppercase tracking-wider mb-2">
                          Focus Area
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                            tune
                          </span>
                          <select
                            name="focus"
                            disabled={isPending}
                            className={`${inputClass} cursor-pointer appearance-none`}
                          >
                            {focusOptions[activeTab].map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-[10px] font-bold text-[#526382] uppercase tracking-wider mb-2">
                        {activeTab === "briefing" ? "Project Objectives & Timeline *" :
                         activeTab === "support"  ? "Incident Description & Environment *" :
                                                    "Project Brief & Requirements *"}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 material-symbols-outlined text-[16px] text-[#7b8fa8] pointer-events-none">
                          edit_note
                        </span>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          disabled={isPending}
                          placeholder={
                            activeTab === "briefing" ? "Describe your current database version, cloud footprint, or target go-live..." :
                            activeTab === "support"  ? "Describe the incident, impacted systems, and current severity level..." :
                                                       "Outline your goals, tech stack preferences, and desired start date..."
                          }
                          className="w-full pt-3 pb-3 pl-9 pr-4 rounded-xl bg-white/60 border border-blue-100/80 font-sans text-sm text-[#0a1120] placeholder:text-[#7b8fa8] focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200 resize-none disabled:opacity-60 backdrop-blur-sm"
                        />
                      </div>
                      {state?.errors?.message && (
                        <p className="mt-1 text-xs text-red-600 font-mono font-semibold">{state.errors.message}</p>
                      )}
                    </div>

                    {/* Footer row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#7b8fa8]">
                        <span className="material-symbols-outlined text-blue-500 text-sm">shield</span>
                        <span>256-bit encrypted · NDA by default · 1-hr SLA</span>
                      </div>
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-12 rounded-xl text-white font-headline text-sm font-semibold transition-all duration-300 shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 cursor-pointer overflow-hidden relative"
                        style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1, #00d4ff)" }}
                      >
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "linear-gradient(135deg, #00d4ff, #6366f1, #3b82f6)" }}
                        />
                        {isPending ? (
                          <>
                            <Loader2 className="relative z-10 h-4 w-4 animate-spin" />
                            <span className="relative z-10">Transmitting…</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">
                              {activeTab === "briefing" ? "Confirm Briefing Request" :
                               activeTab === "support"  ? "Submit Incident Report" :
                                                          "Send Inquiry"}
                            </span>
                            <span className="relative z-10 material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                              {activeTab === "support" ? "crisis_alert" : "send"}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
