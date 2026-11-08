"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function StyleCommunityBanner() {
  const { subscribeNewsletter, newsletterSubscribed } = useStore();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeNewsletter(email)) {
      setEmail("");
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#4A0B27] via-[#5C1032] to-[#73153E] text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left: Model in stylish straw hat */}
            <div className="md:col-span-4 relative h-64 sm:h-72 md:h-[300px] w-full">
              <Image
                src={HERO_ASSETS.communityModel}
                alt="Woman in stylish fedora hat"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right: Community Call-To-Action */}
            <div className="md:col-span-8 p-8 sm:p-10 lg:p-12 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-pink-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atelier VIP Circle</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                Join Our Style Community
              </h2>

              <p className="text-sm text-pink-100/80 max-w-lg mb-6">
                Connect with our collective of conscious fashion connoisseurs. Get exclusive early access to drops, styling tutorials, and invitations.
              </p>

              {newsletterSubscribed ? (
                <div className="text-sm font-medium text-pink-200">
                  Thank you for being part of our circle!
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-5 py-3 rounded-full text-sm bg-white/10 backdrop-blur-md text-white placeholder-pink-200/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#4A0B27] hover:bg-pink-100 font-semibold text-sm px-7 py-3 rounded-full shadow-lg transition-all active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
