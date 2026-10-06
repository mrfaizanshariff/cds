"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      { name: "Outsourcing",            href: "/solutions#outsourcing" },
      { name: "Consulting",             href: "/solutions#consulting" },
      { name: "Technology",             href: "/solutions#technology" },
      { name: "Research & Development", href: "/solutions#research-development" },
    ],
  },
  { name: "About Us", href: "/about" },
  {
    name: "Staffing Services",
    href: "/staffing",
    children: [
      { name: "Our Edge",                              href: "/staffing#our-edge" },
      { name: "Staffing Solutions",                    href: "/staffing#staffing-solutions" },
      { name: "IT Staffing Skill Matrix",              href: "/staffing#it-staffing" },
      { name: "Engineering Staffing Skill Matrix",     href: "/staffing#engineering-staffing" },
      { name: "Accounting & Finance / Administrative", href: "/staffing#accounting-finance" },
      { name: "Scientific & Clinical",                 href: "/staffing#scientific-clinical" },
      { name: "Light Industrial Labor Category",       href: "/staffing#light-industrial" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

// ─── Desktop dropdown nav item ────────────────────────────────────────────────

function DesktopNavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 130);
  };

  useEffect(() => {
    if (!open || !dropdownRef.current) return;
    const items = Array.from(dropdownRef.current.querySelectorAll<HTMLElement>("[data-dd-item]"));
    if (items.length) {
      gsap.fromTo(items,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.38, stagger: 0.035, ease: "power3.out" }
      );
    }
  }, [open]);

  if (!item.children) {
    return (
      <NextLink
        href={item.href}
        className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
          isActive
            ? "text-blue-600 bg-blue-50/80 border border-blue-100/60"
            : "text-[#526382] hover:text-[#040810] hover:bg-white/60"
        }`}
      >
        {item.name}
      </NextLink>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {/* Trigger */}
      <NextLink
        href={item.href}
        className={`inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
          isActive || open
            ? "text-blue-600 bg-blue-50/80 border border-blue-100/60"
            : "text-[#526382] hover:text-[#040810] hover:bg-white/60"
        }`}
      >
        {item.name}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </NextLink>

      {/* Invisible bridge */}
      {open && <div className="absolute top-full left-0 right-0 h-3" />}

      {/* Dropdown panel */}
      <div
        ref={dropdownRef}
        className={`
          absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50
          min-w-[220px] w-max
          rounded-2xl py-1.5
          transition-all duration-150 ease-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"}
        `}
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: "1px solid rgba(211,224,245,0.55)",
          boxShadow: "0 20px 60px -12px rgba(10,17,32,0.16), 0 4px 20px -4px rgba(59,130,246,0.1)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-4 right-4 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
          aria-hidden="true"
        />

        {item.children.map((child, idx) => (
          <NextLink
            key={child.href}
            href={child.href}
            data-dd-item
            className={`
              flex items-center gap-2.5 px-4 py-2 mx-1.5 rounded-xl
              text-xs font-sans font-medium text-[#526382]
              hover:text-[#040810] hover:bg-blue-50/60
              transition-colors duration-150
              ${idx === 0 ? "mt-1" : ""}
              ${idx === item.children!.length - 1 ? "mb-1" : ""}
            `}
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: "linear-gradient(135deg, #3b82f6, #00d4ff)" }}
            />
            {child.name}
          </NextLink>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <NextLink
        href={item.href}
        className="block rounded-xl px-4 py-3 text-base font-semibold text-[#040810] hover:bg-white/60 transition-colors"
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
        className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#040810] hover:bg-white/60 transition-colors cursor-pointer"
      >
        <span>{item.name}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#7b8fa8] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </button>
      {open && (
        <div
          className="pl-4 pb-2 space-y-0.5 ml-4 mt-0.5"
          style={{ borderLeft: "2px solid rgba(59,130,246,0.2)" }}
        >
          {item.children.map((child) => (
            <NextLink
              key={child.href}
              href={child.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#526382] hover:text-[#040810] hover:bg-blue-50/60 transition-colors"
              onClick={onClose}
            >
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6, #00d4ff)" }}
              />
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
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Initial GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power4.out", delay: 0.1 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Scroll-aware glass intensification
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed top-3 lg:top-6 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none opacity-0"
      >
        <header
          className="pointer-events-auto w-full h-16 sm:h-[68px] px-4 sm:px-6 rounded-2xl flex items-center justify-between transition-all duration-500"
          style={
            scrolled
              ? {
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(28px) saturate(220%)",
                  WebkitBackdropFilter: "blur(28px) saturate(220%)",
                  border: "1px solid rgba(211,224,245,0.6)",
                  boxShadow: "0 12px 40px -8px rgba(10,17,32,0.12), 0 2px 8px 0 rgba(10,17,32,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }
              : {
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(211,224,245,0.4)",
                  boxShadow: "0 4px 20px -4px rgba(10,17,32,0.06)",
                }
          }
        >
          {/* Logo */}
          <NextLink className="flex items-center group" href="/">
            <Image
              src="/C_Data_Logo.png"
              alt="C DATA SYSTEMS"
              width={160}
              height={40}
              className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </NextLink>

          {/* Desktop nav */}
          <nav
            className="hidden xl:flex items-center gap-1 p-1.5 rounded-xl"
            style={{
              background: "rgba(245,247,251,0.6)",
              border: "1px solid rgba(211,224,245,0.5)",
            }}
          >
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return <DesktopNavItem key={item.name} item={item} isActive={isActive} />;
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <NextLink
              className="hidden md:flex items-center gap-1.5 font-mono text-xs font-medium text-[#526382] hover:text-[#040810] px-3 py-2 rounded-xl hover:bg-white/60 transition-all"
              href="/contact"
            >
              <span className="material-symbols-outlined text-sm text-blue-500">lock</span>
              <span>Portal</span>
            </NextLink>

            {/* Gradient CTA */}
            <NextLink
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-white font-headline text-xs font-semibold hover:scale-105 transition-all duration-300 overflow-hidden"
              href="/contact"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1, #00d4ff)",
                boxShadow: "0 4px 18px -4px rgba(59,130,246,0.45)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #00d4ff, #6366f1, #3b82f6)" }}
                aria-hidden="true"
              />
              <span className="relative z-10">Schedule Briefing</span>
              <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-cyan-300 group-hover:scale-125 transition-transform" />
              <span className="relative z-10 material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </NextLink>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open navigation menu"
              className="flex xl:hidden p-2 text-[#526382] hover:text-[#040810] rounded-lg hover:bg-white/60 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto px-6 py-6 pointer-events-auto"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
          }}
        >
          {/* Drawer header */}
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
              aria-label="Close navigation menu"
              className="p-2 text-[#526382] hover:text-[#040810] rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Accent line */}
          <div
            className="mt-4 h-px rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
            aria-hidden="true"
          />

          <div className="mt-6 flow-root">
            <div className="space-y-1">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(211,224,245,0.6)" }}>
              <NextLink
                href="/contact"
                className="block w-full text-center rounded-xl px-5 py-3.5 text-sm font-semibold text-white hover:scale-[1.02] transition-all"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1, #00d4ff)",
                  boxShadow: "0 4px 18px -4px rgba(59,130,246,0.4)",
                }}
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
