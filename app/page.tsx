"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section
        id="home"
        className="min-h-[63vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-10 bg-gradient-to-b from-black to-gray-950"
      >
        <img
          src="/images/padnetworklogo.png"
          alt="Pad Network"
          className="w-20 h-20 md:w-28 md:h-28 mb-5 rounded-full object-cover shadow-2xl"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PAD NETWORK
        </h1>

        <p className="text-lg md:text-2xl mt-4 text-gray-300 font-semibold">
          Connect • Grow • Succeed
        </p>

        <p className="mt-4 max-w-3xl text-base md:text-xl text-gray-400 leading-relaxed">
          One powerful ecosystem for Stocks, Forex, and Crypto traders.
          Learn, grow, and build financial freedom.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 md:px-8 bg-black">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Our Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

              <Link
                href="/stockpad"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
              >
                Explore StockPad
              </Link>
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

              <Link
                href="/forexpad"
                className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
              >
                Explore ForexPad
              </Link>
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

              <Link
                href="/cryptopad"
                className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-2xl font-bold text-lg transition"
              >
                Explore CryptoPad
              </Link>
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
    </main>
  );
}