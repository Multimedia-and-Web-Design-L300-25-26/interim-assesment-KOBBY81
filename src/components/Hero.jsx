import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[560px_minmax(420px,1fr)] xl:max-w-[1320px] xl:grid-cols-[590px_minmax(440px,1fr)]">
        {/* Left visual */}
        <div className="relative h-[640px] w-full overflow-hidden rounded-[34px] bg-gradient-to-br from-[#0a33c7] via-[#0329b7] to-[#001b73]">
          <div className="absolute left-1/2 top-[76px] h-[560px] w-[78%] -translate-x-1/2 rounded-t-[64px] border border-white/15 bg-[#3150b8]/55" />

          <div className="absolute left-1/2 top-[104px] h-[536px] w-[66%] -translate-x-1/2 rounded-t-[48px] bg-[#f7f7f8] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 px-7 pt-6">
              <div className="flex h-9 w-9 items-center justify-center">
                <div className="space-y-1.5">
                  <div className="h-[3px] w-7 rounded bg-[#111]" />
                  <div className="h-[3px] w-7 rounded bg-[#111]" />
                  <div className="h-[3px] w-7 rounded bg-[#111]" />
                </div>
              </div>

              <div className="flex h-[48px] w-[190px] items-center rounded-full bg-[#eceef2] pl-6">
                <svg
                  className="mr-3 h-6 w-6 text-[#111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span className="text-[17px] font-medium text-[#6e7177]">
                  Search
                </span>
              </div>

              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#e8e8ea] bg-white shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-[5px] border-black text-[10px] font-semibold leading-none">
                  c
                </div>
              </div>

              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#e8e8ea] bg-white shadow-sm">
                <svg
                  className="h-6 w-6 text-[#111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="5" width="4" height="14" rx="1.3" />
                  <rect x="14" y="3" width="4" height="18" rx="1.3" />
                </svg>
              </div>

              <div className="ml-1 flex h-9 w-9 items-center justify-center">
                <svg
                  className="h-7 w-7 text-[#111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                  <path d="M10 17a2 2 0 0 0 4 0" />
                </svg>
              </div>
            </div>

            <div className="px-12 pt-8">
              <h2 className="text-[44px] font-semibold tracking-[-0.03em] text-black">
                $33,683.80
              </h2>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[16px] font-semibold text-[#1f9b61]">↗</span>
                <span className="text-[16px] font-medium text-[#1f9b61]">
                  $131.36 (1.38%)
                </span>
                <span className="text-[16px] text-[#666a70]">1D</span>
                <span className="text-[26px] leading-none text-[#666a70]">›</span>
              </div>
            </div>

            <div className="absolute right-7 top-[160px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#eceef2]">
              <span className="text-[28px] leading-none text-[#111]">⌃</span>
            </div>

            <div className="absolute left-0 top-[228px] w-full px-5">
              <svg viewBox="0 0 480 170" className="h-[160px] w-full">
                <defs>
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="6"
                    height="6"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1.5" cy="1.5" r="1.1" fill="#cfe0ff" />
                  </pattern>
                </defs>

                <path
                  d="M0 140
                     C18 140, 18 118, 34 132
                     C52 147, 64 103, 92 112
                     C120 121, 132 128, 156 112
                     C180 96, 194 96, 214 112
                     C232 128, 246 111, 262 112
                     C278 113, 288 73, 322 68
                     C344 65, 356 54, 388 71
                     C410 82, 422 65, 440 48
                     C450 37, 458 18, 468 9
                     L468 170 L0 170 Z"
                  fill="url(#dots)"
                  opacity="0.95"
                />
                <path
                  d="M0 140
                     C18 140, 18 118, 34 132
                     C52 147, 64 103, 92 112
                     C120 121, 132 128, 156 112
                     C180 96, 194 96, 214 112
                     C232 128, 246 111, 262 112
                     C278 113, 288 73, 322 68
                     C344 65, 356 54, 388 71
                     C410 82, 422 65, 440 48
                     C450 37, 458 18, 468 9"
                  fill="none"
                  stroke="#1158f1"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle cx="468" cy="9" r="7" fill="#1158f1" />
                <circle
                  cx="468"
                  cy="9"
                  r="13"
                  fill="none"
                  stroke="#8eb4ff"
                  strokeWidth="5"
                  opacity="0.7"
                />
              </svg>
            </div>

            <div className="absolute left-[44px] top-[370px] flex items-center gap-6 text-[16px] font-semibold text-[#666a70]">
              <span>1H</span>
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#eef3ff] text-[#1158f1]">
                1D
              </span>
              <span>1W</span>
              <span>1M</span>
              <span>1Y</span>
              <span>ALL</span>
            </div>

            <div className="absolute left-7 right-7 top-[450px] space-y-3.5">
              {[
                ["Crypto", "$14,186.12", false],
                ["Stocks", "$8,133.98", false],
                ["Derivatives", "↗ $148.84", true],
                ["Predictions", "↗ $42.69", true],
                ["Cash", "$10,124.22", false],
              ].map(([label, value, green]) => (
                <div
                  key={label}
                  className="grid grid-cols-[44px_1fr_auto] items-center"
                >
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#eceef2]">
                    <div className="h-[16px] w-[16px] rounded-full border-2 border-[#111]" />
                  </div>
                  <span className="text-[16px] font-semibold text-[#111]">
                    {label}
                  </span>
                  <span
                    className={`text-[16px] font-medium ${
                      green ? "text-[#1f9b61]" : "text-[#111]"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="pb-8 lg:pb-0 lg:pl-2 xl:pl-4">
          <h1 className="max-w-[560px] text-[72px] font-normal leading-[0.9] tracking-[-0.06em] text-black xl:text-[82px]">
            The future of finance is here.
          </h1>

          <p className="mt-8 max-w-[560px] text-[24px] tracking-[-0.02em] text-black xl:text-[26px]">
            Trade crypto, stocks, and more on a platform you can trust.
          </p>

          <p className="mt-4 text-[20px] text-black xl:text-[22px]">
            Sign up and get up to $2,000 in crypto.
          </p>

          <div className="mt-10 flex max-w-[700px] items-center gap-4">
            <input
              type="text"
              defaultValue="satoshi@nakamoto.com"
              className="h-[76px] flex-1 rounded-[18px] border border-[#b9bcc3] bg-transparent px-6 text-[19px] text-[#53657d] outline-none"
            />
            <Link to="/signup">
              <button className="h-[76px] min-w-[180px] rounded-full bg-[#1158f1] px-8 text-[22px] font-semibold text-white">
                Sign up
              </button>
            </Link>
          </div>

          <p className="mt-6 max-w-[720px] text-[12px] leading-5 text-[#5f6368]">
            Securities offered by Coinbase Capital Markets (member SIPC, FINRA).
            Listed futures and swaps are offered via Coinbase Financial Markets
            (“CFM”), a NFA member firm. Crypto offered by Coinbase Inc.
          </p>
        </div>
      </div>
    </section>
  );
}