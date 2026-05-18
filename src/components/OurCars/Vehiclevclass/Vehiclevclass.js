"use client";

import Image from "next/image";
import Link from "next/link";

/* ─── DATA ─────────────────────────────────────── */
const MODEL = {
  name: "S 680",
  subtitle: "Mercedes-Maybach S680 · Ultra-Luxury Chauffeur Hire",
  heroImage: "/mercedes s class.jpg",
  carImage: "/mercedes-benz-s-class-2023.jpg",
  category: "Ultra-Luxury · By Appointment",
  badge: null,
  specs: [
    { label: "4 Passengers",    icon: <PeopleIcon /> },
    { label: "3 Suitcases",     icon: <BagIcon /> },
    { label: "V12 Biturbo",     icon: <BoltIcon /> },
    { label: "Champagne Cooler", icon: <GlassIcon /> },
  ],
  features: [
    "Dedicated Maybach-trained chauffeur",
    "Free 60 mins airport parking",
    "Free 60 mins waiting time for airport pickups, 15 mins for all others",
    "White-glove meet & greet with name board",
    "Complimentary champagne & refreshments",
    "Free cancellation up to 24 hrs",
  ],
  pricing: [
    { label: "Hourly rate (minimum 3 hours)", price: "£195" },
    { label: "Day rate (8 hours)",            price: "£1,560" },
    { label: "Heathrow to Central London",    price: "£395" },
  ],
  bookHref: "/book?vehicle=maybach",
  enquireHref: "/contact?vehicle=maybach",
};

/* ─── SVG ICONS ────────────────────────────────── */
function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function GlassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8M12 11v11M5 2l2 9a5 5 0 0 0 10 0l2-9H5z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* ─── COMPONENT ────────────────────────────────── */
export default function MaybachPage() {
  return (
    <div className="w-full font-sans">

      {/* ══════════════════════════════════════════
          HERO  (full dark treatment for Maybach)
      ══════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${MODEL.heroImage}')` }}
        />
        {/* Heavier vignette for ultra-luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        {/* Subtle gold shimmer overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 30% 80%, rgba(201,168,76,0.08) 0%, transparent 55%)",
        }} />

        <div className="absolute bottom-0 left-0 px-8 sm:px-12 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
          {/* Double line accent for Maybach */}
          <div className="flex items-center gap-4 mb-5">
            <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#c9a84c" }}>
              {MODEL.category}
            </span>
            <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
          </div>

          {/* Maybach wordmark above model name */}
          <p style={{
            fontSize: "clamp(13px, 2vw, 18px)", color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.22em", textTransform: "uppercase",
            fontFamily: "Georgia, serif", marginBottom: "4px",
          }}>
            Mercedes-Maybach
          </p>

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
            {MODEL.name}
          </h1>

          <p className="text-white/60 font-semibold tracking-[0.18em] uppercase mb-8" style={{ fontSize: "clamp(11px, 1.4vw, 14px)" }}>
            {MODEL.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={MODEL.enquireHref}
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
              href={MODEL.bookHref}
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
      <section className="relative w-full px-6 sm:px-10 lg:px-16 py-14 lg:py-20" style={{ background: "#ffffff", fontFamily: "Georgia, serif" }}>

        {/* Subtle gold grid texture on white */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.06) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
              Reserve Your Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: "#0a0c10", letterSpacing: "-0.01em" }}>
            BOOK YOUR MAYBACH {MODEL.name}
          </h2>

          {/* Specs row */}
          <div className="flex flex-wrap items-center gap-6 pb-5 mb-10" style={{ borderBottom: "1px solid rgba(201,168,76,0.35)" }}>
            {MODEL.specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2 text-[14px]" style={{ color: "rgba(10,12,16,0.55)" }}>
                <span style={{ color: "#c9a84c" }}>{spec.icon}</span>
                <span>{spec.label}</span>
              </div>
            ))}
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">

            {/* Car image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm" style={{ aspectRatio: "16/9" }}>
                <Image src={MODEL.carImage} alt="Mercedes-Maybach S680" fill className="object-contain" priority />
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4">
              {MODEL.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[15px] leading-snug" style={{ color: "rgba(10,12,16,0.65)" }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing card — gold-tinted on white */}
            <div className="rounded-2xl p-6 flex flex-col gap-1" style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}>
              {MODEL.pricing.map((item, i) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-[14px]" style={{ color: "rgba(10,12,16,0.55)" }}>{item.label}</span>
                    <span className="font-bold text-[15px] ml-4 flex-shrink-0" style={{ color: "#c9a84c" }}>{item.price}</span>
                  </div>
                  {i < MODEL.pricing.length - 1 && <div className="h-px" style={{ background: "rgba(201,168,76,0.2)" }} />}
                </div>
              ))}
              <p className="text-[12px] font-semibold mt-2 mb-5" style={{ color: "rgba(10,12,16,0.35)" }}>Prices subject to VAT</p>
              <Link
                href={MODEL.bookHref}
                className="flex items-center justify-between w-full font-bold text-[12px] tracking-[0.18em] uppercase px-6 py-4 rounded-full transition-all duration-300 group hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#c9a84c,#f0d98a,#c9a84c)",
                  color: "#0a0c10",
                  boxShadow: "0 0 24px rgba(201,168,76,0.4)",
                }}
              >
                <span>Reserve Maybach</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}