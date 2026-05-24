"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  pet: string;
  breed: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Eleanor Vance",
      pet: "Winston",
      breed: "Golden Retriever",
      quote: "Winston used to tremble the moment we parked near his old groomer. Since switching to Bark & Bathe Lounge, he literally trots in with his tail wagging! The cage-free setup makes an incredible difference. He is so relaxed, smells amazing, and his double-coat looks absolutely perfect.",
      rating: 5,
    },
    {
      name: "Marcus Brody",
      pet: "Cleo",
      breed: "Ragdoll Cat",
      quote: "Cleo is extremely sensitive and typical cat groomers stress her out for days. Finding a groomer that does dedicated cat sessions with fear-free certified professionals was a lifesaver. Her bath and sanitary groom were flawless, and she was calm when I picked her up. Outstanding service!",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      pet: "Milo",
      breed: "Goldendoodle",
      quote: "Finding a doodle stylist who actually knows how to do a proper scissor teddy-bear cut without shaving them is rare. They listened carefully to my requests, handled Milo's sensitive paws with extreme patience, and gave him the most beautiful, plush cut he's ever had. We are clients for life!",
      rating: 5,
    },
    {
      name: "Devon Miller",
      pet: "Biscuit",
      breed: "Rescue Senior Beagle",
      quote: "Biscuit is 14, mostly blind, and has arthritis. The staff was incredibly gentle with him, taking slow breaks and giving him extra supportive cushions during his deluxe bath. Seeing him treated with such respect and tender care warms my heart. Thank you for being so thoughtful.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="relative glass-card rounded-3xl p-8 md:p-12 shadow-xl border-brand-primary/10 bg-white/70 max-w-4xl mx-auto">
      {/* Quote Icon Background decoration */}
      <div className="absolute right-8 top-8 text-brand-soft/20 pointer-events-none">
        <Quote size={120} className="stroke-[1.5]" />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6 text-brand-secondary">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} size={20} className="fill-brand-secondary stroke-[1.5]" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="font-display text-base md:text-xl font-medium italic text-brand-dark leading-relaxed max-w-2xl mb-8">
          "{current.quote}"
        </p>

        {/* Pet Name Badge */}
        <div className="flex flex-col items-center">
          <h4 className="font-display text-sm md:text-base font-extrabold text-brand-dark">
            {current.name}
          </h4>
          <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
            Parent of {current.pet} <span className="text-brand-secondary">({current.breed})</span>
          </p>
        </div>
      </div>

      {/* Nav Controls */}
      <div className="flex items-center justify-between mt-10">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-350 ${
                index === idx ? "w-6 bg-brand-primary" : "w-2.5 bg-brand-soft/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft/20 text-brand-primary border border-brand-primary/10 transition-colors hover:bg-brand-primary hover:text-brand-cream"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft/20 text-brand-primary border border-brand-primary/10 transition-colors hover:bg-brand-primary hover:text-brand-cream"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
