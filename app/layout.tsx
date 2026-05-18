import "./globals.css";

export const metadata = {
  title: "Lawn Fadez",
  description: "Professional lawn care with clean cuts, sharp edges, and reliable service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F8F2] text-[#162117]">
        <div className="min-h-screen">
          <header className="sticky top-0 z-20 border-b border-black/5 bg-[#F5F8F2]/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/lawnfadez-logo.png"
                  alt="Lawn Fadez Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                    Professional Lawn Care
                  </div>
                  <div className="text-sm font-semibold tracking-[0.18em] text-[#1F4D2B]">
                    LAWN FADEZ
                  </div>
                </div>
              </a>

              <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-[#425043] md:flex">
                <a href="/" className="hover:text-[#1F4D2B]">
                  Home
                </a>
                <a href="/services" className="hover:text-[#1F4D2B]">
                  Services
                </a>
                <a href="/contact" className="hover:text-[#1F4D2B]">
                  Contact
                </a>
              </nav>

              <a
                href="/contact"
                className="rounded-full bg-[#1F4D2B] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#173A21]"
              >
                Free Estimate
              </a>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-black/6 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
              <div className="grid gap-10 md:grid-cols-3">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4D2B] text-lg font-bold text-white">
                    LF
                  </div>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-[#5C665D]">
                    Professional lawn care focused on clean cuts, sharp edges,
                    and dependable service.
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#4F8F3A]">
                    Navigation
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-[#425043]">
                    <a href="/" className="block hover:text-[#1F4D2B]">
                      Home
                    </a>
                    <a href="/services" className="block hover:text-[#1F4D2B]">
                      Services
                    </a>
                    <a href="/contact" className="block hover:text-[#1F4D2B]">
                      Contact
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#4F8F3A]">
                    Contact
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-[#425043]">
                    <div>Dillon Bell</div>
                    <div>712-301-3916</div>
                    <div>lawnfadezlawncare@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-black/6 pt-6 text-xs text-[#748075]">
                © {new Date().getFullYear()} Lawn Fadez. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}