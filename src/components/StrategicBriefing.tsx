"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitBriefingForm, BriefingFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StrategicBriefing() {
  const [state, formAction, isPending] = useActionState<BriefingFormState | null, FormData>(
    submitBriefingForm,
    null
  );

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, delay: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 87%", toggleActions: "play none none none" },
      });
    }

    // Parallax glow drift
    if (sectionRef.current) {
      const orbs = sectionRef.current.querySelectorAll<HTMLElement>(".briefing-orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: (i % 2 === 0 ? -40 : 40),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5 + i * 0.5,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    if (state?.success && successRef.current) {
      gsap.fromTo(successRef.current, { scale: 0.88, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)"
      });
    }
  }, [state?.success]);

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="w-full py-24 relative overflow-hidden gradient-mesh-2 border-t border-outline-variant/50"
    >
      {/* Parallax orbs */}
      <div className="briefing-orb absolute -top-32 right-1/4 w-[500px] h-[400px] bg-gradient-to-br from-cyan-200/25 via-indigo-100/15 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="briefing-orb absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-gradient-to-tr from-violet-200/20 via-purple-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 cyber-dot-grid-subtle pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-outline-variant/40 font-mono text-xs text-secondary font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            EXECUTIVE STRATEGIC BRIEFING
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            Schedule an Architecture
            <span className="block bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="font-sans text-base text-secondary mt-4 leading-relaxed">
            30 minutes with our Principal Enterprise Architect. Receive a high-level roadmap, licensing audit estimate, and risk matrix tailored to your Oracle &amp; cloud footprint.
          </p>
        </div>

        {/* Glass Card */}
        <div
          ref={containerRef}
          className="glass-strong rounded-3xl border border-outline-variant/50 shadow-2xl overflow-hidden relative"
          style={{ opacity: 0 }}
        >
          {/* Card top bar */}
          <div className="relative bg-gradient-to-r from-secondary via-indigo-600 to-cyan-600 px-8 py-5">
            <div className="absolute inset-0 opacity-10 cyber-dot-grid-subtle" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[18px]">calendar_today</span>
                </div>
                <div>
                  <span className="font-headline font-bold text-white text-sm">Architecture Briefing Request</span>
                  <span className="block font-mono text-[10px] text-white/60">ENTERPRISE ENGAGEMENT CHANNEL — ENCRYPTED</span>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-300 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ARCHITECTS LIVE
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="p-8 sm:p-12">
            {state?.success ? (
              <div ref={successRef} className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">Consultation Scheduled</h3>
                <p className="font-sans text-sm text-secondary max-w-md mx-auto leading-relaxed">
                  {state.message}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-200 font-mono text-xs text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  RESPONSE SLA: &lt; 1 HOUR
                </div>
              </div>
            ) : (
              <form action={formAction} className="space-y-6">
                {state?.success === false && state.message && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-lg">error</span>
                    <span>{state.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="briefing-name" className="block font-mono text-xs font-semibold text-primary mb-2">
                      FULL NAME *
                    </label>
                    <input
                      id="briefing-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      disabled={isPending}
                      className="w-full h-12 px-4 rounded-xl bg-white/80 border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 backdrop-blur-sm"
                    />
                    {state?.errors?.name && (
                      <p className="mt-1 text-xs text-red-600 font-semibold font-mono">{state.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="briefing-email" className="block font-mono text-xs font-semibold text-primary mb-2">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      id="briefing-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@enterprise.com"
                      disabled={isPending}
                      className="w-full h-12 px-4 rounded-xl bg-white/80 border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 backdrop-blur-sm"
                    />
                    {state?.errors?.email && (
                      <p className="mt-1 text-xs text-red-600 font-semibold font-mono">{state.errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="briefing-company" className="block font-mono text-xs font-semibold text-primary mb-2">
                      COMPANY / AGENCY
                    </label>
                    <input
                      id="briefing-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Continental Energy Corp"
                      disabled={isPending}
                      className="w-full h-12 px-4 rounded-xl bg-white/80 border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="briefing-focus" className="block font-mono text-xs font-semibold text-primary mb-2">
                      PRIMARY FOCUS AREA
                    </label>
                    <select
                      id="briefing-focus"
                      name="focus"
                      disabled={isPending}
                      className="w-full h-12 px-4 rounded-xl bg-white/80 border border-outline-variant/60 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                    >
                      <option value="oracle">Oracle 19c / OCI Cloud Migration</option>
                      <option value="dr">Zero-Trust Air-Gapped Data Protection</option>
                      <option value="multi-cloud">Hybrid &amp; Multi-Cloud Optimization</option>
                      <option value="scm">Enterprise BI &amp; SCM Integration</option>
                      <option value="audit">IT Architecture &amp; Licensing Cost Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="briefing-objectives" className="block font-mono text-xs font-semibold text-primary mb-2">
                    PROJECT OBJECTIVES &amp; TIMELINE (OPTIONAL)
                  </label>
                  <textarea
                    id="briefing-objectives"
                    name="objectives"
                    rows={3}
                    placeholder="Briefly describe your current database version, hosting environment, or target go-live schedule..."
                    disabled={isPending}
                    className="w-full p-4 rounded-xl bg-white/80 border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 resize-none backdrop-blur-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-outline">
                    <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                    <span>NDA Protected · Zero Sales Spam · 1-Hour Response SLA</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-gradient-to-r from-secondary via-indigo-500 to-cyan-600 text-white font-headline text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-secondary/25 hover:shadow-2xl duration-300 overflow-hidden disabled:opacity-70 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isPending ? (
                      <>
                        <Loader2 className="relative z-10 h-4 w-4 animate-spin" />
                        <span className="relative z-10">Allocating Server Node…</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Confirm Briefing Request</span>
                        <span className="relative z-10 material-symbols-outlined text-[18px]">calendar_today</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
