"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Navbar() {
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Shop", href: "#featured" },
    { label: "New Arrivals", href: "#new-season" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#why-us" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#86194A] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-pink-200 animate-pulse" />
        <span>Complimentary luxury packaging & free delivery on orders over $50</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F2ECE9]"
            : "bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EFE8E4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-[#86194A] flex items-center justify-center text-white shadow-md shadow-[#86194A]/20 transition-transform group-hover:scale-105">
                <svg
                  className="w-5 h-5 text-white stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v4m0 0a4 4 0 014 4v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7a4 4 0 014-4zm-5 4a5 5 0 0110 0"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#86194A] transition-colors">
                  Aurelia Atelier
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#9C8F8A] font-medium -mt-1">
                  Women&apos;s Couture
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#44403C] hover:text-[#86194A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#86194A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Utility Icons (Search, Profile, Wishlist, Cart) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search collection"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#44403C] hover:text-[#86194A] hover:bg-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Trigger */}
              <button
                aria-label="Account"
                className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-[#44403C] hover:text-[#86194A] hover:bg-white transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={() => {
                  const el = document.getElementById("featured");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Wishlist"
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#44403C] hover:text-[#86194A] hover:bg-white transition-colors"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#86194A] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping bag"
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#44403C] hover:text-[#86194A] hover:bg-white transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#86194A] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#44403C] hover:bg-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#F2ECE9] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#1C1917] hover:text-[#86194A] py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#F2ECE9] flex items-center justify-between text-sm text-[#78716C]">
              <span>Complimentary Concierge</span>
              <span className="text-[#86194A] font-semibold">+1 (800) 456-7890</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
