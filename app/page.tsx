export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Lawn Fadez lawn care"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#162117]/60" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#162117]/85 via-[#162117]/55 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-8 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#c8b28a]">
              Professional Lawn Care
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white md:text-7xl">
              Clean cuts and sharp edges that make your property stand out.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Lawn Fadez delivers dependable mowing, edging, trimming, and property maintenance with professional results and consistent service.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#1f4d2b] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#173A21]"
              >
                Request an Estimate
              </a>

              <a
                href="/services"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#c8b28a]">
                  Why Lawn Fadez
                </div>

                <div className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-white">
                  Reliable lawn care with clean, professional detail.
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    "Professional mowing and edging",
                    "Dependable scheduling and communication",
                    "Consistent, polished results every visit",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-[#c8b28a]" />
                      <div className="text-sm text-white/82">{item}</div>
                    </div>
                  ))}
                </div>
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