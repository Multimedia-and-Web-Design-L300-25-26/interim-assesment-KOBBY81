export default function ExploreAssetsSection() {
  const assets = [
    {
      name: "Bitcoin",
      price: "GHS 724,440.62",
      change: "↙ 1.41%",
      negative: true,
      iconBg: "bg-[#F7931A]",
      icon: "₿",
    },
    {
      name: "Ethereum",
      price: "GHS 21,191.32",
      change: "↙ 0.62%",
      negative: true,
      iconBg: "bg-[#627EEA]",
      icon: "◆",
    },
    {
      name: "Tether",
      price: "GHS 10.77",
      change: "↗ 0.00%",
      negative: false,
      iconBg: "bg-[#26A17B]",
      icon: "T",
    },
    {
      name: "BNB",
      price: "GHS 6,669.00",
      change: "↙ 1.52%",
      negative: true,
      iconBg: "bg-[#F0B90B]",
      icon: "◇",
    },
    {
      name: "XRP",
      price: "GHS 14.58",
      change: "↙ 0.89%",
      negative: true,
      iconBg: "bg-[#23292F]",
      icon: "✕",
    },
    {
      name: "USDC",
      price: "GHS 10.77",
      change: "--",
      negative: null,
      iconBg: "bg-[#2775CA]",
      icon: "$",
    },
  ];

  return (
    <section className="bg-[#f3f5f7] px-6 py-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1fr_520px]">
        {/* Left content */}
        <div className="max-w-[520px]">
          <h2 className="text-[56px] font-normal leading-[0.95] tracking-[-0.05em] text-black">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>

          <p className="mt-8 text-[22px] leading-[1.5] text-[#5d6c83]">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>

          <button className="mt-8 h-[64px] rounded-full bg-black px-10 text-[18px] font-semibold text-white">
            See more assets
          </button>
        </div>

        {/* Right card */}
        <div className="flex justify-center">
          <div className="w-[500px] rounded-[28px] bg-black px-8 py-8 shadow-xl">
            {/* Tabs */}
            <div className="flex items-center gap-6 text-white">
              <button className="rounded-full bg-[#242833] px-6 py-3 text-[16px] font-semibold">
                Tradable
              </button>
              <button className="text-[16px] font-semibold text-white/80">
                Top gainers
              </button>
              <button className="text-[16px] font-semibold text-white/80">
                New on Coinbase
              </button>
            </div>

            {/* Asset list */}
            <div className="mt-10 space-y-8">
              {assets.map((asset) => (
                <div
                  key={asset.name}
                  className="grid grid-cols-[50px_1fr_auto] items-center"
                >
                  <div
                    className={`flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] font-semibold text-white ${asset.iconBg}`}
                  >
                    {asset.icon}
                  </div>

                  <div className="text-[28px] font-medium text-white">
                    {asset.name}
                  </div>

                  <div className="text-right">
                    <div className="text-[22px] text-white">
                      {asset.price}
                    </div>

                    <div
                      className={`text-[14px] ${
                        asset.negative === true
                          ? "text-[#ff5a76]"
                          : asset.negative === false
                          ? "text-[#18c98f]"
                          : "text-[#7f8792]"
                      }`}
                    >
                      {asset.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}