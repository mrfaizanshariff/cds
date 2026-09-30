import Link from "next/link";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-zinc-900 dark:text-white">CDS</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Cognitive Digital Solutions. Empowering modern enterprises with intelligent software, cloud-native engineering, and forward-looking strategy.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/solutions#ai-automation" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions#data-modernization" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Data Platform Modernization
                </Link>
              </li>
              <li>
                <Link href="/solutions#cybersecurity" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Enterprise Security Shield
                </Link>
              </li>
              <li>
                <Link href="/solutions#cloud-optimization" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Cloud Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/staffing" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Staffing Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPin className="h-5 w-5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                <span>100 Innovation Way, Suite 400, Tech City, TC 94016</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Phone className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Mail className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                <span>contact@cds-digital.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {currentYear} Cognitive Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <span className="text-xs text-zinc-400 dark:text-zinc-500">Privacy Policy</span>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">Terms of Service</span>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
