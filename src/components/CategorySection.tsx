"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function CategorySection() {
  const { setFilterCategory } = useStore();

  const handleCategoryClick = (categorySlug: string) => {
    setFilterCategory(categorySlug);
    const el = document.getElementById("featured");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#86194A]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#86194A]"></span>
            <span className="w-8 h-px bg-[#86194A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-2">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Find your perfect style from our curated collections
          </p>
        </div>

        {/* 5-Card Category Grid matching design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Pastel Pod Arch Container */}
              <div
                style={{ backgroundColor: cat.bgHex }}
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden p-3 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#86194A]/10 group-hover:-translate-y-1.5"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Title & Link */}
              <div className="mt-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1917] group-hover:text-[#86194A] transition-colors">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#78716C] group-hover:text-[#86194A] transition-colors mt-1">
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
