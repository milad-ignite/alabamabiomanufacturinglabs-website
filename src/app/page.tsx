import NewsletterForm from "@/components/NewsletterForm";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

const HERO_BG =
  "https://images.unsplash.com/photo-1508605313148-973ad507e1d9?auto=format&fit=crop&w=1920";

const cities = [
  {
    name: "Tuskegee",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=594,fit=crop/mjEqga08k5tZplOB/tuskegee-aireal-YbNqz5rzPxsQl0Ex.jpg",
  },
  {
    name: "Dothan",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=598,fit=crop/mjEqga08k5tZplOB/dothan-Y4LxM2nz1WSGZNE0.png",
  },
  {
    name: "Auburn-Opelika",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=594,fit=crop/mjEqga08k5tZplOB/auburn-mv021XRp0au1ZpN7.webp",
  },
];

const services = [
  {
    title: "Technical & Regulatory Assistance",
    desc: "Comprehensive assistance for biomanufacturing startups, from formation to technical development and funding.",
    icon: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/mjEqga08k5tZplOB/data-analytics-icon-mxBMa5raRQiNzbP2.png",
  },
  {
    title: "Startup Support",
    desc: "Guidance on company formation, fundraising, and commercialization strategies.",
    icon: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=362,fit=crop/mjEqga08k5tZplOB/rocket-launch-line-icon-mp8q2on2QjibvpZ8.png",
  },
  {
    title: "Infrastructure Development",
    desc: "Support in developing lab space, facilities, and investment strategy for biomanufacturing startups.",
    icon: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/mjEqga08k5tZplOB/building-construction-icon-mP4285p8R0tengNr.png",
  },
];

const partners = [
  {
    name: "Arrowpoint Labs",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=112,fit=crop/mjEqga08k5tZplOB/arrowpoint-labs_hi-res-logo-and-name_final_feb2025-AwvDBqNngofqDp1k.png",
    url: "https://arrowpointlabs.com/",
    desc: "brings established expertise in biotech venture capital, facility design, industry partnerships, and business development. Previous successes include establishing Birmingham as a Tech Hub and founding a biotech incubator in Birmingham.",
  },
  {
    name: "Measured Capital",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=129,fit=crop/mjEqga08k5tZplOB/measured_capital_logo-su3bxwepy-transformed-AzG3x0w533uGO3LV.jpeg",
    url: null,
    desc: "principals have served as Entrepreneurs-in-Residence for Alabama research institute spinouts, advised growth-stage startups, and created entrepreneurship programs, including launching the Prosper Health Tech Accelerator.",
  },
  {
    name: "Opportunity Alabama",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=158,fit=crop/mjEqga08k5tZplOB/opal_logo-9hqzki6bk-transformed-mP4285azxqswlbjn.jpeg",
    url: "https://opportunityalabama.com/",
    desc: "(OPAL) brings communities, investors, and projects together to preserve and improve quality of place statewide through catalytic development. OPAL has supported 40 Alabama communities, developed over 1.5 million square feet of real estate, and generated more than $600 million in new investment across the state.",
  },
];

const companies = [
  {
    name: "BioHeal",
    location: "Opelika, AL",
    url: "https://biohealllc.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=251,fit=crop,trim=0;4.9708737864077674;0;4.9708737864077674/mjEqga08k5tZplOB/bioheal-YleQ55q08lfQkj6E.png",
    desc: "BioHeal develops peptide-based sprays and creams that accelerate wound healing in medicine and serve as eco-friendly biopesticides in agriculture.",
  },
  {
    name: "Forsee",
    location: "Prattville, AL",
    url: "https://www.forseefund.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=269,fit=crop/mjEqga08k5tZplOB/forsee-logo-m2WElRB02PSVMjr6.png",
    desc: "Forsee transforms natural fibers into sustainable, fire-resistant building materials that also enhance soil health and improve water retention.",
  },
  {
    name: "GeneRipple",
    location: "Tuskegee, AL",
    url: null,
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop,trim=119.41690962099125;0;217.93586005830903;0/mjEqga08k5tZplOB/generipple-YKblNNK2JMiRaDK1.png",
    desc: "GeneRipple develops ancestry-informed cancer therapeutics utilizing AI, synthetic biology, and nanotechnology, with a focus on treating aggressive cancers in underserved communities.",
  },
  {
    name: "Johnson Labs",
    location: "Troy, AL",
    url: "http://www.johnsonlabs.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=300,fit=crop/mjEqga08k5tZplOB/johnson-labs-new-YNq2p0QRXxseyGav.png",
    desc: "Johnson Labs is a woman-owned chemical manufacturing company offering custom formulation, blending, packaging, and shipping of industrial and specialty products.",
  },
  {
    name: "Psigryph",
    location: "Huntsville, AL",
    url: "https://www.psigryph.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=275,fit=crop,trim=0;91.08355795148248;29.020242914979757;91.08355795148248/mjEqga08k5tZplOB/psigryph-inc-Aq2J6RPj2eu16o2D.png",
    desc: "Psigryph uses its patented Nanopect™ delivery system, derived from sour cherries, to improve drug delivery, agtech, and bio-based product performance.",
  },
  {
    name: "Score Pharma",
    location: "Huntsville, AL",
    url: "https://scorepharma.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=273,fit=crop,trim=0;64.53781512605042;0;64.53781512605042/mjEqga08k5tZplOB/score-pharma-mjEGQn6k5kCvW4KW.png",
    desc: "Score Pharma is enhancing antibody-based cancer drugs with a platform that boosts potency and response, targeting diseases like NHL, CLL, and HER2+ breast cancer.",
  },
  {
    name: "Shellulose",
    location: "Auburn, AL",
    url: null,
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=97,fit=crop,trim=376.8888888888889;92.44444444444444;433.77777777777777;106.66666666666667/mjEqga08k5tZplOB/coming-soo-nagain-AVLaNNro9DsvzrkX.png",
    desc: "Shellulose transforms discarded pecan shells into sustainable cellulose fibers for textiles, packaging, and pharmaceutical applications, supporting local farmers and promoting circular economies.",
  },
  {
    name: "Skyang Bio",
    location: "Huntsville, AL",
    url: "https://skyangbio.com/wordpress/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=275,fit=crop,trim=0;30.29585798816568;296.89940828402365;0/mjEqga08k5tZplOB/skyyangbio-A3Q7Pe82VwTnKEqy.png",
    desc: "Skyang Bio develops CRISPR and gene modulation libraries to power discovery in functional genomics and accelerate therapeutic breakthroughs.",
  },
  {
    name: "VivoSphere",
    location: "Auburn, AL",
    url: "https://vivospheres.com/",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=273,fit=crop,trim=144.63276836158192;75.2090395480226;190.91525423728814;0/mjEqga08k5tZplOB/vivosphere-AoPJ6XnN9EUo3Q2b.png",
    desc: "VivoSphere develops 3D human tissue models that enhance and improve drug testing accuracy and reduce reliance on animal studies in early drug development.",
  },
];

export default function HomePage() {
  return (
    <main className="pt-16">

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="home"
        className="relative min-h-[600px] sm:min-h-[680px] flex items-center justify-center text-white text-center px-6"
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15, 20, 40, 0.72)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-5 py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Alabama Biomanufacturing Labs
          </h1>
          <p className="text-base sm:text-lg text-gray-200">
            We are currently supporting our first cohort!
          </p>
          <div className="pt-2">
            <a
              href="https://www.linkedin.com/company/alabama-biomanufacturing-labs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-[#101840] transition-all duration-200"
            >
              Stay Connected
            </a>
          </div>
          <p className="text-gray-300 text-sm">
            Get notified when the next application cycle begins.
          </p>
        </div>
      </section>

      {/* ━━ EMPOWERING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about-us" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Two-column: heading left, paragraph right */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1e20] leading-tight">
              Empowering Alabama&apos;s<br />Biomanufacturing Future
            </h2>
            <p className="text-gray-600 text-base leading-relaxed md:pt-1">
              The Alabama Biomanufacturing Program supports and accelerates the growth of
              biomanufacturing startups by providing technical, entrepreneurial, and infrastructure
              support. Our goal is to expand biomanufacturing across Alabama, particularly in
              underserved regions, fostering commercialization, partnerships, and economic growth.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn className="flex flex-col sm:flex-row justify-center gap-14 mb-16 text-center">
            <div>
              <p className="text-7xl sm:text-8xl font-bold text-[#1d1e20]">3</p>
              <p className="text-gray-500 mt-2 text-sm">Key Ecosystems</p>
            </div>
            <div>
              <p className="text-7xl sm:text-8xl font-bold text-[#1d1e20]">9</p>
              <p className="text-gray-500 mt-2 text-sm">Companies Supported</p>
            </div>
          </FadeIn>

          {/* City cards */}
          <FadeIn className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-56 object-cover"
                />
                <p className="mt-3 text-center text-base font-semibold text-[#1d1e20]">
                  {city.name}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ━━ WHAT WE DO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="what-we-do" className="py-20 px-6" style={{ backgroundColor: "#416bd7" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What We Do</h2>
            <p className="text-blue-100 text-base max-w-2xl mx-auto">
              Empowering startups and driving innovation in Alabama&apos;s biomanufacturing landscape for
              inclusive growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <div className="bg-white rounded-sm p-7 flex flex-col items-center h-full text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-24 h-24 object-contain mb-5"
                  />
                  <p className="font-bold text-[#1d1e20] text-base mb-3">{service.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ OUR PARTNERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="our-partners" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1e20]">Our Partners</h2>
          </FadeIn>
          <FadeIn className="text-center mb-14">
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              Alabama Biomanufacturing Labs was established through a competitive award from Innovate
              Alabama&apos;s tax credit program. The $1.2m program will drive innovation and economic
              growth in the state through the work from three core partners.
            </p>
          </FadeIn>

          <div className="divide-y divide-gray-100">
            {partners.map((partner) => (
              <FadeIn key={partner.name}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-12">
                  {/* Partner logo */}
                  <div className="shrink-0 w-64 flex items-center justify-center">
                    {partner.url ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-16 w-auto object-contain"
                        />
                      </a>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 w-auto object-contain"
                      />
                    )}
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    <strong className="text-[#1d1e20]">{partner.name}</strong>{" "}
                    {partner.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 2025 COHORT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="cohort" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1e20]">
              <strong>Meet the 2025 Biomanufacturing Cohort</strong>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company) => (
              <FadeIn key={company.name}>
                <div className="border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  {/* Logo area */}
                  <div className="bg-white border-b border-gray-100 flex items-center justify-center p-6 min-h-[140px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  {/* Text area */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="font-bold text-[#1d1e20] text-base">{company.name}</span>
                        <em className="text-sm text-gray-500 ml-1.5 not-italic">
                          ({company.location})
                        </em>
                      </div>
                      {company.url ? (
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#416bd7] shrink-0 transition-colors"
                          aria-label={`Visit ${company.name}`}
                        >
                          →
                        </a>
                      ) : (
                        <span className="text-gray-300 shrink-0">→</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{company.desc}</p>
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

      {/* ━━ NEWSLETTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="newsletter" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1e20] mb-8">
              Subscribe to our Newsletter
            </h2>
            <h3 className="text-lg font-semibold text-[#1d1e20] mb-3">
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

      {/* ━━ CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact-us" className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* Left — heading, description, photo */}
            <FadeIn className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1e20] mb-4">Contact Us</h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Reach out to Alabama Biomanufacturing Labs for support in biomanufacturing innovation
                  and startup development.
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?auto=format&fit=crop&w=1111&h=384"
                alt="woman in white long sleeve shirt holding silver and black metal tool"
                className="w-full h-56 object-cover rounded"
              />
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay="delay-150">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="py-12 px-6" style={{ backgroundColor: "#416bd7" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="space-y-1">
            <p className="text-white font-bold text-lg">Alabama Biomanufacturing Labs</p>
            <p className="text-blue-100 text-sm">Supporting biomanufacturing startups and economic growth.</p>
            <p className="text-blue-100 text-sm pt-1">© 2025. All rights reserved.</p>
          </div>
          {/* LinkedIn */}
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
