"use client";

import { useEffect, useState } from "react";
import PopularVehicles from "@/components/home/Vehicles";

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
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/service-video-bg.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>

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
              className="px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition"
            >
              REQUEST QUOTE →
            </a>

            <a
              href="#"
              className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              GET A PRICE & BOOK →
            </a>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="w-full py-24 px-6 bg-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Powerful Features
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Build scalable applications with clean architecture, reusable components, and modern UI design.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Fast Performance</h3>
            <p className="text-gray-500 mt-2">
              Optimized with Next.js for speed and SEO.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Modern UI</h3>
            <p className="text-gray-500 mt-2">
              Built with Tailwind CSS for clean design.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Scalable</h3>
            <p className="text-gray-500 mt-2">
              Perfect structure for large applications.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VEHICLES ================= */}
      <PopularVehicles />

    </div>
  );
}