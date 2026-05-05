export default function LearnBasicsSection() {
  const cards = [
    {
      title: "USDC: The digital dollar for the global crypto economy",
      description:
        "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...",
      variant: "usdc",
    },
    {
      title: "Can crypto really replace your bank account?",
      description:
        "If you're a big enough fan of crypto, you've probably heard the phrase “be your own bank” or the term “bankless” — the idea being that...",
      variant: "bank",
    },
    {
      title: "When is the best time to invest in crypto?",
      description:
        "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...",
      variant: "invest",
    },
  ];

  return (
    <section className="bg-[#f3f5f7] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-start">
          <div className="max-w-[560px]">
            <h2 className="text-[56px] leading-[0.95] tracking-[-0.05em] text-black sm:text-[64px] lg:text-[72px]">
              New to crypto?
              <br />
              Learn some
              <br />
              crypto basics
            </h2>
          </div>

          <div className="max-w-[520px] lg:pt-2">
            <p className="text-[18px] leading-[1.55] text-[#5d6c83] sm:text-[19px] lg:text-[20px]">
              Beginner guides, practical tips, and market updates for
              first-timers, experienced investors, and everyone in between
            </p>

            <button className="mt-8 h-[60px] rounded-full bg-black px-12 text-[18px] font-semibold text-white transition hover:opacity-90">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="w-full max-w-[380px]">
              <div className="overflow-hidden rounded-[36px]">
                {card.variant === "usdc" && <UsdcArtwork />}
                {card.variant === "bank" && <BankArtwork />}
                {card.variant === "invest" && <InvestArtwork />}
              </div>

              <div className="mt-7 w-full">
                <h3 className="text-[34px] leading-[1.03] tracking-[-0.045em] text-black sm:text-[38px]">
                  {card.title}
                </h3>

                <p className="mt-5 text-[18px] leading-[1.5] text-[#5d6c83]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsdcArtwork() {
  return (
    <div className="relative h-[302px] rounded-[36px] bg-black">
      <svg
        viewBox="0 0 380 302"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle cx="190" cy="151" r="112" fill="none" stroke="#f4f4f4" strokeWidth="1.5" />
        <circle cx="190" cy="151" r="82" fill="none" stroke="#f4f4f4" strokeWidth="1.5" />
        <circle cx="190" cy="151" r="132" fill="none" stroke="#f4f4f4" strokeWidth="1.5" />

        <circle cx="116" cy="70" r="4" fill="#ffd400" />
        <circle cx="295" cy="126" r="4" fill="#38d39f" />
        <circle cx="200" cy="35" r="4" fill="#1657ff" />
        <circle cx="247" cy="53" r="4" fill="#ffd400" />
        <circle cx="73" cy="154" r="4" fill="#ff7440" />
        <circle cx="171" cy="58" r="4" fill="#38d39f" />
        <circle cx="313" cy="154" r="4" fill="#38d39f" />

        <path d="M147 20a132 132 0 0 1 92 0" stroke="#ffd400" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M260 66a112 112 0 0 1 23 77" stroke="#1657ff" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M82 218a132 132 0 0 1-18-64" stroke="#38d39f" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M115 55a112 112 0 0 1 30-18" stroke="#38d39f" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M282 219a132 132 0 0 1-25 37" stroke="#ff7440" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M101 109a82 82 0 0 1 60-48" stroke="#1657ff" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M91 190a82 82 0 0 1-7-34" stroke="#ffd400" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M244 219a82 82 0 0 1-36 16" stroke="#38d39f" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M152 246a112 112 0 0 1-56-17" stroke="#1657ff" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M125 222a82 82 0 0 1-21-18" stroke="#ff7440" strokeWidth="8" fill="none" strokeLinecap="round" />

        <circle cx="190" cy="151" r="53" fill="#1657ff" />
        <text
          x="190"
          y="170"
          textAnchor="middle"
          fontSize="56"
          fontWeight="600"
          fill="white"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          $
        </text>
        <path d="M154 128c-8 7-13 17-13 28s5 21 13 28" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M226 128c8 7 13 17 13 28s-5 21-13 28" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BankArtwork() {
  return (
    <div className="relative h-[302px] rounded-[36px] bg-[#2f67ea] overflow-hidden">
      <div className="absolute left-1/2 top-[28px] h-[170px] w-[200px] -translate-x-1/2">
        <div className="mx-auto h-0 w-0 border-l-[72px] border-r-[72px] border-b-[58px] border-l-transparent border-r-transparent border-b-[#c9d3d6]" />
        <div className="mx-auto h-[16px] w-[176px] bg-[#c9d3d6]" />
        <div className="mx-auto mt-2 flex w-[168px] justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[78px] w-[20px] bg-[#e7ecee] shadow-[inset_-4px_0_0_rgba(0,0,0,0.08)]" />
          ))}
        </div>
        <div className="mx-auto h-[18px] w-[176px] bg-[#c9d3d6]" />
      </div>

      <div className="absolute left-[34px] top-[66px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#ffd400] text-[24px]">
        ✦
      </div>
      <div className="absolute right-[34px] top-[92px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#ffd400] text-[24px]">
        ✦
      </div>

      <div className="absolute left-1/2 bottom-0 h-[138px] w-[290px] -translate-x-1/2 rounded-t-[40px] bg-white border-[10px] border-black">
        <div className="absolute left-1/2 top-0 h-[26px] w-[112px] -translate-x-1/2 rounded-b-[22px] bg-black" />
        <div className="absolute left-[42px] top-[44px] h-[18px] w-[18px] text-[#ffd400]">✦</div>
        <div className="absolute right-[42px] top-[44px] h-[18px] w-[18px] text-[#ffd400]">✦</div>

        <div className="absolute bottom-[10px] left-[36px] flex gap-3">
          <div className="h-[36px] w-[46px] bg-[#ffd400]" />
          <div className="h-[36px] w-[46px] bg-[#ff8a00]" />
          <div className="h-[36px] w-[46px] bg-[#f2f2f2]" />
        </div>

        <div className="absolute bottom-[10px] right-[36px] flex gap-3">
          <div className="h-[36px] w-[46px] bg-[#6d92ff]" />
          <div className="h-[36px] w-[46px] bg-[#1657ff]" />
        </div>
      </div>
    </div>
  );
}

function InvestArtwork() {
  return (
    <div className="relative h-[302px] rounded-[36px] bg-[#c6d1cf] overflow-hidden">
      <div className="absolute left-1/2 top-[84px] h-[78px] w-[78px] -translate-x-1/2 rounded-full bg-[#ffd400] flex items-center justify-center text-[40px] font-semibold text-white">
        ₿
      </div>

      <div className="absolute left-[140px] top-[48px] h-[38px] w-[38px] bg-[#2cc47d] flex items-center justify-center text-[20px] text-[#1657ff]">
        ▣
      </div>
      <div className="absolute left-[120px] top-[154px] h-[50px] w-[50px] bg-[#f5793f] flex items-center justify-center text-white">
        ▥
      </div>
      <div className="absolute right-[118px] top-[50px] h-[38px] w-[38px] bg-[#2f67ea] flex items-center justify-center text-[#ffd400]">
        ◇
      </div>
      <div className="absolute right-[116px] top-[155px] h-[48px] w-[48px] bg-[#111] flex items-center justify-center text-[18px] text-[#ff8a00]">
        ▦
      </div>

      <svg viewBox="0 0 380 302" className="absolute inset-0 h-full w-full">
        <line x1="158" y1="68" x2="190" y2="120" stroke="#43545a" strokeWidth="1.6" />
        <line x1="145" y1="179" x2="190" y2="120" stroke="#43545a" strokeWidth="1.6" />
        <line x1="236" y1="68" x2="190" y2="120" stroke="#43545a" strokeWidth="1.6" />
        <line x1="236" y1="179" x2="190" y2="120" stroke="#43545a" strokeWidth="1.6" />
      </svg>

      <div className="absolute bottom-[30px] right-[24px]">
        <div className="relative h-[92px] w-[200px]">
          <div className="absolute bottom-[18px] right-[0px] h-[22px] w-[122px] rounded-full bg-[#d67d49]" />
          <div className="absolute bottom-[40px] right-[72px] h-[18px] w-[86px] rounded-full bg-[#e7c1ab] rotate-[22deg]" />
          <div className="absolute bottom-[30px] right-[80px] h-[18px] w-[86px] rounded-full bg-black rotate-[24deg]" />
          <div className="absolute bottom-[18px] right-[104px] h-[18px] w-[78px] rounded-full bg-black rotate-[18deg]" />
        </div>
      </div>
    </div>
  );
}