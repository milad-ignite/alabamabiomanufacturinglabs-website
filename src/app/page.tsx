import NewsletterForm from "@/components/NewsletterForm";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

/* ── static data (plain strings only — no JSX) ───────────────────────────── */
const partners = [
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
];

const companies = [
  { name: "BioHeal",      location: "Opelika, AL",    color: "bg-sky-400",   desc: "BioHeal develops peptide-based sprays and creams that accelerate wound healing in medicine and serve as eco-friendly biopesticides in agriculture." },
  { name: "Forsee",       location: "Prattville, AL", color: "bg-amber-700", desc: "Forsee transforms natural fibers into sustainable, fire-resistant building materials that also enhance soil health and improve water retention." },
  { name: "GeneRipple",   location: "Tuskegee, AL",   color: "bg-teal-500",  desc: "GeneRipple develops ancestry-informed cancer therapeutics utilizing AI, synthetic biology, and nanotechnology, with a focus on treating aggressive cancers in underserved communities." },
  { name: "Johnson Labs",  location: "Troy, AL",       color: "bg-green-700", desc: "Johnson Labs is a woman-owned chemical manufacturing company offering custom formulation, blending, packaging, and shipping of industrial and specialty products." },
  { name: "Psigryph",     location: "Huntsville, AL", color: "bg-rose-500",  desc: "Psigryph uses its patented Nanopect delivery system, derived from sour cherries, to improve drug delivery, agtech, and bio-based product performance." },
  { name: "Score Pharma", location: "Huntsville, AL", color: "bg-slate-800", desc: "Score Pharma is enhancing antibody-based cancer drugs with a platform that boosts potency and response, targeting diseases like NHL, CLL, and HER2+ breast cancer." },
  { name: "Shellulose",   location: "Auburn, AL",     color: "",             desc: "Shellulose transforms discarded pecan shells into sustainable cellulose fibers for textiles, packaging, and pharmaceutical applications, supporting local farmers and promoting circular economies.", comingSoon: true },
  { name: "Skyang Bio",   location: "Huntsville, AL", color: "bg-indigo-700",desc: "Skyang Bio develops CRISPR and gene modulation libraries to power discovery in functional genomics and accelerate therapeutic breakthroughs." },
  { name: "VivoSphere",   location: "Auburn, AL",     color: "bg-cyan-600",  desc: "VivoSphere develops 3D human tissue models that enhance and improve drug testing accuracy and reduce reliance on animal studies in early drug development." },
] as const;

/* ── page ────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="pt-16">

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="home" className="relative min-h-[700px] flex flex-col items-center justify-center text-white text-center px-6">
        {/* dark photo-like gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(18,20,24,0.64),rgba(18,20,24,0.64)), linear-gradient(160deg,#3a5a78 0%,#4a7a98 25%,#2c5f7a 50%,#3a6888 75%,#1e4a6a 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Alabama Biomanufacturing Labs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            We are currently supporting our first cohort!
          </p>
          <div>
            <a
              href="#newsletter"
              className="inline-block px-10 py-3.5 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#1e3a8a] transition-all duration-200"
            >
              Stay Connected
            </a>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            Get notified when the next application cycle begins.
          </p>
        </div>
      </section>

      {/* ━━ ABOUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* two-column: serif heading left, paragraph right */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-serif">
              Empowering Alabama&apos;s Biomanufacturing Future
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed md:pt-2">
              The Alabama Biomanufacturing Program supports and accelerates the growth of
              biomanufacturing startups by providing technical, entrepreneurial, and infrastructure
              support. Our goal is to expand biomanufacturing across Alabama, particularly in
              underserved regions, fostering commercialization, partnerships, and economic growth.
            </p>
          </FadeIn>

          {/* stats */}
          <FadeIn className="flex flex-col sm:flex-row justify-center gap-16 mb-20 text-center">
            <div>
              <p className="text-7xl font-bold text-[#1e3a8a]">3</p>
              <p className="text-gray-500 mt-2">Key Ecosystems</p>
            </div>
            <div>
              <p className="text-7xl font-bold text-[#1e3a8a]">9</p>
              <p className="text-gray-500 mt-2">Companies Supported</p>
            </div>
          </FadeIn>

          {/* city cards */}
          <FadeIn className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(["Tuskegee", "Dothan", "Auburn-Opelika"] as const).map((city) => (
              <div key={city}>
                <div className="w-full h-56 rounded-xl bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 overflow-hidden" />
                <p className="mt-3 text-center text-base font-medium text-gray-700">{city}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ━━ WHAT WE DO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="services" className="py-24 px-6" style={{ backgroundColor: "#416bd7" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
              Empowering startups and driving innovation in Alabama&apos;s biomanufacturing landscape for
              inclusive growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Startup Support */}
            <FadeIn>
              <div className="bg-[#f0f0f0] rounded-md p-7 flex flex-col h-full">
                <p className="font-bold text-gray-900 text-base mb-3 text-center">Startup Support</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-1">
                  Guidance on company formation, fundraising, and commercialization strategies.
                </p>
                <div className="flex justify-center mt-6">
                  <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M60 100 C60 100 25 78 25 48 C25 28 40 10 60 10 C80 10 95 28 95 48 C95 78 60 100 60 100Z" />
                    <circle cx="60" cy="44" r="10" />
                    <path d="M44 72 C44 60 76 60 76 72" />
                    <path d="M38 34 L50 24 M82 34 L70 24" />
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 — Technical & Regulatory Assistance */}
            <FadeIn delay="delay-100">
              <div className="bg-[#f0f0f0] rounded-md p-7 flex flex-col h-full">
                <p className="font-bold text-gray-900 text-base mb-3 text-center">Technical &amp; Regulatory Assistance</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-1">
                  Comprehensive assistance for biomanufacturing startups, from formation to technical
                  development and funding.
                </p>
                <div className="flex justify-center mt-6">
                  <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="14" y="18" width="70" height="56" rx="4" />
                    <path d="M22 56 L34 42 L44 50 L58 34 L72 46" />
                    <rect x="14" y="60" width="70" height="14" />
                    <circle cx="88" cy="86" r="16" />
                    <path d="M99 97 L110 108" />
                    <path d="M80 86 L88 94 L100 78" />
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 — Infrastructure Development */}
            <FadeIn delay="delay-200">
              <div className="bg-[#f0f0f0] rounded-md p-7 flex flex-col h-full">
                <p className="font-bold text-gray-900 text-base mb-3 text-center">Infrastructure Development</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-1">
                  Support in developing lab space, facilities, and investment strategy for
                  biomanufacturing startups.
                </p>
                <div className="flex justify-center mt-6">
                  <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="36" y="56" width="48" height="52" />
                    <path d="M20 56 L60 16 L100 56" />
                    <rect x="52" y="76" width="16" height="32" />
                    <path d="M10 108 L110 108" />
                    <line x1="80" y1="16" x2="80" y2="40" />
                    <line x1="68" y1="28" x2="92" y2="28" />
                    <rect x="76" y="28" width="8" height="24" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━ PARTNERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="partners" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Partners</h2>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
              Alabama Biomanufacturing Labs was established through a competitive award from Innovate
              Alabama&apos;s tax credit program. The $1.2m program will drive innovation and economic growth
              in the state through the work from three core partners.
            </p>
          </FadeIn>

          <div>
            {partners.map((partner) => (
              <FadeIn key={partner.name}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-12 border-b border-gray-100 last:border-b-0">
                  {/* Logo placeholder — mimics actual logo footprint */}
                  <div className="shrink-0 w-72 flex items-center justify-center">
                    <div className="w-full h-16 bg-white border border-gray-200 rounded flex items-center justify-center px-4">
                      <span className="text-gray-800 font-bold text-xl tracking-tight">{partner.name}</span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    <strong className="text-gray-900">{partner.name}</strong>{" "}
                    {partner.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ COHORT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="cohort" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Meet the 2025 Biomanufacturing Cohort
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <FadeIn key={company.name}>
                <div className="flex flex-col border border-gray-200 rounded-sm overflow-hidden hover:shadow-sm transition-shadow h-full">
                  {/* Logo area */}
                  {"comingSoon" in company && company.comingSoon ? (
                    <div className="h-52 bg-gray-50 flex items-center justify-center border-b border-gray-100">
                      <span className="text-2xl text-gray-400 font-medium">Coming Soon</span>
                    </div>
                  ) : (
                    <div className={`h-52 ${company.color} flex items-center justify-center`}>
                      <span className="text-white text-6xl font-bold opacity-40 select-none">
                        {company.name[0]}
                      </span>
                    </div>
                  )}
                  {/* Text area */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="font-bold text-gray-900 text-base">{company.name}</span>
                        <span className="text-sm italic text-gray-500 ml-2">
                          ({company.location})
                        </span>
                      </div>
                      <span className="text-gray-400 text-lg shrink-0">→</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{company.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-gray-400 text-sm mt-12">
              Explore our diverse group of innovative companies working across health, sustainability,
              and technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ━━ NEWSLETTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="newsletter" className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
              Subscribe to our Newsletter
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              The Alabama Biomanufacturing Labs Newsletter
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Alabama BioManufacturing Labs (ABL) is building Alabama&apos;s future as a biomanufacturing
              hub. In partnership with Opportunity Alabama, Measured Access, and Arrowpoint Labs, we
              launch startups, commercialize university research, and drive inclusive economic growth.
              From formation to regulatory guidance, we equip innovators to turn ideas into thriving
              ventures—right here in Alabama. Take a behind-the-scenes look at our work in this
              newsletter.
            </p>
            <NewsletterForm />
          </FadeIn>
        </div>
      </section>

      {/* ━━ CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left — logo + heading + desc + photo */}
            <FadeIn className="flex flex-col gap-6">
              {/* ABL logo */}
              <div className="flex items-center gap-3">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="28,4 50,16 50,40 28,52 6,40 6,16" fill="#1e3a8a" />
                  <polygon points="28,9 46,19 46,37 28,47 10,37 10,19" fill="none" stroke="#60a5fa" strokeWidth="2" />
                  <polygon points="28,16 40,23 40,33 28,40 16,33 16,23" fill="#3b82f6" opacity="0.6" />
                  <polygon points="28,22 36,27 36,33 28,38 20,33 20,27" fill="#93c5fd" />
                </svg>
                <div className="leading-snug">
                  <p className="font-bold text-gray-900">Alabama</p>
                  <p className="font-bold text-[#1e3a8a]">BioManufacturing</p>
                  <p className="font-bold text-gray-900">Labs</p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Reach out to Alabama Biomanufacturing Labs for support in biomanufacturing innovation
                  and startup development.
                </p>
              </div>

              {/* Lab photo placeholder */}
              <div className="w-full h-64 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay="delay-150">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="py-12 px-6" style={{ backgroundColor: "#416bd7" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="space-y-1">
            <p className="text-white font-bold text-lg">Alabama Biomanufacturing Labs</p>
            <p className="text-blue-200 text-sm">Supporting biomanufacturing startups and economic growth.</p>
            <p className="text-blue-200 text-sm pt-2">© 2025. All rights reserved.</p>
          </div>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-200 transition-colors mt-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
