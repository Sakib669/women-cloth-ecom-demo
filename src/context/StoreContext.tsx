"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Product, CartItem } from "@/types";

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  newsletterSubscribed: boolean;
  subscribeNewsletter: (email: string) => boolean;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  filterCategory: string;
  setFilterCategory: (cat: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_STORAGE_KEY = "aurelia_cart_v1";
const WISHLIST_STORAGE_KEY = "aurelia_wishlist_v1";
const NEWSLETTER_STORAGE_KEY = "aurelia_newsletter_v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }

      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }

      const savedNewsletter = localStorage.getItem(NEWSLETTER_STORAGE_KEY);
      if (savedNewsletter === "true") {
        setNewsletterSubscribed(true);
      }
    } catch (e) {
      console.warn("Could not load stored atelier preferences", e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage whenever cart updates
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("Failed to persist cart to localStorage", e);
    }
  }, [cart, isInitialized]);

  // Save to localStorage whenever wishlist updates
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.warn("Failed to persist wishlist to localStorage", e);
    }
  }, [wishlist, isInitialized]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (
    product: Product,
    size?: string,
    color?: string,
    quantity = 1
  ) => {
    const selectedSize = size || product.sizes[0] || "Standard";
    const selectedColor = color || (product.colors[0]?.name ?? "Default");

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          selectedSize,
          selectedColor,
          quantity,
        },
      ];
    });

    showToast(`Added "${product.name}" to your shopping bag.`);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
    showToast("Item removed from your bag.");
  };

  const updateQuantity = (
    productId: string,
    size: string,
    color: string,
    delta: number
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Shopping bag cleared.");
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed item from your wishlist.");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved item to your wishlist.");
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const subscribeNewsletter = (email: string) => {
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.");
      return false;
    }
    setNewsletterSubscribed(true);
    try {
      localStorage.setItem(NEWSLETTER_STORAGE_KEY, "true");
    } catch (e) {
      console.warn(e);
    }
    showToast("Welcome to the Atelier! Check your inbox for 15% off.");
    return true;
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "AURELIA15" || clean === "SUMMER50" || clean === "HERMES") {
      setAppliedCoupon(clean);
      showToast(`Promo code "${clean}" applied successfully!`);
      return { success: true, message: `Promo code "${clean}" applied!` };
    }
    return { success: false, message: "Invalid promo code. Try AURELIA15 or SUMMER50" };
  };

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cart]);

  const cartDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon === "SUMMER50") return cartSubtotal * 0.5;
    if (appliedCoupon === "AURELIA15") return cartSubtotal * 0.15;
    return 0;
  }, [cartSubtotal, appliedCoupon]);

  const cartTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - cartDiscount);
  }, [cartSubtotal, cartDiscount]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        newsletterSubscribed,
        subscribeNewsletter,
        appliedCoupon,
        applyCoupon,
        filterCategory,
        setFilterCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
