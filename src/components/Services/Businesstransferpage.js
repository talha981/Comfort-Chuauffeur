"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* ─── ICONS ─────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ─── DATA ───────────────────────────────────── */
const SERVICES = [
  {
    icon: <BriefcaseIcon />,
    title: "Executive Road Shows",
    description: "Multi-stop city itineraries managed seamlessly. Your chauffeur waits between meetings, adapting in real time to your schedule.",
  },
  {
    icon: <CalendarIcon />,
    title: "Corporate Account",
    description: "Centralised billing, monthly invoicing, and a dedicated account manager for all your business travel needs.",
  },
  {
    icon: <PeopleIcon />,
    title: "Group & Events",
    description: "Fleet coordination for conferences, board dinners, and corporate events. Multiple vehicles dispatched with precision.",
  },
  {
    icon: <WifiIcon />,
    title: "Mobile Office",
    description: "In-car Wi-Fi, privacy screen, and a silent cabin — turn every journey into productive time between engagements.",
  },
  {
    icon: <ShieldIcon />,
    title: "Discretion & Security",
    description: "All chauffeurs sign NDAs. Enhanced DBS-cleared. Trusted by FTSE 100 executives, heads of state, and private offices.",
  },
  {
    icon: <ClockIcon />,
    title: "24/7 Availability",
    description: "Early morning flights, late-night dinners, last-minute requests — our concierge desk never closes.",
  },
];

const FLEET = [
  {
    name: "Mercedes-Maybach S680",
    tier: "Ultra-Luxury",
    seats: 3,
    bags: 3,
    fromPrice: "£395",
    features: ["Champagne cooler", "Reclining rear seats", "Partition glass", "V12 Biturbo"],
    badge: "Most Popular",
  },
  {
    name: "Mercedes-Benz S-Class",
    tier: "First Class",
    seats: 3,
    bags: 3,
    fromPrice: "£195",
    features: ["Executive leather", "Panoramic roof", "Massage seats", "MBUX system"],
    badge: null,
  },
  {
    name: "Mercedes-Benz V-Class",
    tier: "Group Transfer",
    seats: 7,
    bags: 7,
    fromPrice: "£245",
    features: ["VIP van interior", "Foldaway tables", "7 passengers", "Extra luggage"],
    badge: null,
  },
];

// 6 client logos — replace image paths with your own
const CLIENT_LOGOS = [
  { name: "Client 1", image: "/clients/client-1.png" },
  { name: "Client 2", image: "/clients/client-2.png" },
  { name: "Client 3", image: "/clients/client-3.png" },
  { name: "Client 4", image: "/clients/client-4.png" },
  { name: "Client 5", image: "/clients/client-5.png" },
  { name: "Client 6", image: "/clients/client-6.png" },
];

const STATS = [
  { value: "500+", label: "Corporate Clients" },
  { value: "12k+", label: "Journeys Per Year" },
  { value: "24/7", label: "Concierge Desk" },
  { value: "100%", label: "NDA Compliance" },
];

/* ─── LOGO SLIDER ────────────────────────────── */
/*
  Layout (exactly as in screenshot):
  - Full viewport width, overflow hidden
  - Left card: bleeds from left edge, right half visible
  - Center card: large, centred, gold border
  - Right card: bleeds off right edge, left half visible
  Achieved with a flex row centred on the viewport,
  no padding, overflow:hidden on the wrapper.
*/
/* ─── BRAND SVG LOGOS ────────────────────────── */
const BRAND_LOGOS = [
  {
    name: "British Airways",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <text x="130" y="28" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill="white" letterSpacing="4">BRITISH</text>
        <text x="130" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fill="white" letterSpacing="2">AIRWAYS</text>
        <line x1="30" y1="64" x2="230" y2="64" stroke="white" strokeWidth="0.8" opacity="0.3"/>
        <text x="130" y="76" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="white" opacity="0.5" letterSpacing="6">EST. 1974</text>
      </svg>
    ),
  },
  {
    name: "Barclays",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <path d="M115 18 Q130 8 145 18 Q140 28 130 30 Q120 28 115 18Z" fill="white" opacity="0.9"/>
        <path d="M122 30 Q130 35 138 30 L136 40 Q130 43 124 40Z" fill="white" opacity="0.7"/>
        <text x="130" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="300" fill="white" letterSpacing="3">BARCLAYS</text>
      </svg>
    ),
  },
  {
    name: "Rolex",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <path d="M114 24 L119 16 L124 24 L130 12 L136 24 L141 16 L146 24 L148 31 L112 31Z" fill="white" opacity="0.85"/>
        <line x1="111" y1="31" x2="149" y2="31" stroke="white" strokeWidth="1.2"/>
        <text x="130" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="26" fill="white" letterSpacing="5">ROLEX</text>
        <text x="130" y="70" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="white" opacity="0.45" letterSpacing="5">GENEVA · EST. 1905</text>
      </svg>
    ),
  },
  {
    name: "Goldman Sachs",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <text x="130" y="34" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="300" fill="white" letterSpacing="2">GOLDMAN</text>
        <line x1="50" y1="43" x2="210" y2="43" stroke="white" strokeWidth="0.5" opacity="0.3"/>
        <text x="130" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="300" fill="white" letterSpacing="2">SACHS</text>
      </svg>
    ),
  },
  {
    name: "HSBC",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <polygon points="116,16 126,10 136,16 136,32 126,38 116,32" fill="none" stroke="white" strokeWidth="1.2" opacity="0.7"/>
        <line x1="116" y1="24" x2="136" y2="24" stroke="white" strokeWidth="0.8" opacity="0.4"/>
        <line x1="126" y1="10" x2="126" y2="38" stroke="white" strokeWidth="0.8" opacity="0.4"/>
        <text x="130" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="300" fill="white" letterSpacing="6">HSBC</text>
      </svg>
    ),
  },
  {
    name: "Rolls-Royce",
    svg: (
      <svg viewBox="0 0 260 80" width="240" height="75" fill="none">
        <text x="130" y="28" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="white" letterSpacing="3" opacity="0.8">✦ RR ✦</text>
        <line x1="40" y1="36" x2="220" y2="36" stroke="white" strokeWidth="0.5" opacity="0.2"/>
        <text x="130" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="white" letterSpacing="4">ROLLS-ROYCE</text>
        <text x="130" y="70" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="white" opacity="0.4" letterSpacing="5">MOTOR CARS</text>
      </svg>
    ),
  },
];
/* ─── LOGO SLIDER ────────────────────────────── */
function LogoSlider() {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  const total = BRAND_LOGOS.length;
  const touchStartX = useRef(null);

  const go = (dir) => {
    if (locked) return;
    setLocked(true);
    setTimeout(() => setLocked(false), 450);
    setCurrent((prev) => (prev + dir + total) % total);
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  const Card = ({ idx, isCenter, onClick }) => (
    <div
      onClick={onClick}
      style={{
        width: isCenter ? "var(--card-center-w)" : "var(--card-side-w)",
        height: isCenter ? "clamp(140px, 17vw, 240px)" : "clamp(120px, 14vw, 200px)",
        flexShrink: 0,
        background: "#000",
        border: isCenter ? "1.5px solid rgba(201,168,76,0.6)" : "1px solid rgba(90,90,90,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        opacity: isCenter ? 1 : 0.5,
        cursor: isCenter ? "default" : "pointer",
        transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        position: "relative",
        zIndex: isCenter ? 2 : 1,
      }}
    >
      {BRAND_LOGOS[idx].svg}
    </div>
  );

  return (
    <div style={{ background: "#f5f4f1", paddingTop: "48px", paddingBottom: "52px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ width: "36px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#c9a84c" }}>
            Trusted By
          </span>
          <div style={{ width: "36px", height: "1px", background: "#c9a84c" }} />
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(20px, 3vw, 32px)",
          color: "#0a0c10", fontWeight: "400", letterSpacing: "-0.01em",
        }}>
          London's Most Respected Companies
        </h2>
      </div>

      <div
        style={{ width: "100%", overflow: "hidden", position: "relative",
          height: "clamp(140px, 18vw, 260px)", userSelect: "none" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <style>{`
          :root {
            --card-center-w: clamp(280px, 50vw, 660px);
            --card-side-w: clamp(160px, 27vw, 370px);
            --card-gap: 4px;
          }
          @media (max-width: 480px) {
            :root {
              --card-center-w: 72vw;
              --card-side-w: 38vw;
              --card-gap: 3px;
            }
          }
        `}</style>

        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex", alignItems: "center", gap: "var(--card-gap)",
          width: "calc(var(--card-center-w) + 2 * var(--card-side-w) + 2 * var(--card-gap))",
        }}>
          <Card idx={prevIdx} isCenter={false} onClick={() => go(-1)} />
          <Card idx={current} isCenter={true} onClick={null} />
          <Card idx={nextIdx} isCenter={false} onClick={() => go(1)} />
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", marginTop: "22px", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {BRAND_LOGOS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? "30px" : "8px", height: "3px", borderRadius: "2px",
                background: i === current ? "#0a0c10" : "rgba(10,12,16,0.2)",
                border: "none", cursor: "pointer", padding: 0, transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {[{ fn: () => go(-1), icon: <ChevronLeft /> }, { fn: () => go(1), icon: <ChevronRight /> }].map(({ fn, icon }, i) => (
            <button key={i} onClick={fn} style={{
              width: "38px", height: "38px", borderRadius: "50%",
              border: "1px solid rgba(10,12,16,0.2)", background: "transparent", color: "#0a0c10",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0a0c10"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0a0c10"; }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── CAR SILHOUETTE SVG ─────────────────────── */
function CarSVG() {
  return (
    <svg width="150" height="70" viewBox="0 0 200 80" fill="none">
      <path d="M30 55 L35 30 Q60 12 100 12 Q140 12 165 30 L170 55 Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5"/>
      <rect x="15" y="55" width="170" height="18" rx="3" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5"/>
      <circle cx="50" cy="74" r="10" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
      <circle cx="150" cy="74" r="10" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
      <path d="M60 30 L75 16 L125 16 L140 30 Z" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
    </svg>
  );
}

/* ─── PAGE ───────────────────────────────────── */
export default function BusinessTransferPage() {
  return (
    <div className="w-full font-sans" style={{ background: "#fff" }}>

      <style>{`
        /* Stat cards: stacked on mobile, float bottom-right on desktop */
        @media (min-width: 768px) {
          .biz-stat-cards {
            position: absolute !important;
            bottom: clamp(40px, 6vh, 80px) !important;
            right: clamp(24px, 5vw, 80px) !important;
            flex-wrap: nowrap !important;
            gap: 14px !important;
            margin-bottom: 0 !important;
          }
        }
        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        @media (max-width: 860px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .services-grid { grid-template-columns: 1fr; } }

        /* Fleet */
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) { .fleet-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .fleet-grid { grid-template-columns: 1fr; } }

        /* Split sections */
        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px, 6vw, 100px);
          align-items: center;
        }
        @media (max-width: 680px) { .split-grid { grid-template-columns: 1fr; } }

        /* Corp feature 2x2 */
        .corp-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 400px) { .corp-features { grid-template-columns: 1fr; } }

        /* Hero buttons */
        .hero-btns { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 36px; }
        /* CTA row */
        .cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/businesstransfer.jpg')", filter: "brightness(0.8)" }}
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

        <div className="relative z-10 flex flex-col justify-between"
          style={{ minHeight: "100vh", padding: "0 clamp(20px, 5vw, 80px)" }}
        >
          <div style={{ paddingTop: "clamp(40px, 10vh, 100px)" }} />

          <div style={{ paddingBottom: "clamp(40px, 6vh, 100px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <div style={{ width: "32px", height: "1px", background: "#c9a84c", flexShrink: 0 }} />
              <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c" }}>
                Business · Corporate · Executive
              </span>
              <div style={{ width: "32px", height: "1px", background: "#c9a84c", flexShrink: 0 }} />
            </div>

            <p style={{
              fontSize: "clamp(11px, 2vw, 16px)", color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "Georgia, serif", marginBottom: "6px",
            }}>
              Where Business Moves
            </p>

            <h1 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(44px, 13vw, 96px)",
              fontWeight: "400", lineHeight: "1.0",
              letterSpacing: "-0.02em", marginBottom: "16px",
              background: "linear-gradient(90deg, #fff 55%, rgba(201,168,76,0.9))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Business<br />Travel
            </h1>

            <p style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(13px, 1.5vw, 17px)",
              maxWidth: "500px", lineHeight: "1.7", marginBottom: "28px",
            }}>
              Executive chauffeur services for London's leading professionals.
              Discreet. Punctual. Always corporate-ready.
            </p>

            <div className="hero-btns">
              <Link href="/book?service=business" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "13px 28px", borderRadius: "100px",
                background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
                color: "#0a0c10", fontWeight: "700",
                fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                textDecoration: "none", boxShadow: "0 0 36px rgba(201,168,76,0.45)",
                whiteSpace: "nowrap",
              }}>
                ✦ &nbsp;Book Executive Transfer
              </Link>
              <Link href="/corporate-account" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "13px 28px", borderRadius: "100px",
                border: "1px solid rgba(201,168,76,0.5)",
                color: "#c9a84c", fontWeight: "700",
                fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                textDecoration: "none", whiteSpace: "nowrap",
              }}>
                Corporate Account
              </Link>
            </div>

            <div className="biz-stat-cards"
              style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
            >
              {STATS.map((s) => (
                <div key={s.label} style={{
                  background: "rgba(10,12,16,0.65)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "14px", padding: "12px 16px",
                  backdropFilter: "blur(12px)",
                  textAlign: "center", minWidth: "76px", flex: "1 1 76px",
                }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#c9a84c", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", marginTop: "4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUSTED BY — FULL-WIDTH LOGO SLIDER
      ══════════════════════════════════════════ */}
      <LogoSlider />

      {/* ══════════════════════════════════════════
          CORPORATE SERVICES  (dark)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#0a0c10", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Corporate Services
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#fff", fontWeight: "400", marginBottom: "56px",
          letterSpacing: "-0.01em",
        }}>
          Built Around<br />
          <span style={{ color: "#c9a84c" }}>Your Business</span>
        </h2>

        <div className="services-grid">
          {SERVICES.map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,168,76,0.12)",
              padding: "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "1px", background: "#c9a84c" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "40px", background: "#c9a84c" }} />
              <div style={{ color: "#c9a84c", marginBottom: "20px" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "#fff", marginBottom: "12px", fontWeight: "400" }}>
                {item.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FLEET  (white)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Executive Fleet
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#0a0c10", fontWeight: "400", marginBottom: "56px",
          letterSpacing: "-0.01em",
        }}>
          Choose Your Class<br />
          <span style={{ color: "#c9a84c" }}>of Service</span>
        </h2>

        <div className="fleet-grid">
          {FLEET.map((car, i) => (
            <div key={i} style={{
              border: car.badge ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(10,12,16,0.1)",
              borderRadius: "20px", overflow: "hidden",
              background: "#fff", display: "flex", flexDirection: "column",
            }}>
              {car.badge && (
                <div style={{ background: "linear-gradient(90deg, #c9a84c, #f0d98a)", padding: "7px 20px" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#0a0c10" }}>
                    ✦ {car.badge}
                  </span>
                </div>
              )}
              <div style={{
                height: "150px",
                background: "rgba(10,12,16,0.03)",
                borderBottom: "1px solid rgba(10,12,16,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <CarSVG />
              </div>
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontSize: "10px", fontWeight: "700", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#c9a84c", marginBottom: "8px", display: "block",
                }}>
                  {car.tier}
                </span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#0a0c10", fontWeight: "400", marginBottom: "12px" }}>
                  {car.name}
                </h3>
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(10,12,16,0.4)" }}>{car.seats} pax</span>
                  <span style={{ fontSize: "12px", color: "rgba(10,12,16,0.25)" }}>·</span>
                  <span style={{ fontSize: "12px", color: "rgba(10,12,16,0.4)" }}>{car.bags} bags</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px", flex: 1 }}>
                  {car.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: "rgba(10,12,16,0.5)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(10,12,16,0.07)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "10px", color: "rgba(10,12,16,0.3)", marginBottom: "2px" }}>from Heathrow</p>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#c9a84c", fontWeight: "400", margin: 0 }}>{car.fromPrice}</p>
                  </div>
                  <Link href={`/vehicles/${car.name.toLowerCase().replace(/ /g, "-")}`} style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "10px 20px", borderRadius: "100px",
                    border: "1px solid rgba(201,168,76,0.45)",
                    color: "#c9a84c", fontSize: "11px", fontWeight: "700",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    textDecoration: "none",
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
          WHAT'S INCLUDED  (dark)
      ══════════════════════════════════════════ */}
      <section style={{
        background: "#0a0c10",
        padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.04) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div className="split-grid" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
                Every Booking Includes
              </span>
            </div>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#fff", fontWeight: "400", lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}>
              Nothing Left<br />
              to Chance
            </h2>
            <div style={{ width: "48px", height: "1px", background: "#c9a84c", margin: "28px 0" }} />
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", maxWidth: "380px", marginBottom: "32px" }}>
              From the first mile to the last, your executive journey is handled with total precision and discretion.
            </p>
            <Link href="/book?service=business" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "13px 28px", borderRadius: "100px",
              background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
              color: "#0a0c10", fontWeight: "700",
              fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
              textDecoration: "none", boxShadow: "0 0 36px rgba(201,168,76,0.3)",
            }}>
              ✦ &nbsp;Book Now
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              "Dedicated PCO-licensed executive chauffeur",
              "In-car Wi-Fi and device charging as standard",
              "NDA-signed chauffeurs for confidential travel",
              "Real-time traffic rerouting — never late",
              "Chilled water and premium refreshments",
              "Fixed pricing — no surge, no hidden fees",
              "Monthly invoicing for corporate accounts",
              "24/7 concierge desk for last-minute changes",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "14px",
                padding: "15px 0",
                borderBottom: i < 7 ? "1px solid rgba(201,168,76,0.1)" : "none",
              }}>
                <CheckIcon />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.55" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORPORATE ACCOUNT  (white)
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "28px", height: "1px", background: "#c9a84c" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
              Corporate Accounts
            </span>
          </div>
          <div className="split-grid">
            <div>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#0a0c10", fontWeight: "400",
                letterSpacing: "-0.01em", lineHeight: "1.15", marginBottom: "20px",
              }}>
                Open a Corporate<br />
                <span style={{ color: "#c9a84c" }}>Account Today</span>
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(10,12,16,0.5)", lineHeight: "1.8", maxWidth: "420px", marginBottom: "32px" }}>
                Centralised billing, dedicated account management, and priority dispatch for your entire team. Trusted by London's top firms.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link href="/corporate-account" style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 28px", borderRadius: "100px",
                  background: "#0a0c10", color: "#c9a84c", fontWeight: "700",
                  fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                }}>
                  ✦ &nbsp;Open Account
                </Link>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 28px", borderRadius: "100px",
                  border: "1px solid rgba(10,12,16,0.2)",
                  color: "#0a0c10", fontWeight: "700",
                  fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                  textDecoration: "none",
                }}>
                  Speak to Sales
                </Link>
              </div>
            </div>

            <div className="corp-features">
              {[
                { value: "Monthly", label: "Consolidated invoicing" },
                { value: "Priority", label: "Fleet dispatch" },
                { value: "Dedicated", label: "Account manager" },
                { value: "Custom", label: "Rate agreements" },
              ].map((item, i) => (
                <div key={i} style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "16px", padding: "24px 20px",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "30px", height: "1px", background: "#c9a84c" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "30px", background: "#c9a84c" }} />
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#c9a84c", fontWeight: "400", margin: "0 0 6px" }}>{item.value}</p>
                  <p style={{ fontSize: "12px", color: "rgba(10,12,16,0.45)", letterSpacing: "0.04em", margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER  (dark gold)
      ══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, #0a0c10 0%, #1a1508 40%, #0a0c10 100%)",
        padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.05) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.05) 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "28px" }}>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>✦</span>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
          </div>

          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(26px, 5vw, 60px)",
            color: "#fff", fontWeight: "400",
            letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.1,
          }}>
            Reserve Your Executive Transfer
          </h2>
          <p style={{
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "480px", margin: "0 auto 44px", lineHeight: "1.7",
          }}>
            Available 24 hours a day, 365 days a year.<br />
            Instant confirmation. Fixed pricing. Zero compromise.
          </p>

          <div className="cta-row">
            <Link href="/book?service=business" style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              padding: "16px 36px", borderRadius: "100px",
              background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
              color: "#0a0c10", fontWeight: "700",
              fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 0 48px rgba(201,168,76,0.4)", whiteSpace: "nowrap",
            }}>
              ✦ &nbsp;Book Now — Instant Confirmation
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "16px 32px", borderRadius: "100px",
              border: "1px solid rgba(201,168,76,0.45)",
              color: "#c9a84c", fontWeight: "700",
              fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
              textDecoration: "none", whiteSpace: "nowrap",
            }}>
              Call Our Concierge
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}