import Navbar from "../components/layout/Navbar";

const popularCards = [
  {
    category: "Crypto basics",
    title: "What is cryptocurrency?",
    desc: "A beginner guide to digital money designed to work over the internet.",
    color: "bg-[#f5efe7]",
  },
  {
    category: "Crypto basics",
    title: "What is Bitcoin?",
    desc: "Learn about the first and best-known cryptocurrency.",
    color: "bg-[#f4f7fb]",
  },
  {
    category: "Crypto basics",
    title: "Guide to DeFi tokens and altcoins",
    desc: "Key information about major crypto assets beyond Bitcoin and Ethereum.",
    color: "bg-[#eef5f1]",
  },
];

const topicCards = [
  {
    title: "What is a blockchain?",
    desc: "Understand the technology behind cryptocurrencies and decentralized networks.",
  },
  {
    title: "What is DeFi?",
    desc: "Explore decentralized finance and how it aims to recreate financial services on public blockchains.",
  },
  {
    title: "What is a hardware wallet?",
    desc: "Learn how offline wallets help keep private keys more secure.",
  },
  {
    title: "What is an ETF?",
    desc: "See how exchange-traded funds work and why they matter to investors.",
  },
  {
    title: "What’s the difference between Coinbase and Coinbase Wallet?",
    desc: "Understand hosted accounts versus self-custody wallets.",
  },
  {
    title: "How to get started in DeFi",
    desc: "A practical walkthrough for navigating decentralized apps and onchain tools.",
  },
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main className="px-6 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          {/* Hero */}
          <section className="grid items-center gap-10 lg:grid-cols-[1fr_520px]">
            <div className="max-w-[640px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#1652f0]">
                Coinbase Learn
              </p>

              <h1 className="mt-5 text-[54px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#0a0b0d] sm:text-[66px] lg:text-[78px]">
                Your crypto questions, answered
              </h1>

              <p className="mt-6 max-w-[560px] text-[20px] leading-8 text-[#5d6c83]">
                Beginner guides, market explainers, and practical walkthroughs
                to help you understand crypto with confidence.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-[36px] bg-[#1652f0]">
                <div className="absolute -left-8 top-10 h-[220px] w-[220px] rounded-full border border-white/20" />
                <div className="absolute right-10 top-10 h-[140px] w-[140px] rounded-full bg-white/10" />
                <div className="absolute left-[110px] top-[95px] flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white text-[70px] font-bold text-[#1652f0]">
                  ₿
                </div>
                <div className="absolute right-[60px] bottom-[48px] flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#ffd400] text-[40px] text-black">
                  →
                </div>
                <div className="absolute left-[58px] bottom-[36px] text-[18px] font-medium text-white/90">
                  Learn crypto the easy way
                </div>
              </div>
            </div>
          </section>

          {/* Featured */}
          <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
                Featured
              </h2>
            </div>

            <article className="grid overflow-hidden rounded-[32px] border border-[#e5e7eb] bg-white shadow-sm lg:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[360px] bg-[linear-gradient(135deg,#f8efe7_0%,#f5f7fb_100%)]">
                <div className="absolute left-[40px] top-[46px] h-[170px] w-[170px] rounded-full bg-[#1652f0]" />
                <div className="absolute left-[115px] top-[125px] h-[110px] w-[110px] rounded-full bg-[#ffd400]" />
                <div className="absolute left-[220px] top-[84px] h-[120px] w-[120px] rounded-full bg-[#111827]" />
                <div className="absolute bottom-[34px] left-[48px] h-[18px] w-[200px] rounded-full bg-[#111827]" />
                <div className="absolute bottom-[70px] left-[48px] h-[18px] w-[240px] rounded-full bg-[#1652f0]" />
              </div>

              <div className="px-8 py-9 lg:px-10 lg:py-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6b7280]">
                  Featured
                </p>

                <h3 className="mt-4 max-w-[420px] text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0a0b0d]">
                  When is the best time to invest in crypto?
                </h3>

                <p className="mt-5 max-w-[460px] text-[17px] leading-7 text-[#5d6c83]">
                  Learn how long-term thinking, risk tolerance, and volatility
                  can shape the way people approach crypto investing.
                </p>

                <button className="mt-8 h-[52px] rounded-full bg-[#1652f0] px-7 text-[16px] font-semibold text-white hover:bg-[#1447d6]">
                  Read article
                </button>
              </div>
            </article>
          </section>

          {/* Popular */}
          <section className="mt-20">
            <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
              Popular
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {popularCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm"
                >
                  <div className={`relative h-[210px] ${card.color}`}>
                    <div className="absolute left-[28px] top-[28px] h-[80px] w-[80px] rounded-full bg-[#1652f0]" />
                    <div className="absolute left-[92px] top-[88px] h-[64px] w-[64px] rounded-full bg-[#ffd400]" />
                    <div className="absolute right-[30px] bottom-[28px] h-[86px] w-[86px] rounded-full bg-[#111827]" />
                  </div>

                  <div className="px-6 pb-7 pt-6">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6b7280]">
                      {card.category}
                    </p>

                    <h3 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111827]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-7 text-[#5d6c83]">
                      {card.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* More topics */}
          <section className="mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#0a0b0d]">
                More topics
              </h2>

              <button className="rounded-full border border-[#d1d5db] bg-white px-5 py-2.5 text-[14px] font-medium text-[#111827] hover:bg-[#f8fafc]">
                View all
              </button>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {topicCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-[#e5e7eb] bg-white px-6 py-6 shadow-sm"
                >
                  <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#111827]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#5d6c83]">
                    {card.desc}
                  </p>
                  <button className="mt-6 text-[15px] font-semibold text-[#1652f0] hover:underline">
                    Read more
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-20 overflow-hidden rounded-[32px] bg-[#1652f0] px-8 py-10 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em]">
                  Start learning by doing
                </h2>
                <p className="mt-3 max-w-[560px] text-[17px] leading-7 text-white/85">
                  Create an account to explore crypto markets, follow prices,
                  and continue your learning journey.
                </p>
              </div>

              <button className="h-[54px] rounded-full bg-white px-8 text-[16px] font-semibold text-[#1652f0] hover:bg-[#f8fafc]">
                Sign up
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}