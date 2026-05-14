"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── tiny hook: trigger once element is in view ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Gold divider ── */
const GoldDivider = ({ width = "100%", my = "0px" }) => (
  <div style={{
    width, height: "1px", margin: `${my} auto`,
    background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
  }} />
);

/* ── Social icon paths ── */
const SOCIALS = [
  {
    label: "Instagram", href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook", href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter", href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ── Nav columns ── */
const NAV = [
  {
    heading: "Services",
    links: [
      { label: "Airport Transfers", href: "/services/airport" },
      { label: "Corporate Travel", href: "/services/corporate" },
      { label: "Wedding Chauffeur", href: "/services/weddings" },
      { label: "Event Transportation", href: "/services/events" },
      { label: "Long-Distance Journeys", href: "/services/long-distance" },
      { label: "City Tours", href: "/services/tours" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Fleet", href: "/fleet" },
      { label: "Our Chauffeurs", href: "/chauffeurs" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Press & Media", href: "/press" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Book a Journey", href: "/book" },
      { label: "Manage Booking", href: "/booking/manage" },
      { label: "FAQ", href: "/faq" },
      { label: "Pricing & Rates", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
      { label: "Corporate Accounts", href: "/corporate" },
    ],
  },
];

/* ── Awards / certifications ── */
const AWARDS = [
  { value: "2024", label: "Luxury Travel Award" },
  { value: "ISO", label: "9001 Certified" },
  { value: "AA", label: "Rated Operator" },
  { value: "TfL", label: "Licensed & Regulated" },
];

export default function Footer() {
  const [ref, visible] = useInView(0.05);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <footer
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#05080f", color: "rgba(255,255,255,0.75)", fontFamily: "Georgia, serif" }}
    >
      {/* ── decorative gold grid (matches hero) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(180deg,rgba(201,168,76,0.03) 1px,transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* ── top radial glow ── */}
      <div className="absolute top-0 left-1/2 pointer-events-none" style={{
        transform: "translate(-50%, -50%)",
        width: "900px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      {/* ═══════════════════════════════════════════
          TOP STRIP — tagline + socials
      ═══════════════════════════════════════════ */}
      <div className="relative z-10" style={fadeUp(0)}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p style={{
            fontSize: "clamp(9px,2vw,11px)", letterSpacing: "0.28em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
          }}>
            Premier Executive Travel · Est. 2009
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  width: "36px", height: "36px",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "rgba(201,168,76,0.55)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
                  e.currentTarget.style.color = "#c9a84c";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(201,168,76,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                  e.currentTarget.style.color = "rgba(201,168,76,0.55)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
        <GoldDivider />
      </div>

      {/* ═══════════════════════════════════════════
          MAIN BODY
      ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">

        {/* LEFT — brand column */}
        <div className="lg:col-span-4 flex flex-col gap-8" style={fadeUp(0.1)}>
          {/* Logo */}
          <div>
            <img
              src="/logo3.png"
              alt="Comfort Chauffeur"
              style={{ width: "300px", filter: "drop-shadow(0 0 24px rgba(201,168,76,0.25))" }}
            />
          </div>

          {/* Brand copy */}
          <p style={{
            fontSize: "clamp(12px,1.8vw,14px)", lineHeight: 1.9,
            color: "rgba(255,255,255,0.45)", maxWidth: "340px",
          }}>
            Comfort Chauffeur delivers an unrivalled standard of private executive transportation across the United Kingdom. Discreet, punctual, and impeccably presented — every mile, every time.
          </p>

          {/* Contact block */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.42 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.34 1.1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "+44 (0) 20 7946 0321",
                href: "tel:+442079460321",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "reservations@comfortchauffeur.co.uk",
                href: "mailto:reservations@comfortchauffeur.co.uk",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "1 Canada Square, Canary Wharf\nLondon, E14 5AB",
                href: "#",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 group"
                style={{ color: "rgba(255,255,255,0.42)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.42)"}
              >
                <span style={{ color: "#c9a84c", marginTop: "2px" }}>{item.icon}</span>
                <span style={{ fontSize: "clamp(11px,1.6vw,13px)", lineHeight: 1.7, whiteSpace: "pre-line", transition: "color 0.2s" }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Operating hours */}
          <div style={{
            borderLeft: "2px solid rgba(201,168,76,0.35)",
            paddingLeft: "16px",
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "8px" }}>
              Operating Hours
            </p>
            {[
              ["Monday – Friday", "06:00 – 23:00"],
              ["Saturday – Sunday", "07:00 – 22:00"],
              ["24 / 7 Emergency Line", "+44 (0) 7700 900123"],
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between gap-6" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>
                <span>{day}</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — nav columns */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-10" style={fadeUp(0.2)}>
          {NAV.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontSize: "10px", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#c9a84c",
                marginBottom: "20px", fontFamily: "Georgia, serif",
              }}>
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((lnk) => (
                  <li key={lnk.label}>
                    <Link
                      href={lnk.href}
                      style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#c9a84c";
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAR RIGHT — newsletter + awards */}
        <div className="lg:col-span-3 flex flex-col gap-10" style={fadeUp(0.3)}>

          {/* Newsletter */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "12px" }}>
              Exclusive Updates
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: 1.8, marginBottom: "16px" }}>
              Priority booking windows, fleet additions, and members-only rates — delivered discreetly.
            </p>

            {subscribed ? (
              <div style={{
                padding: "14px 20px", border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "4px", background: "rgba(201,168,76,0.06)",
                fontSize: "12px", color: "#c9a84c", letterSpacing: "0.08em",
              }}>
                ✦ &nbsp;Thank you — you're on the list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "4px", padding: "12px 16px",
                    color: "rgba(255,255,255,0.75)", fontSize: "13px",
                    outline: "none", width: "100%",
                    fontFamily: "Georgia, serif",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(201,168,76,0.65)"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.25)"}
                />
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #e8cc7a, #c9a84c)",
                    color: "#0a0c10", fontWeight: 700, fontSize: "11px",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    padding: "12px 20px", borderRadius: "4px",
                    border: "none", cursor: "pointer",
                    boxShadow: "0 0 20px rgba(201,168,76,0.25)",
                    transition: "opacity 0.2s, transform 0.2s",
                    fontFamily: "Georgia, serif",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Awards / certs */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "16px" }}>
              Accreditations
            </p>
            <div className="grid grid-cols-2 gap-4">
              {AWARDS.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center justify-center text-center"
                  style={{
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "4px", padding: "14px 8px",
                    background: "rgba(201,168,76,0.03)",
                  }}
                >
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1 }}>
                    {a.value}
                  </span>
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "6px", lineHeight: 1.4 }}>
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment icons */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "14px" }}>
              Accepted Payments
            </p>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "AMEX", "BACS", "CRYPTO"].map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: "9px", letterSpacing: "0.14em",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "3px", padding: "5px 9px",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM STRIP
      ═══════════════════════════════════════════ */}
      <div className="relative z-10" style={fadeUp(0.4)}>
        <GoldDivider />

        {/* Luxury promise bar */}
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { icon: "✦", text: "Flight Monitoring" },
            { icon: "✦", text: "Meet & Greet Service" },
            { icon: "✦", text: "Complimentary Wi-Fi" },
            { icon: "✦", text: "100% Carbon Offset" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "10px" }}>{item.icon}</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <GoldDivider />

        {/* Legal row */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Comfort Chauffeur Ltd. All rights reserved. Registered in England & Wales · No. 07123456
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Modern Slavery Act"].map((label, i, arr) => (
              <span key={label} className="flex items-center gap-5">
                <Link
                  href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
                >
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span style={{ width: "1px", height: "10px", background: "rgba(201,168,76,0.2)", display: "inline-block" }} />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}