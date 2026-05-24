"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Award, ShieldCheck, Check, Send } from "lucide-react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "canine-groomer",
    experience: "3-5",
    philosophy: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.philosophy) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "canine-groomer",
        experience: "3-5",
        philosophy: "",
      });
    }, 1500);
  };

  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/45 border border-brand-primary/10 px-4 py-1.5">
          <Sparkles size={12} className="text-brand-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
            Join Our Sanctuary
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Craft an Elite Career <br />
          <span className="text-brand-primary">In Loving Pet Care</span>
        </h1>
        <p className="text-sm text-brand-dark-muted max-w-xl mx-auto">
          Tired of chaotic, high-pressure grooming factories? At Bark & Bathe Lounge, we value your mental well-being and professional mastery just as highly as our pet guests.
        </p>
      </section>

      {/* Benefits cards grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Award className="text-brand-primary" size={24} />,
            title: "Premium Earnings",
            desc: "Highly competitive base hourly pay plus 100% of your generous customer tips. Paid weekly with full healthcare packages.",
          },
          {
            icon: <Heart className="text-brand-primary" size={24} />,
            title: "Sane Pacing Only",
            desc: "We schedule adequate breathing room between grooms. No rushing, no toxic pressure, and no speed quotas. Focus on quality care.",
          },
          {
            icon: <ShieldCheck className="text-brand-primary" size={24} />,
            title: "Paid Certifications",
            desc: "We fully sponsor Master Groomer courses, feline behavior diplomas, and Fear-Free certifications to help you level up.",
          },
          {
            icon: <Sparkles className="text-brand-primary" size={24} />,
            title: "Luxury Facilities",
            desc: "Work with top-tier quiet blowers, custom oak wooden dividers, top-of-the-line hydraulic bathing tubs, and premium styling tools.",
          },
        ].map((benefit, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 bg-white/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft/30 mb-5">
              {benefit.icon}
            </div>
            <h3 className="font-display text-base font-extrabold text-brand-dark mb-3">
              {benefit.title}
            </h3>
            <p className="text-xs text-brand-dark-muted leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Split section: Requirements & Application Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Culture & Requirements */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
            Our Culture
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand-dark">
            Who We Align With
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-muted leading-relaxed">
            We are a tight-knit family of certified pet artists who view styling as both a fine art and a profound responsibility. We are looking for individuals who share our dedication to fear-free philosophies.
          </p>

          <div className="space-y-4 pt-2">
            {[
              "Certified Fear-Free handler (or willing to obtain with our full funding)",
              "Minimum 1 year of professional styling experience in a structured salon",
              "Profound animal behavior recognition skills and soft-touch patience",
              "Punctual, team-focused, and highly communicative with pet parents",
              "Passionate about keeping a clean, tidy, and aromatic workspace",
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-brand-dark-muted leading-relaxed">
                <Check size={14} className="text-brand-secondary shrink-0 mt-0.5 stroke-[3]" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-[2rem] p-6 md:p-8 bg-white/70 shadow-lg border-brand-primary/10">
            <h3 className="font-display text-xl font-extrabold text-brand-dark mb-6">
              Begin Your Elite Career Here
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-brand-primary/10 bg-white/50 px-4 py-3 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-brand-primary/10 bg-white/50 px-4 py-3 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-md border border-brand-primary/10 bg-white/50 px-4 py-3 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                    Position Applied For
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full rounded-md border border-brand-primary/10 bg-white/50 px-4 py-3 text-xs text-brand-dark focus:border-brand-primary focus:outline-none"
                  >
                    <option value="canine-groomer">Master Canine Stylist</option>
                    <option value="feline-groomer">Feline Styling Specialist</option>
                    <option value="spa-assistant">Bathing & Spa Assistant</option>
                    <option value="concierge">Lounge Reception Concierge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                  Years of Styling Experience
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "under-1", label: "Under 1 Yr" },
                    { id: "1-3", label: "1 - 3 Yrs" },
                    { id: "3-5", label: "3 - 5 Yrs" },
                    { id: "5-plus", label: "5+ Yrs" },
                  ].map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: exp.id })}
                      className={`rounded-lg border p-2 text-center text-xs font-bold transition-all ${
                        formData.experience === exp.id
                          ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                          : "border-brand-primary/5 bg-white/30 text-brand-dark/70 hover:bg-white/90"
                      }`}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark/60 mb-2">
                  Describe Your Pet Handling & Styling Philosophy *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.philosophy}
                  onChange={(e) => setFormData({ ...formData, philosophy: e.target.value })}
                  className="w-full rounded-md border border-brand-primary/10 bg-white/50 px-4 py-3 text-xs text-brand-dark focus:border-brand-primary focus:outline-none placeholder-brand-dark/30"
                  placeholder="How do you handle an anxious dog that is afraid of running water or nail clippers? Tell us your soothing approach."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-brand-primary py-3.5 text-xs font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover hover:scale-[1.01] hover:-rotate-0.5 transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Submitting Application...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} className="stroke-[3]" />
                      <span>Application Sent Successfully!</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="text-center text-xs font-semibold text-[#EF4444] animate-pulse">
                  Please complete all required fields (*) before submitting.
                </p>
              )}
              {status === "success" && (
                <p className="text-center text-xs font-bold text-[#10B981] animate-bounce">
                  We have received your application and will email you back within 48 hours!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
