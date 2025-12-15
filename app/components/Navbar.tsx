"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-black
        transition-all duration-300
        ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-end gap-10">
        <a
          href="#home"
          className="text-emerald-400/80 hover:text-emerald-400 transition"
        >
          Home
        </a>

        <a
          href="#portfolio"
          className="text-emerald-400/80 hover:text-emerald-400 transition"
        >
          Portfolio
        </a>
  <a
    href="#contact"
    className="text-emerald-400/80 hover:text-emerald-400 transition"
  >
    Contact
  </a>
        <a
          href="#about"
          className="text-emerald-400/80 hover:text-emerald-400 transition"
        >
          About
        </a>
      </div>
    </nav>
  );
}