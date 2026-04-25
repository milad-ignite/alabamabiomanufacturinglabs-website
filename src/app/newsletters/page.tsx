import NewsletterForm from "@/components/NewsletterForm";

const articles = [
  {
    title: "Sustainable Innovation With Alabama Biomanufacturing Labs",
    authors: "Abdullah Alucozai, Luke Brazinski",
    date: "12/19/2025",
    readTime: "1 min read",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=462,fit=crop/mjEqga08k5tZplOB/auburn-mv021XRp0au1ZpN7.webp",
    imgAlt: "Auburn campus at sunset",
    href: "https://the-alabama-biomanufacturing-labs-newsle.beehiiv.com/p/sustainable-innovation-with-alabama-biomanufacturing-labs",
  },
  {
    title: "Positioning Alabama at the Forefront of Innovation in Biopesticide Manufacturing",
    authors: "Abdullah Alucozai, Luke Brazinski",
    date: "8/12/2025",
    readTime: "1 min read",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&h=480",
    imgAlt: "grass field",
    href: "https://drive.google.com/file/d/1i4zIOJKqa9N4k32bIFrCDh6FFgUTM8Mz/view",
  },
];

export default function NewslettersPage() {
  return (
    <main className="pt-16 min-h-screen flex flex-col">

      {/* ── Subscribe section ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 text-center">
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

      {/* ── ABL Newsletters ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 flex-1">
        <div className="max-w-[1224px] mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1e20] text-center mb-12">
            ABL Newsletters
          </h2>

          {/* 2-column grid matching original: gap-8 (32px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {/* Image container — 20px bottom padding matches original */}
                <div className="w-full pb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.img}
                    alt={article.imgAlt}
                    className="w-full object-cover"
                    style={{ height: "337px" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-[#1d1e20] group-hover:text-[#416bd7] transition-colors"
                    style={{ fontSize: "24px", lineHeight: "1.3", marginBottom: "12px" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-[#1d1e20]"
                    style={{ fontSize: "16px", marginBottom: "4px" }}
                  >
                    {article.authors}
                  </p>
                  <p className="text-[#1d1e20]" style={{ fontSize: "16px" }}>
                    {article.date}
                    <span className="mx-1">·</span>
                    {article.readTime}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
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
