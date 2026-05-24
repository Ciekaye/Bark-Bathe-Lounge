import Image from "next/image";
import Link from "next/link";
import { Scissors, ShieldCheck, Sparkles, Heart, Star, ChevronRight, Award, Compass, Phone } from "lucide-react";
import BreedSelector from "@/components/ui/BreedSelector";
import Accordion from "@/components/ui/Accordion";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden w-full bg-white pt-8 md:pt-16 pb-6">
        {/* Floating and Repeating Background Paw Pattern */}
        {/* Floating and Repeating Background Paw Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] select-none pointer-events-none -z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
                <g fill="#2D5A47">
                  <path d="M 5.5 9.7 A 1.8 1.8 0 1 0 5.5 13.3 A 1.8 1.8 0 1 0 5.5 9.7 Z M 9.5 6.2 A 1.8 1.8 0 1 0 9.5 9.8 A 1.8 1.8 0 1 0 9.5 6.2 Z M 14.5 6.2 A 1.8 1.8 0 1 0 14.5 9.8 A 1.8 1.8 0 1 0 14.5 6.2 Z M 18.5 9.7 A 1.8 1.8 0 1 0 18.5 13.3 A 1.8 1.8 0 1 0 18.5 9.7 Z M 12 12 C 9 12 6.5 14 6.5 17.5 C 6.5 20 8.5 21 10.5 21 C 11.5 21 12 20.5 12 20.5 C 12 20.5 12.5 21 13.5 21 C 15.5 21 17.5 20 17.5 17.5 C 17.5 14 15 12 12 12 Z" transform="translate(10,10) scale(1.6)"/>
                  <path d="M 5.5 9.7 A 1.8 1.8 0 1 0 5.5 13.3 A 1.8 1.8 0 1 0 5.5 9.7 Z M 9.5 6.2 A 1.8 1.8 0 1 0 9.5 9.8 A 1.8 1.8 0 1 0 9.5 6.2 Z M 14.5 6.2 A 1.8 1.8 0 1 0 14.5 9.8 A 1.8 1.8 0 1 0 14.5 6.2 Z M 18.5 9.7 A 1.8 1.8 0 1 0 18.5 13.3 A 1.8 1.8 0 1 0 18.5 9.7 Z M 12 12 C 9 12 6.5 14 6.5 17.5 C 6.5 20 8.5 21 10.5 21 C 11.5 21 12 20.5 12 20.5 C 12 20.5 12.5 21 13.5 21 C 15.5 21 17.5 20 17.5 17.5 C 17.5 14 15 12 12 12 Z" transform="translate(50,50) scale(1.2) rotate(25, 12, 12)"/>
                </g>
              </svg>
            `)}")`,
            backgroundSize: '160px 160px'
          }}
        />

        {/* Hero Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          {/* Large accent floating paw prints */}
          <div className="absolute top-12 left-8 text-brand-primary/[0.04] select-none pointer-events-none -z-20 animate-pulse duration-[5000ms]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 rotate-12">
              <path d="M 5.5 9.7 A 1.8 1.8 0 1 0 5.5 13.3 A 1.8 1.8 0 1 0 5.5 9.7 Z M 9.5 6.2 A 1.8 1.8 0 1 0 9.5 9.8 A 1.8 1.8 0 1 0 9.5 6.2 Z M 14.5 6.2 A 1.8 1.8 0 1 0 14.5 9.8 A 1.8 1.8 0 1 0 14.5 6.2 Z M 18.5 9.7 A 1.8 1.8 0 1 0 18.5 13.3 A 1.8 1.8 0 1 0 18.5 9.7 Z M 12 12 C 9 12 6.5 14 6.5 17.5 C 6.5 20 8.5 21 10.5 21 C 11.5 21 12 20.5 12 20.5 C 12 20.5 12.5 21 13.5 21 C 15.5 21 17.5 20 17.5 17.5 C 17.5 14 15 12 12 12 Z" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-1/3 text-brand-primary/[0.03] select-none pointer-events-none -z-20 rotate-45 animate-pulse duration-[8000ms]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path d="M 5.5 9.7 A 1.8 1.8 0 1 0 5.5 13.3 A 1.8 1.8 0 1 0 5.5 9.7 Z M 9.5 6.2 A 1.8 1.8 0 1 0 9.5 9.8 A 1.8 1.8 0 1 0 9.5 6.2 Z M 14.5 6.2 A 1.8 1.8 0 1 0 14.5 9.8 A 1.8 1.8 0 1 0 14.5 6.2 Z M 18.5 9.7 A 1.8 1.8 0 1 0 18.5 13.3 A 1.8 1.8 0 1 0 18.5 9.7 Z M 12 12 C 9 12 6.5 14 6.5 17.5 C 6.5 20 8.5 21 10.5 21 C 11.5 21 12 20.5 12 20.5 C 12 20.5 12.5 21 13.5 21 C 15.5 21 17.5 20 17.5 17.5 C 17.5 14 15 12 12 12 Z" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Heading */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-brand-dark leading-[1.04] tracking-tight">
                Get Your Furry Family <br className="hidden sm:inline" />
                Member <span className="text-brand-primary font-bold">Groomed Today</span>
              </h1>

            <p className="text-sm md:text-base text-brand-dark-muted leading-relaxed max-w-xl">
              Experience the ultimate cage-free sanctuary for your pet. At Bark & Bathe Lounge, we replace stress and anxiety with calming lavender aromatherapy, whisper-quiet machinery, and 100% organic botanical spa treatments.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-10 py-4.5 text-sm font-extrabold uppercase tracking-widest text-brand-cream hover:bg-brand-primary-hover hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/15 transition-all duration-300 cursor-pointer"
              >
                <span>Book Now</span>
              </Link>
              <Link
                href="tel:+123456789"
                className="flex items-center justify-center gap-3 rounded-full bg-transparent border border-brand-primary/10 px-8 py-4.5 text-sm font-extrabold uppercase tracking-widest text-brand-primary hover:bg-brand-soft/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Phone size={16} className="text-brand-primary shrink-0" />
                <span>Schedule a call</span>
              </Link>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-primary/10 max-w-lg">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-brand-primary">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark-muted mt-1">
                  Cage-Free Comfort
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-brand-primary">4.9★</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark-muted mt-1">
                  Client Rating
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-brand-primary">Elite</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark-muted mt-1">
                  Fear-Free Certified
                </span>
              </div>
            </div>
          </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
              {/* Soft modern glowing background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-soft/30 rounded-full blur-3xl -z-10" />
              
              {/* Floating background decorative paw print */}
              <div className="absolute top-10 right-10 text-brand-primary/20 opacity-60 select-none pointer-events-none animate-bounce duration-[4000ms]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M 5.5 9.7 A 1.8 1.8 0 1 0 5.5 13.3 A 1.8 1.8 0 1 0 5.5 9.7 Z M 9.5 6.2 A 1.8 1.8 0 1 0 9.5 9.8 A 1.8 1.8 0 1 0 9.5 6.2 Z M 14.5 6.2 A 1.8 1.8 0 1 0 14.5 9.8 A 1.8 1.8 0 1 0 14.5 6.2 Z M 18.5 9.7 A 1.8 1.8 0 1 0 18.5 13.3 A 1.8 1.8 0 1 0 18.5 9.7 Z M 12 12 C 9 12 6.5 14 6.5 17.5 C 6.5 20 8.5 21 10.5 21 C 11.5 21 12 20.5 12 20.5 C 12 20.5 12.5 21 13.5 21 C 15.5 21 17.5 20 17.5 17.5 C 17.5 14 15 12 12 12 Z" />
                </svg>
              </div>

              {/* Hero image container */}
              <div className="relative w-full aspect-square md:max-w-md lg:max-w-none transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/hero_dog_sunglasses_left.png"
                  alt="Beautifully groomed happy golden retriever wearing yellow sunglasses at Bark & Bathe Lounge"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy (Why Bark & Bathe) */}
      <section className="bg-[#EBF4F0] py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
              Our Core Standards
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              No Cages. No Stress. <br />
              Pure Pamper! 🛁
            </h2>
            <p className="text-xs md:text-sm text-brand-dark-muted">
              We threw out the stressful blueprints of traditional salons. Here is how we cultivate a safe, luxurious, and stress-free pampering cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-brand-primary" size={24} />,
                title: "Fear-Free Styling",
                desc: "Certified groomers trained to read subtle canine and feline anxiety. We pace grooms around their comfort, incorporating treats and breaks.",
              },
              {
                icon: <Heart className="text-brand-primary" size={24} />,
                title: "100% Cage-Free",
                desc: "No cold metal cages or stressful hold environments. Pets relax in customized glass-walled open lounges or supervised playpens.",
              },
              {
                icon: <Award className="text-brand-primary" size={24} />,
                title: "Sensory Serene Space",
                desc: "A warm, home-like interior with calming lavender aromatherapy diffusers, quiet clippers, and relaxing background music.",
              },
              {
                icon: <Compass className="text-brand-primary" size={24} />,
                title: "Organic Botanicals",
                desc: "We exclusively utilize 100% chemical-free, natural, and biodegradable shampoos. Specially formulated for sensitive pet coats and skin.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary/20 bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft mb-5">
                  {card.icon}
                </div>
                <h3 className="font-display text-base font-extrabold text-brand-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-xs text-brand-dark-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Pricing Estimator (Breed Selector) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24" id="estimator">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary">
            Transparent Starting Rates
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Select Your Pet’s Profile
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-muted">
            Customize parameters like pet species, size, and coat condition to see instant recommendations, service details, and estimates.
          </p>
        </div>
        <BreedSelector />
      </section>

      {/* 4. Showcase Salon Space */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="absolute inset-0 rounded-[2.5rem] bg-brand-primary/5 rotate-2 scale-[1.01] -z-10" />
            <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-brand-primary/10 aspect-[4/3] relative">
              <Image
                src="/images/spa_salon.png"
                alt="Inside the soothing cage-free Bark & Bathe Lounge"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
              Take a Peek Inside
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
              An Architectural Haven Designed for Pets
            </h2>
            <p className="text-xs md:text-sm text-brand-dark-muted leading-relaxed">
              Every square inch of our lounge is built with veterinary behavior psychology in mind. Natural sunlight streams through wide glass bay windows, while specialized wood acoustics insulate our bathing station from noisy vibrations.
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "Feline Sanctuary Zone", desc: "A cozy feline-only suite where cats relax inside private climbing trees with pheromone air misting." },
                { title: "Hydration & Play Hub", desc: "Supervised indoor turf pens with warm floor heaters and fresh continuous-stream water fountains." },
                { title: "Custom Acoustic Station", desc: "We utilize low-frequency, whisper-quiet pet drying equipment to avoid sensory overload." },
              ].map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-cream text-[10px] font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-brand-dark">{point.title}</h4>
                    <p className="text-[11px] text-brand-dark-muted mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Slider */}
      <section className="bg-[#EBF4F0] py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
              Happy Pet Parents
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark">
              Love Letters From Our Family
            </h2>
            <p className="text-xs md:text-sm text-brand-dark-muted">
              Discover why discerning owners in Flourtown trust us for their pet's emotional and aesthetic care.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary">
            Your Questions Answered
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark">
            Curious Minds Ask Us
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-muted">
            Find details regarding handling nervous rescues, our cat-safe protocols, rates, and other common policies.
          </p>
        </div>
        <Accordion />
      </section>

      {/* 7. Bottom Call-To-Action (CTA) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-brand-dark text-brand-cream px-6 py-12 md:p-16 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 h-96 w-96 rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none" />

          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-brand-cream mb-2">
            <Scissors size={20} className="stroke-[2]" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto text-brand-cream">
            Ready to Give Your Companion <br />
            the <span className="text-brand-secondary">Royal Spa Treatment</span>?
          </h2>

          <p className="text-xs md:text-sm text-brand-soft/75 max-w-xl mx-auto leading-relaxed">
            Reserve your pet's cage-free sanctuary groom in less than 3 minutes. Give them the soothing experience they deserve.
          </p>

          <div className="pt-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-md bg-brand-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-brand-secondary-hover hover:scale-[1.02] hover:-rotate-1 shadow-lg shadow-brand-secondary/10"
            >
              <span>Request Appointment Now</span>
              <ChevronRight size={14} className="stroke-[3]" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 text-[10px] font-bold uppercase tracking-wider text-brand-soft/50 border-t border-brand-cream/10 max-w-md mx-auto">
            <span>✓ Certified Fear-Free</span>
            <span>✓ 100% Cage-Free</span>
            <span>✓ Organic Products</span>
          </div>
        </div>
      </section>
    </div>
  );
}
