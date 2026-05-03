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
      className="text-gray-500 flex-shrink-0 mt-0.5"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function BookSClass() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
      >
        BOOK YOUR S-CLASS
      </h2>

      {/* Specs row */}
      <div className="flex flex-wrap items-center gap-6 pb-5 border-b border-gray-200 mb-10">
        {specs.map(function (spec) {
          return (
            <div key={spec.label} className="flex items-center gap-2 text-gray-600 text-[14px]">
              <span className="text-gray-500">{spec.icon}</span>
              <span>{spec.label}</span>
            </div>
          );
        })}
      </div>

      {/* Main 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">

        {/* Col 1 - Car Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-96 h-50 sm:h-55">
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
          {features.map(function (feature) {
            return (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-700 text-[15px] leading-snug">{feature}</span>
              </div>
            );
          })}
        </div>

        {/* Col 3 - Pricing card */}
        <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-1">
          {pricing.map(function (item, i) {
            return (
              <div key={item.label}>
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-gray-700 text-[14px]">{item.label}</span>
                  <span className="text-gray-900 font-bold text-[15px] ml-4 flex-shrink-0">{item.price}</span>
                </div>
                {i < pricing.length - 1 && (
                  <div className="h-px bg-gray-200" />
                )}
              </div>
            );
          })}

          <p className="text-gray-500 text-[12px] font-semibold mt-2 mb-5">
            Prices subject to VAT
          </p>

          <Link
            href="/book"
            className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[12px] tracking-[0.18em] uppercase px-6 py-4 rounded-full transition-all duration-300 group"
          >
            <span>Get a Price &amp; Book</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}