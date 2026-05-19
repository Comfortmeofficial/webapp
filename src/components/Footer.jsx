import LOGO from "../assets/main/BSY LEGAL 1.svg";
import FOOTER_BG from "../assets/sections/footer.jpg";

const heritageItems = [
  {
    title: "Queen Idia",
    text: "first Queen Mother of the Benin Kingdom, symbol of power and maternal strength.",
    href: "/legacy/queen-idia",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    title: "Oduduwa",
    text: "mythological progenitor of the Yoruba people, father of nations.",
    href: "/legacy/oduduwa",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    title: "Nefertiti",
    text: "Egyptian queen renowned for beauty, influence, and statesmanship.",
    href: "/legacy/nefertiti",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

function Footer() {
  const marqueeItems = [...heritageItems, ...heritageItems];

  return (
    <footer className="bg-[#faf9f7] text-[#2f363c]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={LOGO} alt="BSY Legal" className="h-20 w-auto" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#8a9096]">
              Quick Links
            </h3>
            <div className="space-y-2 text-sm text-[#5f686f]">
              <a href="/" className="block hover:text-[#1f676d]">
                Home
              </a>
              <a href="/about" className="block hover:text-[#1f676d]">
                About Us
              </a>
              <a href="/services" className="block hover:text-[#1f676d]">
                Our Services
              </a>
              <a href="/team" className="block hover:text-[#1f676d]">
                Our Team
              </a>
              <a href="/insights" className="block hover:text-[#1f676d]">
                Articles & Insights
              </a>
              <a href="/contact" className="block hover:text-[#1f676d]">
                Contact Us
              </a>
            </div>
          </div>

          {/* For Organizations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#8a9096]">
              For Organizations
            </h3>
            <div className="space-y-2 text-sm text-[#5f686f]">
              <a href="/terms" className="block hover:text-[#1f676d]">
                Terms of Use
              </a>
              <a href="/privacy" className="block hover:text-[#1f676d]">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#8a9096]">
              Social
            </h3>
            <div className="space-y-3">
              <a
                href="https://facebook.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5f686f] hover:text-[#1f676d]"
              >
                <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>bsylegal</span>
              </a>
              <a
                href="https://instagram.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5f686f] hover:text-[#1f676d]"
              >
                <svg className="h-5 w-5" fill="#E4405F" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5m5.5-16.5h-11c-.825 0-1.5.675-1.5 1.5v11c0 .825.675 1.5 1.5 1.5h11c.825 0 1.5-.675 1.5-1.5v-11c0-.825-.675-1.5-1.5-1.5m-5.5 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6m3-10.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5" />
                </svg>
                <span>bsylegal</span>
              </a>
              <a
                href="https://twitter.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5f686f] hover:text-[#1f676d]"
              >
                <svg className="h-5 w-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.31l7.73-8.835L.424 2.25h6.68l4.881 6.236 5.259-6.236zM17.09 19.32h1.827L5.75 4.154H3.81l13.28 15.166z" />
                </svg>
                <span>bsylegal</span>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#8a9096]">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-[#5f686f]">
              <a
                href="mailto:info@bsylegal.com"
                className="flex items-center gap-2 hover:text-[#1f676d]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>info@bsylegal.com</span>
              </a>
              <a
                href="tel:+2341234567890"
                className="flex items-center gap-2 hover:text-[#1f676d]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+234 1234567890</span>
              </a>
              <div className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <span className="text-xs leading-5">
                  Udiumo Itseui Foundation Building, Olajuwon Oluyide Extension,
                  Ajibode Road, Ibadan, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#e6ebea] pt-8 text-center">
          <p className="text-sm text-[#8a9096]">
            © 2026 BSY Legal, All Rights Reserved
          </p>
        </div>
      </div>

      {/* Heritage Marquee */}
      <div
        className="overflow-hidden bg-[linear-gradient(90deg,#5a2617,#8b3d1f,#4f2214)] py-6"
        style={{
          backgroundImage: `url(${FOOTER_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="animate-marquee-left-slow flex w-max items-center gap-8 px-4 text-white">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.href}
              className="flex min-w-[420px] shrink-0 items-center gap-4 px-4 py-2 transition hover:opacity-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-12 w-12 rounded-full border-2 border-white/40 object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{item.title} - </span>
                <span className="text-sm text-white/90">{item.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
