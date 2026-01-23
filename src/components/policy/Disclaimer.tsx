const Disclaimer = () => {
  const disclaimerPoints = [
    {
      title: "No Income or Result Guarantees",
      desc: "Digital99Store does not guarantee any specific income, profit, or results from the use of our digital products.",
    },
    {
      title: "Results Depend on User Effort",
      desc: "Outcomes and results may vary based on individual skills, effort, experience, and how the purchased products are used.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-emerald-950 mb-8">
          Disclaimer
        </h1>

        <div className="space-y-6">
          {disclaimerPoints.map((item, index) => (
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

export default Disclaimer;
