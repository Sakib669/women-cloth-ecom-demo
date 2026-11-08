"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";

export default function HeroSection() {
  const scrollToCollection = () => {
    const el = document.getElementById("featured");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FAF8F5] pt-6 pb-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#86194A]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#86194A]">
                Style That Feels Like You
              </span>
            </div>

            {/* 2-Line Iron Rule Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.1] max-w-2xl mb-6">
              Trendy Outfits <br />
              <span className="text-[#86194A] italic font-normal font-serif">for Every You</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed max-w-lg mb-8">
              Discover the latest women&apos;s fashion — from casual daytime essentials to opulent evening looks, thoughtfully curated in one place.
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={scrollToCollection}
                className="group inline-flex items-center gap-3 bg-[#86194A] hover:bg-[#9F1C5A] text-white font-medium text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-[#86194A]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#86194A]/30 active:scale-95"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#categories"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] hover:text-[#86194A] transition-colors py-4 px-2"
              >
                <span>Explore Categories</span>
              </a>
            </div>

            {/* Trust Service Bar directly under the hero CTA */}
            <div className="w-full pt-8 border-t border-[#EFE8E4] grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FCE7F3] flex items-center justify-center shrink-0 text-[#86194A]">
                  <Truck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C1917]">Free Shipping</h4>
                  <p className="text-[11px] text-[#A8A29E] hidden sm:block">On orders over $50</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0 text-[#86194A]">
                  <RefreshCcw className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C1917]">Easy Returns</h4>
                  <p className="text-[11px] text-[#A8A29E] hidden sm:block">Within 30 days</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0 text-[#86194A]">
                  <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C1917]">Secure Payment</h4>
                  <p className="text-[11px] text-[#A8A29E] hidden sm:block">100% encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with organic pastel arch & script accent */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Organic Soft Backdrop Arch */}
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-[#FDF2F4] via-[#FCE7F3] to-[#FCE7F3]/70 overflow-hidden shadow-2xl shadow-[#86194A]/10 border border-white">
              
              {/* Cursive handwritten accent on top right: "Fashion For Your Story" */}
              <div className="absolute top-6 right-6 z-20 text-right pointer-events-none select-none">
                <span className="font-script text-2xl sm:text-3xl text-[#86194A] block rotate-[-4deg] drop-shadow-sm">
                  Fashion For Your Story
                </span>
                <span className="inline-block text-[#86194A] text-lg mt-0.5 animate-pulse">
                  &hearts;
                </span>
              </div>

              {/* Main Model Image */}
              <Image
                src={HERO_ASSETS.mainModel}
                alt="Woman in magenta tailoring holding luxury handbag"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
              />

              {/* Floating Highlight Pill */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3 animate-fade-in">
                <div className="w-3 h-3 rounded-full bg-[#86194A] animate-ping" />
                <span className="text-xs font-semibold text-[#1C1917]">
                  New Runway Edition &bull; Spring &apos;26
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
