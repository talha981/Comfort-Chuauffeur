"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── ICONS ─────────────────────────────────── */
function PlaneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2a1 1 0 0 0-.6 1.7l3.5 3.5L3 15l-1 4 4-1 3.8-1.7 3.5 3.5a1 1 0 0 0 1.7-.6z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c9a84c", flexShrink: 0, marginTop: "2px" }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="22" height="13" rx="2"/><path d="M5 13l2-4h10l2 4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
    </svg>
  );
}
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
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ─── DATA ───────────────────────────────────── */
const AIRPORTS = [
  {
    code: "LHR",
    name: "Heathrow",
    fullName: "London Heathrow Airport",
    terminals: "T1 · T2 · T3 · T4 · T5",
    note: "Free 60 mins parking included",
  },
  {
    code: "LGW",
    name: "Gatwick",
    fullName: "London Gatwick Airport",
    terminals: "North · South",
    note: "Free 60 mins parking included",
  },
  {
    code: "STN",
    name: "Stansted",
    fullName: "London Stansted Airport",
    terminals: "Main Terminal",
    note: "Free 45 mins parking included",
  },
  {
    code: "LCY",
    name: "City",
    fullName: "London City Airport",
    terminals: "Main Terminal",
    note: "Free 30 mins parking included",
  },
  {
    code: "LTN",
    name: "Luton",
    fullName: "London Luton Airport",
    terminals: "Main Terminal",
    note: "Free 45 mins parking included",
  },
  {
    code: "BHX",
    name: "Birmingham",
    fullName: "Birmingham Airport",
    terminals: "T1 · T2",
    note: "Free 45 mins parking included",
  },
];

const FLEET = [
  {
    name: "Mercedes-Maybach S680",
    tier: "Ultra-Luxury",
    image: "/mercedes-benz-s-class-2023.jpg",
    seats: 3,
    bags: 3,
    fromPrice: "£395",
    route: "from Heathrow",
    features: ["Champagne cooler", "Reclining rear seats", "Partition glass", "V12 Biturbo"],
    href: "/vehicles/maybach",
    badge: "Most Popular",
  },
  {
    name: "Mercedes-Benz S-Class",
    tier: "First Class",
    image: "/mercedes-benz-s-class-2023.jpg",
    seats: 3,
    bags: 3,
    fromPrice: "£195",
    route: "from Heathrow",
    features: ["Executive leather", "Panoramic roof", "Massage seats", "MBUX system"],
    href: "/vehicles/s-class",
    badge: null,
  },
  {
    name: "BMW 7 Series",
    tier: "Business Class",
    image: "/mercedes-benz-s-class-2023.jpg",
    seats: 3,
    bags: 3,
    fromPrice: "£165",
    route: "from Heathrow",
    features: ["Executive comfort", "Privacy glass", "USB & Wi-Fi", "Climate control"],
    href: "/vehicles/bmw-7",
    badge: null,
  },
  {
    name: "Mercedes-Benz V-Class",
    tier: "Group Transfer",
    image: "/mercedes-benz-s-class-2023.jpg",
    seats: 7,
    bags: 7,
    fromPrice: "£245",
    route: "from Heathrow",
    features: ["VIP van interior", "Foldaway tables", "7 passengers", "Extra luggage"],
    href: "/vehicles/v-class",
    badge: null,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Book Online or by Phone",
    description: "Reserve your transfer in minutes via our booking form or call our 24/7 concierge line. Receive instant confirmation.",
  },
  {
    number: "02",
    title: "Flight Monitoring",
    description: "We track your flight in real time. Delays, gate changes, early arrivals — your chauffeur always knows before you land.",
  },
  {
    number: "03",
    title: "Meet & Greet",
    description: "Your Maybach-trained chauffeur waits in the arrivals hall, name board in hand, ready to assist with all luggage.",
  },
  {
    number: "04",
    title: "Door-to-Door Luxury",
    description: "Relax from kerb to destination. Chilled refreshments, preferred climate, complete privacy — your journey, your rules.",
  },
];

const PRICING_TABLE = [
  { from: "Heathrow (LHR)", to: "Central London", maybach: "£395", sClass: "£195", bmw: "£165" },
  { from: "Gatwick (LGW)", to: "Central London", maybach: "£445", sClass: "£225", bmw: "£195" },
  { from: "Stansted (STN)", to: "Central London", maybach: "£475", sClass: "£245", bmw: "£215" },
  { from: "City (LCY)",     to: "Central London", maybach: "£295", sClass: "£145", bmw: "£125" },
  { from: "Luton (LTN)",   to: "Central London", maybach: "£455", sClass: "£235", bmw: "£205" },
  { from: "Heathrow (LHR)", to: "Canary Wharf",  maybach: "£425", sClass: "£215", bmw: "£185" },
];

const WHY_US = [
  {
    icon: <PlaneIcon />,
    title: "Real-Time Flight Tracking",
    description: "We monitor every flight. Early or delayed — your chauffeur adapts instantly, so you never wait.",
  },
  {
    icon: <ClockIcon />,
    title: "60 Minutes Free Waiting",
    description: "Airport transfers include a full hour of complimentary waiting time from landing to exit.",
  },
  {
    icon: <ShieldIcon />,
    title: "Fully Licensed & Insured",
    description: "All chauffeurs hold PCO licences, enhanced DBS clearance, and are trained to Maybach standards.",
  },
  {
    icon: <StarIcon />,
    title: "White-Glove Service",
    description: "Name board, luggage assistance, chilled refreshments — every detail handled before you ask.",
  },
];

/* ─── PAGE ───────────────────────────────────── */
export default function AirportTransferPage() {
  const [activeAirport, setActiveAirport] = useState("LHR");

  return (
    <div className="w-full font-sans" style={{ background: "#fff" }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
  {/* Background image */}
 <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ariport-services.jpg')", filter: "brightness(0.8)" }}
        />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.1) 0%, transparent 55%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.42) 100%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.04) 1px,transparent 1px)`,
          backgroundSize: "100px 100px",
        }} />

  <div
    className="relative z-10 flex flex-col justify-between"
    style={{ minHeight: "100vh", padding: "0 clamp(20px, 5vw, 80px)" }}
  >
    {/* Top badge */}
    <div className="pt-10 sm:pt-16 md:pt-24">
      <span style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
        color: "#c9a84c"    ,
        padding: "7px 14px", borderRadius: "100px",
      }}>
        <span style={{ display: "inline-block", flexShrink: 0 }} />
      </span>
    </div>

    {/* Main content */}
    <div style={{ paddingBottom: "clamp(40px, 6vh, 100px)" }}>
      {/* Divider line */}
      <div className="flex items-center gap-3 mb-4" style={{ flexWrap: "wrap" }}>
        <div style={{ width: "32px", height: "1px", background: "#c9a84c", flexShrink: 0 }} />
        <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c" }}>
          Airport Transfers · All Major Airports
        </span>
        <div style={{ width: "32px", height: "1px", background: "#c9a84c", flexShrink: 0 }} />
      </div>

      <p style={{
        fontSize: "clamp(11px, 2vw, 17px)",
        color: "rgba(255,255,255,0.45)",
        letterSpacing: "0.2em", textTransform: "uppercase",
        fontFamily: "Georgia, serif", marginBottom: "6px",
      }}>
        From Runway to Destination
      </p>

      <h1 style={{
        fontFamily: "Georgia, serif",
        fontSize: "clamp(48px, 14vw, 96px)",
        fontWeight: "400",
        lineHeight: "1.0",
        letterSpacing: "-0.02em",
        marginBottom: "16px",
        background: "linear-gradient(90deg, #fff 55%, rgba(201,168,76,0.9))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "none",
      }}>
        Airport<br />Transfer
      </h1>

      <p style={{
        color: "rgba(255,255,255,0.55)",
        fontSize: "clamp(13px, 1.5vw, 17px)",
        maxWidth: "520px",
        lineHeight: "1.7",
        marginBottom: "28px",
      }}>
        Seamless luxury chauffeur transfers to and from all London airports.
        Flight-tracked. White-glove. Always on time.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
        <Link
          href="/book?service=airport"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "13px 28px", borderRadius: "100px",
            background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
            color: "#0a0c10", fontWeight: "700",
            fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
            textDecoration: "none",
            boxShadow: "0 0 36px rgba(201,168,76,0.45)",
            transition: "all 0.3s",
            whiteSpace: "nowrap",
          }}
        >
          ✦ &nbsp;Book Your Transfer
        </Link>
        <Link
          href="#pricing"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "13px 28px", borderRadius: "100px",
            border: "1px solid rgba(201,168,76,0.5)",
            color: "#c9a84c", fontWeight: "700",
            fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s",
            whiteSpace: "nowrap",
          }}
        >
          View Pricing
        </Link>
      </div>

      {/* Stat cards — inline on mobile, absolutely positioned on desktop */}
      <div
        className="stat-cards"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {[
          { value: "60", unit: "min", label: "Free wait time" },
          { value: "24", unit: "/7", label: "Available always" },
          { value: "5★", unit: "", label: "Rated service" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "rgba(10,12,16,0.65)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "14px", padding: "12px 16px",
            backdropFilter: "blur(12px)",
            textAlign: "center", minWidth: "80px", flex: "1 1 80px",
          }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#c9a84c", lineHeight: 1 }}>
              {s.value}<span style={{ fontSize: "12px" }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Tailwind-style media query override for desktop: reposition stat cards */}
  <style>{`
    @media (min-width: 768px) {
      .stat-cards {
        position: absolute !important;
        bottom: clamp(40px, 6vh, 80px) !important;
        right: clamp(24px, 5vw, 80px) !important;
        flex-wrap: nowrap !important;
        gap: 14px !important;
        margin-bottom: 0 !important;
      }
    }
  `}</style>
</section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US  (dark section)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#0a0c10", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.04) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
              Why Choose Us
            </span>
          </div>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#fff", fontWeight: "400", marginBottom: "56px",
            letterSpacing: "-0.01em",
          }}>
            The Standard of London<br />
            <span style={{ color: "#c9a84c" }}>Airport Chauffeur</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px" }}>
            {WHY_US.map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.12)",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Subtle corner accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "40px", height: "1px", background: "#c9a84c",
                }} />
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "1px", height: "40px", background: "#c9a84c",
                }} />
                <div style={{ color: "#c9a84c", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "17px", color: "#fff", marginBottom: "12px", fontWeight: "400",
                }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AIRPORTS WE SERVE  (white)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Coverage
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#0a0c10", fontWeight: "400", marginBottom: "48px",
          letterSpacing: "-0.01em",
        }}>
          Airports We Serve
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {AIRPORTS.map((airport) => (
            <div
              key={airport.code}
              onClick={() => setActiveAirport(airport.code)}
              style={{
                cursor: "pointer",
                border: activeAirport === airport.code
                  ? "1px solid rgba(201,168,76,0.8)"
                  : "1px solid rgba(10,12,16,0.1)",
                borderRadius: "16px",
                padding: "28px",
                transition: "all 0.25s",
                background: activeAirport === airport.code
                  ? "rgba(201,168,76,0.04)"
                  : "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {activeAirport === airport.code && (
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "100%", height: "2px",
                  background: "linear-gradient(90deg, #c9a84c, #f0d98a, #c9a84c)",
                }} />
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "36px", fontWeight: "400",
                  color: activeAirport === airport.code ? "#c9a84c" : "rgba(10,12,16,0.15)",
                  lineHeight: 1, transition: "color 0.25s",
                }}>
                  {airport.code}
                </span>
                <div style={{
                  display: "flex", alignItems: "center",
                  color: "#c9a84c", opacity: activeAirport === airport.code ? 1 : 0,
                  transition: "opacity 0.25s",
                }}>
                  <ArrowIcon />
                </div>
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#0a0c10", marginBottom: "6px", fontWeight: "400" }}>
                {airport.fullName}
              </p>
              <p style={{ fontSize: "12px", color: "rgba(10,12,16,0.4)", marginBottom: "8px", letterSpacing: "0.04em" }}>
                {airport.terminals}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckIcon />
                <span style={{ fontSize: "12px", color: "rgba(10,12,16,0.5)" }}>{airport.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FLEET  (dark)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#0a0c10", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Our Fleet
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#fff", fontWeight: "400", marginBottom: "56px",
          letterSpacing: "-0.01em",
        }}>
          Choose Your Class<br />
          <span style={{ color: "#c9a84c" }}>of Service</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {FLEET.map((car, i) => (
            <div key={i} style={{
              border: car.badge
                ? "1px solid rgba(201,168,76,0.6)"
                : "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              display: "flex", flexDirection: "column",
              position: "relative",
            }}>
              {/* Top gold bar for featured */}
              {car.badge && (
                <div style={{
                  background: "linear-gradient(90deg, #c9a84c, #f0d98a)",
                  padding: "7px 20px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#0a0c10" }}>
                    ✦ {car.badge}
                  </span>
                </div>
              )}

              {/* Car image placeholder */}
              <div style={{
                height: "170px", background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
              }}>
                <div style={{ color: "rgba(201,168,76,0.3)" }}>
                  {/* placeholder car silhouette */}
                  <svg width="160" height="80" viewBox="0 0 200 80" fill="none">
                    <path d="M30 55 L35 30 Q60 12 100 12 Q140 12 165 30 L170 55 Z" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5"/>
                    <rect x="15" y="55" width="170" height="18" rx="3" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5"/>
                    <circle cx="50" cy="74" r="10" fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5"/>
                    <circle cx="150" cy="74" r="10" fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5"/>
                    <path d="M60 30 L75 16 L125 16 L140 30 Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
                  </svg>
                </div>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{
                  display: "inline-block",
                  fontSize: "10px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#c9a84c", marginBottom: "8px",
                }}>
                  {car.tier}
                </span>
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "19px", color: "#fff", fontWeight: "400", marginBottom: "16px",
                }}>
                  {car.name}
                </h3>

                {/* Specs */}
                <div style={{ display: "flex", gap: "16px", marginBottom: "18px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ color: "#c9a84c" }}><PeopleIcon /></span> {car.seats} pax
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ color: "#c9a84c" }}><BagIcon /></span> {car.bags} bags
                  </span>
                </div>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px", flex: 1 }}>
                  {car.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "2px", letterSpacing: "0.08em" }}>from {car.route}</p>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#c9a84c", fontWeight: "400" }}>{car.fromPrice}</p>
                  </div>
                  <Link href={car.href} style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "11px 22px", borderRadius: "100px",
                    border: "1px solid rgba(201,168,76,0.45)",
                    color: "#c9a84c", fontSize: "11px", fontWeight: "700",
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    textDecoration: "none", transition: "all 0.25s",
                  }}>
                    Select <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS  (white)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.06) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
              Our Process
            </span>
          </div>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#0a0c10", fontWeight: "400", marginBottom: "64px",
            letterSpacing: "-0.01em",
          }}>
            How Your Transfer Works
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0" }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} style={{
                padding: "36px 32px",
                borderLeft: i > 0 ? "none" : undefined,
                borderRight: "1px solid rgba(201,168,76,0.2)",
                borderTop: "1px solid rgba(201,168,76,0.2)",
                borderBottom: "1px solid rgba(201,168,76,0.2)",
                ...(i === 0 ? { borderLeft: "1px solid rgba(201,168,76,0.2)" } : {}),
                position: "relative",
              }}>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "56px", fontWeight: "400", lineHeight: 1,
                  color: "rgba(201,168,76,0.12)", marginBottom: "20px",
                  letterSpacing: "-0.02em",
                }}>
                  {step.number}
                </div>
                <div style={{ width: "28px", height: "1px", background: "#c9a84c", marginBottom: "18px" }} />
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "17px", color: "#0a0c10", fontWeight: "400",
                  marginBottom: "12px",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(10,12,16,0.5)", lineHeight: "1.7", margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING TABLE  (dark)
      ══════════════════════════════════════════ */}
      <section id="pricing" style={{ background: "#0a0c10", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Transparent Pricing
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#fff", fontWeight: "400", marginBottom: "48px",
          letterSpacing: "-0.01em",
        }}>
          Fixed Airport Rates
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
                <th style={{ textAlign: "left", padding: "16px 20px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: "600" }}>Route</th>
                <th style={{ textAlign: "right", padding: "16px 20px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", fontWeight: "600" }}>Maybach S680</th>
                <th style={{ textAlign: "right", padding: "16px 20px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: "600" }}>S-Class</th>
                <th style={{ textAlign: "right", padding: "16px 20px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: "600" }}>BMW 7</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_TABLE.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "18px 20px" }}>
                    <span style={{ color: "#fff", fontSize: "14px" }}>{row.from}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", margin: "0 8px" }}>→</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{row.to}</span>
                  </td>
                  <td style={{ textAlign: "right", padding: "18px 20px" }}>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#c9a84c", fontWeight: "400" }}>{row.maybach}</span>
                  </td>
                  <td style={{ textAlign: "right", padding: "18px 20px" }}>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "rgba(255,255,255,0.55)", fontWeight: "400" }}>{row.sClass}</span>
                  </td>
                  <td style={{ textAlign: "right", padding: "18px 20px" }}>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "rgba(255,255,255,0.55)", fontWeight: "400" }}>{row.bmw}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "20px", letterSpacing: "0.04em" }}>
          All prices are fixed. Subject to VAT. Meet &amp; greet and waiting time included. Congestion Charge may apply.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          INCLUDES  (white — included in every booking)
      ══════════════════════════════════════════ */}
      <section style={{
        background: "#fff",
        padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.06) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 100px)", alignItems: "center" }}>
          {/* Left: large quote / headline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
                Every Booking Includes
              </span>
            </div>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#0a0c10", fontWeight: "400", lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}>
              Nothing Left<br />
              to Chance
            </h2>
            <div style={{ width: "48px", height: "1px", background: "#c9a84c", margin: "28px 0" }} />
            <p style={{ fontSize: "15px", color: "rgba(10,12,16,0.5)", lineHeight: "1.8", maxWidth: "380px" }}>
              Every airport transfer is complete from the moment you land. We handle every detail so you arrive in total comfort.
            </p>
          </div>

          {/* Right: checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              "White-glove meet & greet with personalised name board",
              "Real-time flight tracking — we wait if you're delayed",
              "60 minutes complimentary waiting time on all airport pickups",
              "Dedicated Maybach-trained professional chauffeur",
              "Chilled water, refreshments & champagne (Maybach)",
              "Free cancellation up to 24 hours before pickup",
              "All luggage assistance, door to door",
              "Fixed pricing — no surge, no surprises",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "14px",
                padding: "16px 0",
                borderBottom: i < 7 ? "1px solid rgba(201,168,76,0.15)" : "none",
              }}>
                <CheckIcon />
                <span style={{ fontSize: "14px", color: "rgba(10,12,16,0.65)", lineHeight: "1.55" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER  (gold)
      ══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, #0a0c10 0%, #1a1508 40%, #0a0c10 100%)",
        padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Gold radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.05) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.05) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Decorative divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "28px" }}>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>✦</span>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
          </div>

          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(30px, 5vw, 60px)",
            color: "#fff", fontWeight: "400",
            letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.1,
          }}>
            Reserve Your Airport Transfer
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", marginBottom: "44px", maxWidth: "480px", margin: "0 auto 44px" }}>
            Available 24 hours a day, 365 days a year.<br />
            Instant confirmation. Fixed pricing. Zero compromise.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book?service=airport" style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              padding: "16px 40px", borderRadius: "100px",
              background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
              color: "#0a0c10", fontWeight: "700",
              fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 0 48px rgba(201,168,76,0.4)",
              transition: "all 0.3s",
            }}>
              ✦ &nbsp;Book Now — Instant Confirmation
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "16px 36px", borderRadius: "100px",
              border: "1px solid rgba(201,168,76,0.45)",
              color: "#c9a84c", fontWeight: "700",
              fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.3s",
            }}>
              Call Our Concierge
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}