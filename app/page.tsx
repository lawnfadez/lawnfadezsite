export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pt-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-10 lg:pb-28">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#4F8F3A]">
            Lawn Fadez
          </div>

          <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#162117] md:text-7xl">
            Clean cuts. Sharp edges. Reliable lawn care.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#58635A] md:text-xl">
            Professional mowing, trimming, edging, and property maintenance
            designed to keep your lawn looking sharp all season long.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#1F4D2B] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#173A21]"
            >
              Free Estimate
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#1F4D2B]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1F4D2B] transition duration-200 hover:-translate-y-0.5 hover:border-[#1F4D2B]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
          <div className="rounded-[1.5rem] bg-[#E8F0E5] p-8">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#4F8F3A]">
              Reliable Service
            </div>

            <div className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1F4D2B]">
              Lawn care that keeps your property looking its best.
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Professional mowing and edging",
                "Dependable scheduling and service",
                "Clean, sharp, and consistent results",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#4F8F3A]" />
                  <div className="text-sm text-[#425043]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}