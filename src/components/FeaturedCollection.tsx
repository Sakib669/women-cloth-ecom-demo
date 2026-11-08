"use client";

import React, { useMemo } from "react";
import { PRODUCTS } from "@/data/mockData";
import ProductCard from "./ProductCard";
import { useStore } from "@/context/StoreContext";

export default function FeaturedCollection() {
  const { filterCategory, setFilterCategory } = useStore();

  const filterTabs = [
    { label: "All Items", slug: "all" },
    { label: "Dresses", slug: "dresses" },
    { label: "Tops & Tees", slug: "tops" },
    { label: "Jeans & Pants", slug: "bottoms" },
    { label: "Outerwear", slug: "outerwear" },
  ];

  const filteredProducts = useMemo(() => {
    const featured = PRODUCTS.filter((p) => p.isFeatured || p.isBestSeller);
    if (filterCategory === "all") return featured.slice(0, 4);
    const matched = PRODUCTS.filter((p) => p.category === filterCategory);
    return matched.length > 0 ? matched : featured.slice(0, 4);
  }, [filterCategory]);

  return (
    <section id="featured" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#86194A]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#86194A]"></span>
            <span className="w-8 h-px bg-[#86194A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-2">
            Featured Collection
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Handpicked styles, just for you
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const isActive = filterCategory === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setFilterCategory(tab.slug)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#86194A] text-white shadow-md shadow-[#86194A]/20 scale-105"
                    : "bg-white text-[#78716C] hover:text-[#1C1917] hover:bg-[#F2ECE9] border border-[#EFE8E4]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4-Item Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
