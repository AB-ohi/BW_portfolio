"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AB_logo from "../../../public/logo_img/AB_logo.png"
const IntroAnimation = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // 3 second por intro animation complete hobe
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-fadeOut">
      <div className="relative animate-scaleRotate">
        <Image
          src={AB_logo}
          alt="Logo"
          width={300}
          height={300}
          className="drop-shadow-2xl animate-glow"
          priority
        />
      </div>
    </div>
  );
};

export default IntroAnimation;