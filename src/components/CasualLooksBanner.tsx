"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function CasualLooksBanner() {
  const { setFilterCategory } = useStore();

  const handleShopCasual = () => {
    setFilterCategory("dresses");
    const el = document.getElementById("featured");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF3F0] border border-[#F2ECE9]">
          
          {/* Subtle Botanical Vector Illustration in Right Corner */}
          <div className="absolute top-0 right-0 w-48 h-full pointer-events-none opacity-20 hidden md:block">
            <svg viewBox="0 0 200 400" className="w-full h-full text-[#86194A] fill-current">
              <path d="M100 50 Q150 100 120 180 T160 300 Q140 350 80 380 Q100 320 80 260 T100 50 Z" opacity="0.3"/>
              <circle cx="140" cy="120" r="12" opacity="0.2"/>
              <circle cx="90" cy="200" r="16" opacity="0.2"/>
              <circle cx="130" cy="280" r="14" opacity="0.2"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left: Sunlit Model in white dress and straw hat */}
            <div className="md:col-span-6 relative h-80 sm:h-96 md:h-[460px] w-full">
              <Image
                src={HERO_ASSETS.casualLooksModel}
                alt="Woman in white sun dress and straw hat enjoying sunshine"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right: Editorial Typography */}
            <div className="md:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col items-start z-10">
              {/* Script Accent */}
              <span className="font-script text-3xl sm:text-4xl text-[#86194A] block mb-2 rotate-[-2deg]">
                Effortless Style
              </span>

              {/* Serif Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] mb-4 leading-tight">
                Casual Looks <br />
                <span className="font-serif italic font-normal text-[#86194A]">
                  For Everyday
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#78716C] max-w-md mb-8 leading-relaxed">
                Comfort meets timeless style. Breathable linens, fluid cotton silhouettes, and sun-kissed textures perfected for your daily adventures.
              </p>

              <button
                onClick={handleShopCasual}
                className="group inline-flex items-center gap-3 bg-[#86194A] hover:bg-[#9F1C5A] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#86194A]/20 transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <span>Shop Casual Edit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
