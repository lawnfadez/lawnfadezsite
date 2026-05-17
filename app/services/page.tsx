export default function ServicesPage() {
  const services = [
    {
      title: "Lawn Mowing",
      copy:
        "Consistent mowing services that keep your lawn looking clean and healthy.",
    },
    {
      title: "Edging & Trimming",
      copy:
        "Sharp edges and detailed trimming for a polished, professional finish.",
    },
    {
      title: "Seasonal Cleanup",
      copy:
        "Leaf removal and seasonal maintenance to keep your property in shape.",
    },
    {
      title: "Property Maintenance",
      copy:
        "Reliable upkeep for residential and small commercial properties.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.34em] text-[#4F8F3A]">
          Services
        </div>

        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-[#162117] md:text-6xl">
          Lawn care built around consistency and quality.
        </h1>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-black/8 bg-white p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1F4D2B]">
              {service.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#58635A]">
              {service.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}