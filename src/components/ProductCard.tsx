"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star, Eye, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { useStore } from "@/context/StoreContext";

interface ProductCardProps {
  product: Product;
  badgeColor?: string;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isWishlisted, addToCart, setQuickViewProduct } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [addedRecently, setAddedRecently] = useState(false);
  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 1600);
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl border border-[#F2ECE9] overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#86194A]/5 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] w-full bg-[#FAF5F3] overflow-hidden">
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discountBadge && (
          <div className="absolute top-3 left-3 bg-[#86194A] text-white text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            {product.discountBadge}
          </div>
        )}

        {/* Top Right Actions: Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Save to wishlist"
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            wishlisted
              ? "bg-[#86194A] text-white scale-110"
              : "bg-white/90 backdrop-blur-sm text-[#78716C] hover:text-[#86194A] hover:bg-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
        </button>

        {/* Floating Quick View & Quick Add Action Bar */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 bg-white/95 backdrop-blur-sm hover:bg-[#86194A] hover:text-white text-[#1C1917] text-xs font-medium py-2.5 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <button
            onClick={handleQuickAdd}
            aria-label="Add to cart"
            className="w-10 h-10 bg-[#86194A] hover:bg-[#9F1C5A] text-white rounded-xl shadow-md flex items-center justify-center transition-transform active:scale-95"
          >
            {addedRecently ? (
              <Check className="w-4 h-4 text-emerald-300" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category Label */}
        <span className="text-[11px] font-medium uppercase tracking-wider text-[#9C8F8A] mb-1">
          {product.categoryLabel}
        </span>

        {/* Product Name */}
        <h3
          onClick={() => setQuickViewProduct(product)}
          className="text-sm font-semibold text-[#1C1917] hover:text-[#86194A] transition-colors line-clamp-1 cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-[#86194A]">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#A8A29E] line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 pt-2 border-t border-[#F5ECE8] flex items-center justify-between text-xs text-[#78716C]">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-[#1C1917]">{product.rating.toFixed(1)}</span>
            <span className="text-[#A8A29E]">({product.reviewCount})</span>
          </div>
          <span className="text-[11px] font-medium text-[#86194A] group-hover:underline cursor-pointer" onClick={() => setQuickViewProduct(product)}>
            Details
          </span>
        </div>
      </div>
    </div>
  );
}
