import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const assetMap = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$66,010.37",
    color: "bg-[#f7931a]",
    about:
      "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.",
    buyerRatio: "75%",
    traders: "47K",
    tradersChange: "8.27%",
    buyers: "35K",
    buyersChange: "8.63%",
    sellers: "13K",
    sellersChange: "7.07%",
    searched: "8.5K",
    marketCap: "$1.32T",
    marketCapChange: "2.06%",
    fdv: "$1.39T",
    circSupply: "20M BTC",
    maxSupply: "21M BTC",
    totalSupply: "20M BTC",
    dilutedValuation: "$1.32T",
    popularity: "#1",
    dominance: "59.89%",
    volume24: "$32.16B",
    volume24Change: "38.82%",
    volume7d: "$219.70B",
    volume30d: "$790.12B",
    ath: "$126.21K",
    price1y: "18.22%",
    vsMarkets: "1.37%",
    vsEth: "14.47%",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "layer-1",
    ],
    addresses: [
      ["Arbitrum", "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"],
      ["Solana", "cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij"],
      ["Ethereum", "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"],
      ["Base", "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"],
      ["Lightning", "NA"],
      ["Bitcoin", "NA"],
    ],
    priceHistory: [
      ["Today", "$66,010.37", "-2.18%", false],
      ["1 Day", "$67,228.05", "-1.80%", false],
      ["1 Week", "$65,040.61", "+1.50%", true],
      ["1 Month", "$70,264.66", "-6.05%", false],
      ["1 Year", "$80,723.64", "-18.22%", false],
    ],
    happening:
      "BTC climbed ↗2% over the past week, representing roughly 60% of total cryptocurrency market cap.",
    recentTrends:
      "The latest BTC price is $66,010.37. Compared to Bitcoin's value of $67,228.05 from 24 hours ago, there's been a decrease, while the current price is up from one week ago.",
  },
};

function getAssetData(symbol) {
  if (!symbol) return assetMap.bitcoin;
  return assetMap[symbol.toLowerCase()] || assetMap.bitcoin;
}

export default function AssetDetail() {
  const { symbol } = useParams();
  const asset = getAssetData(symbol);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main className="px-6 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          {/* Header */}
          <section className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-[20px] font-bold text-white ${asset.color}`}
                >
                  {asset.symbol[0]}
                </div>

                <div>
                  <h1 className="text-[42px] font-semibold tracking-[-0.045em] text-[#0a0b0d] sm:text-[50px]">
                    {asset.name} Price ({asset.symbol})
                  </h1>
                  <div className="mt-3 flex items-center gap-3">
                    <button className="rounded-full border border-[#d1d5db] bg-white px-4 py-2.5 text-[14px] font-medium text-[#111827]">
                      USD
                    </button>
                  </div>
                </div>
              </div>

              {/* Section tabs */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "About",
                  "Investment Risk",
                  "Info",
                  "Insights",
                  "FAQ",
                  "News",
                  "Social",
                  "Guides",
                  "Calculator",
                  "Bytes",
                  "Related",
                  "Legal",
                ].map((item, index) => (
                  <button
                    key={item}
                    className={`rounded-full px-4 py-2.5 text-[14px] font-medium ${
                      index === 0
                        ? "bg-[#1652f0] text-white"
                        : "border border-[#d1d5db] bg-white text-[#111827]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right promo */}
            <aside className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]">
                Buy {asset.name}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#5d6c83]">
                Earn up to $2,000 when you buy $50 in crypto.
              </p>
              <button className="mt-5 h-[48px] w-full rounded-full bg-[#1652f0] text-[15px] font-semibold text-white hover:bg-[#1447d6]">
                Sign me up
              </button>
            </aside>
          </section>

          {/* Price panel */}
          <section className="mt-12 rounded-[32px] border border-[#e5e7eb] bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <div className="text-[52px] font-semibold tracking-[-0.045em] text-[#0a0b0d]">
                  {asset.price}
                </div>
                <div className="mt-2 text-[14px] text-[#6b7280]">
                  3/8/2026, 10:39:39 PM
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["1H", "1D", "1W", "1M", "1Y", "ALL"].map((range, index) => (
                  <button
                    key={range}
                    className={`rounded-full px-4 py-2.5 text-[14px] font-semibold ${
                      index === 1
                        ? "bg-[#1652f0] text-white"
                        : "border border-[#d1d5db] bg-white text-[#111827]"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 h-[240px] rounded-[24px] bg-[#f8fafc] p-4">
              <svg viewBox="0 0 1000 240" className="h-full w-full">
                <g opacity="0.15" stroke="#94a3b8" strokeWidth="1">
                  <line x1="0" y1="40" x2="1000" y2="40" />
                  <line x1="0" y1="90" x2="1000" y2="90" />
                  <line x1="0" y1="140" x2="1000" y2="140" />
                  <line x1="0" y1="190" x2="1000" y2="190" />
                </g>
                <polyline
                  points="0,170 70,165 130,168 210,150 290,145 360,130 440,138 520,118 620,110 710,102 790,88 860,96 930,72 1000,60"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </section>

          {/* About */}
          <section className="mt-16">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              About {asset.name}
            </h2>

            <div className="mt-6 rounded-[28px] border border-[#e5e7eb] bg-white p-8 shadow-sm">
              <p className="max-w-[980px] text-[17px] leading-8 text-[#5d6c83]">
                {asset.about}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="rounded-full border border-[#d1d5db] bg-white px-5 py-2.5 text-[14px] font-medium text-[#111827]">
                  Whitepaper
                </button>
                <button className="rounded-full border border-[#d1d5db] bg-white px-5 py-2.5 text-[14px] font-medium text-[#111827]">
                  Official website
                </button>
              </div>
            </div>
          </section>

          {/* Trading Insights */}
          <section className="mt-16">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Trading Insights
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              <StatCard title="Buyer Ratio" value={asset.buyerRatio} />
              <StatCard title="Traders" value={asset.traders} extra={asset.tradersChange} positive />
              <StatCard title="Buyers" value={asset.buyers} extra={asset.buyersChange} positive />
              <StatCard title="Sellers" value={asset.sellers} extra={asset.sellersChange} positive />
              <StatCard title="Searched" value={asset.searched} />
            </div>
          </section>

          {/* Market Stats + Performance */}
          <section className="mt-16 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
                Market Stats
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <StatCard title="Market Cap" value={asset.marketCap} extra={asset.marketCapChange} positive />
                <StatCard title="FDV" value={asset.fdv} />
                <StatCard title="Circ. Supply" value={asset.circSupply} />
                <StatCard title="Max Supply" value={asset.maxSupply} />
                <StatCard title="Total Supply" value={asset.totalSupply} />
                <StatCard title="Diluted Valuation" value={asset.dilutedValuation} />
              </div>
            </div>

            <div>
              <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
                Performance
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <StatCard title="Popularity" value={asset.popularity} />
                <StatCard title="Dominance" value={asset.dominance} />
                <StatCard title="Volume (24H)" value={asset.volume24} extra={asset.volume24Change} negative />
                <StatCard title="Volume (7D)" value={asset.volume7d} />
                <StatCard title="Volume (30D)" value={asset.volume30d} />
                <StatCard title="All time high" value={asset.ath} />
                <StatCard title="Price Change (1Y)" value={asset.price1y} positive />
              </div>
            </div>
          </section>

          {/* Market details */}
          <section className="mt-16">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Market details
            </h2>

            <div className="mt-6 rounded-[28px] border border-[#e5e7eb] bg-white p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <DetailRow label={`${asset.symbol} vs markets`} value={`↗ ${asset.vsMarkets}`} green />
                <DetailRow label={`${asset.symbol} vs ETH`} value={`↘ ${asset.vsEth}`} red />
              </div>

              <div className="mt-8">
                <p className="text-[15px] font-semibold text-[#111827]">Tags</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {asset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d1d5db] bg-[#f8fafc] px-4 py-2 text-[14px] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Network & Addresses */}
          <section className="mt-16">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Network & Addresses
            </h2>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm">
              <div className="grid grid-cols-[180px_1fr] border-b border-[#eef0f3] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6b7280]">
                <span>Network</span>
                <span>Address</span>
              </div>

              {asset.addresses.map(([network, address]) => (
                <div
                  key={network}
                  className="grid grid-cols-[180px_1fr] border-b border-[#eef0f3] px-6 py-4 text-[15px] last:border-b-0"
                >
                  <span className="font-medium text-[#111827]">{network}</span>
                  <span className="truncate text-[#5d6c83]">{address}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Price history */}
          <section className="mt-16">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Price history
            </h2>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm">
              <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#eef0f3] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6b7280]">
                <span>Time</span>
                <span>Price</span>
                <span>Change</span>
              </div>

              {asset.priceHistory.map(([time, price, change, positive]) => (
                <div
                  key={time}
                  className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#eef0f3] px-6 py-4 text-[15px] last:border-b-0"
                >
                  <span className="font-medium text-[#111827]">{time}</span>
                  <span className="text-[#111827]">{price}</span>
                  <span className={positive ? "text-[#10b981]" : "text-[#ef4444]"}>
                    {positive ? "↗" : "↘"} {change}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Happening now / Recent trends / FAQ */}
          <section className="mt-16 grid gap-8 lg:grid-cols-3">
            <InfoCard
              title="Happening now"
              body={asset.happening}
            />
            <InfoCard
              title="Recent trends"
              body={asset.recentTrends}
            />
            <InfoCard
              title="FAQ"
              body={`What is ${asset.name}? ${asset.name} (${asset.symbol}) is a decentralized digital asset available to trade on Coinbase.`}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, extra, positive = false, negative = false }) {
  return (
    <div className="rounded-[24px] border border-[#e5e7eb] bg-white px-5 py-5 shadow-sm">
      <p className="text-[14px] font-medium text-[#6b7280]">{title}</p>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">
          {value}
        </span>
        {extra ? (
          <span
            className={`text-[14px] font-semibold ${
              positive
                ? "text-[#10b981]"
                : negative
                ? "text-[#ef4444]"
                : "text-[#6b7280]"
            }`}
          >
            {positive ? "↗ " : negative ? "↘ " : ""}
            {extra}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function DetailRow({ label, value, green = false, red = false }) {
  return (
    <div className="rounded-[20px] bg-[#f8fafc] px-5 py-5">
      <p className="text-[14px] font-medium text-[#6b7280]">{label}</p>
      <p
        className={`mt-2 text-[20px] font-semibold ${
          green ? "text-[#10b981]" : red ? "text-[#ef4444]" : "text-[#111827]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="rounded-[28px] border border-[#e5e7eb] bg-white px-6 py-6 shadow-sm">
      <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">
        {title}
      </h3>
      <p className="mt-4 text-[16px] leading-7 text-[#5d6c83]">{body}</p>
    </div>
  );
}