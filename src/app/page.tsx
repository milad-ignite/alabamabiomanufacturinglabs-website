import NewsletterForm from "@/components/NewsletterForm";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

/* ─── data ─────────────────────────────────────────────────────────────── */
const partners = [
  {
    name: "Arrowpoint Labs",
    desc: "brings established expertise in biotech venture capital, facility design, industry partnerships, and business development. Previous successes include establishing Birmingham as a Tech Hub and founding a biotech incubator in Birmingham.",
    accentBg: "bg-gray-100",
    initials: "AL",
  },
  {
    name: "Measured Capital",
    desc: "principals have served as Entrepreneurs-in-Residence for Alabama research institute spinouts, advised growth-stage startups, and created entrepreneurship programs, including launching the Prosper Health Tech Accelerator.",
    accentBg: "bg-gray-100",
    initials: "MC",
  },
  {
    name: "Opportunity Alabama",
    desc: "(OPAL) brings communities, investors, and projects together to preserve and improve quality of place statewide through catalytic development. OPAL has supported 40 Alabama communities, developed over 1.5 million square feet of real estate, and generated more than $600 million in new investment across the state.",
    accentBg: "bg-gray-100",
    initials: "OA",
  },
];

const companies = [
  {
    name: "BioHeal",
    location: "Opelika, AL",
    desc: "BioHeal develops peptide-based sprays and creams that accelerate wound healing in medicine and serve as eco-friendly biopesticides in agriculture.",
    color: "bg-sky-400",
    textColor: "text-white",
  },
  {
    name: "Forsee",
    location: "Prattville, AL",
    desc: "Forsee transforms natural fibers into sustainable, fire-resistant building materials that also enhance soil health and improve water retention.",
    color: "bg-amber-700",
    textColor: "text-white",
  },
  {
    name: "GeneRipple",
    location: "Tuskegee, AL",
    desc: "GeneRipple develops ancestry-informed cancer therapeutics utilizing AI, synthetic biology, and nanotechnology, with a focus on treating aggressive cancers in underserved communities.",
    color: "bg-teal-500",
    textColor: "text-white",
  },
  {
    name: "Johnson Labs",
    location: "Troy, AL",
    desc: "Johnson Labs is a woman-owned chemical manufacturing company offering custom formulation, blending, packaging, and shipping of industrial and specialty products.",
    color: "bg-green-700",
    textColor: "text-white",
  },
  {
    name: "Psigryph",
    location: "Huntsville, AL",
    desc: "Psigryph uses its patented Nanopect delivery system, derived from sour cherries, to improve drug delivery, agtech, and bio-based product performance.",
    color: "bg-rose-500",
    textColor: "text-white",
  },
  {
    name: "Score Pharma",
    location: "Huntsville, AL",
    desc: "Score Pharma is enhancing antibody-based cancer drugs with a platform that boosts potency and response, targeting diseases like NHL, CLL, and HER2+ breast cancer.",
    color: "bg-slate-800",
    textColor: "text-white",
  },
  {
    name: "Shellulose",
    location: "Auburn, AL",
    desc: "Shellulose transforms discarded pecan shells into sustainable cellulose fibers for textiles, packaging, and pharmaceutical applications, supporting local farmers and promoting circular economies.",
    color: "bg-orange-400",
    textColor: "text-white",
  },
  {
    name: "Skyang Bio",
    location: "Huntsville, AL",
    desc: "Skyang Bio develops CRISPR and gene modulation libraries to power discovery in functional genomics and accelerate therapeutic breakthroughs.",
    color: "bg-blue-800",
    textColor: "text-white",
  },
  {
    name: "VivoSphere",
    location: "Auburn, AL",
    desc: "VivoSphere develops 3D human tissue models that enhance and improve drug testing accuracy and reduce reliance on animal studies in early drug development.",
    color: "bg-cyan-600",
    textColor: "text-white",
  },
];

const cities = ["Tuskegee", "Dothan", "Auburn-Opelika"];

/* ─── page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="pt-16">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[700px] flex flex-col items-center justify-center text-white text-center px-6"
        style={{
          background:
            "linear-gradient(rgba(10,20,50,0.62), rgba(10,20,50,0.62)), linear-gradient(160deg, #1a2e55 0%, #2d5a8e 40%, #1e4a6a 70%, #0d2d4a 100%)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
            Alabama Biomanufacturing Labs
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            We are currently supporting our first cohort!
          </p>
          <a
            href="#newsletter"
            className="inline-block px-10 py-3.5 rounded-full border-2 border-white text-white font-medium text-base hover:bg-white hover:text-[#1e3a8a] transition-all duration-200 mb-5"
          >
            Stay Connected
          </a>
          <p className="text-blue-200 text-sm sm:text-base">
            Get notified when the next application cycle begins.
          </p>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Two-column heading + paragraph */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Empowering Alabama&apos;s Biomanufacturing Future
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
              The Alabama Biomanufacturing Program supports and accelerates the growth of
              biomanufacturing startups by providing technical, entrepreneurial, and infrastructure
              support. Our goal is to expand biomanufacturing across Alabama, particularly in
              underserved regions, fostering commercialization, partnerships, and economic growth.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay="delay-100" className="flex flex-col sm:flex-row justify-center gap-16 mb-16 text-center">
            <div>
              <p className="text-6xl font-bold text-[#1e3a8a]">3</p>
              <p className="text-gray-500 mt-2 text-base">Key Ecosystems</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#1e3a8a]">9</p>
              <p className="text-gray-500 mt-2 text-base">Companies Supported</p>
            </div>
          </FadeIn>

          {/* City photo cards */}
          <FadeIn delay="delay-200" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city} className="overflow-hidden rounded-xl shadow-sm">
                <div className="w-full h-52 bg-gradient-to-br from-gray-300 to-gray-400 flex items-end">
                  <div className="w-full bg-black/30 backdrop-blur-sm px-4 py-3">
                    <p className="text-white font-semibold text-base">{city}</p>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6" style={{ backgroundColor: "#3b5bdb" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
              Empowering startups and driving innovation in Alabama&apos;s biomanufacturing landscape for
              inclusive growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Startup Support",
                desc: "Guidance on company formation, fundraising, and commercialization strategies.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-20 h-20 mx-auto mt-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M32 8 C32 8 52 14 52 34 C52 44 44 50 32 56 C20 50 12 44 12 34 C12 14 32 8 32 8Z" />
                    <circle cx="32" cy="28" r="6" />
                    <path d="M24 44 C24 38 40 38 40 44" />
                    <path d="M20 20 L28 14 M44 20 L36 14" />
                  </svg>
                ),
              },
              {
                title: "Technical & Regulatory Assistance",
                desc: "Comprehensive assistance for biomanufacturing startups, from formation to technical development and funding.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-20 h-20 mx-auto mt-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="8" width="48" height="36" rx="3" />
                    <path d="M16 32 L22 26 L28 30 L36 20 L44 28" />
                    <circle cx="44" cy="48" r="10" />
                    <path d="M51 55 L57 61" />
                  </svg>
                ),
              },
              {
                title: "Infrastructure Development",
                desc: "Support in developing lab space, facilities, and investment strategy for biomanufacturing startups.",
                icon: (
                  <svg viewBox="0 0 64 64" className="w-20 h-20 mx-auto mt-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="20" y="28" width="24" height="28" />
                    <path d="M12 28 L32 8 L52 28" />
                    <rect x="28" y="40" width="8" height="16" />
                    <path d="M8 56 L56 56" />
                    <path d="M44 8 L44 20 M52 14 L36 14" />
                    <rect x="40" y="14" width="4" height="12" />
                  </svg>
                ),
              },
            ].map((card) => (
              <FadeIn key={card.title}>
                <div className="bg-gray-100 rounded-2xl p-7 flex flex-col h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{card.desc}</p>
                  <div className="text-gray-800">{card.icon}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────────────── */}
      <section id="partners" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Partners</h2>
          </FadeIn>
          <FadeIn delay="delay-100" className="text-center mb-16">
            <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
              Alabama Biomanufacturing Labs was established through a competitive award from Innovate
              Alabama&apos;s tax credit program. The $1.2m program will drive innovation and economic growth
              in the state through the work from three core partners.
            </p>
          </FadeIn>

          <div className="divide-y divide-gray-100">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i === 0 ? "" : i === 1 ? "delay-100" : "delay-200"}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-12">
                  {/* Logo placeholder */}
                  <div className="shrink-0 w-64 h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                    <span className="text-gray-500 font-bold text-lg tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed sm:pt-1">
                    <strong className="text-gray-900">{partner.name}</strong>{" "}
                    {partner.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COHORT ───────────────────────────────────────────────────────── */}
      <section id="cohort" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Meet the 2025 Biomanufacturing Cohort
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <FadeIn key={company.name}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Logo placeholder */}
                  <div className={`${company.color} h-44 flex items-center justify-center`}>
                    <span className={`${company.textColor} text-5xl font-bold opacity-60`}>
                      {company.name[0]}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-bold text-gray-900">{company.name}</span>
                        <span className="text-sm italic text-gray-500 ml-2">
                          ({company.location})
                        </span>
                      </div>
                      <span className="text-gray-400 text-lg">→</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{company.desc}</p>
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

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section id="newsletter" className="bg-white py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
              Subscribe to our Newsletter
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              The Alabama Biomanufacturing Labs Newsletter
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Alabama BioManufacturing Labs (ABL) is building Alabama&apos;s future as a biomanufacturing
              hub. In partnership with Opportunity Alabama, Measured Access, and Arrowpoint Labs, we
              launch startups, commercialize university research, and drive inclusive economic growth.
              From formation to regulatory guidance, we equip innovators to turn ideas into thriving
              ventures—right here in Alabama.
            </p>
            <NewsletterForm />
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Left */}
            <FadeIn className="flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                  <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#1e3a8a" opacity="0.9" />
                  <polygon points="20,6 33,13.5 33,28.5 20,36 7,28.5 7,13.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                  <polygon points="20,10 28,15 28,25 20,30 12,25 12,15" fill="#0ea5e9" opacity="0.7" />
                  <polygon points="20,14 25,17 25,23 20,26 15,23 15,17" fill="#38bdf8" opacity="0.9" />
                </svg>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-gray-900">Alabama</p>
                  <p className="text-sm font-bold text-[#1e3a8a]">BioManufacturing</p>
                  <p className="text-sm font-bold text-gray-900">Labs</p>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Reach out to Alabama Biomanufacturing Labs for support in biomanufacturing innovation
                and startup development.
              </p>

              {/* Lab photo placeholder */}
              <div className="w-full flex-1 min-h-[220px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#3b5bdb" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg mb-1">Alabama Biomanufacturing Labs</p>
            <p className="text-blue-200 text-sm">
              Supporting biomanufacturing startups and economic growth.
            </p>
            <p className="text-blue-200 text-sm mt-1">© 2025. All rights reserved.</p>
          </div>
          {/* LinkedIn icon */}
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="LinkedIn"
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
