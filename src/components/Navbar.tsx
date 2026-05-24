"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scissors, Menu, X, Calendar, Sparkles, Search } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-brand-cream transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                  <path d="M12 14c1.66 0 3-1.34 3-3S13.66 8 12 8s-3 1.34-3 3 1.34 3 3 3zm-4.5-3c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-11 4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm13 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
                </svg>
              </div>
              <span className="font-display text-xl font-black tracking-tight text-brand-primary transition-transform duration-300 group-hover:scale-[1.01]">
                Bark<span className="text-brand-dark/80 font-normal"> & </span>Bathe
              </span>
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
                        ? "text-brand-primary font-bold"
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

            {/* CTA Button and Search */}
            <div className="hidden md:flex items-center gap-6">
              <button className="text-brand-dark/70 hover:text-brand-primary transition-colors focus:outline-none cursor-pointer" aria-label="Search">
                <Search size={20} />
              </button>
              <Link
                href="/book"
                className="rounded-full border-2 border-brand-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-brand-cream hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Book Now
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
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-brand-cream">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d="M12 14c1.66 0 3-1.34 3-3S13.66 8 12 8s-3 1.34-3 3 1.34 3 3 3zm-4.5-3c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-11 4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm13 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
                </svg>
              </div>
              <span className="font-display text-lg font-black tracking-tight text-brand-primary">
                Bark<span className="text-brand-dark/80 font-normal"> & </span>Bathe
              </span>
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
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary py-3.5 text-sm font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover shadow-md hover:shadow-lg transition-all duration-300"
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
