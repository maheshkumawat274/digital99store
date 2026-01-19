const TermsAndConditions = () => {
  const terms = [
    {
      title: "Digital Products Only",
      desc: "All products available on Digital99Store are digital in nature. No physical goods will be shipped.",
    },
    {
      title: "Instant Access After Payment",
      desc: "Once the payment is successfully completed, users will receive instant access to their purchased digital products.",
    },
    {
      title: "No Redistribution or Misuse",
      desc: "Purchased products are strictly for personal use only. Redistribution, resale, or misuse of any content is prohibited.",
    },
    {
      title: "Prices and Content May Change",
      desc: "Product prices, features, and content are subject to change at any time without prior notice.",
    },
    {
      title: "User Responsible for Usage",
      desc: "Users are fully responsible for how they use the purchased digital products. Digital99Store will not be liable for any misuse.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-6">
          {terms.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-2xl bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
