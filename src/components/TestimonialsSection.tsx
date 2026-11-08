"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { REVIEWS } from "@/data/mockData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#86194A]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#86194A]"></span>
            <span className="w-8 h-px bg-[#86194A]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-2">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Real women. Real stories.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-[#F2ECE9] shadow-sm hover:shadow-xl hover:shadow-[#86194A]/5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Circular Avatar with Pastel Ring */}
              <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#FCE7F3] to-[#F3E8FF] mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#44403C] leading-relaxed italic mb-6 flex-1">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {/* Author & Star Rating */}
              <div className="pt-4 border-t border-[#F5ECE8] w-full flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <h4 className="text-sm font-bold text-[#1C1917]">
                    {rev.name}
                  </h4>
                  {rev.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-[#86194A] fill-[#FCE7F3]" />
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-[#1C1917] ml-1">
                    {rev.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
