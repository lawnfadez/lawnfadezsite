export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-14 px-8 pt-4 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pt-6 lg:pb-28">
        <div className="max-w-3xl">
          <div className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
            Lawn Care • Edging • Property Maintenance
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#162117] md:text-7xl">
            Clean cuts and sharp edges for properties that stand out.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
            Lawn Fadez provides professional lawn care, mowing, trimming, edging, and seasonal maintenance with reliable service and a polished finish.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#1f4d2b] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
            >
              Request an Estimate
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#1f4d2b]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1f4d2b] transition duration-200 hover:-translate-y-0.5 hover:border-[#1f4d2b] inline-block"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
            <div className="rounded-[1.5rem] border border-black/6 bg-[#eef1e8] p-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">
                Reliable Lawn Care
              </div>

              <div className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1f4d2b]">
                Consistent service. Clean results. Every visit.
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Professional mowing and trimming",
                  "Sharp edging and clean detail work",
                  "Reliable scheduling and property care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#8f7750]" />
                    <div className="text-sm text-[#414852]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
              Recent Work
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#162117] md:text-4xl">
              Clean cuts, sharp lines, and dependable results.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#58635A]">
            A look at the quality and attention to detail Lawn Fadez brings to every property.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "/photos/lawn-1.jpg",
            "/photos/lawn-2.jpg",
            "/photos/lawn-3.jpg",
            "/photos/lawn-4.jpg",
          ].map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_10px_35px_rgba(17,24,39,0.06)]"
            >
              <img
                src={src}
                alt="Lawn Fadez recent lawn care work"
                className="h-72 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}