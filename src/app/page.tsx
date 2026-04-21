export default function HomePage() {
  return (
    <main className="pt-16">
      {/* SECTION 1 — HERO */}
      <section
        id="home"
        className="relative min-h-[600px] flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          background:
            "linear-gradient(135deg, #0f2044 0%, #1e3a8a 30%, #1e5f74 60%, #0e7490 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 75% 50%, #38bdf8 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Alabama Biomanufacturing Labs
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            We are currently supporting our first cohort!
          </p>
          <a
            href="#newsletter"
            className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-medium text-base hover:bg-white hover:text-[#1e3a8a] transition-all duration-200 mb-6"
          >
            Stay Connected
          </a>
          <p className="text-blue-200 text-sm sm:text-base">
            Get notified when the next application cycle begins.
          </p>
        </div>
      </section>

      {/* SECTION 2 — MISSION / ABOUT */}
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Empowering Alabama&apos;s Biomanufacturing Future
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            The Alabama Biomanufacturing Program supports and accelerates the growth of biomanufacturing
            startups by providing technical, entrepreneurial, and infrastructure support. Our goal is to
            expand biomanufacturing across Alabama, particularly in underserved regions, fostering
            commercialization, partnerships, and economic growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-10">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a8a]">3</p>
              <p className="text-gray-600 mt-1 font-medium">Companies Supported</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a8a]">9</p>
              <p className="text-gray-600 mt-1 font-medium">Key Ecosystems</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Tuskegee", "Dothan", "Auburn-Opelika"].map((loc) => (
              <span
                key={loc}
                className="px-5 py-2 rounded-full border border-[#1e3a8a] text-[#1e3a8a] text-sm font-medium"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section id="services" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Empowering startups and driving innovation in Alabama&apos;s biomanufacturing landscape for
              inclusive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical & Regulatory Assistance",
                desc: "Comprehensive assistance for biomanufacturing startups, from formation to technical development and funding.",
                icon: (
                  <svg className="w-8 h-8 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                ),
              },
              {
                title: "Startup Support",
                desc: "Guidance on company formation, fundraising, and commercialization strategies.",
                icon: (
                  <svg className="w-8 h-8 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: "Infrastructure Development",
                desc: "Support in developing lab space, facilities, and investment strategy for biomanufacturing startups.",
                icon: (
                  <svg className="w-8 h-8 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR PARTNERS */}
      <section id="partners" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
              Alabama Biomanufacturing Labs was established through a competitive award from Innovate
              Alabama&apos;s tax credit program. The $1.2m program will drive innovation and economic growth
              in the state through the work from three core partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Arrowpoint Labs",
                desc: "brings established expertise in biotech venture capital, facility design, industry partnerships, and business development. Previous successes include establishing Birmingham as a Tech Hub and founding a biotech incubator in Birmingham.",
              },
              {
                name: "Measured Capital",
                desc: "principals have served as Entrepreneurs-in-Residence for Alabama research institute spinouts, advised growth-stage startups, and created entrepreneurship programs, including launching the Prosper Health Tech Accelerator.",
              },
              {
                name: "Opportunity Alabama",
                desc: "(OPAL) brings communities, investors, and projects together to preserve and improve quality of place statewide through catalytic development. OPAL has supported 40 Alabama communities, developed over 1.5 million square feet of real estate, and generated more than $600 million in new investment across the state.",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{partner.name[0]}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — 2025 COHORT */}
      <section id="cohort" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the 2025 Biomanufacturing Cohort
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "BioHeal",
                location: "Opelika, AL",
                desc: "BioHeal develops peptide-based sprays and creams that accelerate wound healing in medicine and serve as eco-friendly biopesticides in agriculture.",
              },
              {
                name: "Forsee",
                location: "Prattville, AL",
                desc: "Forsee transforms natural fibers into sustainable, fire-resistant building materials that also enhance soil health and improve water retention.",
              },
              {
                name: "GeneRipple",
                location: "Tuskegee, AL",
                desc: "GeneRipple develops ancestry-informed cancer therapeutics utilizing AI, synthetic biology, and nanotechnology, with a focus on treating aggressive cancers in underserved communities.",
              },
              {
                name: "Johnson Labs",
                location: "Troy, AL",
                desc: "Johnson Labs is a woman-owned chemical manufacturing company offering custom formulation, blending, packaging, and shipping of industrial and specialty products.",
              },
              {
                name: "Psigryph",
                location: "Huntsville, AL",
                desc: "Psigryph uses its patented Nanopect delivery system, derived from sour cherries, to improve drug delivery, agtech, and bio-based product performance.",
              },
              {
                name: "Score Pharma",
                location: "Huntsville, AL",
                desc: "Score Pharma is enhancing antibody-based cancer drugs with a platform that boosts potency and response, targeting diseases like NHL, CLL, and HER2+ breast cancer.",
              },
              {
                name: "Shellulose",
                location: "Auburn, AL",
                desc: "Shellulose transforms discarded pecan shells into sustainable cellulose fibers for textiles, packaging, and pharmaceutical applications, supporting local farmers and promoting circular economies.",
              },
              {
                name: "Skyang Bio",
                location: "Huntsville, AL",
                desc: "Skyang Bio develops CRISPR and gene modulation libraries to power discovery in functional genomics and accelerate therapeutic breakthroughs.",
              },
              {
                name: "VivoSphere",
                location: "Auburn, AL",
                desc: "VivoSphere develops 3D human tissue models that enhance and improve drug testing accuracy and reduce reliance on animal studies in early drug development.",
              },
            ].map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] flex items-center justify-center mb-3">
                    <span className="text-white text-sm font-bold">{company.name[0]}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{company.name}</h3>
                  <p className="text-sm italic text-gray-400 mt-0.5">{company.location}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            Explore our diverse group of innovative companies working across health, sustainability, and
            technology.
          </p>
        </div>
      </section>

      {/* SECTION 6 — NEWSLETTER SIGNUP */}
      <section id="newsletter" className="bg-white py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Subscribe to our Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-[#1e3a8a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 7 — CONTACT + FOOTER */}
      <section id="contact" className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Reach out to Alabama Biomanufacturing Labs for support in biomanufacturing innovation and
            startup development.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>
          Alabama Biomanufacturing Labs — Supporting biomanufacturing startups and economic growth.
          2025. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
