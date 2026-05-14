"use client";

import Link from "next/link";

export default function OutstandingService() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20 gap-10 lg:gap-16 bg-white">

      {/* LEFT — Video/Image thumbnail */}
      <div
        className="relative w-full lg:w-[48%] xl:w-[44%] flex-shrink-0 rounded-sm overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src="/Chauffeur1.jpg"
          alt="Professional chauffeur with luxury vehicle"
          className="w-full h-full object-cover"
        />

        {/* Play button overlay */}
        <button
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Play video"
        >
          <div
            className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid rgba(255,255,255,0.85)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Play triangle */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: "3px" }}
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </button>
      </div>

      {/* RIGHT — Text content */}
      <div className="flex flex-col justify-center w-full lg:flex-1">

        {/* Heading */}
        <h2
          className="mb-1"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(24px, 3vw, 42px)",
            fontWeight: 700,
            color: "#111",
            letterSpacing: "0.04em",
            lineHeight: 1.15,
            textTransform: "uppercase",
          }}
        >
          <b style={{color:"#c9a84c"}}>Outstanding  </b> Service
        </h2>

        {/* Subheading */}
        <p
          className="mb-5"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            fontWeight: 700,
            color: "#111",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          With No Surge Pricing
        </p>

        {/* Dark rule */}
        <div
          style={{
            width: "44px",
            height: "2px",
            background: "#222",
            marginBottom: "24px",
          }}
        />

        {/* Body copy */}
        <p
          style={{
            color: "#444",
            fontSize: "clamp(14px, 1.1vw, 16px)",
            lineHeight: 1.9,
            marginBottom: "36px",
            maxWidth: "520px",
          }}
        >
          Enjoy outstanding service every step of the way. From the moment you
          contact us, to the moment your chauffeur opens your door. Winning
          Awards for Best UK Chauffeur Company demonstrates our commitment to
          providing the best chauffeur service.
        </p>

        {/* CTA Button */}
        {/* <Link
          href="/our-company"
          className="inline-flex items-center justify-center self-start px-10 py-4 rounded-full transition-all duration-300  bg-[#c9a84c] hover:bg-[#b8963f] text-white"
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Our Company
        </Link> */}
      </div>

    </section>
  );
}