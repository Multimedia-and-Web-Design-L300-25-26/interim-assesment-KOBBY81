import { useState } from "react";
import { Search, ChevronDown, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const menus = {
  cryptocurrencies: {
    title: "Cryptocurrencies",
    width: "w-[420px]",
    sections: [
      {
        heading: "Top Assets",
        links: [
          { label: "Bitcoin" },
          { label: "Ethereum" },
          { label: "Solana" },
          { label: "Dogecoin" },
          { label: "XRP" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { label: "Crypto prices" },
          { label: "Market movers" },
          { label: "New listings" },
          { label: "Crypto basics" },
        ],
      },
    ],
  },

  individuals: {
    title: "Individuals",
    width: "w-[640px]",
    sections: [
      {
        heading: "Trade",
        links: [
          { label: "Crypto", desc: "Buy and sell cryptocurrencies" },
          {
            label: "Prediction markets",
            desc: "Trade on sports, crypto, politics, and more",
            badge: "New",
          },
          {
            label: "Derivatives",
            desc: "Amplify your trades with futures and perpetual futures",
            badge: "New",
          },
          {
            label: "Stocks",
            desc: "Commission-free 24/5 stock trading",
            badge: "New",
          },
          {
            label: "Token sales",
            desc: "Get early access to upcoming tokens",
            badge: "New",
          },
          { label: "Advanced", desc: "Professional-grade trading tools" },
          { label: "Coinbase One", desc: "Get zero trading fees and more" },
          {
            label: "Coinbase Wealth",
            desc: "Institutional-grade services for UHNW",
          },
        ],
      },
      {
        heading: "Earn",
        links: [
          {
            label: "Credit Card",
            desc: "Earn up to 4% Bitcoin back on every purchase",
            badge: "New",
          },
          { label: "Debit card", desc: "Earn crypto rewards in Visa debit" },
          { label: "Staking", desc: "Stake your crypto and earn rewards" },
          {
            label: "USDC rewards",
            desc: "Earn up to 3.50% APY through USDC",
          },
          { label: "Borrow", desc: "Get a crypto-backed loan up to $1M" },
          {
            label: "Base App",
            desc: "Post, earn, trade, discover apps, and chat with friends",
          },
        ],
      },
    ],
    bottomCta:
      "Trade stocks around the clock with 24/5 access and pay zero commission. Start trading",
  },

  businesses: {
    title: "Businesses",
    width: "w-[500px]",
    sections: [
      {
        links: [
          {
            label: "Business",
            desc: "Crypto trading and payments for startups and SMBs",
          },
          {
            label: "Payments",
            desc: "The stablecoin payments stack for commerce platforms",
          },
          {
            label: "Asset Listings",
            desc: "List your asset on Coinbase",
          },
          {
            label: "Token Manager",
            desc: "The platform for token distributions, vesting, and lockups",
          },
        ],
      },
    ],
    bottomCta:
      "Commerce Payments Protocol. A new standard for onchain payments. Go to Payments",
  },

  institutions: {
    title: "Institutions",
    width: "w-[640px]",
    sections: [
      {
        heading: "Prime",
        links: [
          {
            label: "Trading and Financing",
            desc: "Professional prime brokerage services",
          },
          {
            label: "Custody",
            desc: "Securely store all your digital assets",
          },
          {
            label: "Staking",
            desc: "Explore staking across our products",
          },
          {
            label: "Onchain Wallet",
            desc: "Institutional-grade wallet to get onchain",
          },
        ],
      },
      {
        heading: "Markets",
        links: [
          {
            label: "Exchange",
            desc: "Spot markets for high-frequency trading",
          },
          {
            label: "International Exchange",
            desc: "Access perpetual futures markets",
          },
          {
            label: "Derivatives Exchange",
            desc: "Trade an accessible futures market",
          },
          {
            label: "Verified Pools",
            desc: "Transparent, verified liquidity pools",
          },
        ],
      },
    ],
    bottomCta: "Our clients. Trusted by institutions and government. Learn more",
  },

  developers: {
    title: "Developers",
    width: "w-[680px]",
    sections: [
      {
        heading: "Coinbase Developer Platform",
        links: [
          {
            label: "Payments",
            desc: "Fast and global stablecoin payments with a single integration",
          },
          {
            label: "Trading",
            desc: "Launch crypto trading and custody for your users",
          },
          {
            label: "Wallets",
            desc: "Deploy customizable and scalable wallets for your business",
          },
          {
            label: "Stablecoins",
            desc: "Access USDC and Coinbase Custom Stablecoins",
          },
        ],
      },
      {
        heading: "Solutions for any company",
        links: [
          {
            label: "Banks & Brokerages",
            desc: "Secure, regulated offerings for retail, private banking, & institutional clients",
          },
          {
            label: "Payment Firms",
            desc: "Near-instant, low-cost, global payment rails for modern providers",
          },
          {
            label: "Startups",
            desc: "Launch your business with the world's leader in crypto",
          },
        ],
      },
    ],
    bottomCta:
      "World class crypto infrastructure. Discover Coinbase's complete crypto-as-a-service platform. Learn more",
  },

  company: {
    title: "Company",
    width: "w-[460px]",
    sections: [
      {
        links: [
          { label: "About", desc: "Powering the crypto economy" },
          { label: "Careers", desc: "Work with us" },
          {
            label: "Affiliates",
            desc: "Help introduce the world to crypto",
          },
          { label: "Support", desc: "Find answers to your questions" },
          { label: "Blog", desc: "Read the latest from Coinbase" },
          { label: "Security", desc: "The most trusted & secure" },
        ],
      },
    ],
    bottomCta:
      "Learn all about Coinbase: We're building the open financial system. Create your account",
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-11 max-w-[1280px] items-center justify-center gap-2 px-6 text-[14px] font-medium text-slate-900">
          <span>Earn up to $2,000 when you buy $50 in crypto</span>
          <span aria-hidden="true">›</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1652f0] text-[18px] font-bold text-white">
                C
              </span>
              <span className="text-[24px] font-semibold tracking-[-0.03em] text-[#1652f0]">
                coinbase
              </span>
            </Link>

            <div className="relative hidden items-center gap-7 lg:flex">
              {Object.entries(menus).map(([menuKey, menu]) => {
                const isOpen = openMenu === menuKey;
                const topLevelTo =
                  menuKey === "cryptocurrencies"
                    ? "/explore"
                    : menuKey === "company"
                    ? "/learn"
                    : null;

                const Trigger = (
                  <button className="group flex items-center gap-1 text-[15px] font-medium text-slate-800 transition hover:text-black">
                    <span className="relative">
                      {menu.title}
                      <span className="absolute left-0 top-[22px] h-[2px] w-0 bg-[#1652f0] transition-all duration-200 group-hover:w-full" />
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );

                return (
                  <div
                    key={menuKey}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(menuKey)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {topLevelTo ? <Link to={topLevelTo}>{Trigger}</Link> : Trigger}

                    <div
                      className={`absolute left-0 top-11 origin-top rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                        menu.width
                      } ${
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <div
                        className={`grid gap-8 ${
                          menu.sections.length > 1 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {menu.sections.map((section, index) => (
                          <div key={`${menuKey}-${section.heading || "group"}-${index}`}>
                            {section.heading && (
                              <h4 className="mb-4 text-[13px] font-semibold text-slate-900">
                                {section.heading}
                              </h4>
                            )}

                            <ul className="space-y-3">
                              {section.links.map((link) => (
                                <li
                                  key={link.label}
                                  className="cursor-pointer rounded-xl px-3 py-3 transition hover:bg-slate-50"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#1652f0]" />
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[14px] font-semibold text-slate-900">
                                          {link.label}
                                        </span>
                                        {link.badge && (
                                          <span className="rounded-full bg-[#eef4ff] px-2 py-0.5 text-[11px] font-semibold text-[#1652f0]">
                                            {link.badge}
                                          </span>
                                        )}
                                      </div>
                                      {link.desc && (
                                        <p className="mt-1 max-w-[260px] text-[13px] leading-5 text-slate-500">
                                          {link.desc}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {menu.bottomCta && (
                        <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-4 text-[13px] font-medium text-slate-700">
                          {menu.bottomCta}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full p-2.5 text-slate-700 transition hover:bg-slate-100 hover:text-black">
              <Search className="h-5 w-5" />
            </button>

            <button className="rounded-full p-2.5 text-slate-700 transition hover:bg-slate-100 hover:text-black">
              <BriefcaseBusiness className="h-5 w-5" />
            </button>

            <Link to="/signin">
              <button className="rounded-full px-4 py-2 text-[15px] font-medium text-slate-800 transition hover:bg-slate-100">
                Sign in
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-full bg-[#1652f0] px-4 py-2 text-[15px] font-semibold text-white transition hover:bg-[#1447d6]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}