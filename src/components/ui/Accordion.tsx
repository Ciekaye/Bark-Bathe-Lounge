"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What does 'Cage-Free' and 'Fear-Free' actually mean?",
      answer: "Cage-free means your beloved pet is never confined in a metal crate before or after their session. Instead, they relax in our cozy open-plan pet lounge or elegant glass-walled partitions under constant staff supervision. We also strictly avoid high-velocity cage dryers, which are a major source of pet anxiety. 'Fear-Free' means all our groomers are certified to recognize subtle signs of stress. If your pet becomes anxious, we pause, offer soothing rewards (like organic peanut butter or catnip), and prioritize their emotional well-being over rushing the haircut.",
    },
    {
      question: "Do you groom cats? Are they kept separate from dogs?",
      answer: "Yes, we absolutely groom cats! Cats have unique sensory needs and are highly sensitive to canine sights and smells. To ensure their absolute comfort, we host dedicated 'Feline Quiet Hours' and groom cats inside our separate feline-only suite equipped with calming pheromone diffusers. Your cat will never hear or smell a dog during their pampering session.",
    },
    {
      question: "How long does a standard grooming session take?",
      answer: "A standard grooming session typically takes between 2.5 to 4 hours. The duration depends on the pet's size, coat thickness, and how relaxed they are. Since we groom at a stress-free pace and incorporate comforting breaks for anxious pets, we never rush. We will send you a text update 15-20 minutes before your pet is ready for pickup.",
    },
    {
      question: "What is your cancellation and no-show policy?",
      answer: "We reserve dedicated, individual time blocks for each pet to guarantee they receive personalized, uninterrupted care. Because of this high-touch model, we require a 24-hour notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice, or no-shows, will incur a $35 fee.",
    },
    {
      question: "Can I bring my own shampoo if my pet has severe skin allergies?",
      answer: "Absolutely! While we utilize a top-tier collection of organic, oatmeal, hypoallergenic, and clinical-grade botanical shampoos, we are always happy to use custom vet-prescribed medicated shampoo that you provide. Just mention it to our concierge team at drop-off.",
    },
  ];

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-brand-primary bg-white shadow-md shadow-brand-primary/5"
                : "border-brand-primary/10 bg-white/50 hover:bg-white/90"
            }`}
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm md:text-base font-extrabold text-brand-dark">
                {faq.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft/20 text-brand-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-brand-primary text-brand-cream" : ""
                }`}
              >
                <ChevronDown size={14} className="stroke-[2.5]" />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-dark-muted leading-relaxed border-t border-brand-dark/5 mt-1">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
