import NextLink from "next/link";

export default function PremiumFooter() {
  return (
    <footer className="w-full bg-primary-container text-white border-t border-outline-variant/20 pt-16 pb-12 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 30 7 C 17 7 8 16 8 20 C 8 24 17 33 30 33" stroke="#22D3EE" strokeLinecap="round" strokeWidth="3" />
                  <path d="M 28 13 C 21 13 14 17 14 20 C 14 23 21 27 28 27" stroke="#155EEF" strokeLinecap="round" strokeWidth="2.5" />
                  <circle cx="30" cy="7" fill="#22D3EE" r="2.5" />
                  <circle cx="30" cy="33" fill="#155EEF" r="2.5" />
                </svg>
              </div>
              <span className="font-headline font-bold text-lg tracking-tight text-white">C DATA SYSTEMS</span>
            </div>
            <p className="font-sans text-sm text-outline-variant max-w-sm leading-relaxed text-zinc-400">
              Enterprise systems integrator and certified Oracle Gold partner providing architectural precision, zero-loss migrations, and sovereign cloud infrastructure.
            </p>
            <div className="pt-2 font-mono text-xs text-cyan-300 flex flex-wrap items-center gap-3">
              <span>SPEC: ISO 27001</span>
              <span>•</span>
              <span>SOC 2 TYPE II</span>
              <span>•</span>
              <span>FedRAMP READY</span>
            </div>
          </div>

          {/* Links: Services */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-white font-semibold tracking-wider uppercase block mb-1">Services</span>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#disciplines">Oracle ERP &amp; RAC</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#disciplines">Multi-Cloud Fabric</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#disciplines">Air-Gapped DR</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#disciplines">Enterprise BI</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#disciplines">Storage Engineering</NextLink>
              </li>
            </ul>
          </div>

          {/* Links: Verticals */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white font-semibold tracking-wider uppercase block mb-1">Industries</span>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#solutions">Financial Services &amp; Banking</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#solutions">Energy &amp; SCADA Utilities</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#solutions">Healthcare Systems &amp; EMR</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#solutions">Federal &amp; Public Sector</NextLink>
              </li>
              <li>
                <NextLink className="hover:text-cyan-300 transition-colors" href="/#solutions">Discrete Manufacturing</NextLink>
              </li>
            </ul>
          </div>

          {/* Global HQ Metadata */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs text-zinc-400">
            <span className="text-white font-semibold tracking-wider uppercase block mb-1">Global HQ</span>
            <p className="leading-relaxed">
              100 Technology Square<br />
              Suite 700<br />
              Cambridge, MA 02139
            </p>
            <p className="text-white font-medium">+1 (800) 555-0199</p>
            <p className="text-cyan-300">ops@cdatasystems.com</p>
          </div>
        </div>

        {/* Bottom Bar: Monospace Coordinates & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            <span>© {new Date().getFullYear()} C Data Systems, Inc. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <NextLink className="hover:text-white transition-colors" href="/contact">Privacy Policy</NextLink>
            <NextLink className="hover:text-white transition-colors" href="/contact">Terms of SLA</NextLink>
            <NextLink className="hover:text-white transition-colors" href="/contact">Security Enclaves</NextLink>
            <span className="text-cyan-400">LAT: 37.77 // NODE-01</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
