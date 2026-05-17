export default function ForexPadPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">FOREXPAD</h1>

        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-14">
          Welcome to ForexPad — your forex trading learning hub for price action,
          smart money concepts, risk management, and market mastery.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Price Action</h2>
            <p className="text-gray-300">
              Learn candlestick patterns, support/resistance, market structure,
              and real chart reading.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Smart Money Concepts</h2>
            <p className="text-gray-300">
              Understand liquidity, order blocks, fair value gaps, and institutional movement.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Risk Management</h2>
            <p className="text-gray-300">
              Protect your capital with proper lot sizing, risk-reward strategy,
              and disciplined trading.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Market Psychology</h2>
            <p className="text-gray-300">
              Master mindset, emotional control, patience, and consistency for long-term success.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}