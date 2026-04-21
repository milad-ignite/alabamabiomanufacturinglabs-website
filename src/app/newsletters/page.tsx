export default function NewslettersPage() {
  return (
    <main className="pt-16 min-h-screen flex flex-col">
      {/* Subscribe section */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            Subscribe to our newsletter
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
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

          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto shadow-sm rounded-lg overflow-hidden border border-gray-300" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-900 text-sm focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-[#1e3a8a] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ABL Newsletters section */}
      <section className="bg-white py-10 px-4 flex-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
            ABL Newsletters
          </h2>
          <p className="text-center text-gray-400 text-sm">
            Newsletter issues will appear here.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm mt-auto">
        <p>
          Alabama Biomanufacturing Labs — Supporting biomanufacturing startups and economic growth.
          2025. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
