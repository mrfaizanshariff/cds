"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HudCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const nodeCloudRef = useRef<HTMLDivElement>(null);
  const nodeLakehouseRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Clockwise outer ring rotation
    gsap.to(ring1Ref.current, {
      rotation: 360,
      duration: 38,
      repeat: -1,
      ease: "none",
    });

    // 2. Counter-clockwise inner ring rotation
    gsap.to(ring2Ref.current, {
      rotation: -360,
      duration: 26,
      repeat: -1,
      ease: "none",
    });

    // 3. Central Core organic pulse scale
    gsap.to(pulseRef.current, {
      scale: 1.15,
      opacity: 0.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 4. Floating bobbing animation for Node: OCI Cloud
    gsap.to(nodeCloudRef.current, {
      y: -6,
      x: 3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // 5. Floating bobbing animation for Node: Lakehouse
    gsap.to(nodeLakehouseRef.current, {
      y: 5,
      x: -4,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5,
    });

    // 6. Floating bobbing animation for Node: Zero Trust Shield
    gsap.to(nodeShieldRef.current, {
      y: -4,
      x: -5,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.2,
    });

    // 7. Interactive mouse hover triggers for premium micro-interactions
    const core = coreRef.current;
    if (core) {
      const hoverIn = () => {
        gsap.to(core, { scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.35)", duration: 0.3 });
      };
      const hoverOut = () => {
        gsap.to(core, { scale: 1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", duration: 0.3 });
      };
      core.addEventListener("mouseenter", hoverIn);
      core.addEventListener("mouseleave", hoverOut);
      return () => {
        core.removeEventListener("mouseenter", hoverIn);
        core.removeEventListener("mouseleave", hoverOut);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[460px] mx-auto rounded-3xl spatial-glass p-6 border border-white shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* Technical Top Bar */}
      <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 z-20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] tracking-wider text-outline uppercase pl-2">TOPOLOGY HUD // LIVE MESH</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-secondary font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SYNC: REAL-TIME</span>
        </div>
      </div>

      {/* Interactive Kinetic Core Visualization */}
      <div className="relative flex-1 flex items-center justify-center my-3 min-h-[220px]">
        {/* Orbital Ring 1 (Outer - Slow Clockwise) */}
        <div
          ref={ring1Ref}
          className="absolute w-72 h-72 rounded-full border border-dashed border-secondary/25 flex items-center justify-center"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary-container/20 border border-secondary flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          </div>
        </div>

        {/* Orbital Ring 2 (Inner - Reverse) */}
        <div
          ref={ring2Ref}
          className="absolute w-52 h-52 rounded-full border border-cyan-400/30 flex items-center justify-center"
        >
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500" />
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600" />
        </div>

        {/* Soft Kinetic Radial Glow */}
        <div
          ref={pulseRef}
          className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-300/30 to-blue-500/20 blur-xl opacity-80"
        />

        {/* Center Core: Oracle Enterprise Node */}
        <div
          ref={coreRef}
          className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary p-0.5 shadow-xl flex flex-col items-center justify-center text-center text-white cursor-pointer transition-all duration-300"
        >
          <span className="material-symbols-outlined text-cyan-300 text-2xl mb-0.5">deployed_code</span>
          <span className="font-headline font-bold text-xs tracking-tight">ORACLE 19c</span>
          <span className="font-mono text-[9px] text-cyan-200 uppercase tracking-widest mt-0.5">MESH CORE</span>
          <div className="mt-1 px-1.5 py-0.5 bg-cyan-400/20 rounded text-[8px] font-mono text-cyan-300">ACTIVE-SYNC</div>
        </div>

        {/* Floating Auxiliary Nodes */}
        {/* Node: Multi-Cloud OCI */}
        <div
          ref={nodeCloudRef}
          className="absolute top-2 left-4 bg-white/95 border border-outline-variant rounded-xl p-2 shadow-md flex items-center gap-2 z-10 hover:border-secondary transition-colors duration-200"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[15px]">cloud</span>
          </div>
          <div className="text-left font-mono">
            <div className="text-[9px] font-bold text-primary">OCI CLOUD</div>
            <div className="text-[8px] text-emerald-600 font-semibold">12ms Latency</div>
          </div>
        </div>

        {/* Node: Lakehouse / BI */}
        <div
          ref={nodeLakehouseRef}
          className="absolute bottom-4 right-2 bg-white/95 border border-outline-variant rounded-xl p-2 shadow-md flex items-center gap-2 z-10 hover:border-cyan-500 transition-colors duration-200"
        >
          <div className="w-6 h-6 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
            <span className="material-symbols-outlined text-[15px]">insights</span>
          </div>
          <div className="text-left font-mono">
            <div className="text-[9px] font-bold text-primary">LAKEHOUSE</div>
            <div className="text-[8px] text-secondary font-semibold">4.8M IOPS</div>
          </div>
        </div>

        {/* Node: Zero Trust Shield */}
        <div
          ref={nodeShieldRef}
          className="absolute bottom-2 left-6 bg-white/95 border border-outline-variant rounded-xl p-2 shadow-md flex items-center gap-2 z-10 hover:border-purple-500 transition-colors duration-200"
        >
          <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
            <span className="material-symbols-outlined text-[15px]">shield</span>
          </div>
          <div className="text-left font-mono">
            <div className="text-[9px] font-bold text-primary">ZERO-TRUST</div>
            <div className="text-[8px] text-purple-600 font-semibold">Air-Gapped</div>
          </div>
        </div>
      </div>

      {/* HUD Bottom Real-Time Telemetry Bar */}
      <div className="pt-3 border-t border-outline-variant/60 grid grid-cols-3 gap-2 text-center font-mono z-20">
        <div className="bg-surface-container-low/80 p-2 rounded-xl border border-outline-variant/50">
          <div className="text-[9px] text-outline uppercase">Throughput</div>
          <div className="text-xs font-bold text-secondary">48.2 GB/s</div>
        </div>
        <div className="bg-surface-container-low/80 p-2 rounded-xl border border-outline-variant/50">
          <div className="text-[9px] text-outline uppercase">Active Nodes</div>
          <div className="text-xs font-bold text-primary">128 Clustered</div>
        </div>
        <div className="bg-surface-container-low/80 p-2 rounded-xl border border-outline-variant/50">
          <div className="text-[9px] text-outline uppercase">Packet Loss</div>
          <div className="text-xs font-bold text-emerald-600">0.000%</div>
        </div>
      </div>
    </div>
  );
}
