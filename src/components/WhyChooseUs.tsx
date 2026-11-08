"use client";

import React from "react";
import { Sparkles, Truck, RefreshCw, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const perks = [
    {
      title: "Premium Quality",
      desc: "Stylish & durable products crafted with organic fibers",
      icon: Sparkles,
      bg: "bg-[#FCE7F3]",
      color: "text-[#86194A]",
    },
    {
      title: "Fast Delivery",
      desc: "Get your order quickly with express tracked shipping",
      icon: Truck,
      bg: "bg-[#F3E8FF]",
      color: "text-[#86194A]",
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free 30-day returns and exchanges",
      icon: RefreshCw,
      bg: "bg-[#FEF3C7]",
      color: "text-[#86194A]",
    },
    {
      title: "24/7 Support",
      desc: "We're here for you with dedicated fashion stylist assistance",
      icon: Headphones,
      bg: "bg-[#E0F2FE]",
      color: "text-[#86194A]",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 bg-white overflow-hidden border-y border-[#F2ECE9]">
      
      {/* Decorative Botanical Corner SVG Motifs */}
      <div className="absolute top-4 left-4 sm:left-10 text-[#86194A]/10 pointer-events-none hidden sm:block">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 90 Q 50 50, 90 10" />
          <path d="M50 50 Q 30 20, 60 15" />
          <path d="M50 50 Q 70 70, 75 35" />
          <path d="M30 65 Q 15 50, 35 40" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 sm:right-10 text-[#86194A]/10 pointer-events-none hidden sm:block">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M90 10 Q 50 50, 10 90" />
          <path d="M50 50 Q 70 80, 40 85" />
          <path d="M50 50 Q 30 30, 25 65" />
          <path d="M70 35 Q 85 50, 65 60" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#86194A]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#86194A]"></span>
            <span className="w-8 h-px bg-[#86194A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-2">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Because you deserve the best in modern fashion
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-[#FAF8F5] group"
              >
                <div
                  className={`w-16 h-16 rounded-full ${perk.bg} ${perk.color} flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed max-w-xs">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
