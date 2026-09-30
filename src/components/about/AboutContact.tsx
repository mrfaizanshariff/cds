"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FormState = "idle" | "success";

export default function AboutContact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("success");
  }

  return (
    <section
      id="contact"
      className="w-full py-20 bg-white border-t border-outline-variant/50 cyber-dot-grid-subtle"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-12" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 font-mono text-xs text-secondary font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            EXECUTIVE ARCHITECTURE ENGAGEMENT
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-3">
            Contact CData Systems
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-3 leading-relaxed">
            Schedule a briefing with our Principal Solutions Architects 
            {/* or visit our direct enterprise web
            portal at{" "}
            <Link
              href="https://www.cdatasystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:underline"
            >
              https://www.cdatasystems.com
            </Link> */}
            .
          </p>
        </div>

        {/* Form Card */}
        <div ref={cardRef} className="spatial-card rounded-3xl p-6 sm:p-10 border border-outline-variant/60 shadow-xl relative bg-white" style={{ opacity: 0 }}>
          <form onSubmit={handleSubmit}>
            {formState === "idle" ? (
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-primary mb-2">
                      FULL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-semibold text-primary mb-2">
                      WORK EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@enterprise.com"
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-primary mb-2">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global Logistics Inc."
                      className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-semibold text-primary mb-2">
                      SERVICE OR ENGAGEMENT AREA
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-outline-variant/60 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all">
                      <option value="assessment">Infrastructure Assessment &amp; Consulting (7-Stage)</option>
                      <option value="oracle">Oracle E-Business Suite / DBA Services</option>
                      <option value="custom">Application &amp; Custom Software Development</option>
                      <option value="cloud">Cloud Infrastructure &amp; Migration</option>
                      <option value="backup">Backup, Storage &amp; Disaster Recovery</option>
                      <option value="staffing">Enterprise Staffing Solutions</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs font-semibold text-primary mb-2">
                    PROJECT SCOPE OR SYSTEM DETAILS
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly specify current database versions, hosting topology, or staffing requirements..."
                    className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/60 font-sans text-sm text-primary placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-outline">
                    <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                    <span>Strict NDA Protected • 1-Hour Architect Response</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 h-12 rounded-xl bg-secondary text-white font-headline text-sm font-semibold hover:bg-secondary-container transition-all shadow-md shadow-secondary/20 flex items-center justify-center gap-2"
                  >
                    <span>Submit Consultation Request</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <span className="material-symbols-outlined text-emerald-600 text-5xl">check_circle</span>
                <h3 className="font-headline text-2xl font-bold text-primary">Consultation Scheduled</h3>
                <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto">
                  Thank you for contacting CData Systems. A principal enterprise architect has been notified
                  and will reach out with technical diagnostic materials within 1 business hour.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
