"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Partners", href: "/#partners" },
  { label: "Cohort", href: "/#cohort" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#1e3a8a" opacity="0.9" />
              <polygon points="20,6 33,13.5 33,28.5 20,36 7,28.5 7,13.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="20,10 28,15 28,25 20,30 12,25 12,15" fill="#0ea5e9" opacity="0.7" />
              <polygon points="20,14 25,17 25,23 20,26 15,23 15,17" fill="#38bdf8" opacity="0.9" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-gray-900 tracking-tight">Alabama</span>
              <span className="text-sm font-bold text-[#1e3a8a] tracking-tight">BioManufacturing</span>
              <span className="text-sm font-bold text-gray-900 tracking-tight">Labs</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/newsletters"
                  ? pathname === "/newsletters"
                  : link.href === "/"
                  ? pathname === "/" && link.href === "/"
                  : false;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm text-gray-700 hover:text-[#1e3a8a] transition-colors pb-0.5 ${
                    isActive
                      ? "border-b-2 border-gray-800 font-medium text-gray-900"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 hover:text-[#1e3a8a] py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
