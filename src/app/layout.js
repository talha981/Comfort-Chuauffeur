// app/layout.js
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import AIChat from "@/components/navbar/AiChat";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <AIChat/>
      </body>
    </html>
  );
}