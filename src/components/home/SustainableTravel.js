"use client";

import Link from "next/link";

export default function SustainableTravel() {
  return (
    <section className="w-full flex flex-col lg:flex-row" style={{ minHeight: "480px" }}>

      {/* LEFT — dark content panel */}
      <div
        className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12
                   w-full lg:w-[38%] xl:w-[32%] lg:min-w-[300px] lg:max-w-[480px] lg:flex-shrink-0"
        style={{ background: "#0f0f0f" }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#c9a84c",
            fontSize: "10px",
            letterSpacing: "0.22em",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Our Commitment
        </p>

        {/* Heading */}
        <h2
          className="text-white mb-5"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(22px, 2.4vw, 34px)",
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "0.02em",
          }}
        >
          Redefining Luxury Travel{" "}
          <span style={{ color: "#c9a84c", fontStyle: "italic" }}>
            Responsibly
          </span>
        </h2>

        {/* Gold rule */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#c9a84c",
            marginBottom: "20px",
          }}
        />

        {/* Body copy */}
        <p
          style={{
            color: "#999",
            fontSize: "13px",
            lineHeight: 1.85,
            marginBottom: "28px",
            letterSpacing: "0.01em",
          }}
        >
          We believe exceptional service and environmental responsibility are
          not mutually exclusive. Every journey is a deliberate step toward a
          cleaner future — without compromising the standards our clients
          expect.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { value: "100%", label: "Carbon Offset" },
            { value: "40%", label: "Electric Fleet" },
            { value: "Zero", label: "Compromise" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(18px, 1.8vw, 24px)",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.04em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#666",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/sustainability"
          className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#c9a84c] hover:text-black"
          style={{
            border: "1px solid rgba(201,168,76,0.6)",
            color: "#c9a84c",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Our Sustainability Pledge →
        </Link>
      </div>

      {/* RIGHT — image takes all remaining space */}
      <div className="relative overflow-hidden flex-1" style={{ minHeight: "280px" }}>
        <img
          src="/photo3.jpg"
          alt="Sustainable travel landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}