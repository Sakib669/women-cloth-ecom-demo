import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelia Atelier — Contemporary Women's Fashion & Ready-to-Wear",
  description:
    "Discover the latest women's fashion — from relaxed everyday essentials to elevated evening silhouettes. Curated ethically with effortless style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#1C1917]"
      >
        {children}
      </body>
    </html>
  );
}
