"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    appliedCoupon,
    applyCoupon,
  } = useStore();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 50;
  const progressPercent = Math.min(
    100,
    (cartSubtotal / freeShippingThreshold) * 100
  );
  const amountRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError(null);
      setCouponInput("");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        clearCart();
        setCheckoutComplete(false);
        setIsCartOpen(false);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#F2ECE9] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#F2ECE9] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#86194A]" />
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Shopping Bag ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#78716C] hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3 bg-[#FDF2F4] border-b border-[#FCE7F3] text-xs">
            <div className="flex items-center justify-between text-[#86194A] font-semibold mb-1.5">
              <span>
                {amountRemaining > 0
                  ? `Add $${amountRemaining.toFixed(2)} more for FREE shipping!`
                  : "You've unlocked complimentary shipping!"}
              </span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-[#86194A] transition-all duration-500 rounded-full"
              />
            </div>
          </div>

          {/* Drawer Body: Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md animate-bounce">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Order Placed!
                </h4>
                <p className="text-sm text-[#78716C] max-w-xs">
                  Thank you for shopping with Aurelia Atelier. Your curated garments are being prepared.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF5F3] text-[#A89892] flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                  Your bag is currently empty
                </h4>
                <p className="text-sm text-[#78716C] max-w-xs">
                  Explore our newest runway collection and discover timeless fashion essentials.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#86194A] text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#9F1C5A] transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                  className="flex gap-4 p-3 rounded-2xl border border-[#F2ECE9] bg-white hover:border-[#86194A]/30 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#FAF5F3] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#1C1917] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() =>
                            removeFromCart(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="text-[#A8A29E] hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#78716C] mt-1 space-x-2">
                        <span>Size: <strong>{item.selectedSize}</strong></span>
                        <span>&bull;</span>
                        <span>Color: <strong>{item.selectedColor}</strong></span>
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#EFE8E4] rounded-lg bg-[#FAF8F5]">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              -1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center text-[#78716C] hover:text-[#1C1917]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-[#1C1917]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center text-[#78716C] hover:text-[#1C1917]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#86194A]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Totals and Checkout */}
          {cart.length > 0 && !checkoutComplete && (
            <div className="p-5 border-t border-[#F2ECE9] bg-[#FAF8F5] space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Promo Code (e.g. SUMMER50)"
                  className="flex-1 px-3 py-2 text-xs uppercase bg-white border border-[#EFE8E4] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#86194A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#86194A] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>
              {couponError && (
                <p className="text-[11px] text-rose-600">{couponError}</p>
              )}
              {appliedCoupon && (
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center justify-between">
                  <span>Coupon {appliedCoupon} active</span>
                  <span>-${cartDiscount.toFixed(2)}</span>
                </div>
              )}

              {/* Price Calculation Summary */}
              <div className="space-y-1.5 text-xs text-[#78716C]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1C1917]">${cartSubtotal.toFixed(2)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-[#86194A]">
                    <span>Discount</span>
                    <span>-${cartDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="text-emerald-700 font-semibold">
                    {cartSubtotal >= freeShippingThreshold ? "FREE" : "$7.00"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1C1917] pt-2 border-t border-[#EFE8E4]">
                  <span>Total</span>
                  <span className="text-[#86194A] text-base">
                    ${(cartTotal + (cartSubtotal >= freeShippingThreshold ? 0 : 7)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#86194A] hover:bg-[#9F1C5A] disabled:opacity-75 text-white font-medium text-sm py-4 rounded-xl shadow-lg shadow-[#86194A]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isCheckingOut ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
