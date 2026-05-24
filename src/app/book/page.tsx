"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Dog,
  Cat,
  Check,
  Calendar,
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  ClipboardList,
  AlertTriangle,
  Award,
  Scissors
} from "lucide-react";
import Link from "next/link";

// Predefined packages rates for calculations
const packages = [
  { name: "The Bath & Pamper Deluxe", dogPrice: 65, catPrice: 90, duration: "2.5 hours" },
  { name: "The Signature Styling & Haircut", dogPrice: 85, catPrice: 110, duration: "3 hours" },
  { name: "The Royal Treatment Spa", dogPrice: 125, catPrice: 150, duration: "3.5 hours" },
  { name: "The Cozy Cat Retreat", dogPrice: null, catPrice: 90, duration: "2 hours" },
];

const alacarteList = [
  { id: "teeth", name: "Teeth Brushing & Mint Foam", price: 15 },
  { id: "paw", name: "Organic Paw Balm & Massage", price: 12 },
  { id: "mud", name: "Aromatic Mud Bath Pack", price: 22 },
  { id: "deshed", name: "Botanical Deshedding Scrub", price: 25 },
];

function BookingWizardContent() {
  const searchParams = useSearchParams();

  // Wizard Steps: 1. Pet Info, 2. Service, 3. Schedule, 4. Summary
  const [step, setStep] = useState(1);

  // Form State
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [dogSize, setDogSize] = useState<"small" | "medium" | "large" | "giant">("medium");
  const [petAge, setPetAge] = useState("adult");
  const [sensitivities, setSensitivities] = useState<string[]>([]);

  const [selectedPackage, setSelectedPackage] = useState("The Bath & Pamper Deluxe");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const [stylist, setStylist] = useState("Any Certified Stylist");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("morning");

  const [policyAgreed, setPolicyAgreed] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Load redirect parameters from Breed Selector or Services Page
  useEffect(() => {
    const type = searchParams?.get("petType") as "dog" | "cat" | null;
    const size = searchParams?.get("dogSize") as "small" | "medium" | "large" | "giant" | null;
    const pkg = searchParams?.get("package");
    const groomer = searchParams?.get("groomer");

    if (type) setPetType(type);
    if (size) setDogSize(size);
    if (pkg) {
      // Find matching package or fallback
      const found = packages.find((p) => p.name.toLowerCase().includes(pkg.toLowerCase()));
      if (found) setSelectedPackage(found.name);
    }
    if (groomer) setStylist(groomer);

    // Set tomorrow as minimum date limit
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, [searchParams]);

  // Adjust package when switching dog/cat to ensure valid options
  useEffect(() => {
    if (petType === "cat" && selectedPackage !== "The Cozy Cat Retreat" && selectedPackage !== "The Royal Treatment Spa") {
      setSelectedPackage("The Cozy Cat Retreat");
    } else if (petType === "dog" && selectedPackage === "The Cozy Cat Retreat") {
      setSelectedPackage("The Bath & Pamper Deluxe");
    }
  }, [petType]);

  const handleSensitivityToggle = (item: string) => {
    if (sensitivities.includes(item)) {
      setSensitivities(sensitivities.filter((s) => s !== item));
    } else {
      setSensitivities([...sensitivities, item]);
    }
  };

  const handleAddonToggle = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const getPricingSummary = () => {
    const pkgDetails = packages.find((p) => p.name === selectedPackage) || packages[0];
    let basePrice = petType === "dog" ? pkgDetails.dogPrice || 65 : pkgDetails.catPrice || 90;

    // Weight sizing surcharge for dogs
    if (petType === "dog") {
      if (dogSize === "large") basePrice += 30;
      if (dogSize === "giant") basePrice += 60;
    }

    const addonsCost = selectedAddons.reduce((sum, currentId) => {
      const addon = alacarteList.find((a) => a.id === currentId);
      return sum + (addon ? addon.price : 0);
    }, 0);

    return {
      base: basePrice,
      addons: addonsCost,
      total: basePrice + addonsCost,
      duration: pkgDetails.duration,
    };
  };

  const cost = getPricingSummary();

  const handleNextStep = () => {
    if (step === 1 && !petName) {
      alert("Please enter your pet's name.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyAgreed) {
      alert("Please review and agree to our cancellation policy.");
      return;
    }
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
    }, 2000);
  };

  if (submitStatus === "success") {
    return (
      <div className="max-w-xl mx-auto text-center px-4 py-16 space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary text-brand-cream animate-bounce">
          <Check size={40} className="stroke-[3.5]" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary">
          Request Received Successfully
        </span>

        <h2 className="font-display text-3xl font-extrabold text-brand-dark tracking-tight">
          {petName} is Booked for Pampering!
        </h2>

        <p className="text-sm text-brand-dark-muted leading-relaxed">
          We have reserved a cozy cage-free spot for **{petName}** on **{date}** in the **{timeSlot}** session with **{stylist}**. A concierge team member will text or call you within 2 business hours to confirm your booking and details!
        </p>

        <div className="rounded-2xl border border-brand-primary/10 bg-brand-soft/20 p-6 text-left space-y-3.5 text-xs text-brand-dark/90">
          <div className="flex justify-between">
            <span className="font-bold">Reserved Lounge Session:</span>
            <span>{timeSlot.toUpperCase()} ({date})</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Assigned Stylist:</span>
            <span>{stylist}</span>
          </div>
          <div className="flex justify-between border-t border-brand-primary/10 pt-3">
            <span className="font-bold">Est. Package Subtotal:</span>
            <span className="font-extrabold text-brand-primary text-sm">${cost.total}</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-primary py-3.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover transition-colors"
          >
            Return to Homepage
          </Link>
          <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Award size={10} className="text-brand-secondary" />
            <span>Fear-Free Certified Lounge</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Visual Step Indicator Progress */}
      <div className="flex items-center justify-between max-w-lg mx-auto mb-10 text-xs font-extrabold uppercase tracking-wider">
        {[
          { id: 1, label: "Pet Profile" },
          { id: 2, label: "Spa Service" },
          { id: 3, label: "Schedule" },
          { id: 4, label: "Confirm" },
        ].map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2 relative">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                step === item.id
                  ? "border-brand-primary bg-brand-primary text-brand-cream scale-110 ring-4 ring-brand-soft/30 shadow-md"
                  : step > item.id
                  ? "border-brand-primary bg-brand-soft/40 text-brand-primary"
                  : "border-brand-primary/10 bg-white text-brand-dark/30"
              }`}
            >
              {step > item.id ? <Check size={14} className="stroke-[3]" /> : item.id}
            </div>
            <span
              className={`text-[9px] tracking-wide ${
                step === item.id ? "text-brand-primary" : "text-brand-dark/40"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Wizard Form Side */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-[2rem] p-6 md:p-8 bg-white/70 shadow-lg border-brand-primary/10">
            {/* Step 1: Pet Profile Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-dark mb-1">
                    Tell Us About Your Companion
                  </h3>
                  <p className="text-[11px] text-brand-dark-muted">
                    We customize water levels, towel cushions, and handle dynamics based on these traits.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Pet's Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full rounded-xl border border-brand-primary/10 bg-white/50 px-4 py-3.5 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                      placeholder="e.g., Winston, Cleo, Biscuit"
                    />
                  </div>

                  {/* Species Switch */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Pet Category
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPetType("dog")}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-3 font-bold transition-all ${
                          petType === "dog"
                            ? "border-brand-primary bg-brand-primary text-brand-cream shadow-sm"
                            : "border-brand-primary/5 bg-white/40 text-brand-dark/70 hover:bg-white/80"
                        }`}
                      >
                        <Dog size={16} />
                        <span>Dog Companion</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPetType("cat")}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-3 font-bold transition-all ${
                          petType === "cat"
                            ? "border-brand-primary bg-brand-primary text-brand-cream shadow-sm"
                            : "border-brand-primary/5 bg-white/40 text-brand-dark/70 hover:bg-white/80"
                        }`}
                      >
                        <Cat size={16} />
                        <span>Cat Companion</span>
                      </button>
                    </div>
                  </div>

                  {/* Sizing (Dogs Only) */}
                  {petType === "dog" && (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                        Dog Size Bracket
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {[
                          { id: "small", label: "Small", desc: "< 15 lbs" },
                          { id: "medium", label: "Medium", desc: "15-40 lbs" },
                          { id: "large", label: "Large", desc: "40-80 lbs" },
                          { id: "giant", label: "Giant", desc: "80+ lbs" },
                        ].map((sz) => (
                          <button
                            key={sz.id}
                            type="button"
                            onClick={() => setDogSize(sz.id as typeof dogSize)}
                            className={`flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all ${
                              dogSize === sz.id
                                ? "border-brand-primary bg-brand-primary/5 text-brand-primary font-bold shadow-sm"
                                : "border-brand-primary/5 bg-white/30 text-brand-dark/60 hover:bg-white/80"
                            }`}
                          >
                            <span className="text-xs font-extrabold">{sz.label}</span>
                            <span className="text-[8px] font-medium opacity-80 mt-0.5">{sz.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Age bracket */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Age Bracket
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "puppy", label: "Puppy / Kitten" },
                        { id: "adult", label: "Adult" },
                        { id: "senior", label: "Senior Comfort" },
                      ].map((ag) => (
                        <button
                          key={ag.id}
                          type="button"
                          onClick={() => setPetAge(ag.id)}
                          className={`rounded-xl border py-2.5 text-center text-xs font-bold transition-all ${
                            petAge === ag.id
                              ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                              : "border-brand-primary/5 bg-white/30 text-brand-dark/70 hover:bg-white/80"
                          }`}
                        >
                          {ag.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sensitivities & Behaviors */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Sensitivities & Preferences (Select All That Apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: "water", label: "Dislikes Running Water" },
                        { id: "ears", label: "Very Sensitive Ears" },
                        { id: "nails", label: "Afraid of Nail Grinder" },
                        { id: "strangers", label: "Shy/Nervous with Strangers" },
                        { id: "joints", label: "Joint Pain / Arthritis Support" },
                        { id: "friendly", label: "Extremely Friendly & Playful" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSensitivityToggle(item.id)}
                          className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                            sensitivities.includes(item.id)
                              ? "border-brand-primary bg-brand-primary/5 text-brand-primary font-bold"
                              : "border-brand-primary/5 bg-white/30 text-brand-dark/70 hover:bg-white/80"
                          }`}
                        >
                          <div
                            className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-lg border ${
                              sensitivities.includes(item.id)
                                ? "border-brand-primary bg-brand-primary text-brand-cream"
                                : "border-brand-dark/20"
                            }`}
                          >
                            {sensitivities.includes(item.id) && <Check size={10} className="stroke-[3]" />}
                          </div>
                          <span className="text-xs">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Spa Services Catalog */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-dark mb-1">
                    Select Your Pampering Package
                  </h3>
                  <p className="text-[11px] text-brand-dark-muted">
                    We focus exclusively on your pet for their entire selected duration.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Primary Package Selection */}
                  <div className="space-y-2.5">
                    {packages
                      .filter((p) => (petType === "cat" ? p.name.includes("Cat") || p.name.includes("Royal") : !p.name.includes("Cat")))
                      .map((pkg) => {
                        const price = petType === "dog" ? pkg.dogPrice : pkg.catPrice;
                        const isSelected = selectedPackage === pkg.name;
                        return (
                          <button
                            key={pkg.name}
                            type="button"
                            onClick={() => setSelectedPackage(pkg.name)}
                            className={`flex items-start justify-between w-full rounded-2xl border p-4 text-left transition-all ${
                              isSelected
                                ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                                : "border-brand-primary/5 bg-white/30 text-brand-dark/80 hover:bg-white/80"
                            }`}
                          >
                            <div className="flex gap-3">
                              <div
                                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border mt-0.5 ${
                                  isSelected
                                    ? "border-brand-primary bg-brand-primary text-brand-cream"
                                    : "border-brand-dark/20"
                                }`}
                              >
                                {isSelected && <Check size={10} className="stroke-[3]" />}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-extrabold">{pkg.name}</span>
                                <span className="text-[10px] opacity-75 mt-0.5">Est. Duration: {pkg.duration}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs font-extrabold">Starts At</span>
                              <span className="text-base font-extrabold mt-0.5">${price}</span>
                            </div>
                          </button>
                        );
                      })}
                  </div>

                  {/* Addons Section */}
                  <div className="space-y-3.5 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">
                      A-la-Carte Add-ons (Optional)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {alacarteList.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id);
                        return (
                          <button
                            key={addon.id}
                            type="button"
                            onClick={() => handleAddonToggle(addon.id)}
                            className={`flex items-center justify-between w-full rounded-xl border p-3 text-left transition-all ${
                              isChecked
                                ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                                : "border-brand-primary/5 bg-white/30 text-brand-dark/80 hover:bg-white/80"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                  isChecked
                                    ? "border-brand-primary bg-brand-primary text-brand-cream"
                                    : "border-brand-dark/20"
                                }`}
                              >
                                {isChecked && <Check size={10} className="stroke-[3]" />}
                              </div>
                              <span className="text-xs font-semibold">{addon.name}</span>
                            </div>
                            <span className="text-xs font-extrabold shrink-0">+${addon.price}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferred Schedule */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-dark mb-1">
                    Select Stylist & Schedule
                  </h3>
                  <p className="text-[11px] text-brand-dark-muted">
                    Pick your preferred date, session time, and certified groomer.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Select Stylist */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Select Elite Stylist
                    </label>
                    <select
                      value={stylist}
                      onChange={(e) => setStylist(e.target.value)}
                      className="w-full rounded-xl border border-brand-primary/10 bg-white/50 px-4 py-3.5 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                    >
                      <option value="Any Certified Stylist">Any Certified Stylist (Fastest Booking)</option>
                      <option value="Elena Rostova">Elena Rostova (Master Canine Groomer)</option>
                      <option value="David Miller">David Miller (Feline Specialist)</option>
                      <option value="Aria Thompson">Aria Thompson (Senior & Rescue Expert)</option>
                      <option value="James Cooper">James Cooper (Creative Pattern Stylist)</option>
                    </select>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Preferred Grooming Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-xl border border-brand-primary/10 bg-white/50 px-4 py-3.5 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Time session selection */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                      Preferred Arrival Time Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "morning", label: "Morning Session", desc: "9:00 AM – 12:00 PM" },
                        { id: "afternoon", label: "Midday Session", desc: "12:00 PM – 3:00 PM" },
                        { id: "late-afternoon", label: "Late Session", desc: "3:00 PM – 5:00 PM" },
                      ].map((time) => (
                        <button
                          key={time.id}
                          type="button"
                          onClick={() => setTimeSlot(time.id)}
                          className={`flex flex-col items-center justify-center rounded-xl border p-3 transition-all ${
                            timeSlot === time.id
                              ? "border-brand-primary bg-brand-primary/5 text-brand-primary font-bold shadow-sm"
                              : "border-brand-primary/5 bg-white/30 text-brand-dark/60 hover:bg-white/80"
                          }`}
                        >
                          <span className="text-xs font-extrabold">{time.label}</span>
                          <span className="text-[9px] opacity-75 mt-0.5">{time.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Final Summary Acknowledgment */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-dark mb-1">
                    Review and Confirm Request
                  </h3>
                  <p className="text-[11px] text-brand-dark-muted">
                    Please review your pet's booking details and agree to our booking policies.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Detailed receipt details */}
                  <div className="rounded-2xl border border-brand-primary/10 bg-brand-soft/10 p-5 space-y-4 text-xs">
                    <div className="border-b border-brand-primary/10 pb-3 flex justify-between items-center">
                      <span className="font-bold text-brand-dark">Pet Guest Details:</span>
                      <span className="rounded-full bg-brand-primary text-brand-cream px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                        {petType.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3">
                      <div>
                        <span className="text-brand-dark-muted block">Guest Name:</span>
                        <strong className="text-brand-dark">{petName}</strong>
                      </div>
                      {petType === "dog" && (
                        <div>
                          <span className="text-brand-dark-muted block">Dog Size bracket:</span>
                          <strong className="text-brand-dark">{dogSize.toUpperCase()}</strong>
                        </div>
                      )}
                      <div>
                        <span className="text-brand-dark-muted block">Date Reserved:</span>
                        <strong className="text-brand-dark">{date}</strong>
                      </div>
                      <div>
                        <span className="text-brand-dark-muted block">Arrival Session:</span>
                        <strong className="text-brand-dark">{timeSlot.toUpperCase()}</strong>
                      </div>
                      <div className="col-span-2">
                        <span className="text-brand-dark-muted block">Assigned Stylist:</span>
                        <strong className="text-brand-dark">{stylist}</strong>
                      </div>
                    </div>

                    {sensitivities.length > 0 && (
                      <div className="border-t border-brand-primary/5 pt-3">
                        <span className="text-brand-dark-muted block mb-1.5">Handling Needs Tagged:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {sensitivities.map((s) => (
                            <span key={s} className="rounded-md bg-brand-secondary/15 text-brand-secondary px-2 py-0.5 text-[9px] font-bold uppercase">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Policy Acknowledgment */}
                  <div className="rounded-xl border border-[#D97706]/20 bg-[#FFFBEB] p-4 flex gap-3 text-xs leading-relaxed text-[#D97706] mb-2">
                    <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#92400E]">24-Hour Rescheduling Policy:</span> To ensure each client receives absolute, quiet personal attention, we reserve dedicated hours for {petName}. Cancellations with less than 24 hours notice or no-shows are subject to a $35 fee.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPolicyAgreed(!policyAgreed)}
                    className="flex items-start gap-2.5 text-left text-xs text-brand-dark/85 font-semibold py-1.5 focus:outline-none"
                  >
                    <div
                      className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border mt-0.5 ${
                        policyAgreed
                          ? "border-brand-primary bg-brand-primary text-brand-cream"
                          : "border-brand-dark/20"
                      }`}
                    >
                      {policyAgreed && <Check size={10} className="stroke-[3]" />}
                    </div>
                    <span>
                      I have reviewed the information and agree to the 24-hour cancellation and late-rescheduling policy. *
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Nav Step Controls */}
            <form onSubmit={handleFormSubmit} className="flex items-center justify-between mt-8 pt-6 border-t border-brand-primary/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-primary-hover focus:outline-none"
                >
                  <ChevronLeft size={16} className="stroke-[3.5]" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-1 rounded-full bg-brand-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover focus:outline-none shadow-md shadow-brand-primary/10"
                >
                  <span>Continue</span>
                  <ChevronRight size={16} className="stroke-[3.5]" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitStatus === "submitting" || !policyAgreed}
                  className="flex items-center gap-1 rounded-full bg-brand-secondary px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-secondary-hover disabled:opacity-50 shadow-md shadow-brand-secondary/15"
                >
                  {submitStatus === "submitting" ? (
                    <span>Scheduling Winston...</span>
                  ) : (
                    <>
                      <span>Submit Booking Request</span>
                      <Calendar size={14} />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Pricing Estimator Sticky Receipt Panel */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="rounded-2xl bg-brand-dark text-brand-cream p-6 shadow-inner shadow-black/10 space-y-5">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Itemized Care Invoice
              </span>
              <h4 className="font-display text-lg font-extrabold text-brand-cream mt-1 leading-snug">
                {selectedPackage}
              </h4>
            </div>

            <div className="space-y-3.5 border-t border-brand-cream/10 pt-4 text-xs text-brand-soft/75">
              <div className="flex justify-between">
                <span>Base Package rate:</span>
                <span className="text-brand-cream font-bold">${cost.base}</span>
              </div>

              {petType === "dog" && dogSize !== "small" && dogSize !== "medium" && (
                <div className="flex justify-between text-[10px]">
                  <span>Size surcharge ({dogSize.toUpperCase()} dog):</span>
                  <span className="text-brand-cream font-bold">Included</span>
                </div>
              )}

              {selectedAddons.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-brand-cream/5">
                  <span className="text-[9px] font-bold text-brand-secondary uppercase block tracking-wider">
                    Add-ons Selected:
                  </span>
                  {selectedAddons.map((addId) => {
                    const addon = alacarteList.find((a) => a.id === addId);
                    if (!addon) return null;
                    return (
                      <div key={addId} className="flex justify-between text-[10px] pl-1.5">
                        <span>+ {addon.name}:</span>
                        <span className="text-brand-cream font-bold">${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="border-t border-brand-cream/10 pt-4 flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-brand-soft/60">Estimated starting:</span>
                <span className="text-3xl font-extrabold text-brand-secondary tracking-tight">
                  ${cost.total}
                </span>
              </div>
              <span className="text-[9px] text-brand-soft/45 leading-relaxed mt-1 block">
                *Session duration estimated at **{cost.duration}** with absolute certified fear-free grooming care. Tax and gratuity not included.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingWizard() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-brand-dark/50">Loading booking portal...</div>}>
      <BookingWizardContent />
    </Suspense>
  );
}
