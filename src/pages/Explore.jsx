import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total market cap", value: "$2.23T", change: "↘ 0.85%", negative: true },
  { label: "Trade volume", value: "$117.49B", change: "↗ 22.84%", negative: false },
  { label: "Buy-sell ratio", value: "$0.76", change: "↘ 1.20%", negative: true },
  { label: "BTC dominance", value: "60.12%", change: "↗ 0.02%", negative: false },
];

const assets = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,207.19", change: "0.71%", mcap: "$1.3T", volume: "$29.0B", positive: true, color: "bg-[#f7931a]" },
  { name: "Ethereum", symbol: "ETH", price: "$1,960.12", change: "1.18%", mcap: "$234.3B", volume: "$13.8B", positive: true, color: "bg-[#627eea]" },
  { name: "Tether", symbol: "USDT", price: "$1.00", change: "0.00%", mcap: "$184.0B", volume: "$57.3B", positive: true, color: "bg-[#26a17b]" },
  { name: "BNB", symbol: "BNB", price: "$617.92", change: "0.96%", mcap: "$83.9B", volume: "$1.2B", positive: true, color: "bg-[#f0b90b]" },
  { name: "XRP", symbol: "XRP", price: "$1.36", change: "0.10%", mcap: "$82.6B", volume: "$1.4B", positive: true, color: "bg-[#23292f]" },
  { name: "USDC", symbol: "USDC", price: "$1.00", change: "0.00%", mcap: "$77.2B", volume: "$5.4B", positive: true, color: "bg-[#2775ca]" },
  { name: "Solana", symbol: "SOL", price: "$82.35", change: "1.33%", mcap: "$46.7B", volume: "$2.3B", positive: true, color: "bg-[#14f195]" },
  { name: "TRON", symbol: "TRX", price: "$0.29", change: "1.42%", mcap: "$27.4B", volume: "$444.1M", positive: false, color: "bg-[#ef0027]" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.0894", change: "1.25%", mcap: "$15.0B", volume: "$734.2M", positive: true, color: "bg-[#c2a633]" },
  { name: "Cardano", symbol: "ADA", price: "$0.25", change: "1.00%", mcap: "$9.1B", volume: "$344.1M", positive: true, color: "bg-[#0033ad]" },
];

const movers = [
  ["ALCX", "26.90%", "$6.03", true],
  ["SQD", "16.81%", "$0.0438", false],
  ["PLUME", "15.72%", "$0.0141", false],
  ["SHPING", "17.40%", "$0.0014", true],
  ["HOME", "14.17%", "$0.0216", true],
  ["KITE", "13.54%", "$0.32", false],
  ["SYND", "13.32%", "$0.0527", true],
  ["PRCL", "11.76%", "$0.0163", false],
];

const newOnCoinbase = [
  ["HYPE", "Hyperliquid", "Added Feb 5"],
  ["JUPITER", "Jupiter", "Added Dec 9"],
  ["LIGHTER", "Lighter", "Added Jan 15"],
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main className="px-6 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <section>
            <h1 className="text-[44px] font-semibold tracking-[-0.045em] text-[#0a0b0d] sm:text-[52px]">
              Explore crypto
            </h1>

            <div className="mt-8 flex w-fit items-center gap-4 rounded-[24px] border border-[#e5e7eb] bg-white px-5 py-4 shadow-sm">
              <div className="text-[18px] text-[#ef4444]">↘</div>
              <div>
                <p className="text-[15px] font-medium text-[#111827]">
                  Coinbase 50 Index is down
                </p>
                <p className="mt-1 text-[14px] text-[#6b7280]">0.34% (24hrs)</p>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Market stats
            </h2>

            <p className="mt-4 max-w-[980px] text-[16px] leading-7 text-[#5d6c83]">
              The overall crypto market is growing this week. As of today, the
              total crypto market capitalization is 2.23 trillion, representing a
              0.46% increase from last week. The 24-hour crypto market trading
              volume has also seen a 0.85% decrease over the past day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[#e5e7eb] bg-white px-5 py-5 shadow-sm"
                >
                  <p className="text-[14px] font-medium text-[#6b7280]">{stat.label}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">
                      {stat.value}
                    </span>
                    <span
                      className={`text-[14px] font-semibold ${
                        stat.negative ? "text-[#ef4444]" : "text-[#10b981]"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
                  Crypto market prices
                </h2>
                <p className="mt-2 text-[15px] text-[#6b7280]">18,561 assets</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <SelectChip label="All assets" />
                <SelectChip label="1D" />
                <SelectChip label="USD" />
                <SelectChip label="10 rows" />
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm">
              <div className="hidden grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_1fr_0.8fr] border-b border-[#eef0f3] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6b7280] lg:grid">
                <span>Asset</span>
                <span>Market price</span>
                <span>Chart</span>
                <span>Change</span>
                <span>Mkt cap</span>
                <span>Volume</span>
                <span>Actions</span>
              </div>

              {assets.map((asset) => (
                <div
                  key={asset.symbol}
                  className="grid gap-4 border-b border-[#eef0f3] px-6 py-5 last:border-b-0 lg:grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_1fr_0.8fr] lg:items-center"
                >
                  <Link
                    to={`/asset/${asset.name.toLowerCase()}`}
                    className="flex items-center gap-4"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full text-[16px] font-bold text-white ${asset.color}`}>
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold text-[#111827]">
                        {asset.name}
                      </p>
                      <p className="text-[13px] text-[#6b7280]">{asset.symbol}</p>
                    </div>
                  </Link>

                  <div className="text-[15px] font-medium text-[#111827]">
                    {asset.price}
                  </div>

                  <div>
                    <MiniChart positive={asset.positive} />
                  </div>

                  <div
                    className={`text-[15px] font-semibold ${
                      asset.positive ? "text-[#10b981]" : "text-[#ef4444]"
                    }`}
                  >
                    {asset.positive ? "↗" : "↘"} {asset.change}
                  </div>

                  <div className="text-[15px] text-[#111827]">{asset.mcap}</div>
                  <div className="text-[15px] text-[#111827]">{asset.volume}</div>

                  <div>
                    <button className="rounded-full bg-[#1652f0] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#1447d6]">
                      Trade
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[14px] text-[#6b7280]">
              <span>1-10 of 18,561 assets</span>
              <div className="flex items-center gap-2">
                <PagePill active>1</PagePill>
                <PagePill>2</PagePill>
                <PagePill>3</PagePill>
                <span className="px-2">…</span>
                <PagePill>1,857</PagePill>
              </div>
            </div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[28px] bg-[#1652f0] px-8 py-8 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[28px] font-semibold tracking-[-0.03em]">
                  Earn up to $2,000 when you buy $50 in crypto
                </p>
                <p className="mt-2 text-[16px] text-white/85">
                  Create your account today
                </p>
              </div>

              <Link to="/signup">
                <button className="h-[52px] rounded-full bg-white px-8 text-[16px] font-semibold text-[#1652f0] hover:bg-[#f8fafc]">
                  Sign up
                </button>
              </Link>
            </div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-[#111827]">
                  Top movers
                </h3>
                <span className="text-[14px] text-[#6b7280]">24hr change</span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {movers.map(([symbol, change, price, up]) => (
                  <div
                    key={symbol}
                    className="rounded-[22px] border border-[#e5e7eb] bg-white px-4 py-4 shadow-sm"
                  >
                    <p className="text-[15px] font-semibold text-[#111827]">{symbol}</p>
                    <p className={`mt-2 text-[14px] font-semibold ${up ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                      {up ? "↗" : "↘"} {change}
                    </p>
                    <p className="mt-2 text-[14px] text-[#6b7280]">{price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-[#111827]">
                New on Coinbase
              </h3>

              <div className="mt-6 space-y-4">
                {newOnCoinbase.map(([symbol, name, added]) => (
                  <div
                    key={symbol}
                    className="rounded-[22px] border border-[#e5e7eb] bg-white px-5 py-5 shadow-sm"
                  >
                    <p className="text-[15px] font-semibold text-[#111827]">
                      {symbol}
                    </p>
                    <p className="mt-1 text-[15px] text-[#111827]">{name}</p>
                    <p className="mt-1 text-[14px] text-[#6b7280]">{added}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function SelectChip({ label }) {
  return (
    <button className="rounded-full border border-[#d1d5db] bg-white px-4 py-2.5 text-[14px] font-medium text-[#111827] hover:bg-[#f8fafc]">
      {label}
    </button>
  );
}

function PagePill({ children, active = false }) {
  return (
    <button
      className={`rounded-full px-3 py-1.5 text-[14px] ${
        active
          ? "bg-[#1652f0] text-white"
          : "border border-[#d1d5db] bg-white text-[#111827]"
      }`}
    >
      {children}
    </button>
  );
}

function MiniChart({ positive }) {
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-[120px]">
      <polyline
        points={
          positive
            ? "2,28 18,24 30,26 46,20 60,18 74,14 90,11 108,7"
            : "2,8 18,12 30,10 46,16 60,18 74,22 90,27 108,31"
        }
        fill="none"
        stroke={positive ? "#10b981" : "#ef4444"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}