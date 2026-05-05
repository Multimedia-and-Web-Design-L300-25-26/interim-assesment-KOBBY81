export default function BaseAppSection() {
  return (
    <section className="bg-[#f3f5f7] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[560px_1fr] lg:gap-16">
        {/* Left visual */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[480px] w-[520px] rounded-[44px] bg-[#e9ecef]">
            <div className="absolute left-1/2 top-[20px] h-[608px] w-[282px] -translate-x-1/2 rounded-[28px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
              {/* status bar */}
              <div className="flex items-center justify-between px-10 pt-4 text-[13px] font-semibold text-[#181818]">
                <span>4:20</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-[2px]">
                    <span className="block h-[5px] w-[3px] rounded bg-black" />
                    <span className="block h-[7px] w-[3px] rounded bg-black" />
                    <span className="block h-[9px] w-[3px] rounded bg-black" />
                  </div>
                  <div className="h-[8px] w-[12px] rounded-[2px] border border-black" />
                </div>
              </div>

              {/* top nav */}
              <div className="mt-4 flex items-center justify-center gap-8 text-[15px]">
                <span className="font-semibold text-[#111]">Trade</span>
                <span className="font-medium text-[#777]">Talk</span>
              </div>
              <div className="mx-auto mt-1 h-[2px] w-[40px] rounded bg-[#111]" />
              <div className="mt-4 border-t border-[#ececec]" />

              {/* post header */}
              <div className="px-3 pt-3">
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffb86b,#8b2f1d_65%,#2e120c)]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#111]">
                        jasmine
                      </span>
                      <span className="text-[11px] text-[#8a8a8a]">1s</span>
                    </div>
                    <p className="mt-1 text-[12px] text-[#222]">
                      Detail on my new painting
                    </p>
                  </div>
                </div>
              </div>

              {/* artwork */}
              <div className="relative mt-3 h-[200px] overflow-hidden bg-[#f7f2ec]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#ffb84a_0,#ffb84a_8%,transparent_9%),linear-gradient(135deg,#fdf7f1_0%,#fff5f1_18%,#e9005e_24%,#ff2b71_38%,#f13e69_49%,#ff7b8d_57%,#fff3ef_70%,#fff8f4_100%)]" />
                <div className="absolute left-[136px] top-[104px] h-[22px] w-[22px] bg-[#1657ff]" />
                <div className="absolute left-[159px] top-[126px] h-[11px] w-[11px] bg-[#f7c500]" />
                <div className="absolute left-[170px] top-[134px] h-[9px] w-[9px] bg-[#1bd36d]" />
                <div className="absolute left-[180px] top-[141px] h-[7px] w-[7px] bg-[#ff5b61]" />
                <div className="absolute left-[153px] top-[147px] h-[6px] w-[6px] bg-[#ffffff]" />
                <div className="absolute left-[161px] top-[156px] h-[6px] w-[6px] bg-[#1657ff]" />
                <div className="absolute left-[171px] top-[164px] h-[5px] w-[5px] bg-[#f7c500]" />
              </div>

              {/* floating chip */}
              <div className="absolute left-[160px] top-[335px] flex h-[52px] w-[116px] items-center justify-center gap-2 rounded-full bg-white shadow-[0_8px_18px_rgba(0,0,0,0.14)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#f5d66a] text-[16px] font-semibold text-[#1657ff]">
                  S
                </div>
                <span className="text-[18px] font-semibold text-[#111]">$1.00</span>
              </div>

              {/* metrics */}
              <div className="flex items-center gap-5 px-4 py-3 text-[12px] text-[#333]">
                <span>♡ 1.5K</span>
                <span>↗ $21.1K</span>
                <span>✈</span>
              </div>

              {/* second post header */}
              <div className="border-t border-[#ececec] px-3 pt-3">
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4fc3f7,#0b5e84_65%,#0a2d3a)]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#222]">
                        <span className="font-semibold">tilfox</span> bought $10 of
                        $VIRTUAL
                      </span>
                      <span className="text-[11px] text-[#8a8a8a]">15m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* coin card */}
              <div className="mx-3 mt-3 rounded-[18px] bg-[#f7f7f7] p-3">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8f1de] text-[14px] text-[#3d8d6a]">
                      ◔
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#111]">
                        Virtual Protocol
                      </div>
                      <div className="text-[11px] text-[#7b7b7b]">VIRTUAL</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[14px] font-semibold text-[#111]">
                      $742M
                    </div>
                    <div className="text-[11px] text-[#7b7b7b]">Market Cap</div>
                  </div>
                </div>

                <div className="mt-3 h-[52px] w-full">
                  <svg viewBox="0 0 230 52" className="h-full w-full">
                    <polyline
                      points="0,43 18,41 32,42 49,34 61,36 77,29 95,31 110,22 126,21 140,14 155,15 170,16 186,11 200,14 214,8 230,3"
                      fill="none"
                      stroke="#21a366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* bottom nav */}
              <div className="absolute bottom-7 left-0 right-0 flex items-center justify-around px-8 text-[#111]">
                <span className="text-[18px]">⌂</span>
                <span className="text-[18px]">⌕</span>
                <span className="text-[18px]">↻</span>
                <span className="text-[18px]">◔</span>
                <span className="text-[18px]">▢</span>
              </div>
              <div className="absolute bottom-2 left-1/2 h-[4px] w-[104px] -translate-x-1/2 rounded-full bg-black" />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-3 rounded-[14px] border border-[#d9dde3] px-4 py-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-black" />
            <span className="text-[16px] tracking-[-0.01em] text-[#5d6c83]">
              BASE APP
            </span>
          </div>

          <h2 className="mt-8 text-[55px] leading-[1] tracking-[-0.04em] text-black">
            Countless ways to earn crypto with the Base App.
          </h2>

          <p className="mt-6 text-[18px] leading-[1.6] text-[#5d6c83]">
            An everything app to trade, create, discover, and chat, all in one
            place.
          </p>

          <button className="mt-8 h-[60px] rounded-full bg-black px-12 text-[18px] font-semibold text-white hover:opacity-90">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}