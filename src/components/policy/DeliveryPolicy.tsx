const DeliveryPolicy = () => {
  const deliveryPolicyPoints = [
    {
      title: "Instant Digital Delivery",
      desc: "All products are delivered digitally, allowing you to access your purchases instantly after payment confirmation.",
    },
    {
      title: "No Physical Shipping",
      desc: "We do not ship any physical products. All items available on Digital99Store are digital-only.",
    },
    {
      title: "Download Links Provided After Payment",
      desc: "Once your payment is successfully completed, download links will be provided immediately for accessing your digital products.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">
          Delivery Policy
        </h1>

        <div className="space-y-6">
          {deliveryPolicyPoints.map((item, index) => (
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

export default DeliveryPolicy;
