"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Star, Heart, ShoppingBag, Truck, RefreshCw, Check } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || "Standard");
      setSelectedColor(quickViewProduct.colors[0]?.name || "Default");
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      setQuickViewProduct(null);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F2ECE9] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#78716C] hover:text-[#1C1917] hover:bg-white flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 relative aspect-[3/4] md:aspect-auto md:min-h-[500px] bg-[#FAF5F3]">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {quickViewProduct.discountBadge && (
              <span className="absolute top-4 left-4 bg-[#86194A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {quickViewProduct.discountBadge}
              </span>
            )}
          </div>

          {/* Right Column: Garment Information & Controls */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-xs font-semibold uppercase tracking-widest text-[#86194A]">
                {quickViewProduct.categoryLabel}
              </span>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-2">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(quickViewProduct.rating)
                          ? "fill-amber-400"
                          : "text-amber-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1C1917]">
                  {quickViewProduct.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#A8A29E]">
                  ({quickViewProduct.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-bold text-[#86194A]">
                  ${quickViewProduct.price.toFixed(2)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-[#A8A29E] line-through">
                    ${quickViewProduct.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#78716C] leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>

              {/* Color Swatches */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                  Color: <span className="font-normal text-[#78716C]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {quickViewProduct.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected
                            ? "border-[#86194A] scale-110 shadow-sm"
                            : "border-transparent hover:scale-105"
                        }`}
                        title={color.name}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/10"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                  Size: <span className="font-normal text-[#78716C]">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                          isSelected
                            ? "bg-[#1C1917] text-white border-[#1C1917]"
                            : "bg-white text-[#44403C] border-[#EFE8E4] hover:border-[#86194A]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* Quantity */}
                <div className="flex items-center border border-[#EFE8E4] rounded-xl bg-[#FAF8F5] p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#78716C] hover:text-[#1C1917]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#1C1917]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#78716C] hover:text-[#1C1917]"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#86194A] hover:bg-[#9F1C5A] text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-[#86194A]/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Shopping Bag</span>
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  aria-label="Wishlist toggle"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                    wishlisted
                      ? "bg-[#86194A] text-white border-[#86194A]"
                      : "bg-white text-[#78716C] border-[#EFE8E4] hover:text-[#86194A]"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlisted ? "fill-white" : ""}`} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-[#F2ECE9] flex items-center justify-between text-[11px] text-[#A89892]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#86194A]" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#86194A]" />
                  <span>30-Day Hassle-Free Returns</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
