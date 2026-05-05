import { useState, useEffect } from "react";

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/crypto`);
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching cryptos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore crypto like Bitcoin, Ethereum, and more
          </h2>
          <p className="mt-3 text-slate-600">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Explore crypto like Bitcoin, Ethereum, and more
        </h2>
        <p className="mt-3 text-slate-600">
          Track prices and explore market movement in a Coinbase-style layout.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid grid-cols-4 border-b border-slate-200 px-6 py-4 text-sm font-semibold text-slate-500">
            <span>Asset</span>
            <span>Market</span>
            <span>Price</span>
            <span className="text-right">Change</span>
          </div>

          {coins.map((coin) => (
            <div
              key={coin.symbol}
              className="grid grid-cols-4 items-center border-b border-slate-100 px-6 py-5 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">{coin.name}</p>
                  <p className="text-sm text-slate-500">{coin.symbol}</p>
                </div>
              </div>
              <p className="text-slate-600">Spot market</p>
              <p className="font-medium text-slate-900">${coin.price.toLocaleString()}</p>
              <p className={`text-right font-semibold ${coin.change24h >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}