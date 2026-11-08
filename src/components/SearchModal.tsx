"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useStore();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS.slice(0, 4);
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 lg:p-12">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F2ECE9] z-10 animate-in slide-in-from-top-6 duration-200 mt-8">
        
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-[#F2ECE9] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#86194A] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dresses, tops, outerwear, handbags..."
            autoFocus
            className="flex-1 text-base text-[#1C1917] placeholder-[#A8A29E] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#78716C] hover:text-[#1C1917] px-2 py-1 bg-[#FAF5F3] rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#78716C] hover:bg-[#FAF5F3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-b border-[#F2ECE9] flex items-center gap-2 flex-wrap text-xs">
          <span className="font-semibold text-[#86194A]">Popular:</span>
          {["Maxi Dress", "Linen Shirt", "Trousers", "Denim", "Handbag"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 bg-white hover:bg-[#86194A] hover:text-white rounded-full text-[#78716C] transition-colors border border-[#EFE8E4]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A89892]">
            {query ? `Search Results (${searchResults.length})` : "Trending Items"}
          </span>

          {searchResults.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#78716C]">
              No fashion pieces found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setQuickViewProduct(product);
                  setIsSearchOpen(false);
                }}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FAF8F5] cursor-pointer transition-colors group"
              >
                <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#FAF5F3] shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#1C1917] group-hover:text-[#86194A] transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#78716C]">{product.categoryLabel}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#86194A]">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="text-xs text-[#86194A] flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
