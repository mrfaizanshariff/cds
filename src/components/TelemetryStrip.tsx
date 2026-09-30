export default function TelemetryStrip() {
  return (
    <div className="w-full border-b border-outline-variant/60 bg-surface-container-lowest/60 text-[11px] font-mono tracking-wider py-2 px-6 hidden lg:flex items-center justify-between text-on-surface-variant z-40 relative">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          NODE: ORCL-EAST-US // STATUS: NOMINAL
        </span>
        <span className="text-outline">|</span>
        <span>LAT: 37.7749° N, LONG: 122.4194° W</span>
        <span className="text-outline">|</span>
        <span>GRID REV: 4.8.2-LGT</span>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-on-surface-variant">ENCRYPTION: AES-256 GCM</span>
        <span className="text-outline">|</span>
        <span className="text-secondary font-semibold">GLOBAL SLA: 99.999%</span>
      </div>
    </div>
  );
}
