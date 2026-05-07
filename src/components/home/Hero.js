"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05080f]">

      {/* ── Background image layer ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080f]/60 via-transparent to-[#05080f]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/50 via-transparent to-[#05080f]/50" />
      </div>

      {/* ── Decorative gold grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Radial gold glow ── */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full">

        {/* Logo — much larger across all breakpoints */}
        <div
          className="mb-6 sm:mb-8 w-full flex justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <img
            src="/logo3.png"
            alt="Comfort Chauffeur"
            className="w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[42vw] xl:w-[36vw] max-w-[640px] drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 50px rgba(201,168,76,0.30))" }}
          />
        </div>

        {/* Thin gold divider */}
        <div
          style={{
            width: loaded ? "140px" : "0px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginBottom: "24px",
            transition: "width 1.2s ease 0.4s",
          }}
        />

        {/* Tagline */}
        <p
          className="text-white/50 mb-10 sm:mb-12 tracking-[0.25em] uppercase px-4"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(10px, 2.5vw, 13px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          }}
        >
          Premier Executive Travel · Experience &amp; Service
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
          }}
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e8cc7a, #c9a84c)",
              color: "#0a0c10",
              fontSize: "clamp(11px, 2.5vw, 13px)",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              boxShadow: "0 0 30px rgba(201,168,76,0.35)",
              padding: "16px 36px",
              whiteSpace: "nowrap",
            }}
          >
            Book Your Journey
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
            style={{
              border: "1px solid rgba(201,168,76,0.5)",
              color: "#c9a84c",
              fontSize: "clamp(11px, 2.5vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "16px 36px",
              whiteSpace: "nowrap",
            }}
          >
            Our Services
          </Link>
        </div>

        {/* Trust badges — 2x2 on mobile, 4 in a row on sm+ */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-12 mt-14 sm:mt-16 w-full max-w-lg sm:max-w-2xl px-4"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.2s ease 1.2s",
          }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "5★", label: "Rated Service" },
            { value: "24/7", label: "Available" },
            { value: "100%", label: "Carbon Offset" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-1.5">
              {/* Gold top accent */}
              <div
                style={{
                  width: "20px",
                  height: "1px",
                  background: "rgba(201,168,76,0.5)",
                  marginBottom: "6px",
                }}
              />
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(22px, 5vw, 28px)",
                  color: "#c9a84c",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                {badge.value}
              </span>
              <span
                style={{
                  fontSize: "clamp(9px, 2vw, 11px)",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                  textAlign: "center",
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.5s",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }
      `}</style>

    </section>
  );
}