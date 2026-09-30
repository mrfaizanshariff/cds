"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";

// ─── Navigation data ─────────────────────────────────────────────────────────

interface NavChild {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Cloud",                            href: "/services#cloud" },
      { name: "Oracle",                           href: "/services#oracle" },
      { name: "Business Intelligence",            href: "/services#business-intelligence" },
      { name: "Data Protection",                  href: "/services#data-protection" },
      { name: "Backup Data",                      href: "/services#backup-data" },
      { name: "Testing",                          href: "/services#testing" },
      { name: "Virtualization",                   href: "/services#virtualization" },
      { name: "Supply Chain Management",          href: "/services#supply-chain" },
      { name: "Customer Relationship Management", href: "/services#crm" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Outsourcing",        href: "/solutions#outsourcing" },
      { name: "Consulting",         href: "/solutions#consulting" },
      { name: "Technology",         href: "/solutions#technology" },
      { name: "Research & Development", href: "/solutions#research-development" },
    ],
  },
  { name: "About Us", href: "/about" },
  {
    name: "Staffing Services",
    href: "/staffing",
    children: [
      { name: "Our Edge",                               href: "/staffing#our-edge" },
      { name: "Staffing Solutions",                     href: "/staffing#staffing-solutions" },
      { name: "IT Staffing Skill Matrix",               href: "/staffing#it-staffing" },
      { name: "Engineering Staffing Skill Matrix",      href: "/staffing#engineering-staffing" },
      { name: "Accounting & Finance / Administrative",  href: "/staffing#accounting-finance" },
      { name: "Scientific & Clinical",                  href: "/staffing#scientific-clinical" },
      { name: "Light Industrial Labor Category",        href: "/staffing#light-industrial" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

// ─── Desktop dropdown nav item ────────────────────────────────────────────────

function DesktopNavItem({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleLeave() {
    // 120 ms grace period so the cursor can travel into the dropdown
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  if (!item.children) {
    return (
      <NextLink
        href={item.href}
        className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
          isActive
            ? "text-secondary bg-white shadow-sm border border-outline-variant/50"
            : "text-on-surface-variant hover:text-on-surface hover:bg-white/60"
        }`}
      >
        {item.name}
      </NextLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <NextLink
        href={item.href}
        className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 select-none ${
          isActive || open
            ? "text-secondary bg-white shadow-sm border border-outline-variant/50"
            : "text-on-surface-variant hover:text-on-surface hover:bg-white/60"
        }`}
      >
        {item.name}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </NextLink>

      {/* Invisible bridge: fills the mt gap so hover isn't lost in transit */}
      {open && (
        <div className="absolute top-full left-0 right-0 h-3" />
      )}

      {/* Dropdown panel */}
      <div
        className={`
          absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50
          min-w-[220px] w-max
          bg-white/98 backdrop-blur-xl
          border border-outline-variant/50
          rounded-2xl shadow-[0_16px_40px_-8px_rgba(11,28,48,0.14)]
          py-1.5
          transition-all duration-150 ease-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"}
        `}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />

        {item.children.map((child, idx) => (
          <NextLink
            key={child.href}
            href={child.href}
            className={`
              flex items-center gap-2.5 px-4 py-2 mx-1.5 rounded-xl
              text-xs font-sans font-medium text-on-surface-variant
              hover:text-secondary hover:bg-surface-container-low
              transition-colors duration-150
              ${idx === 0 ? "mt-1" : ""}
              ${idx === item.children!.length - 1 ? "mb-1" : ""}
            `}
          >
            <span className="w-1 h-1 rounded-full bg-secondary/50 shrink-0" />
            {child.name}
          </NextLink>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <NextLink
        href={item.href}
        className="block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-primary hover:bg-surface-container transition-colors"
        onClick={onClose}
      >
        {item.name}
      </NextLink>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold leading-7 text-primary hover:bg-surface-container transition-colors"
      >
        <span>{item.name}</span>
        <ChevronDown
          className={`w-4 h-4 text-outline transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-0.5 border-l-2 border-secondary/20 ml-3 mt-0.5">
          {item.children.map((child) => (
            <NextLink
              key={child.href}
              href={child.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant hover:text-secondary hover:bg-surface-container transition-colors"
              onClick={onClose}
            >
              <span className="w-1 h-1 rounded-full bg-secondary/40 shrink-0" />
              {child.name}
            </NextLink>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.1 }
    );
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed top-3 lg:top-8 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none opacity-0"
      >
        <header className="pointer-events-auto w-full h-16 sm:h-18 px-4 sm:px-6 rounded-2xl spatial-glass border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between transition-all duration-300">

          {/* Logo */}
          <NextLink className="flex items-center group" href="/">
            <Image
              src="/C_Data_Logo.png"
              alt="C DATA SYSTEMS"
              width={160}
              height={40}
              className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </NextLink>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-surface-container/60 p-1.5 rounded-xl border border-outline-variant/40">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <DesktopNavItem key={item.name} item={item} isActive={isActive} />
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <NextLink
              className="hidden md:flex items-center gap-1.5 font-mono text-xs font-medium text-on-surface-variant hover:text-secondary px-3 py-2 rounded-lg transition-colors"
              href="/contact"
            >
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Portal</span>
            </NextLink>
            <NextLink
              className="relative group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-primary text-white font-headline text-xs font-semibold hover:bg-secondary transition-all shadow-md shadow-primary/10 hover:shadow-secondary/25"
              href="/contact"
            >
              <span>Schedule Briefing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </NextLink>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="flex xl:hidden p-2 text-primary hover:text-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white/98 backdrop-blur-md px-6 py-6 pointer-events-auto">
          <div className="flex items-center justify-between">
            <NextLink
              className="flex items-center"
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/C_Data_Logo.png"
                alt="C DATA SYSTEMS"
                width={150}
                height={36}
                className="h-8 w-auto object-contain"
                priority
              />
            </NextLink>
            <button
              type="button"
              className="p-2 text-primary hover:text-secondary rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="space-y-1">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
            <div className="mt-8 border-t border-outline-variant/60 pt-6">
              <NextLink
                href="/contact"
                className="block w-full text-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Briefing
              </NextLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
