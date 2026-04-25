import NewsletterForm from "@/components/NewsletterForm";

export default function NewslettersPage() {
  return (
    <main className="pt-16 min-h-screen flex flex-col">

      {/* Subscribe section */}
      <section className="bg-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1e20] mb-10">
            Subscribe to our newsletter
          </h1>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#1d1e20] mb-4">
              The Alabama Biomanufacturing Labs Newsletter
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Alabama BioManufacturing Labs (ABL) is building Alabama&apos;s future as a biomanufacturing hub.
              In partnership with Opportunity Alabama, Measured Access, and Arrowpoint Labs, we launch
              startups, commercialize university research, and drive inclusive economic growth. From
              formation to regulatory guidance, we equip innovators to turn ideas into thriving
              ventures—right here in Alabama. Take a behind-the-scenes look at our work in this
              newsletter.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* ABL Newsletters section */}
      <section className="bg-white py-14 px-4 flex-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1e20] text-center mb-12">
            ABL Newsletters
          </h2>

          {/* Newsletter article cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a
              href="/httpsthe-alabama-biomanufacturing-labs-newslebeehiivcompsustainable-innovation-with-alabama-biomanufacturing-labs"
              className="group block hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Newsletter Issue</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1d1e20] mb-2 group-hover:text-[#416bd7] transition-colors">
                  Sustainable Innovation With Alabama Biomanufacturing Labs
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Abdullah Alucozai, Luke Brazinski</span>
                  <span>·</span>
                  <span>12/19/2025 · 1 min read</span>
                </div>
              </div>
            </a>

            <a
              href="/positioning-alabama-at-the-forefront-of-innovation-in-biopesticide-manufacturing"
              className="group block hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1551244072-5d12893278bc?auto=format&fit=crop&w=600&h=300"
                  alt="grass field"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1d1e20] mb-2 group-hover:text-[#416bd7] transition-colors">
                  Positioning Alabama at the Forefront of Innovation in Biopesticide Manufacturing
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Abdullah Alucozai, Luke Brazinski</span>
                  <span>·</span>
                  <span>8/12/2025 · 1 min read</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 mt-auto" style={{ backgroundColor: "#416bd7" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="space-y-1">
            <p className="text-white font-bold text-lg">Alabama Biomanufacturing Labs</p>
            <p className="text-blue-100 text-sm">Supporting biomanufacturing startups and economic growth.</p>
            <p className="text-blue-100 text-sm pt-1">© 2025. All rights reserved.</p>
          </div>
          <a
            href="https://www.linkedin.com/company/alabama-biomanufacturing-labs/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Linkedin-in page"
            className="text-white hover:text-blue-100 transition-colors mt-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
