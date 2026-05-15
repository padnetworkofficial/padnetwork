"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-purple-700">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/images/padnetworklogo.png"
              alt="Pad Network"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <h1 className="text-lg md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              PadNetwork
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-xl">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
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
          <div className="md:hidden flex flex-col text-center bg-black border-t border-purple-700">
            <a
              href="#home"
              className="py-3 hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="py-3 hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="py-3 hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 bg-gradient-to-b from-black to-gray-950"
      >
        <img
          src="/images/padnetworklogo.png"
          alt="Pad Network"
          className="w-28 h-28 md:w-40 md:h-40 mb-8 rounded-full object-cover shadow-2xl"
        />

        <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PAD NETWORK
        </h1>

        <p className="text-xl md:text-3xl mt-6 text-gray-300 font-semibold">
          Connect • Grow • Succeed
        </p>

        <p className="mt-6 max-w-3xl text-base md:text-xl text-gray-400 leading-relaxed">
          One powerful ecosystem for Stocks, Forex, and Crypto traders.
          Learn, grow, and build financial freedom.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-8 bg-black">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          Our Ecosystem
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* STOCKPAD */}
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-700 hover:scale-105 transition duration-300">
            <video
              src="/videos/stock.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover"
            />
            <div className="p-8 text-center">
              <img
                src="/images/stockpadlogo.png"
                alt="StockPad"
                className="w-20 h-20 mx-auto mb-6 object-cover"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                STOCKPAD
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Smart stock analysis & market growth strategies.
              </p>
            </div>
          </div>

          {/* FOREXPAD */}
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-700 hover:scale-105 transition duration-300">
            <video
              src="/videos/forex.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover"
            />
            <div className="p-8 text-center">
              <img
                src="/images/forexpadlogo.png"
                alt="ForexPad"
                className="w-20 h-20 mx-auto mb-6 object-cover"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
                FOREXPAD
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Forex insights, setups & global market intelligence.
              </p>
            </div>
          </div>

          {/* CRYPTOPAD */}
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-yellow-600 hover:scale-105 transition duration-300">
            <video
              src="/videos/crypto.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover"
            />
            <div className="p-8 text-center">
              <img
                src="/images/cryptopadlogo.png"
                alt="CryptoPad"
                className="w-20 h-20 mx-auto mb-6 object-cover"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                CRYPTOPAD
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Crypto insights, opportunities & financial education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-8 bg-gray-950 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Pad Network
        </h2>

        <p className="max-w-5xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed">
          Pad Network is a premium ecosystem connecting Stocks, Forex, and
          Crypto traders under one platform for education, market analysis,
          trading growth, and financial freedom.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-purple-700 py-8 text-center text-gray-400">
        © 2026 PadNetwork. All rights reserved.
      </footer>
    </main>
  );
}