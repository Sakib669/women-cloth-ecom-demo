"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Toast() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="pointer-events-auto bg-[#180815] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 max-w-md">
        <CheckCircle2 className="w-5 h-5 text-[#E8B4B8] shrink-0" />
        <p className="text-sm font-medium text-white/90">{toastMessage}</p>
      </div>
    </div>
  );
}
