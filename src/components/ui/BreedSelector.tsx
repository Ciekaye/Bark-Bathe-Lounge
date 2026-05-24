"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Dog, Cat, Check } from "lucide-react";
import Link from "next/link";

type PetType = "dog" | "cat";
type DogSize = "small" | "medium" | "large" | "giant";
type CoatCondition = "normal" | "dense" | "knotty";

export default function BreedSelector() {
  const [petType, setPetType] = useState<PetType>("dog");
  const [dogSize, setDogSize] = useState<DogSize>("medium");
  const [coat, setCoat] = useState<CoatCondition>("normal");

  // Dynamic Calculation Logic
  const getEstimation = () => {
    let basePrice = 65;
    let duration = "2.5 - 3 hours";
    let pkg = "The Bath & Pamper Deluxe";
    let details = [
      "Signature double-bath with organic shampoos",
      "Blowout & meticulous brush out",
      "Nail clipping & edge filing",
      "Gentle ear cleaning",
      "Luxury cologne spritz & treat",
    ];

    if (petType === "cat") {
      basePrice = 90;
      duration = "2 - 2.5 hours";
      pkg = "The Cozy Cat Groom";
      details = [
        "Dry or wet bath using feline-safe products",
        "Blow-dry & complete combing",
        "Nail trim & sanitary trim",
        "Gentle eye & ear refresh",
        "Calming pheromone spray treatment",
      ];
      if (coat === "dense" || coat === "knotty") {
        basePrice += 20;
        duration = "2.5 - 3 hours";
      }
    } else {
      // Dog Sizes
      switch (dogSize) {
        case "small":
          basePrice = 65;
          duration = "2.5 hours";
          break;
        case "medium":
          basePrice = 85;
          duration = "2.5 - 3 hours";
          break;
        case "large":
          basePrice = 115;
          duration = "3 - 3.5 hours";
          break;
        case "giant":
          basePrice = 145;
          duration = "3.5 - 4 hours";
          break;
      }

      // Coat adjustments
      if (coat === "dense") {
        basePrice += 15;
        duration = duration.replace(/(\d+(\.\d+)?)/g, (m) => (parseFloat(m) + 0.5).toString());
      } else if (coat === "knotty") {
        basePrice += 30;
        duration = duration.replace(/(\d+(\.\d+)?)/g, (m) => (parseFloat(m) + 1.0).toString());
        pkg = "The Royal Treatment (Matted/Knotty Saver)";
        details.push("Custom deep-conditioning treatment");
        details.push("Painless, slow dematting detangle");
      }
    }

    return { basePrice, duration, pkg, details };
  };

  const est = getEstimation();

  return (
    <div className="glass-card rounded-3xl p-6 md:p-10 shadow-xl border-brand-primary/10 bg-white">
      <div className="flex items-center gap-2 mb-6">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
          <Sparkles size={12} className="stroke-[2.5]" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
          Instant Spa Estimator
        </span>
      </div>

      <h3 className="font-display text-2xl font-extrabold text-brand-dark mb-6">
        Let's size up your fur-baby! 🐾
      </h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input Configuration Column */}
        <div className="space-y-6">
          {/* Step 1: Pet Type Selection */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-dark/50 mb-3">
              1. Who is our lovely guest today?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPetType("dog")}
                className={`flex items-center justify-center gap-2.5 rounded-md border py-3.5 font-bold transition-all cursor-pointer ${
                  petType === "dog"
                    ? "border-brand-primary bg-brand-primary text-brand-cream shadow-md shadow-brand-primary/15"
                    : "border-brand-dark/10 bg-white text-brand-dark/75 hover:bg-brand-cream"
                }`}
              >
                <Dog size={18} />
                <span>A happy Doggo 🐶</span>
              </button>
              <button
                type="button"
                onClick={() => setPetType("cat")}
                className={`flex items-center justify-center gap-2.5 rounded-md border py-3.5 font-bold transition-all cursor-pointer ${
                  petType === "cat"
                    ? "border-brand-primary bg-brand-primary text-brand-cream shadow-md shadow-brand-primary/15"
                    : "border-brand-dark/10 bg-white text-brand-dark/75 hover:bg-brand-cream"
                }`}
              >
                <Cat size={18} />
                <span>A regal Kitty 🐱</span>
              </button>
            </div>
          </div>

          {/* Step 2: Dog Size (Conditional) */}
          {petType === "dog" && (
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-dark/50 mb-3">
                2. How big is your pup? 🦴
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { id: "small", label: "Small", desc: "< 15 lbs" },
                  { id: "medium", label: "Medium", desc: "15-40 lbs" },
                  { id: "large", label: "Large", desc: "40-80 lbs" },
                  { id: "giant", label: "Giant", desc: "80+ lbs" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDogSize(item.id as DogSize)}
                    className={`flex flex-col items-center justify-center rounded-md border p-3 transition-all cursor-pointer ${
                      dogSize === item.id
                        ? "border-brand-primary bg-brand-primary/10 text-brand-primary font-bold shadow-sm"
                        : "border-brand-dark/5 bg-white text-brand-dark/60 hover:bg-brand-cream"
                    }`}
                  >
                    <span className="text-sm font-extrabold">{item.label}</span>
                    <span className="text-[9px] font-medium tracking-wide mt-0.5 opacity-80">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Coat Condition */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-dark/50 mb-3">
              {petType === "dog" ? "3. How fluffy is their coat right now? ☁️" : "2. How fluffy is their coat right now? ☁️"}
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: "normal", label: "Silky, Normal or Smooth Coat", desc: "Needs standard conditioning and dry" },
                { id: "dense", label: "Dense, Double-Coat or Undercoat", desc: "Needs deshedding brush out & extra blowdry time" },
                { id: "knotty", label: "Tangly, Matted or Knotty Coat", desc: "Needs slow pain-free dematting/shave care" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCoat(item.id as CoatCondition)}
                  className={`flex items-start gap-3 rounded-md border p-3.5 text-left transition-all cursor-pointer ${
                    coat === item.id
                      ? "border-brand-primary bg-brand-primary/10 text-brand-primary font-bold"
                      : "border-brand-dark/5 bg-white text-brand-dark/80 hover:bg-brand-cream"
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border mt-0.5 ${
                      coat === item.id
                        ? "border-brand-primary bg-brand-primary text-brand-cream"
                        : "border-brand-dark/20"
                    }`}
                  >
                    {coat === item.id && <Check size={10} className="stroke-[3]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold">{item.label}</span>
                    <span className="text-[10px] font-medium text-brand-dark/50 mt-0.5">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Estimation Column */}
        <div className="flex flex-col justify-between rounded-2xl bg-brand-dark text-brand-cream p-6 md:p-8 shadow-inner shadow-black/10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Tailored Sanctuary Plan
              </span>
              <span className="rounded-full bg-brand-primary/20 border border-brand-primary/30 px-2.5 py-0.5 text-[9px] font-extrabold text-brand-soft uppercase tracking-wider">
                Cage-Free Care
              </span>
            </div>

            <h4 className="font-display text-xl font-extrabold text-brand-cream leading-tight mb-2">
              {est.pkg}
            </h4>

            <div className="flex items-baseline gap-2 mt-4 pb-6 border-b border-brand-cream/10">
              <span className="text-xs font-semibold text-brand-soft/70">Est. starting at</span>
              <span className="text-4xl font-extrabold tracking-tight text-brand-secondary">
                ${est.basePrice}
              </span>
            </div>

            <div className="py-6 space-y-4 border-b border-brand-cream/10">
              <div className="flex items-center justify-between text-xs text-brand-soft/80">
                <span className="font-semibold">Estimated Care Duration:</span>
                <span className="font-extrabold text-brand-cream">{est.duration}</span>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary mb-1">
                  What's included:
                </p>
                {est.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-soft/75">
                    <Check size={12} className="text-[#34D399] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <Link
              href={{
                pathname: "/book",
                query: {
                  petType,
                  dogSize: petType === "dog" ? dogSize : undefined,
                  coat,
                  package: est.pkg,
                },
              }}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-secondary py-3 text-xs font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-brand-secondary-hover hover:scale-[1.02] hover:-rotate-1"
            >
              <span>Request This Package</span>
              <ArrowRight size={14} />
            </Link>
            <p className="text-[9px] text-center text-brand-soft/45 mt-3 leading-relaxed">
              *Final prices depend on coat state and pet behavior, assessed at drop-off. Cage-free drying and fear-free pacing are guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
