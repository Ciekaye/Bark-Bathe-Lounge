import React from "react";
import Link from "next/link";
import { Scissors, Check, Sparkles, AlertCircle, Calendar, Star } from "lucide-react";

export default function Services() {
  const packages = [
    {
      name: "The Bath & Pamper Deluxe",
      bestFor: "Ideal for regular maintenance, short hair, or smooth coat breeds.",
      dogPrice: "65",
      catPrice: "90",
      inclusions: [
        "Double bath with certified organic shampoos",
        "Gentle, non-heated hand blowout & dry",
        "Meticulous complete brush out",
        "Nail clipping & electronic file edge smoothing",
        "Botanical ear cleansing & hygiene check",
        "Scented grooming spritz & artisan treat",
      ],
      popular: false,
    },
    {
      name: "The Signature Styling & Haircut",
      bestFor: "Perfect for breeds requiring full body scissor shaping or trim style.",
      dogPrice: "85",
      catPrice: "110",
      inclusions: [
        "Everything in the Bath & Pamper Deluxe",
        "Bespoke, breed-specific custom styling",
        "Hand-scissor face tidy-up",
        "Gentle sanitary trim & paw pad shaving",
        "Undercoat thinning & bulk de-bulking",
        "Personalized hair styling consultation",
      ],
      popular: true,
    },
    {
      name: "The Royal Treatment Spa",
      bestFor: "The ultimate skin, coat, and mental rejuvenation for your companion.",
      dogPrice: "125",
      catPrice: "150",
      inclusions: [
        "Everything in the Signature Styling & Haircut",
        "Hot oil deep-conditioning or Deshedding pack",
        "Therapeutic organic paw pad balm massage",
        "Gentle teeth brushing with enzymatic mint foam",
        "Botanical blueberry facial stain treatment",
        "Luxury handcrafted silk bow tie or bandana",
      ],
      popular: false,
    },
    {
      name: "The Cozy Cat Retreat",
      bestFor: "Specialized, fear-free cat groom in a peaceful canine-free suite.",
      dogPrice: null,
      catPrice: "90",
      inclusions: [
        "Feline-safe organic warm bath or dry-foam",
        "Full undercoat brush out & de-matting",
        "Nail trim with gentle feline claw files",
        "Drying session using sound-muffled equipment",
        "Calming catnip play session & recovery break",
        "Sanitary trim & facial tear stain refresh",
      ],
      popular: false,
    },
  ];

  const alacarte = [
    { service: "Nail Trimming & Filing", price: "20", desc: "Claw clipping followed by electronic grinding for soft, smooth edges that won't scratch floors." },
    { service: "Teeth Brushing & Foam", price: "15", desc: "Enzymatic toothpaste scrub paired with a fresh mint breath foam to combat plaque and tartar." },
    { service: "Organic Paw Balm & Massage", price: "12", desc: "Soothing massage of the paw pads utilizing a organic beeswax, shea, and lavender conditioning balm." },
    { service: "Aromatic Mud Bath Pack", price: "22", desc: "Mineral-rich clay pack massaged into the skin to exfoliate, soothe itchy spots, and restore coat shine." },
    { service: "Botanical Deshedding Scrub", price: "25", desc: "Specialized undercoat release shampoo combined with extra high-velocity blower brush outs." },
    { service: "Flea & Tick Rescue Bath", price: "25", desc: "Natural chemical-free cedarwood & lemongrass treatment to instantly exterminate fleas on contact." },
  ];

  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/45 border border-brand-primary/10 px-4 py-1.5">
          <Sparkles size={12} className="text-brand-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
            Luxury Rates & Menu
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Elite Spa Packages <br />
          <span className="text-brand-primary">Tailored</span> to Your Pet
        </h1>
        <p className="text-sm text-brand-dark-muted max-w-xl mx-auto">
          We believe in transparent, stress-free billing. Our pricing reflects our high-touch, cage-free commitment, allowing certified stylists to focus solely on one pet at a time.
        </p>
      </section>

      {/* Spa Packages Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-all relative ${
              pkg.popular
                ? "border-brand-primary bg-white shadow-xl shadow-brand-primary/5"
                : "border-brand-primary/10 bg-white/60 hover:bg-white/90"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-0 right-8 -translate-y-1/2 bg-brand-secondary text-brand-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              <div className="space-y-2 mb-6">
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-brand-dark leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-xs text-brand-dark-muted italic leading-relaxed">
                  {pkg.bestFor}
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-primary/10 mb-6 bg-brand-soft/10 rounded-xl px-4">
                {pkg.dogPrice && (
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider">
                      Dogs Starting At
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-0.5">
                      ${pkg.dogPrice}
                    </span>
                  </div>
                )}
                {pkg.catPrice && (
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-brand-primary uppercase tracking-wider">
                      Cats Starting At
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-0.5">
                      ${pkg.catPrice}
                    </span>
                  </div>
                )}
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">
                  Treatment Inclusions:
                </p>
                {pkg.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-brand-dark/85 leading-relaxed">
                    <Check size={14} className="text-[#10B981] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-primary/10">
              <Link
                href={{
                  pathname: "/book",
                  query: { package: pkg.name },
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02] ${
                  pkg.popular
                    ? "bg-brand-primary text-brand-cream hover:bg-brand-primary-hover shadow-md shadow-brand-primary/10"
                    : "bg-brand-soft/30 text-brand-primary hover:bg-brand-soft/60"
                }`}
              >
                <span>Request This Retreat</span>
                <Scissors size={12} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* A-La-Carte Menu */}
      <section className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-md border-brand-primary/10 bg-white/50">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary">
            Bespoke Enhancements
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
            A-la-Carte Spa Treatments
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-muted">
            Add these dedicated, individual treatments to any primary package above during booking to resolve specific styling, hygiene, or skin problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {alacarte.map((item, idx) => (
            <div key={idx} className="flex gap-4 border-b border-brand-primary/5 pb-6">
              <div className="flex-grow space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-brand-dark">
                    {item.service}
                  </h4>
                  <span className="text-sm font-extrabold text-brand-primary bg-brand-soft/20 px-2.5 py-0.5 rounded-full">
                    ${item.price}
                  </span>
                </div>
                <p className="text-xs text-brand-dark-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Disclaimer Alert */}
      <section className="max-w-4xl mx-auto rounded-2xl bg-brand-soft/10 border border-brand-primary/20 p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <AlertCircle size={24} className="text-brand-primary shrink-0 mt-0.5 md:mt-0" />
        <div className="text-xs leading-relaxed text-brand-dark-muted">
          <span className="font-bold text-brand-dark">Please Note:</span> Pricing estimates above serve as starting bases. Final quotes are evaluated in-person at drop-off by your assigned groomer. Final pricing is influenced by dog weight/breed, matting/tangles, specialized behavior handling needs, and request adjustments.
        </div>
      </section>

      {/* Book Bottom CTA */}
      <section className="text-center py-6">
        <Link
          href="/book"
          className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-secondary-hover hover:scale-[1.02] shadow-lg shadow-brand-secondary/10 transition-all"
        >
          <Calendar size={14} />
          <span>Proceed to Booking Wizard</span>
        </Link>
      </section>
    </div>
  );
}
