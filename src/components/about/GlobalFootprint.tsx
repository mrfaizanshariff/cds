"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    region: "HQ / NORTH AMERICA",
    nodeId: "NODE-EAST",
    nodeColor: "text-secondary",
    city: "Cambridge, Massachusetts",
    detail: "100 Technology Square • Central Strategy & Architecture",
    statusColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
    status: "Primary Command Center",
  },
  {
    region: "WEST CLOUD REGION",
    nodeId: "NODE-WEST",
    nodeColor: "text-secondary",
    city: "San Francisco, California",
    detail: "Multi-Cloud Interconnect & Hyperscale Integration Hub",
    statusColor: "text-cyan-600",
    dotColor: "bg-cyan-500",
    status: "OCI & AWS Direct Mesh",
  },
  {
    region: "EMEA CLOUD GATEWAY",
    nodeId: "NODE-EMEA",
    nodeColor: "text-secondary",
    city: "London / Frankfurt Enclave",
    detail: "GDPR-Compliant Sovereign Data & DR Replication Sites",
    statusColor: "text-indigo-600",
    dotColor: "bg-indigo-500",
    status: "Air-Gapped Standby",
  },
  {
    region: "APAC OPERATIONS",
    nodeId: "NODE-APAC",
    nodeColor: "text-secondary",
    city: "Bangalore / Singapore Hub",
    detail: "Global 24/7/365 Tier 3 DBA & Software Support Infrastructure",
    statusColor: "text-purple-600",
    dotColor: "bg-purple-500",
    status: "Active Shift Rotation",
  },
];

export default function GlobalFootprint() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Left column slides in from left
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }

    // Right card slides in from right
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }

    // Node cards stagger in
    const nodeCards = nodesRef.current ? Array.from(nodesRef.current.children) : [];
    if (nodeCards.length) {
      gsap.fromTo(
        nodeCards,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: nodesRef.current, start: "top 82%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  return (
    <section
      id="global-footprint"
      className="w-full py-20 bg-surface cyber-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div ref={leftRef} className="lg:col-span-5 space-y-6" style={{ opacity: 0 }}>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              REGIONAL PRESENCE &amp; SCALE
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Global Enterprise IT Solutions
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Headquartered in the United States with strategically deployed global delivery centers,
              CData Systems ensures 24/7/365 engineering continuity, sovereign governance, and local SLA
              execution across continents.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-outline-variant/60 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">location_city</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-sm text-primary">
                    United States Headquarters
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                    Executive leadership, enterprise architecture design, and cleared domestic security operations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-outline-variant/60 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">public</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-sm text-primary">
                    Global Delivery Centers
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                    Follow-the-sun DBA coverage, continuous integration pipelines, and dedicated staff
                    augmentation teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Telemetry Card */}
          <div ref={rightRef} className="lg:col-span-7" style={{ opacity: 0 }}>
            <div className="spatial-card rounded-3xl p-6 sm:p-8 border border-outline-variant/60 shadow-xl bg-white relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-outline-variant/40 font-mono text-xs">
                <span className="text-primary font-bold uppercase tracking-wider">
                  DEPLOYMENT MESH TELEMETRY
                </span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ALL NODES NOMINAL
                </span>
              </div>

              <div ref={nodesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nodes.map((n) => (
                  <div
                    key={n.nodeId}
                    className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40"
                    style={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-outline mb-2">
                      <span>{n.region}</span>
                      <span className={`${n.nodeColor} font-bold`}>{n.nodeId}</span>
                    </div>
                    <h5 className="font-headline font-bold text-sm text-primary">{n.city}</h5>
                    <p className="font-sans text-xs text-on-surface-variant mt-1">{n.detail}</p>
                    <div className={`mt-3 flex items-center gap-2 font-mono text-[11px] ${n.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${n.dotColor}`} />
                      {n.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-outline">
                <span>CONNECTIVITY: 100Gbps FIBER BACKBONE</span>
                <span className="text-secondary font-semibold">
                  PEERING: AWS DIRECT CONNECT • OCI FASTCONNECT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
