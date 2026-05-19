"use client";

import { useEffect, useState } from "react";
import PopularVehicles from "@/components/home/Vehicles";
import SustainableTravel from "@/components/home/SustainableTravel";
import OutstandingService from "@/components/home/OutstandingService";
import Hero from "@/components/home/Hero";

/* ================= TYPING SLIDER ================= */
function TypingSlider() {
  const texts = [
    "YOUR PERSONAL CHAUFFEUR SERVICE",
    "LUXURY TRAVEL EXPERIENCE",
    "RELIABLE & PROFESSIONAL DRIVERS",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    // Typing effect
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    }

    // Pause before switching
    const pause = setTimeout(() => {
      setDisplayText("");
      setCharIndex(0);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // delay before next text

    return () => clearTimeout(pause);
  }, [charIndex, textIndex]);

  return (
    <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
      {displayText}
      <span className="animate-pulse">_</span>
    </h1>
  );
}

/* ================= MAIN PAGE ================= */
export default function Home() {
  return (
    <div className="w-full font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
  className="absolute top-0 left-0 w-full h-full object-cover brightness-150 contrast-110 saturate-125"
        >
          <source src="/service-video-bg.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}

        {/* 📝 Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

          {/* Top text */}
          <p className="uppercase tracking-widest text-sm mb-4 text-gray-200">
            Distinguished business & private travel
          </p>

          {/* 🔥 Typing Slider Here */}
          <TypingSlider />

          {/* Sub text */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 tracking-wide">
            UNRIVALLED RELIABILITY. MULTI-AWARD-WINNING
          </p>

         {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 mt-8">

  <a
    href="#"
    className="px-8 py-3.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
    style={{
      background: "linear-gradient(135deg, #c9a84c, #f0d98a, #c9a84c)",
      color: "#0a0c10",
      boxShadow: "0 0 32px rgba(201,168,76,0.5)",
    }}
  >
    REQUEST QUOTE →
  </a>

  <a
    href="#"
    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10"
    style={{
      border: "1px solid rgba(201,168,76,0.6)",
      color: "#c9a84c",
    }}
  >
    GET A PRICE & BOOK →
  </a>

</div>
        </div>
      </section>

    
      {/* ================= VEHICLES ================= */}
      <PopularVehicles />
            <Hero/>

      <OutstandingService/>

    </div>
  );
}