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
  { id: "briefing", icon: "calendar_today",  label: "Architecture Briefing", sub: "30-min consult" },
  { id: "inquiry",  icon: "mail",            label: "Project Inquiry",        sub: "Scoping & quotes" },
  { id: "support",  icon: "support_agent",   label: "Client Support",         sub: "Escalation hotline" },
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

  const sectionRef  = useRef<HTMLElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const tabsRef     = useRef<HTMLDivElement>(null);
  const successRef  = useRef<HTMLDivElement>(null);
  const prevTabRef  = useRef<Tab>(activeTab);

  // Scroll-trigger entrance
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
  }, []);

  // Tab switch animation
  useEffect(() => {
    if (prevTabRef.current !== activeTab && panelRef.current) {
      gsap.fromTo(panelRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
      prevTabRef.current = activeTab;
    }
  }, [activeTab]);

  // Success animation
  useEffect(() => {
    if (state?.success && successRef.current) {
      gsap.fromTo(successRef.current, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
    }
  }, [state?.success]);

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="w-full py-20 bg-white border-y border-outline-variant/50"
      style={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: Context Panel ──────────────────────────────────────── */}
          <div className="lg:col-span-4 space-y-6">
            {/* Section label */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
                OPEN CHANNEL
              </div>
              <h2 className="font-headline text-3xl font-bold text-primary mt-2 tracking-tight leading-tight">
                Connect with Our Architects
              </h2>
              <p className="font-sans text-sm text-on-surface-variant mt-3 leading-relaxed">
                All submissions are NDA-protected. Our enterprise architects review every
                request personally — no automated ticket bots.
              </p>
            </div>

            {/* SLA commitment card */}
            <div className="spatial-card rounded-2xl border border-outline-variant/60 overflow-hidden">
              <div className="bg-primary px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-widest">RESPONSE COMMITMENT</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { icon: "bolt",            color: "text-amber-500",  label: "Briefing Requests",   sla: "< 1 Hour"      },
                  { icon: "mail",            color: "text-secondary",  label: "Project Inquiries",    sla: "< 4 Hours"     },
                  { icon: "support_agent",   color: "text-emerald-600",label: "Client Support P1/P2", sla: "< 15 Minutes"  },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`material-symbols-outlined text-[16px] ${r.color}`}>{r.icon}</span>
                      <span className="font-sans text-xs text-on-surface-variant">{r.label}</span>
                    </div>
                    <span className={`font-mono text-xs font-bold ${r.color}`}>{r.sla}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-outline pt-3 border-t border-outline-variant/40">
                  <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                  NDA Protected · Zero Sales Spam
                </div>
              </div>
            </div>

            {/* Quick contact chips */}
            <div className="space-y-2.5">
              {[
                { icon: "mail",       label: "contact@cdatasystems.com",    sub: "General & media"   },
                { icon: "phone",      label: "+1 (800) 555-0199",           sub: "Mon–Fri 9am–6pm EST" },
                { icon: "headset_mic",label: "+1 (800) 555-0180",           sub: "24/7 client SLA hotline" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/50">
                  <div className="w-8 h-8 rounded-lg bg-white border border-outline-variant/60 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-secondary">{c.icon}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-semibold text-primary">{c.label}</span>
                    <span className="block font-mono text-[10px] text-outline">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Interactive Form Card ─────────────────────────────── */}
          <div className="lg:col-span-8">
            <div className="spatial-card rounded-3xl border border-outline-variant/60 shadow-xl overflow-hidden">

              {/* Card top-bar */}
              <div className="bg-primary px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-white/60 uppercase pl-2">
                    CDATA ENGAGEMENT TERMINAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SECURE CHANNEL OPEN
                </div>
              </div>

              {/* Tab selector */}
              <div ref={tabsRef} className="flex border-b border-outline-variant/50 bg-surface-container-low/60">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id)}
                    className={`flex-1 flex flex-col items-center gap-0.5 px-3 py-3.5 text-center transition-all duration-200 relative ${
                      activeTab === t.id
                        ? "bg-white text-secondary"
                        : "text-on-surface-variant hover:text-primary hover:bg-white/50"
                    }`}
                  >
                    {activeTab === t.id && (
                      <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-secondary rounded-full" />
                    )}
                    <span className={`material-symbols-outlined text-[18px] ${activeTab === t.id ? "text-secondary" : "text-outline"}`}>
                      {t.icon}
                    </span>
                    <span className="font-headline font-semibold text-xs">{t.label}</span>
                    <span className="font-mono text-[9px] text-outline">{t.sub}</span>
                  </button>
                ))}
              </div>

              {/* Form body */}
              <div ref={panelRef} className="p-6 sm:p-8">
                {state?.success ? (
                  <div ref={successRef} className="py-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-primary">Transmission Received</h3>
                    <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
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

                    {/* Hidden engagement type */}
                    <input type="hidden" name="engagement_type" value={activeTab} />

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs font-semibold text-primary mb-2">
                          FULL NAME *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-outline pointer-events-none">
                            person
                          </span>
                          <input
                            name="name"
                            type="text"
                            required
                            disabled={isPending}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full h-12 pl-9 pr-4 rounded-xl bg-surface-container-low border border-outline-variant/70 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 disabled:opacity-60"
                          />
                        </div>
                        {state?.errors?.name && (
                          <p className="mt-1 text-xs text-red-600 font-mono font-semibold">{state.errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-mono text-xs font-semibold text-primary mb-2">
                          CORPORATE EMAIL *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-outline pointer-events-none">
                            alternate_email
                          </span>
                          <input
                            name="email"
                            type="email"
                            required
                            disabled={isPending}
                            placeholder="name@enterprise.com"
                            className="w-full h-12 pl-9 pr-4 rounded-xl bg-surface-container-low border border-outline-variant/70 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 disabled:opacity-60"
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
                        <label className="block font-mono text-xs font-semibold text-primary mb-2">
                          ORGANIZATION
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-outline pointer-events-none">
                            corporate_fare
                          </span>
                          <input
                            name="company"
                            type="text"
                            disabled={isPending}
                            placeholder="e.g. Continental Energy Corp"
                            className="w-full h-12 pl-9 pr-4 rounded-xl bg-surface-container-low border border-outline-variant/70 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 disabled:opacity-60"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-xs font-semibold text-primary mb-2">
                          FOCUS AREA
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-outline pointer-events-none">
                            tune
                          </span>
                          <select
                            name="focus"
                            disabled={isPending}
                            className="w-full h-12 pl-9 pr-4 rounded-xl bg-surface-container-low border border-outline-variant/70 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 cursor-pointer disabled:opacity-60 appearance-none"
                          >
                            {focusOptions[activeTab].map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-outline pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-xs font-semibold text-primary mb-2">
                        {activeTab === "briefing" ? "PROJECT OBJECTIVES & TIMELINE *" :
                         activeTab === "support"  ? "INCIDENT DESCRIPTION & ENVIRONMENT *" :
                                                    "PROJECT BRIEF & REQUIREMENTS *"}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 material-symbols-outlined text-[16px] text-outline pointer-events-none">
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
                          className="w-full pt-3 pb-3 pl-9 pr-4 rounded-xl bg-surface-container-low border border-outline-variant/70 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 resize-none disabled:opacity-60"
                        />
                      </div>
                      {state?.errors?.message && (
                        <p className="mt-1 text-xs text-red-600 font-mono font-semibold">{state.errors.message}</p>
                      )}
                    </div>

                    {/* Footer row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-outline">
                        <span className="material-symbols-outlined text-secondary text-sm">shield</span>
                        <span>256-bit encrypted · NDA by default · 1-hr SLA</span>
                      </div>
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 h-12 rounded-xl bg-secondary text-white font-headline text-sm font-semibold hover:bg-secondary-container transition-all duration-200 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 cursor-pointer"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Transmitting…</span>
                          </>
                        ) : (
                          <>
                            <span>
                              {activeTab === "briefing" ? "Confirm Briefing Request" :
                               activeTab === "support"  ? "Submit Incident Report" :
                                                          "Send Inquiry"}
                            </span>
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
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
