import React from "react";
import Link from "next/link";
import { Award, Heart, ShieldCheck, Sparkles, Star, Calendar } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Elena Rostova",
      role: "Master Stylist & Co-Founder",
      specialty: "Scissor-Sculpted Breeds & Teddy-Bear Cuts",
      experience: "12 Years",
      credentials: ["NCMG Master Stylist", "Fear-Free Elite Certified", "Pet First Aid & CPR Trainer"],
      quote: "I don't just groom pets; I earn their trust. The most gorgeous, plush cut is one that begins with a happy, relaxed tail wag.",
      bgClass: "bg-brand-primary/5",
    },
    {
      name: "David Miller",
      role: "Feline Whispering Specialist",
      specialty: "Comprehensive Feline Grooms & De-matting",
      experience: "8 Years",
      credentials: ["CFMG Feline Master", "Fear-Free Feline Certified", "Cat Behavior Science Diploma"],
      quote: "Cats have high sensory radar. Meticulously respecting feline body language is the secret to grooming them with absolute comfort.",
      bgClass: "bg-brand-secondary/5",
    },
    {
      name: "Aria Thompson",
      role: "Senior & Rescue Care Advocate",
      specialty: "Geriatric Comfort & Highly Anxious Rescues",
      experience: "6 Years",
      credentials: ["IAAM Animal Massage", "Fear-Free Professional", "Pet Cognitive Health Specialist"],
      quote: "Rescues and elderly pets have unique stories. By pacing grooms slowly with thermal blankets and positive reinforcement, we make them feel safe.",
      bgClass: "bg-brand-primary/5",
    },
    {
      name: "James Cooper",
      role: "Creative Styling Specialist",
      specialty: "Pomeranian Shaping & Asian Fusion Cuts",
      experience: "5 Years",
      credentials: ["ISCC Canine Cosmetologist", "Fear-Free Certified Professional", "Creative Fur Design Cert."],
      quote: "Bringing out each companion's vibrant personality through hand-guided custom shaping is pure art. Giving them a confident bounce is my goal.",
      bgClass: "bg-brand-secondary/5",
    },
  ];

  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-primary">
          <Sparkles size={12} />
          <span>Fear-Free Professionals</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Meet Our Elite <br />
          <span className="text-brand-primary">Certified Care</span> Specialists
        </h1>
        <p className="text-sm text-brand-dark-muted max-w-xl mx-auto">
          Every member of our team is fully certified in veterinary-approved fear-free handling protocols. We treat your beloved pets like the sensitive, intelligent family members they are.
        </p>
      </section>

      {/* Staff Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="glass-card rounded-[2.5rem] p-8 bg-white/60 hover:bg-white/90 transition-all duration-300 border-brand-primary/10 flex flex-col justify-between"
          >
            <div>
              {/* Header Title Info */}
              <div className="flex flex-col mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                  {member.role}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-brand-dark mt-1">
                  {member.name}
                </h3>
                <div className="flex gap-4 items-center text-xs font-semibold text-brand-dark-muted mt-2">
                  <span>Specialty: <strong className="text-brand-dark">{member.specialty}</strong></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/20" />
                  <span>Exp: <strong className="text-brand-dark">{member.experience}</strong></span>
                </div>
              </div>

              {/* Quote Block */}
              <blockquote className="border-l-2 border-brand-secondary pl-4 italic text-xs md:text-sm text-brand-dark/85 leading-relaxed mb-6">
                "{member.quote}"
              </blockquote>

              {/* Credentials Badges */}
              <div className="space-y-2 mb-8">
                <p className="text-[9px] font-black uppercase tracking-wider text-brand-primary">
                  Board Certifications:
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="rounded-full bg-brand-soft/30 border border-brand-primary/5 px-3 py-1 text-[10px] font-bold text-brand-primary flex items-center gap-1.5"
                    >
                      <Award size={10} className="text-brand-secondary" />
                      <span>{cred}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile CTAs */}
            <div className="pt-6 border-t border-brand-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-brand-dark/60 font-semibold">
                <ShieldCheck size={14} className="text-[#10B981]" />
                <span>100% Fear-Free Accredited</span>
              </div>
              <Link
                href={{
                  pathname: "/book",
                  query: { groomer: member.name },
                }}
                className="rounded-md bg-brand-primary px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-cream hover:bg-brand-primary-hover hover:scale-[1.03] hover:-rotate-1 transition-all"
              >
                Request {member.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Trust credentials banner */}
      <section className="glass-card rounded-[2rem] p-8 bg-brand-dark text-brand-cream text-center space-y-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 h-64 w-64 rounded-full bg-brand-primary/10 blur-2xl pointer-events-none" />
        <h3 className="font-display text-xl font-extrabold text-brand-secondary">
          Our Team Standards & Credentials
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-2 text-xs text-brand-soft/80">
          <div className="flex flex-col items-center p-4 bg-brand-dark-muted/20 rounded-xl border border-brand-cream/5">
            <ShieldCheck size={24} className="text-brand-secondary mb-2" />
            <span className="font-extrabold text-brand-cream mb-1">CPR & First-Aid Certified</span>
            <span className="text-[10px] text-brand-soft/50 leading-relaxed">
              Every staff member undergoes mandatory annual pet first aid and CPR rescue certifications.
            </span>
          </div>
          <div className="flex flex-col items-center p-4 bg-brand-dark-muted/20 rounded-xl border border-brand-cream/5">
            <Heart size={24} className="text-brand-secondary mb-2" />
            <span className="font-extrabold text-brand-cream mb-1">Behavior-First Handling</span>
            <span className="text-[10px] text-brand-soft/50 leading-relaxed">
              We leverage positive reinforcement like organic rewards, cozy blankets, and warm air currents.
            </span>
          </div>
          <div className="flex flex-col items-center p-4 bg-brand-dark-muted/20 rounded-xl border border-brand-cream/5">
            <Award size={24} className="text-brand-secondary mb-2" />
            <span className="font-extrabold text-brand-cream mb-1">Continual Education</span>
            <span className="text-[10px] text-brand-soft/50 leading-relaxed">
              Our stylists attend annual masterclasses on feline behavior, scissor aesthetics, and coat science.
            </span>
          </div>
        </div>
      </section>

      {/* Book Bottom CTA */}
      <section className="text-center">
        <Link
          href="/book"
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-secondary-hover hover:scale-[1.02] hover:-rotate-1 shadow-lg shadow-brand-secondary/10 transition-all"
        >
          <Calendar size={14} />
          <span>Match Me With a Specialist</span>
        </Link>
      </section>
    </div>
  );
}
