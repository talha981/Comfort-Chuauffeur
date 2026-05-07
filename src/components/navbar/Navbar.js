"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  {
    label: "Our Cars",
    href: "/about",
    clickable: false,
    hasDropdown: true,
    items: [
      { label: "Mercedes S-Class", href: "/mercedes-s-class" },
      { label: "Rolls Royce", href: "/about/mercedes-s-class" },
      { label: "Range Rover", href: "/about/range-rover" },
      { label: "BMW 7 Series", href: "/about/bmw-7-series" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    clickable: true,
    hasDropdown: true,
    items: [
      { label: "Airport Transfers", href: "/services/airport-transfers" },
      { label: "Corporate Travel", href: "/services/corporate-travel" },
      { label: "Wedding Cars", href: "/services/wedding-cars" },
      { label: "Events", href: "/services/events" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    clickable: true,
    hasDropdown: false,
  },
  {
    label: "Chauffeur",
    href: "/chauffeurs",
    clickable: true,
    hasDropdown: true,
    items: [
      { label: "Our Chauffeurs", href: "/chauffeurs/our-chauffeurs" },
      { label: "Become a Chauffeur", href: "/chauffeurs/become-a-chauffeur" },
      { label: "Training", href: "/chauffeurs/training" },
    ],
  },
  {
    label: "Our Company",
    href: "/company",
    clickable: true,
    hasDropdown: true,
    items: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Our Story", href: "/company/our-story" },
      { label: "Testimonials", href: "/company/testimonials" },
      { label: "Press", href: "/company/press" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    clickable: true,
    hasDropdown: false,
  },
];

// ✅ Removed TypeScript type annotation — this is a .js file
function ChevronIcon({ active }) {
  return (
    <svg
      className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${
        active ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 10 6"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GBFlag() {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "2px", flexShrink: 0, display: "block" }}
      aria-label="UK"
    >
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

function LogoEmblem() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
    >
      <circle cx="23" cy="23" r="21" stroke="white" strokeWidth="1.2" />
      <circle cx="23" cy="23" r="14.5" stroke="white" strokeWidth="0.9" />
      <line x1="23" y1="8.5" x2="23" y2="37.5" stroke="white" strokeWidth="0.9" />
      <line x1="8.5" y1="23" x2="37.5" y2="23" stroke="white" strokeWidth="0.9" />
      <line x1="12.8" y1="12.8" x2="33.2" y2="33.2" stroke="white" strokeWidth="0.6" opacity="0.55" />
      <line x1="33.2" y1="12.8" x2="12.8" y2="33.2" stroke="white" strokeWidth="0.6" opacity="0.55" />
      <path
        d="M19.5 8.5 L21.5 5.5 L23 7.5 L24.5 5.5 L26.5 8.5"
        stroke="white"
        strokeWidth="1.1"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="21.5" y="21.5" width="3" height="3" fill="white" transform="rotate(45 23 23)" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleDropdownEnter(label) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }

  function handleDropdownLeave() {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function toggleMobile() {
    setMobileOpen((v) => !v);
  }

  function toggleMobileItem(label) {
    setExpandedMobile((v) => (v === label ? null : label));
  }

  const headerClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-black/30 backdrop-blur-[22px] saturate-150 shadow-2xl border-b border-white/10"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-black/30 backdrop-blur-[22px] saturate-150 shadow-xl border-b border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:border-transparent";

  return (
    <header className={headerClass}>

      {/* TOP ROW */}
      <div className="relative flex items-center justify-between px-5 pt-8 pb-3 lg:pt-10 lg:pb-4 sm:px-8 lg:px-12">

        <span className="lg:hidden text-white text-[18px] font-semibold tracking-wide select-none z-10">
        Comfort  Chauffeur
        </span>

        {/* ✅ Fixed: was missing opening <a> tag */}
        
         < a href="tel:+442084004829"
          className="hidden lg:flex items-center gap-2 text-white text-[17px] font-normal tracking-wide hover:opacity-70 transition-opacity z-10">
          <GBFlag />
          <span>+44 (0)20 8400 4829</span>
        </a>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 group"
        >
          <span className="hidden md:block">
            <LogoEmblem />
          </span>
          <span className="hidden md:inline text-white text-[20px] font-semibold select-none">
         Comfort   Chauffeur
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 z-10">
          <button
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden ml-1 p-1.5 flex flex-col justify-center gap-[5px]"
          >
            <span className={`block w-[22px] h-[1.5px] bg-white origin-center transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white origin-center transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="hidden lg:block h-px bg-white/15 mx-8" />

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 px-12 py-3">
        {NAV_LINKS.map((link) => (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.label)}
            onMouseLeave={handleDropdownLeave}
          >
            {link.clickable ? (
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-white/90 text-[12px] font-normal tracking-[0.07em] uppercase hover:text-white transition-colors duration-200"
              >
                {link.label}
                {link.hasDropdown && <ChevronIcon active={activeDropdown === link.label} />}
              </Link>
            ) : (
              <span className="flex items-center gap-1.5 text-white/90 text-[12px] font-normal tracking-[0.07em] uppercase hover:text-white transition-colors duration-200 cursor-default select-none">
                {link.label}
                {link.hasDropdown && <ChevronIcon active={activeDropdown === link.label} />}
              </span>
            )}

            {link.hasDropdown && link.items && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[190px] bg-black/80 backdrop-blur-[20px] saturate-150 border border-white/10 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                  activeDropdown === link.label
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {link.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-3 text-white/80 text-[12px] tracking-[0.1em] uppercase hover:text-white hover:bg-white/8 transition-colors duration-150 border-b border-white/[0.06] last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/80 backdrop-blur-[20px] saturate-150 border-t border-white/10 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* ✅ Fixed: was missing opening <a> tag */}
        
        <a  href="tel:+442084004829"
          className="flex items-center gap-2.5 px-6 py-4 text-white/80 text-[14px] border-b border-white/10"
        >
          <GBFlag />
          <span>+44 (0)20 8400 4829</span>
        </a>

        {NAV_LINKS.map((link) => (
          <div key={link.label} className="border-b border-white/[0.08]">
            {link.hasDropdown ? (
              <div>
                <button
                  onClick={() => toggleMobileItem(link.label)}
                  className="w-full flex items-center justify-between px-6 py-4 text-white text-[14px] font-normal tracking-[0.1em] uppercase"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${expandedMobile === link.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 bg-white/5 ${
                    expandedMobile === link.label ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {link.items && link.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-10 py-3 text-white/70 text-[13px] tracking-[0.08em] uppercase hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-white text-[14px] font-normal tracking-[0.1em] uppercase hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-3 px-6 py-5">
          {/* ✅ Fixed: was missing opening <a> tag */}
          
           <a href="tel:+442084004829"
            className="flex items-center justify-center px-5 py-3 rounded-full border border-white text-white text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Speak To Us
          </a>
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center px-5 py-3 rounded-full border border-white text-white text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>

    </header>
  );
}