"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scissors, Phone, Mail, MapPin, Clock, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="mt-auto bg-brand-dark text-brand-cream border-t border-brand-primary/10">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-brand-cream">
                <Scissors size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-tight text-brand-cream">
                  BARK & BATHE
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                  Lounge
                </span>
              </div>
            </Link>
            <p className="text-xs text-brand-soft/60 leading-relaxed mb-6">
              A premium, fear-free, and cage-free sanctuary dedicated to keeping your dogs and cats pampered, happy, and stunning.
            </p>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-soft/80">
                Fear-Free Certified Professional Salon
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-brand-secondary uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-brand-soft/75">
              <li>
                <Link href="/" className="hover:text-brand-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-secondary transition-colors">
                  Services & Rates
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-brand-secondary transition-colors">
                  Meet the Groomers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-secondary transition-colors">
                  Careers (Join Us)
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-brand-secondary transition-colors">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-brand-secondary uppercase tracking-wider mb-4">
              Salon Info
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-soft/75">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-secondary shrink-0 mt-0.5" />
                <span>810 Bethlehem Pike, Suite D, Flourtown, PA 19031</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-secondary shrink-0" />
                <a href="tel:8778507768" className="hover:text-brand-secondary transition-colors">
                  877-850-SPOT (7768)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-secondary shrink-0" />
                <a href="mailto:info@barkbathelounge.com" className="hover:text-brand-secondary transition-colors">
                  info@barkbathelounge.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Mon – Sat: 9:00 AM – 5:00 PM</p>
                  <p className="text-[10px] text-brand-soft/50">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-extrabold text-brand-secondary uppercase tracking-wider mb-4">
              Stay Pampered
            </h4>
            <p className="text-xs text-brand-soft/60 mb-4 leading-relaxed">
              Join the list for luxury pet tips, seasonal discounts, and scheduling alerts.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex rounded-md overflow-hidden border border-brand-primary/20 bg-brand-dark-muted/30 p-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-brand-cream focus:outline-none placeholder-brand-soft/40"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-primary text-brand-cream hover:bg-brand-primary-hover transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
              {error && <p className="absolute left-2 -bottom-5 text-[10px] font-semibold text-[#EF4444]">{error}</p>}
              {subscribed && (
                <p className="absolute left-2 -bottom-5 text-[10px] font-semibold text-[#10B981] animate-bounce">
                  Successfully subscribed! Check your inbox.
                </p>
              )}
            </form>
          </div>
        </div>

        <hr className="my-10 border-brand-primary/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-brand-soft/50">
          <p>© {new Date().getFullYear()} Bark & Bathe Lounge. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={10} className="text-[#EF4444] fill-[#EF4444]" />
            <span>by</span>
            <Link
              href="#"
              className="font-bold text-brand-secondary hover:text-brand-secondary-hover transition-colors"
            >
              Cyvera Digitals
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
