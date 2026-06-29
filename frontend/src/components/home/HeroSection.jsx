import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-green-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          Smart E-Waste Collection Platform
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Closing the Loop on
          <span className="block text-green-700">
            Electronic Waste
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          Schedule doorstep e-waste pickups, track recycling, earn EcoPoints,
          and help build a cleaner future.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/login"
            className="rounded-lg bg-green-700 px-8 py-3 font-medium text-white transition hover:bg-green-800"
          >
            Schedule Pickup
          </Link>

          <Link
            to="/knowledge-hub"
            className="rounded-lg border border-green-700 px-8 py-3 font-medium text-green-700 transition hover:bg-green-700 hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;