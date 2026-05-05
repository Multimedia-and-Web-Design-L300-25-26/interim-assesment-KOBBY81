const features = [
  {
    title: "Securely buy and sell crypto",
    text: "Access a polished trading experience with clean layout, strong hierarchy, and modern styling.",
  },
  {
    title: "Manage your portfolio",
    text: "Keep track of assets, balances, and market prices in a simple and responsive dashboard-like design.",
  },
  {
    title: "Learn and explore",
    text: "Present educational sections and product highlights just like the real Coinbase landing experience.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-50"></div>
              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}