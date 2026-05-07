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

      {/* ── Background video/image layer ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        {/* Deep vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080f]/60 via-transparent to-[#05080f]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/50 via-transparent to-[#05080f]/50" />
      </div>

      {/* ── Decorative gold lines ── */}
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

      {/* ── Radial gold glow behind logo ── */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.10) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}
        <div
          className="mb-6 sm:mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <img
            src="/logo3.png"
            alt="Comfort Chauffeur"
            className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.25))" }}
          />
        </div>

        {/* Thin gold divider */}
        <div
          style={{
            width: loaded ? "120px" : "0px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginBottom: "28px",
            transition: "width 1.2s ease 0.4s",
          }}
        />

        {/* Tagline */}
        <p
          className="text-white/60 mb-10 sm:mb-12 tracking-[0.3em] uppercase"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(11px, 1.2vw, 14px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          }}
        >
          Premier Executive Travel · Experience &amp; Service
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
          }}
        >
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e8cc7a, #c9a84c)",
              backgroundSize: "200% 200%",
              color: "#0a0c10",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              boxShadow: "0 0 30px rgba(201,168,76,0.3)",
            }}
          >
            Book Your Journey
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            style={{
              border: "1px solid rgba(201,168,76,0.5)",
              color: "#c9a84c",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Our Services
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14 sm:mt-16"
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
            <div key={badge.label} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  color: "#c9a84c",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {badge.value}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
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
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>

    </section>
  );
}