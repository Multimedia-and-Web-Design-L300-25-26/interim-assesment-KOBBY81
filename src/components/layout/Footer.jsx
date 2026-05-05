export default function Footer() {
  const footerColumns = [
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "Affiliates",
        "Blog",
        "Press",
        "Security",
        "Investors",
        "Vendors",
        "Legal & privacy",
        "Cookie policy",
        "Digital Asset Disclosures",
      ],
    },
    {
      title: "Learn",
      links: [
        "Explore",
        "Market statistics",
        "Coinbase Bytes newsletter",
        "Crypto basics",
        "Tips & tutorials",
        "Crypto glossary",
        "Market updates",
        "What is Bitcoin?",
        "What is crypto?",
        "What is a blockchain?",
        "How to set up a crypto wallet?",
        "How to send crypto?",
        "Taxes",
      ],
    },
    {
      title: "Support",
      links: [
        "Help center",
        "Contact us",
        "Create account",
        "ID verification",
        "Account information",
        "Payment methods",
        "Account access",
        "Supported crypto",
        "Status",
      ],
    },
    {
      title: "Individuals",
      links: [
        "Buy & sell",
        "Earn free crypto",
        "Base App",
        "Coinbase One",
        "Coinbase Wealth",
        "Credit Card",
        "Debit Card",
      ],
    },
    {
      title: "Businesses",
      links: [
        "Asset Listings",
        "Coinbase Business",
        "Payments",
        "Commerce",
        "Token Manager",
      ],
    },
    {
      title: "Institutions",
      links: [
        "Prime",
        "Staking",
        "Exchange",
        "International Exchange",
        "Derivatives Exchange",
        "Verified Pools",
      ],
    },
    {
      title: "Developers",
      links: [
        "Developer Platform",
        "Base",
        "Server Wallets",
        "Embedded Wallets",
        "Base Accounts (Smart Wallets)",
        "Onramp & Offramp",
        "x402",
        "Trade API",
        "Paymaster",
        "OnchainKit",
        "Data API",
        "Verifications",
        "Node",
        "AgentKit",
        "Staking",
        "Faucet",
        "Exchange API",
        "International Exchange API",
        "Prime API",
        "Derivatives API",
      ],
    },
    {
      title: "Asset prices",
      links: [
        "Bitcoin price",
        "Ethereum price",
        "Solana price",
        "XRP price",
      ],
    },
    {
      title: "Stock prices",
      links: [
        "NVIDIA price",
        "Apple price",
        "Microsoft price",
        "Amazon price",
      ],
    },
  ];

  return (
    <footer className="bg-[#f3f5f7] px-6 pb-10 pt-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[16px] font-semibold text-black">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] leading-[1.45] text-[#5d6c83] transition hover:text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[#d9dde3] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <SocialX />
            <SocialLinkedIn />
            <SocialInstagram />
            <SocialTikTok />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#5d6c83]">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-black">
              Terms & Conditions
            </a>
            <span>•</span>
            <button className="hover:text-black">United States</button>
            <span>•</span>
            <button className="hover:text-black">English</button>
          </div>
        </div>

        <div className="mt-8 border-t border-[#d9dde3] pt-6 text-center text-[14px] text-[#5d6c83]">
          <p>
            <strong>Disclaimer:</strong> This is a demo project for educational purposes only. It is not affiliated with Coinbase or any real cryptocurrency platform. Users should not enter real personal information or use real passwords.
          </p>
        </div>
      </div>
    </footer>
  );
}

function iconWrapper(children) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9dde3] text-black transition hover:bg-white">
      {children}
    </span>
  );
}

function SocialX() {
  return iconWrapper(
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M18.9 3H21l-4.6 5.3L21.8 21h-4.2l-3.3-4.4L10.4 21H8.3l4.9-5.7L2.8 3H7l3 4.1L18.9 3Zm-1.5 16.2h1.2L6.3 4.7H5l12.4 14.5Z" />
    </svg>
  );
}

function SocialLinkedIn() {
  return iconWrapper(
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.8-1.94-1.92-1.94S3.3 3.86 3.3 4.94c0 1.06.8 1.93 1.9 1.93h.02c1.13 0 1.94-.87 1.94-1.93ZM20.7 13.06c0-3.3-1.76-4.84-4.1-4.84-1.9 0-2.75 1.05-3.22 1.79V8.5h-3.38c.04 1 .01 11.5.01 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.37 0 1.92 1.04 1.92 2.57V20h3.38v-6.94Z" />
    </svg>
  );
}

function SocialInstagram() {
  return iconWrapper(
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
    </svg>
  );
}

function SocialTikTok() {
  return iconWrapper(
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M14.5 3c.37 2.02 1.54 3.34 3.5 3.6v2.6a6.41 6.41 0 0 1-3.5-1.1v6.1A5.2 5.2 0 1 1 9.3 9v2.8a2.5 2.5 0 1 0 2.5 2.5V3h2.7Z" />
    </svg>
  );
}