"use client";

import Link from "next/link";

const VEHICLES = [
  {
    name: "Mercedes Benz S-Class",
    minBooking: "Min 6 Hours Booking",
    description: "Insured, leather interior, air conditioning, rain sensor, panoramic roof",
    price: 75,
    image: "/mercedes-benz-G-class-2024.jpg",
    features: [
      { icon: "bag", label: "2 Bags" },
      { icon: "seat", label: "4 Seats" },
      { icon: "fuel", label: "Diesel" },
    ],
    href: "/book?car=mercedes-s-class-580e",
  },
  {
    name: "Mercedes Benz E-Class",
    minBooking: "Min 6 Hours Booking",
    description: "Insured, leather interior, air conditioning, rain sensor, panoramic roof",
    price: 45,
    image: "/mercedes-benz-s-class-2023.jpg",
    features: [
      { icon: "seat", label: "4 Seats" },
      { icon: "transmission", label: "Auto" },
      { icon: "fuel", label: "Petrol" },
    ],
    href: "/book?car=mercedes-e-class",
  },
  {
    name: "Mercedes Benz S-Class",
    minBooking: "Min 6 Hours Booking",
    description: "Insured, leather interior, air conditioning, rain sensor, panoramic roof",
    price: 55,
    image: "/mercedes-benz-V-class-2024.jpg",
    features: [
      { icon: "bag", label: "2 Bags" },
      { icon: "seat", label: "4 Seats" },
      { icon: "fuel", label: "Diesel" },
    ],
    href: "/book?car=mercedes-s-class-350",
  },
];

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function SeatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22V8a2 2 0 012-2h8a2 2 0 012 2v14" />
      <path d="M3 22h12" />
      <path d="M15 8h2a2 2 0 012 2v3a2 2 0 002 2h0a2 2 0 002-2V9.5L19 6" />
      <line x1="7" y1="6" x2="7" y2="2" />
      <line x1="11" y1="6" x2="11" y2="2" />
    </svg>
  );
}

function TransmissionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M5 9v4h14V9" />
      <line x1="12" y1="13" x2="12" y2="15" />
    </svg>
  );
}

function getIcon(type) {
  switch (type) {
    case "bag": return <BagIcon />;
    case "seat": return <SeatIcon />;
    case "fuel": return <FuelIcon />;
    case "transmission": return <TransmissionIcon />;
    default: return null;
  }
}

function VehicleCard({ vehicle }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
    >
      {/* Image area */}
      <div className="relative w-full bg-gray-50" style={{ aspectRatio: "430/240" }}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-contain p-4"
          style={{ display: "block" }}
        />
        {/* Price badge */}
        <div
          className="absolute top-4 right-4 flex flex-col items-center justify-center rounded-full bg-[#c9a84c] hover:bg-[#b8963f]"
          style={{ width: "68px", height: "68px" }}
        >
          <span style={{ color: "#fff", fontSize: "17px", fontWeight: 700, lineHeight: 1.1 }}>
            £{vehicle.price}
          </span>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "9px", fontWeight: 400, letterSpacing: "0.03em", lineHeight: 1.3 }}>
            per hour
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col items-center text-center pt-5 pb-6 px-5 flex-1">

        {/* Car name */}
        <h3
          className="text-gray-900 mb-1"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {vehicle.name}
        </h3>

        {/* Min booking */}
        <p className="text-gray-400 text-[13px] font-medium mb-4">
          {vehicle.minBooking}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-4" />

        {/* Description */}
        <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5" style={{ maxWidth: "300px" }}>
          {vehicle.description}
        </p>

        {/* Feature pills */}
        <div className="flex gap-2 justify-center w-full mb-6">
          {vehicle.features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center gap-1.5 text-gray-400 flex-1"
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "10px 8px",
              }}
            >
              {getIcon(f.icon)}
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#4b5563" }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Book Now button — text and arrow centred together */}
        <Link
  href={vehicle.href}
  className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8963f] text-white font-semibold text-[13px] tracking-[0.12em] uppercase px-6 py-4 rounded-full transition-all duration-300 group"
>
          <span>Book Now</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>

      </div>
    </div>
  );
}

export default function PopularVehicles() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">

      {/* Centred max-width wrapper */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Centred heading */}
        <div className="text-center mb-4">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
          >
            POPULAR VEHICLES
          </h2>
        </div>

        {/* Full-width divider */}
        <div className="h-px bg-gray-200 mb-10" />

        {/* Cards grid */}
        <div
          className="vehicles-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {VEHICLES.map((vehicle, i) => (
            <VehicleCard key={i} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vehicles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .vehicles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}