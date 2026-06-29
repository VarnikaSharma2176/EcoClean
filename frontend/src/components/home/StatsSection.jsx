function StatsSection() {
  const stats = [
    { number: "50K+", title: "Items Recycled" },
    { number: "12K+", title: "Pickups Completed" },
    { number: "3K+", title: "Active Users" },
    { number: "25+", title: "Partner Recycling Centers" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border p-8 text-center shadow-sm"
          >
            <h2 className="text-4xl font-bold text-green-700">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;