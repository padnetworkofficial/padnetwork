"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <img
            src="/images/padnetworklogo.png"
            alt="PadNetwork Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            PadNetwork
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xl font-medium">
          <Link href="/">Home</Link>
          <Link href="/stockpad">StockPad</Link>
          <Link href="/forexpad">ForexPad</Link>
          <Link href="/cryptopad">CryptoPad</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 bg-black border-t border-zinc-800 text-lg font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/stockpad" onClick={() => setMenuOpen(false)}>
            StockPad
          </Link>
          <Link href="/forexpad" onClick={() => setMenuOpen(false)}>
            ForexPad
          </Link>
          <Link href="/cryptopad" onClick={() => setMenuOpen(false)}>
            CryptoPad
          </Link>
        </div>
      )}
    </nav>
  );
}