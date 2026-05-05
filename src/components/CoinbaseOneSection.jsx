export default function CoinbaseOneSection() {
  return (
    <section className="bg-[#f3f5f7] px-6 py-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_560px]">

        {/* LEFT TEXT */}
        <div className="max-w-[520px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-[14px] border border-[#d9dde3] px-4 py-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-black" />
            <span className="text-[16px] tracking-[-0.01em] text-[#5d6c83]">
              COINBASE ONE
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-[54px] leading-[1] tracking-[-0.04em] text-black">
            Zero trading fees,
            <br />
            more rewards.
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-[18px] leading-[1.6] text-[#5d6c83]">
            Get more out of crypto with one membership: zero trading fees,
            boosted rewards, priority support, and more.
          </p>

          {/* Button */}
          <button className="mt-8 h-[60px] rounded-full bg-black px-10 text-[18px] font-semibold text-white hover:opacity-90">
            Claim free trial
          </button>

        </div>


        {/* RIGHT VISUAL */}
        <div className="flex justify-center lg:justify-end">

          {/* Grey container */}
          <div className="relative h-[520px] w-[560px] rounded-[44px] bg-[#e9ecef]">

            {/* Phone */}
            <div className="absolute left-1/2 top-[40px] h-[520px] w-[300px] -translate-x-1/2 rounded-[28px] bg-white shadow-lg">

              {/* time */}
              <div className="flex justify-between px-6 pt-4 text-[14px] font-semibold">
                <span>3:57</span>
                <span>▮▮▮</span>
              </div>

              {/* check circle */}
              <div className="relative mx-auto mt-14 h-[90px] w-[90px] rounded-full bg-[#1557ff]">
                <svg
                  className="absolute left-1/2 top-1/2 h-[36px] w-[36px] -translate-x-1/2 -translate-y-1/2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-[18px] font-semibold">
                  Trade successful!
                </h3>
                <p className="text-[13px] text-[#6f6f6f]">
                  You got 0.012423 BTC
                </p>
              </div>

              {/* floating card */}
              <div className="absolute left-1/2 top-[300px] w-[340px] -translate-x-1/2 rounded-[14px] bg-white p-4 shadow-lg">
                <span className="mr-2 text-[#6f6f6f] line-through">$14.68</span>
                <span className="font-semibold">
                  No trading fees with Coinbase One
                </span>
              </div>

              {/* bottom content */}
              <div className="mt-[120px] px-6">
                <h4 className="text-[15px] font-semibold">
                  Exclusive member benefits
                </h4>

                <p className="mt-2 text-[13px] text-[#6f6f6f]">
                  Coinbase One members get boosted staking rewards.
                </p>

                <button className="mt-2 text-[14px] font-semibold text-[#1557ff]">
                  Learn more
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}