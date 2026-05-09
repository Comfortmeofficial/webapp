const heritageItems = [
  {
    title: "Queen Idia",
    text: "first Queen Mother of the Benin Kingdom, symbol of power and maternal strength.",
    href: "/legacy/queen-idia",
  },
  {
    title: "Oduduwa",
    text: "mythological progenitor of the Yoruba people, father of nations.",
    href: "/legacy/oduduwa",
  },
  {
    title: "Nefertiti",
    text: "Egyptian queen renowned for beauty, influence, and statesmanship.",
    href: "/legacy/nefertiti",
  },
];

function Footer() {
  const marqueeItems = [...heritageItems, ...heritageItems];

  return (
    <footer className="bg-[#f5f6f3] text-[#2f363c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 h-16 w-32 rounded-md border border-[#dfe1df] bg-white" />
          <p className="text-sm text-[#5f686f]">BSY LEGAL</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <div className="space-y-2 text-sm text-[#5f686f]">
            <a href="/" className="block hover:text-[#1f676d]">Home</a>
            <a href="/about" className="block hover:text-[#1f676d]">About Us</a>
            <a href="/services" className="block hover:text-[#1f676d]">Our Services</a>
            <a href="/team" className="block hover:text-[#1f676d]">Our Team</a>
            <a href="/insights" className="block hover:text-[#1f676d]">Articles & Insights</a>
            <a href="/contact" className="block hover:text-[#1f676d]">Contact Us</a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">For Compliance</h3>
          <div className="space-y-2 text-sm text-[#5f686f]">
            <a href="/terms" className="block hover:text-[#1f676d]">Terms of Use</a>
            <a href="/privacy" className="block hover:text-[#1f676d]">Privacy Policy</a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Contact Us</h3>
          <div className="space-y-2 text-sm text-[#5f686f]">
            <p>info@bsylawfirm.com</p>
            <p>+234 1234567890</p>
            <p>Udiumo Itseui Foundation Building, Ibadan, Nigeria.</p>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center text-sm text-[#8a9096]">© 2026 BSY Legal, All Rights Reserved</p>
      <div className="overflow-hidden bg-[linear-gradient(90deg,#5a2617,#8b3d1f,#4f2214)] py-4">
        <div className="animate-marquee-left-slow flex w-max items-center gap-10 px-4 text-white">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.href}
              className="flex min-w-[290px] items-center gap-3 rounded-md px-2 py-1 transition hover:bg-white/10"
            >
              <span
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-[10px] font-semibold"
                aria-hidden="true"
              >
                IMG
              </span>
              <p className="max-w-[245px] text-base leading-5 font-normal tracking-[0.01em] text-white/95">
                <span className="font-medium">{item.title} - </span>
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
