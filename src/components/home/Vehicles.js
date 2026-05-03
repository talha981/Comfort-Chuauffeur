"use client";

import Link from "next/link";

const VEHICLES = [
  {
    name: "Mercedes Benz S-Class ",
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
    name: "Mercedes Benz S-Class ",
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

// SVG Icons matching the reference
function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}

function SeatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22V8a2 2 0 012-2h8a2 2 0 012 2v14"/>
      <path d="M3 22h12"/>
      <path d="M15 8h2a2 2 0 012 2v3a2 2 0 002 2h0a2 2 0 002-2V9.5L19 6"/>
      <line x1="7" y1="6" x2="7" y2="2"/>
      <line x1="11" y1="6" x2="11" y2="2"/>
    </svg>
  );
}

function TransmissionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="6" height="6" rx="1"/>
      <rect x="16" y="3" width="6" height="6" rx="1"/>
      <rect x="9" y="15" width="6" height="6" rx="1"/>
      <path d="M5 9v4h14V9"/>
      <line x1="12" y1="13" x2="12" y2="15"/>
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
    <div className="flex flex-col">
      {/* Image with price badge */}
      <div className="relative w-full" style={{ aspectRatio: "430/220" }}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          style={{ display: "block" }}
        />
        {/* Price badge – dark circle top right */}
        <div
          className="absolute top-3 right-3 flex flex-col items-center justify-center rounded-full"
          style={{
            width: "72px",
            height: "72px",
            background: "rgba(10,10,10,0.88)",
          }}
        >
          <span style={{ color: "#c9a84c", fontSize: "18px", fontWeight: 700, lineHeight: 1.1 }}>
            £{vehicle.price}
          </span>
          <span style={{ color: "#ffffff", fontSize: "10px", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.2 }}>
            per hour
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col items-center text-center pt-5 pb-0 px-2">
        {/* Car name */}
        <h3
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "6px",
            lineHeight: 1.25,
          }}
        >
          {vehicle.name}
        </h3>

        {/* Min booking */}
        <p
          style={{
            color: "#c9a84c",
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          {vehicle.minBooking}
        </p>

        {/* Description */}
        <p
          style={{
            color: "#555",
            fontSize: "13.5px",
            lineHeight: 1.55,
            marginBottom: "18px",
            maxWidth: "340px",
          }}
        >
          {vehicle.description}
        </p>

        {/* Feature pills */}
        <div className="flex gap-2 justify-center w-full mb-5" style={{ flexWrap: "wrap" }}>
          {vehicle.features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center gap-1"
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "10px 14px",
                minWidth: "85px",
                flex: "1",
              }}
            >
              {getIcon(f.icon)}
              <span
                style={{
                  fontSize: "12px",
                  color: "#333",
                  fontWeight: 500,
                  marginTop: "2px",
                }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Book Now button */}
        <Link
          href={vehicle.href}
          className="w-full flex items-center justify-center transition-opacity duration-200 hover:opacity-85"
          style={{
            background: "#c9a84c",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            padding: "16px 0",
            borderRadius: "0",
            textDecoration: "none",
          }}
        >
          Book Now →
        </Link>
      </div>
    </div>
  );
}

export default function PopularVehicles() {
  return (
    <section
      style={{
        background: "#f4f4f4",
        paddingTop: "60px",
        paddingBottom: "70px",
        width: "100%",
      }}
    >
      {/* Section heading */}
      <div className="text-center mb-10">
        <h2
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "-0.01em",
            marginBottom: "14px",
          }}
        >
          Popular Vehicles
        </h2>
        {/* Gold underline bar */}
        <div
          style={{
            width: "44px",
            height: "3px",
            background: "#c9a84c",
            margin: "0 auto",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
        className="vehicles-grid"
      >
        {VEHICLES.map((vehicle) => (
          <VehicleCard key={vehicle.name} vehicle={vehicle} />
        ))}
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