"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitBriefingForm, BriefingFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";
import gsap from "gsap";

export default function StrategicBriefing() {
  const [state, formAction, isPending] = useActionState<BriefingFormState | null, FormData>(
    submitBriefingForm,
    null
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance fade-in up of scheduler block
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (state?.success && successRef.current) {
      // Premium pop-scale sequence for success state
      gsap.fromTo(
        successRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [state?.success]);

  return (
    <section className="w-full py-24 relative overflow-hidden bg-white border-t border-outline-variant/70 cyber-dot-grid-subtle z-30" id="schedule">
      {/* Glow ambient light cones */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[350px] bg-gradient-to-b from-cyan-200/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container font-mono text-xs text-secondary font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            EXECUTIVE STRATEGIC BRIEFING
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary tracking-tight mt-3">
            Schedule an Architecture Consultation
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-4 leading-relaxed">
            30 minutes with our Principal Enterprise Architect. Receive a high-level roadmap, licensing audit estimate, and risk matrix tailored to your current Oracle &amp; cloud footprint.
          </p>
        </div>

        {/* Glass-Morphic Scheduler Preview Card */}
        <div ref={containerRef} className="spatial-card rounded-3xl p-8 sm:p-12 border border-outline-variant/80 shadow-2xl relative opacity-0">
          {state?.success ? (
            <div ref={successRef} className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <span className="material-symbols-outlined text-emerald-600 text-5xl">check_circle</span>
              <h3 className="font-headline text-2xl font-bold text-primary">Consultation Scheduled</h3>
              <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              
              {/* Form Validation Error Alert */}
              {state?.success === false && state.message && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-lg">error</span>
                  <span>{state.message}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Row 1: Name, Email */}
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
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
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
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                    />
                    {state?.errors?.email && (
                      <p className="mt-1 text-xs text-red-600 font-semibold font-mono">{state.errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Organization, Primary Need */}
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
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
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
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-250 cursor-pointer"
                    >
                      <option value="oracle">Oracle 19c / OCI Cloud Migration</option>
                      <option value="dr">Zero-Trust Air-Gapped Data Protection</option>
                      <option value="multi-cloud">Hybrid &amp; Multi-Cloud Optimization</option>
                      <option value="scm">Enterprise BI &amp; SCM Integration</option>
                      <option value="audit">IT Architecture &amp; Licensing Cost Audit</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Timeline & Details */}
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
                    className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                  />
                </div>

                {/* Submit & SLA microcopy */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-outline">
                    <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                    <span>NDA Protected • Zero Sales Spam • 1-Hour Response SLA</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto px-8 h-12 rounded-xl bg-secondary text-white font-headline text-sm font-semibold hover:bg-secondary-container transition-all shadow-lg shadow-secondary/25 hover:shadow-secondary/40 flex items-center justify-center gap-2 disabled:opacity-75 duration-200 cursor-pointer"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Allocating Server Node...
                      </>
                    ) : (
                      <>
                        <span>Confirm Briefing Request</span>
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
