"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function NewSeasonBanner() {
  const { setFilterCategory } = useStore();

  const handleExplore = () => {
    setFilterCategory("all");
    const el = document.getElementById("featured");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="new-season" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#4A0B27] via-[#5C1032] to-[#73153E] text-white shadow-2xl shadow-[#4A0B27]/20">
          
          {/* Subtle Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Column: Model Image with soft blend */}
            <div className="md:col-span-5 relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden">
              <Image
                src={HERO_ASSETS.promoSeasonModel}
                alt="New season fashion editorial"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#5C1032]/40 hidden md:block" />
            </div>

            {/* Right Column: Editorial Copy & Button */}
            <div className="md:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col items-start z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-200 mb-3">
                Runway Preview &bull; Spring / Summer
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                New Season <br />
                <span className="font-serif italic font-normal text-pink-200">New Vibes</span>
              </h2>

              <p className="text-sm sm:text-base text-pink-100/80 max-w-md mb-8 leading-relaxed">
                Fresh styles. Bold looks. Thoughtfully designed to bring effortless sophistication to your warm-weather rotation.
              </p>

              <button
                onClick={handleExplore}
                className="group inline-flex items-center gap-3 bg-white text-[#4A0B27] hover:bg-pink-50 font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <span>Explore New Arrivals</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
