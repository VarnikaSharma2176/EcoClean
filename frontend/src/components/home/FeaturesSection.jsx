function FeaturesSection() {
  const features = [
    {
      title: "Easy Pickup Scheduling",
      description:
        "Book doorstep pickup of your electronic waste within minutes.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your pickup status from request to recycling completion.",
    },
    {
      title: "EcoPoints Rewards",
      description:
        "Earn EcoPoints every time you recycle responsibly.",
    },
    {
      title: "Knowledge Hub",
      description:
        "Learn everything about e-waste and responsible disposal.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Why Choose EcoLoop?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold text-green-700">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;