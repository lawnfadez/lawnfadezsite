export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#4F8F3A]">
            Contact
          </div>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-[#162117] md:text-6xl">
            Request a free estimate.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#58635A]">
            Reach out for lawn care, property maintenance, or seasonal cleanup
            services.
          </p>

          <div className="mt-10 space-y-4 text-sm text-[#425043]">
            <div>Dillon Bell</div>
            <div>712-301-3916</div>
            <div>lawnfadezlawncare@gmail.com</div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
          <form
            action="https://formspree.io/f/mpqnwlez"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-black/8 bg-[#F5F8F2] px-4 py-3 text-sm outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-black/8 bg-[#F5F8F2] px-4 py-3 text-sm outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your property or service needs"
              required
              className="w-full rounded-xl border border-black/8 bg-[#F5F8F2] px-4 py-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#1F4D2B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-[#173A21]"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}