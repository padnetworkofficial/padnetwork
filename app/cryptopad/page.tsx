export default function CryptoPadPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">CRYPTOPAD</h1>

        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-14">
          Welcome to CryptoPad — your crypto learning hub for blockchain education,
          market analysis, DeFi concepts, and digital asset mastery.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Blockchain Basics</h2>
            <p className="text-gray-300">
              Learn how blockchain works, decentralization, wallets, and crypto fundamentals.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Market Analysis</h2>
            <p className="text-gray-300">
              Understand crypto chart analysis, trends, cycles, and trading opportunities.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">DeFi & Web3</h2>
            <p className="text-gray-300">
              Explore decentralized finance, staking, liquidity pools, and Web3 ecosystem concepts.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Risk & Security</h2>
            <p className="text-gray-300">
              Learn safe crypto investing, wallet security, scam awareness, and risk control.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}