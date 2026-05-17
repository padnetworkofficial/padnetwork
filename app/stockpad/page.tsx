export default function StockPadPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">STOCKPAD</h1>

      <p className="text-xl text-center max-w-2xl mb-8">
        Welcome to StockPad — your stock market learning hub for technical
        analysis, swing trading, investing, and market education.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Technical Analysis</h2>
          <p>Learn chart reading, indicators, and price action strategies.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Swing Trading</h2>
          <p>Understand medium-term trade setups and market opportunities.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Investing</h2>
          <p>Build knowledge about long-term investing and portfolio growth.</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Market Education</h2>
          <p>Master stock market fundamentals and trading psychology.</p>
        </div>
      </div>
    </main>
  );
}