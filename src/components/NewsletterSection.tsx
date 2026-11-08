"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle2 } from "lucide-react";
import { HERO_ASSETS } from "@/data/mockData";
import { useStore } from "@/context/StoreContext";

export default function NewsletterSection() {
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
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF3F0] border border-[#F2ECE9]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left: Fashion Model in Summer Meadow */}
            <div className="md:col-span-5 relative h-72 sm:h-80 md:h-[380px] w-full">
              <Image
                src={HERO_ASSETS.newsletterModel}
                alt="Woman in straw hat in sunny flower garden"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right: Newsletter Opt-In Box */}
            <div className="md:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#86194A] mb-4">
                <Mail className="w-5 h-5 stroke-[1.8]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-3">
                Be the First to Know
              </h2>

              <p className="text-sm sm:text-base text-[#78716C] max-w-md mb-8 leading-relaxed">
                Receive private invitations to runway previews, curated editorial style guides, and exclusive atelier offers.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-3.5 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">
                    You are subscribed! Enjoy 15% off using code <strong>AURELIA15</strong>.
                  </span>
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
                    className="flex-1 px-5 py-3.5 bg-white rounded-full text-sm text-[#1C1917] placeholder-[#A8A29E] border border-[#EFE8E4] focus:outline-none focus:ring-2 focus:ring-[#86194A] focus:border-transparent transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#86194A] hover:bg-[#9F1C5A] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-md shadow-[#86194A]/20 transition-all active:scale-95 whitespace-nowrap"
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
