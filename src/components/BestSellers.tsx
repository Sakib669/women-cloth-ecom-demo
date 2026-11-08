"use client";

import React from "react";
import { PRODUCTS } from "@/data/mockData";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section id="best-sellers" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#86194A]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#86194A]"></span>
            <span className="w-8 h-px bg-[#86194A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-2">
            Best Sellers
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Loved by thousands of women worldwide
          </p>
        </div>

        {/* 4-Card Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
