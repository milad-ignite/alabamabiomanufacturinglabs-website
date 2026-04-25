"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about-us" },
  { label: "Services", href: "/#what-we-do" },
  { label: "Partners", href: "/#our-partners" },
  { label: "Cohort", href: "/#cohort" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Contact", href: "/#contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/mjEqga08k5tZplOB/abl_banner-AzG3gw4v4aF1own7.png"
              alt="Alabama Biomanufacturing Labs logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/newsletters"
                  ? pathname === "/newsletters"
                  : false;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm text-[#1d1e20] hover:text-[#416bd7] transition-colors pb-0.5 ${
                    isActive
                      ? "border-b-2 border-[#1d1e20] font-medium"
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
            className="md:hidden p-2 rounded text-[#1d1e20]"
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
              className="text-sm text-[#1d1e20] hover:text-[#416bd7] py-1"
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
