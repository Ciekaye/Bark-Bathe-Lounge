"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scissors, Menu, X, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services & Rates", href: "/services" },
    { name: "Meet the Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 px-4 md:px-8"
            : "py-5 px-4 md:px-8"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-300 ${
            scrolled
              ? "glass-nav rounded-full px-6 py-2 shadow-lg shadow-brand-dark/5 border-brand-primary/10"
              : "bg-transparent px-4 py-2 border-b border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Bark & Bathe Lounge Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-brand-primary"
                        : "text-brand-dark/70 hover:text-brand-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-brand-primary" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/book"
                className="group relative flex items-center gap-2 overflow-hidden rounded-md bg-brand-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream shadow-md shadow-brand-primary/10 transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 hover:scale-[1.02] hover:-rotate-1"
              >
                <Calendar size={14} />
                <span>Book Appointment</span>
                <span className="absolute inset-0 block h-full w-full animate-shimmer pointer-events-none opacity-20" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft/30 text-brand-primary transition-colors hover:bg-brand-soft/60 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-dark/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed bottom-0 top-0 right-0 z-50 w-full max-w-xs bg-brand-cream px-6 py-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Bark & Bathe Lounge Logo"
                width={150}
                height={42}
                className="h-8.5 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft/20 text-brand-primary hover:bg-brand-soft/40"
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold py-2 border-b border-brand-dark/5 transition-colors ${
                    isActive ? "text-brand-primary pl-2 border-brand-primary/20" : "text-brand-dark/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-brand-dark/10">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-primary py-3.5 text-sm font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-brand-dark/50">
              <Sparkles size={12} className="text-brand-secondary" />
              <span>Fear-Free & Cage-Free Certified</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
