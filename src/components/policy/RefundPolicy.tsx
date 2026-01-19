const RefundPolicy = () => {
  const refundPolicyPoints = [
    {
      title: "All Sales Are Final",
      desc: "Once a digital product is purchased, the sale is considered final and cannot be canceled.",
    },
    {
      title: "No Refunds Due to Digital Nature",
      desc: "Because our products are digital and instantly accessible, we do not offer refunds or exchanges.",
    },
    {
      title: "Support Available for Technical Issues",
      desc: "If you face any technical issues while accessing or using a purchased product, our support team is available to assist you.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">
          Refund Policy
        </h1>

        <div className="space-y-6">
          {refundPolicyPoints.map((item, index) => (
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

export default RefundPolicy;
