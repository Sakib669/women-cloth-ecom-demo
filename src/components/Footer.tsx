"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#180815] text-[#D6C7C2] pt-16 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Decorative Botanical Watermark in corner */}
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-5 pointer-events-none text-white">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30, 70 40, 100 50 C70 60, 60 70, 50 100 C40 70, 30 60, 0 50 C30 40, 40 30, 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-[#86194A] flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 0a4 4 0 014 4v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7a4 4 0 014-4zm-5 4a5 5 0 0110 0" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Aurelia Atelier
              </span>
            </Link>

            <p className="text-sm text-[#A89892] max-w-sm mb-6 leading-relaxed">
              Fashion for every chapter of your life. Thoughtfully created modern silhouettes honoring timeless craftsmanship.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#86194A] flex items-center justify-center text-[#D6C7C2] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#86194A] flex items-center justify-center text-[#D6C7C2] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#86194A] flex items-center justify-center text-[#D6C7C2] hover:text-white transition-all duration-300"
              >
                <span className="font-serif font-bold text-sm">P</span>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#86194A] flex items-center justify-center text-[#D6C7C2] hover:text-white transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#new-season" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping &amp; Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return &amp; Exchange</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide &amp; Tailoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Report</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[#A89892]">
                <Phone className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                <span>+1 (800) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-[#A89892]">
                <Mail className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                <span>concierge@aurelia-atelier.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#A89892]">
                <MapPin className="w-4 h-4 text-[#E8B4B8] shrink-0 mt-1" />
                <span>450 Madison Avenue, New York, NY 10022</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Gateways */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7E78]">
          <p>
            &copy; {new Date().getFullYear()} Aurelia Atelier. All rights reserved.
          </p>

          {/* Clean Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-[11px] text-white">VISA</span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-[11px] text-white">MC</span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-[11px] text-white">AMEX</span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-[11px] text-white">PAYPAL</span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-[11px] text-white">APPLE PAY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
