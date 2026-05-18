// "use client";

// import Link from "next/link";

// export default function MercedesHero() {
//   return (
//     <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/mercedes s class.jpg')" }}
//       />

//       {/* Dark overlay - subtle at top (for navbar), stronger at bottom left for text */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

//       {/* Content - bottom left */}
//       <div className="absolute bottom-0 left-0 px-8 sm:px-12 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
//         {/* Car name */}
//         <h1
//   className="text-white font-medium leading-none tracking-tight mb-3"
//   style={{
//     fontSize: "clamp(52px, 8vw, 100px)",
//     fontFamily: "Satoshi, Inter, sans-serif",
//     textShadow: "0 2px 20px rgba(0,0,0,0.3)",
//     letterSpacing: "-0.02em",
//   }}
// >
//   S-CLASS
// </h1>

//         {/* Subtitle */}
//         <p
//           className="text-white font-semibold tracking-[0.18em] uppercase mb-8"
//           style={{
//             fontSize: "clamp(11px, 1.4vw, 15px)",
//             textShadow: "0 1px 8px rgba(0,0,0,0.5)",
//           }}
//         >
//           Mercedes S-Class Chauffeur-Driven Hire
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <Link
//             href="/contact"
//           className="px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition"
//           >
//             Enquire Now
//           </Link>
//           <Link
//             href="/book"
//             className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
//           >
//             Book Online
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }