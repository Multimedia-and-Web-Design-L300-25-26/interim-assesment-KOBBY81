export default function AdvancedTraderSection() {
  return (
    <section className="bg-[#f3f5f7] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-16">
        {/* Left visual */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[470px] w-full max-w-[520px] overflow-hidden rounded-[42px] bg-black">
            {/* tablet */}
            <div className="absolute left-[28px] top-[150px] h-[235px] w-[365px] rotate-[-2deg] rounded-[28px] border-[3px] border-[#6ea2ff] bg-[#0b1018] shadow-[0_0_0_2px_rgba(255,255,255,0.18)]">
              <div className="h-full w-full overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#0b1018_0%,#0a0f16_100%)]">
                <div className="flex h-8 items-center gap-2 border-b border-white/5 px-4 text-[9px] text-white/70">
                  <div className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                  <div className="h-2 w-10 rounded bg-white/10" />
                  <div className="h-2 w-8 rounded bg-white/10" />
                  <div className="ml-auto h-2 w-14 rounded bg-white/10" />
                </div>

                <div className="grid h-[calc(100%-32px)] grid-cols-[54px_1fr_120px]">
                  <div className="border-r border-white/5 bg-[#0a0f16] p-2">
                    <div className="space-y-2">
                      <div className="h-6 rounded bg-[#122033]" />
                      <div className="h-6 rounded bg-white/5" />
                      <div className="h-6 rounded bg-white/5" />
                      <div className="h-6 rounded bg-white/5" />
                    </div>
                  </div>

                  <div className="relative p-3">
                    <div className="absolute inset-3 rounded-[14px] border border-white/5" />
                    <svg viewBox="0 0 280 150" className="absolute inset-x-4 top-5 h-[150px] w-[calc(100%-32px)]">
                      <g opacity="0.18" stroke="#94a3b8" strokeWidth="1">
                        <line x1="0" y1="25" x2="280" y2="25" />
                        <line x1="0" y1="55" x2="280" y2="55" />
                        <line x1="0" y1="85" x2="280" y2="85" />
                        <line x1="0" y1="115" x2="280" y2="115" />
                      </g>

                      <g>
                        <line x1="15" y1="95" x2="15" y2="120" stroke="#ef4444" strokeWidth="3" />
                        <line x1="28" y1="78" x2="28" y2="112" stroke="#10b981" strokeWidth="3" />
                        <line x1="41" y1="86" x2="41" y2="120" stroke="#ef4444" strokeWidth="3" />
                        <line x1="54" y1="65" x2="54" y2="92" stroke="#10b981" strokeWidth="3" />
                        <line x1="67" y1="52" x2="67" y2="88" stroke="#10b981" strokeWidth="3" />
                        <line x1="80" y1="67" x2="80" y2="103" stroke="#ef4444" strokeWidth="3" />
                        <line x1="93" y1="58" x2="93" y2="84" stroke="#10b981" strokeWidth="3" />
                        <line x1="106" y1="72" x2="106" y2="101" stroke="#ef4444" strokeWidth="3" />
                        <line x1="119" y1="48" x2="119" y2="76" stroke="#10b981" strokeWidth="3" />
                        <line x1="132" y1="56" x2="132" y2="89" stroke="#ef4444" strokeWidth="3" />
                        <line x1="145" y1="42" x2="145" y2="68" stroke="#10b981" strokeWidth="3" />
                        <line x1="158" y1="31" x2="158" y2="61" stroke="#10b981" strokeWidth="3" />
                      </g>

                      <polyline
                        points="8,108 24,92 40,98 56,77 72,70 88,80 104,67 120,72 136,57 152,48 168,40 184,52 200,44 216,58 232,47 248,35 266,26"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                    </svg>

                    <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 gap-2">
                      <div className="h-8 rounded bg-white/5" />
                      <div className="h-8 rounded bg-white/5" />
                      <div className="h-8 rounded bg-white/5" />
                      <div className="h-8 rounded bg-white/5" />
                    </div>
                  </div>

                  <div className="border-l border-white/5 p-2">
                    <div className="space-y-1.5 text-[8px]">
                      <div className="flex justify-between text-red-400">
                        <span>51,221</span>
                        <span>0.52</span>
                      </div>
                      <div className="flex justify-between text-red-400">
                        <span>51,210</span>
                        <span>0.31</span>
                      </div>
                      <div className="flex justify-between text-red-400">
                        <span>51,203</span>
                        <span>0.82</span>
                      </div>
                      <div className="my-2 h-6 rounded bg-[#123d2c] text-center text-[8px] leading-6 text-[#6ee7b7]">
                        Buy BTC
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>51,190</span>
                        <span>0.27</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>51,181</span>
                        <span>0.64</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>51,170</span>
                        <span>0.29</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* phone */}
            <div className="absolute right-[26px] top-[138px] h-[300px] w-[108px] rotate-[1deg] rounded-[22px] border-[3px] border-[#6ea2ff] bg-[#0b1018] shadow-[0_0_0_2px_rgba(255,255,255,0.15)]">
              <div className="h-full w-full overflow-hidden rounded-[18px] bg-[#0a0f16]">
                <div className="flex items-center justify-between px-2 pt-2 text-[6px] text-white/70">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                <div className="px-2 pt-2">
                  <div className="mb-2 flex gap-1">
                    <div className="h-5 flex-1 rounded-full bg-[#1e8f66]" />
                    <div className="h-5 w-8 rounded-full bg-white/10" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[5px] text-white/80">
                      <span>BTC-USD</span>
                      <span className="text-red-400">-1.2%</span>
                    </div>
                    <div className="h-5 rounded bg-white/5" />
                    <div className="h-5 rounded bg-white/5" />
                    <div className="h-5 rounded bg-white/5" />
                    <div className="h-5 rounded bg-white/5" />
                    <div className="h-5 rounded bg-white/5" />
                    <div className="h-5 rounded bg-white/5" />
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <div className="h-4 rounded-full bg-[#1e8f66]" />
                    <div className="h-4 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[5px] text-white/60">
                  <span>Home</span>
                  <span>Trade</span>
                  <span>Orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="max-w-[660px]">
          <h2 className="text-[60px] font-normal leading-[0.95] tracking-[-0.055em] text-[#0a0b0d] sm:text-[68px] lg:text-[72px]">
            Powerful tools, designed for the advanced trader.
          </h2>

          <p className="mt-10 max-w-[640px] text-[24px] leading-[1.5] tracking-[-0.02em] text-[#5d6c83]">
            Powerful analytical tools with the safety and security of Coinbase
            deliver the ultimate trading experience. Tap into sophisticated
            charting capabilities, real-time order books, and deep liquidity
            across hundreds of markets.
          </p>

          <button className="mt-10 inline-flex h-[84px] items-center justify-center rounded-full bg-black px-12 text-[22px] font-semibold text-white transition hover:opacity-90">
            Start trading
          </button>
        </div>
      </div>
    </section>
  );
}