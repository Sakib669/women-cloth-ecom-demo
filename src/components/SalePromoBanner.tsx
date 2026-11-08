"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function SalePromoBanner() {
  const { applyCoupon, setIsCartOpen } = useStore();

  const handleClaimOffer = () => {
    applyCoupon("SUMMER50");
    setIsCartOpen(true);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F2ECE9]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            
            {/* Left: Deep Velvet Berry Promotional Box */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#86194A] to-[#600C33] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 text-pink-100">
                <Tag className="w-3.5 h-3.5" />
                <span>Limited Seasonal Clearance</span>
              </div>

              <span className="text-xl sm:text-2xl font-light tracking-wide text-pink-200">
                Up To
              </span>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 leading-none">
                50% OFF
              </h2>

              <p className="text-sm sm:text-base text-pink-100/90 mb-8 font-medium">
                On Selected Runway &amp; Everyday Outfits. Code: <strong className="underline underline-offset-4 decoration-pink-300">SUMMER50</strong>
              </p>

              <button
                onClick={handleClaimOffer}
                className="group inline-flex items-center gap-3 bg-white text-[#86194A] hover:bg-pink-50 font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <span>Shop Sale</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right: Wardrobe Rack Lifestyle Visual */}
            <div className="md:col-span-7 relative min-h-[300px] md:min-h-[420px] w-full bg-[#FAF5F3]">
              <Image
                src={HERO_ASSETS.clothingRack}
                alt="Rack of pastel dresses, hats, and linen fashion items in warm sunlight"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#86194A]/20 via-transparent to-transparent hidden md:block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
