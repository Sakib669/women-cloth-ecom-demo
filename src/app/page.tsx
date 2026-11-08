"use client";

import React from "react";
import { StoreProvider } from "@/context/StoreContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import NewSeasonBanner from "@/components/NewSeasonBanner";
import FeaturedCollection from "@/components/FeaturedCollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CasualLooksBanner from "@/components/CasualLooksBanner";
import BestSellers from "@/components/BestSellers";
import SalePromoBanner from "@/components/SalePromoBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import StyleCommunityBanner from "@/components/StyleCommunityBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <StoreProvider>
      <main className="overflow-x-hidden w-full max-w-full min-h-screen bg-[#FAF8F5] flex flex-col">
        {/* Navigation Bar */}
        <Navbar />

        {/* Attention: Main Hero Section */}
        <HeroSection />

        {/* Categories Carousel / Bento Grid */}
        <CategorySection />

        {/* Promotional Season Banner */}
        <NewSeasonBanner />

        {/* Interest: Featured Boutique Collection */}
        <FeaturedCollection />

        {/* Trust & Brand Value Pillars */}
        <WhyChooseUs />

        {/* Desire: Casual Looks & Editorial Storytelling */}
        <CasualLooksBanner />

        {/* Top-Rated Best Sellers */}
        <BestSellers />

        {/* Limited 50% Season Offer */}
        <SalePromoBanner />

        {/* Social Proof: Customer Testimonials */}
        <TestimonialsSection />

        {/* Action: VIP Newsletter Club */}
        <NewsletterSection />

        {/* Style Community Collective */}
        <StyleCommunityBanner />

        {/* Opulent Nocturne Footer */}
        <Footer />

        {/* Interactive Modals and Flyouts */}
        <CartDrawer />
        <QuickViewModal />
        <SearchModal />
        <Toast />
      </main>
    </StoreProvider>
  );
}
