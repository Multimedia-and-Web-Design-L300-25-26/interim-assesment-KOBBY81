export default function TakeControlSection() {
  return (
    <section className="bg-[#f3f5f7] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_520px]">
        {/* Left content */}
        <div className="max-w-[520px]">
          <h2 className="text-[56x] leading-[1.05] tracking-[-0.04em] text-black sm:text-[84px] lg:text-[92px]">
            Take control
            <br />
            of your money
          </h2>

          <p className="mt-6 text-[18px] leading-[1.45] tracking-[-0.02em] text-black">
            Start your portfolio today and get up to $2,000 in crypto
          </p>

          <div className="mt-10 flex max-w-[820px] items-center gap-6">
            <input
              type="text"
              defaultValue="satoshi@nakamoto.com"
              className="h-[88px] flex-1 rounded-[18px] border border-[#b7bcc5] bg-transparent px-6 text-[20px] text-[#53657d] outline-none"
            />
            <button className="h-[90px] min-w-[198px] rounded-full bg-[#1657ff] px-10 text-[24px] font-semibold text-white hover:opacity-95">
              Sign up
            </button>
          </div>
        </div>

        {/* Right graphic */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[520px] w-[520px]">
            {/* top */}
            <div className="absolute left-[188px] top-[10px] flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#031327] text-[74px] font-semibold text-white">
              A
            </div>

            {/* left middle */}
            <div className="absolute left-[8px] top-[112px] flex h-[174px] w-[174px] items-center justify-center rounded-full bg-[#1657ff]">
              <div className="relative h-[86px] w-[86px] rounded-full border-[22px] border-white/95">
                <div className="absolute right-[-52px] top-1/2 h-[18px] w-[74px] -translate-y-1/2 bg-white/95" />
              </div>
            </div>

            {/* right middle */}
            <div className="absolute right-[4px] top-[112px] flex h-[174px] w-[174px] items-center justify-center rounded-full bg-[#f7cd00] text-[82px] text-black">
              →
            </div>

            {/* center */}
            <div className="absolute left-1/2 top-[214px] flex h-[174px] w-[174px] -translate-x-1/2 items-center justify-center rounded-full bg-[#f7931a] text-[92px] font-semibold text-white">
              ₿
            </div>

            {/* lower left */}
            <div className="absolute left-[8px] top-[322px] flex h-[174px] w-[174px] items-center justify-center rounded-full bg-[#c9ab2f] text-[88px] font-semibold text-white">
              Đ
            </div>

            {/* lower center */}
            <div className="absolute left-[188px] top-[426px] flex h-[174px] w-[174px] items-center justify-center rounded-full bg-[#627eea] text-[86px] text-white">
              ♦
            </div>

            {/* lower right */}
            <div className="absolute right-[4px] top-[322px] flex h-[174px] w-[174px] items-center justify-center rounded-full bg-[#1239b8]">
              <div className="grid grid-cols-5 gap-[6px]">
                {[
                  0.55, 0.85, 1, 0.85, 0.55,
                  0.85, 1, 1, 1, 0.85,
                  1, 1, 1, 1, 1,
                  0.85, 1, 1, 1, 0.85,
                  0.55, 0.85, 1, 0.85, 0.55,
                ].map((o, i) => (
                  <span
                    key={i}
                    className="h-[6px] w-[6px] rounded-full bg-white"
                    style={{ opacity: o }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}