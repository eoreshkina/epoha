"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between w-full p-4 bg-white/10 sm:hidden relative z-20">
      <h1
        className="text-3xl font-['Limelight'] mb-2 sm:mb-0 pl-8 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #4a59e4, #ec4899)",
        }}
      >
        <Link legacyBehavior={true} href="/" passHref>
          EpoHa Studio
        </Link>
      </h1>
      <button
        className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-800 my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white/95 shadow-md flex flex-col items-center py-4 gap-3 font-['Limelight']">
          <Link legacyBehavior={true} href="/collection" passHref>
            <a
              className="hover:text-purple-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </a>
          </Link>
          <Link legacyBehavior={true} href="/order" passHref>
            <a
              className="hover:text-amber-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Bestellen
            </a>
          </Link>

          <Link legacyBehavior={true} href="/workshops" passHref>
            <a className="hover:text-[#D9A5B3] transition-colors">Workshops</a>
          </Link>

          <Link
            legacyBehavior={true}
            href="https://www.instagram.com/epoha.studio?igsh=dDRocDh1M2xidHg0&utm_source=qr"
            passHref
          >
            <a
              className="hover:text-indigo-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Instagram
            </a>
          </Link>
          <Link
            legacyBehavior={true}
            href="https://epohastudio.etsy.com"
            passHref
          >
            <a
              className="hover:text-green-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </a>
          </Link>
        </nav>
      )}
    </header>
  );
}
