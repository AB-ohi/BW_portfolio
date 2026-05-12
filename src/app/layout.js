"use client";
import { useState } from "react";
import Footer from "@/Component/Footer/footer";
import "./globals.css";
import Navbar from "@/Component/Navbar/navbar";
import IntroAnimation from "@/Component/IntroAnimation/IntroAnimation";

export default function RootLayout({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
        <div className={showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}