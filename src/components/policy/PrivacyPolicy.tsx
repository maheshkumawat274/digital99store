const PrivacyPolicy = () => {
  const privacyPolicyPoints = [
    {
      title: "User Data Is Kept Secure",
      desc: "We take data security seriously and use appropriate measures to protect user information from unauthorized access.",
    },
    {
      title: "No Sharing With Third Parties",
      desc: "Your personal data is never sold, rented, or shared with third parties except when required by law.",
    },
    {
      title: "Payments Handled via Secure Gateways",
      desc: "All payment transactions are processed through trusted and secure payment gateways. We do not store sensitive payment details.",
    },
    {
      title: "Cookies Used for Performance",
      desc: "We use cookies to enhance website performance, improve user experience, and analyze traffic for optimization purposes.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          {privacyPolicyPoints.map((item, index) => (
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

export default PrivacyPolicy;
