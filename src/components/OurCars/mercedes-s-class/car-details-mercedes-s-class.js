"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  "First class chauffeur",
  "Free 60 mins airport parking",
  "Free 60 mins waiting time for airport pickups, 15 mins for all others",
  "Includes meet & greet",
  "Free cancellation",
];

const pricing = [
  { label: "Hourly rate (minimum 3 hours)", price: "£75" },
  { label: "Day rate (8 hours)", price: "£600" },
  { label: "Heathrow to Central London", price: "£180" },
];

const specs = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "4 Passengers",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    label: "2 Suitcases",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: "Hybrid available",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Onboard Wi-Fi",
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
      style={{ color: "#c9a84c" }}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function SClassPage() {
  return (
    <div className="w-full font-sans">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/mercedes s class.jpg')` }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        {/* Subtle gold shimmer */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 30% 80%, rgba(201,168,76,0.08) 0%, transparent 55%)",
        }} />

        <div className="absolute bottom-0 left-0 px-8 sm:px-12 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-5">
            <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#c9a84c" }}>
              Business Luxury · Chauffeur Hire
            </span>
            <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
          </div>

          {/* Marque */}
          <p style={{
            fontSize: "clamp(13px, 2vw, 18px)", color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.22em", textTransform: "uppercase",
            fontFamily: "Georgia, serif", marginBottom: "4px",
          }}>
            Mercedes-Benz
          </p>

          {/* Model name */}
          <h1
            className="text-white font-medium leading-none tracking-tight mb-3"
            style={{
              fontSize: "clamp(52px, 8vw, 100px)",
              fontFamily: "Georgia, serif",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              letterSpacing: "-0.02em",
              background: "linear-gradient(90deg,#fff 60%,rgba(201,168,76,0.85))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            S-Class
          </h1>

          <p className="text-white/60 font-semibold tracking-[0.18em] uppercase mb-8" style={{ fontSize: "clamp(11px, 1.4vw, 14px)" }}>
            Mercedes-Benz S-Class · Premium Chauffeur Hire
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact?vehicle=sclass"
              className="px-8 py-3.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
                color: "#0a0c10",
                boxShadow: "0 0 32px rgba(201,168,76,0.5)",
              }}
            >
              ✦ &nbsp;Private Enquiry
            </Link>
            <Link
              href="/book?vehicle=sclass"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(201,168,76,0.6)", color: "#c9a84c" }}
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOOKING SECTION (white background)
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full px-6 sm:px-10 lg:px-16 py-14 lg:py-20"
        style={{ background: "#ffffff", fontFamily: "Georgia, serif" }}
      >
        {/* Subtle gold grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.06) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div className="relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
              Reserve Your Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: "#0a0c10", letterSpacing: "-0.01em" }}>
            BOOK YOUR S-CLASS
          </h2>

          {/* Specs row */}
          <div className="flex flex-wrap items-center gap-6 pb-5 mb-10" style={{ borderBottom: "1px solid rgba(201,168,76,0.35)" }}>
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2 text-[14px]" style={{ color: "rgba(10,12,16,0.55)" }}>
                <span style={{ color: "#c9a84c" }}>{spec.icon}</span>
                <span>{spec.label}</span>
              </div>
            ))}
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">

            {/* Col 1 - Car Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/mercedes-benz-s-class-2023.jpg"
                  alt="Mercedes S-Class"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Col 2 - Features */}
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[15px] leading-snug" style={{ color: "rgba(10,12,16,0.65)" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Col 3 - Pricing card */}
            <div className="rounded-2xl p-6 flex flex-col gap-1" style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}>
              {pricing.map((item, i) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-[14px]" style={{ color: "rgba(10,12,16,0.55)" }}>{item.label}</span>
                    <span className="font-bold text-[15px] ml-4 flex-shrink-0" style={{ color: "#c9a84c" }}>{item.price}</span>
                  </div>
                  {i < pricing.length - 1 && (
                    <div className="h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
                  )}
                </div>
              ))}

              <p className="text-[12px] font-semibold mt-2 mb-5" style={{ color: "rgba(10,12,16,0.35)" }}>
                Prices subject to VAT
              </p>

              <Link
                href="/book?vehicle=sclass"
                className="flex items-center justify-between w-full font-bold text-[12px] tracking-[0.18em] uppercase px-6 py-4 rounded-full transition-all duration-300 group hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#c9a84c,#f0d98a,#c9a84c)",
                  color: "#0a0c10",
                  boxShadow: "0 0 24px rgba(201,168,76,0.4)",
                }}
              >
                <span>Get a Price &amp; Book</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}