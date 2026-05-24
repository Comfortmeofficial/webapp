import LOGO from "../assets/main/BSY LEGAL 1.svg";
import FOOTER_BG from "../assets/sections/footer.jpg";
import FacebookIcon from "../assets/sections/footer/social-icons/Facebook.svg";
import InstagramIcon from "../assets/sections/footer/social-icons/instagram.svg";
import TwitterIcon from "../assets/sections/footer/social-icons/x.svg";
import NEFERTITI from "../assets/sections/footer/nefertiti.png";
import ODUDUWA from "../assets/sections/footer/oduduwa.png";

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
    image: ODUDUWA,
  },
  {
    title: "Nefertiti",
    text: "Egyptian queen renowned for beauty, influence, and statesmanship.",
    href: "/legacy/nefertiti",
    image: NEFERTITI,
  },
];

function Footer() {
  const marqueeItems = [...heritageItems, ...heritageItems];

  return (
    <footer className="bg-[#faf9f7] text-[#2f363c] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 md:px-8">
        <div className="grid gap-6 sm:gap-8 md:gap-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <a href="/">
              <img src={LOGO} alt="BSY Legal" className="h-12 sm:h-16 md:h-20 w-auto" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-2 text-xs sm:text-sm font-semibold text-[#8a9096]">
              Quick Links
            </h3>
            <div className="space-y-1 text-xs sm:text-sm text-[#5f686f]">
              <a href="/" className="block hover:text-[#1f676d] transition">
                Home
              </a>
              <a href="/about" className="block hover:text-[#1f676d] transition">
                About Us
              </a>
              <a href="/services" className="block hover:text-[#1f676d] transition">
                Services
              </a>
              <a href="/team" className="block hover:text-[#1f676d] transition">
                Team
              </a>
              <a href="/insights" className="block hover:text-[#1f676d] transition">
                Insights
              </a>
              <a href="/contact" className="block hover:text-[#1f676d] transition">
                Contact
              </a>
            </div>
          </div>

          {/* For Organizations */}
          <div>
            <h3 className="mb-2 text-xs sm:text-sm font-semibold text-[#8a9096]">
              Organization
            </h3>
            <div className="space-y-1 text-xs sm:text-sm text-[#5f686f]">
              <a href="/terms" className="block hover:text-[#1f676d] transition">
                Terms
              </a>
              <a href="/privacy" className="block hover:text-[#1f676d] transition">
                Privacy
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-2 text-xs sm:text-sm font-semibold text-[#8a9096]">
              Social
            </h3>
            <div className="space-y-1">
              <a
                href="https://facebook.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#5f686f] hover:text-[#1f676d] transition"
              >
                <img src={FacebookIcon} alt="Facebook" className="h-4 w-4" />
                <span className=" sm:inline">Facebook</span>
              </a>
              <a
                href="https://instagram.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#5f686f] hover:text-[#1f676d] transition"
              >
                <img src={InstagramIcon} alt="Instagram" className="h-4 w-4" />
                <span className=" sm:inline">Instagram</span>
              </a>
              <a
                href="https://twitter.com/bsylegal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#5f686f] hover:text-[#1f676d] transition"
              >
                <img src={TwitterIcon} alt="Twitter" className="h-4 w-4" />
                <span className=" sm:inline">Twitter</span>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm font-semibold text-[#8a9096]">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#5f686f]">
              <a
                href="mailto:info@bsylegal.com"
                className="flex items-center gap-2 hover:text-[#1f676d] transition"
              >
                <svg
                  className="h-3 sm:h-4 w-3 sm:w-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>info@bsylegal.com</span>
              </a>
              <a
                href="tel:+2341234567890"
                className="flex items-center gap-2 hover:text-[#1f676d] transition"
              >
                <svg
                  className="h-3 sm:h-4 w-3 sm:w-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+234 1234567890</span>
              </a>
              <div className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-3 sm:h-4 w-3 sm:w-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <span className="text-xs leading-4 sm:leading-5">
                  Udiumo Itseui Foundation Building, Olajuwon Oluyide Extension, Ajibode Road, Ibadan, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 md:mt-12 border-t border-[#e6ebea] pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-xs sm:text-sm text-[#8a9096]">
            © 2026 BSY Legal, All Rights Reserved
          </p>
        </div>
      </div>

      {/* Heritage Marquee */}
      <div
        className="overflow-hidden bg-[linear-gradient(90deg,#5a2617,#8b3d1f,#4f2214)] py-3 sm:py-4 md:py-6"
        style={{
          backgroundImage: `url(${FOOTER_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="animate-marquee-left-slow flex w-max items-center gap-2 sm:gap-4 md:gap-8 px-2 sm:px-4 text-white">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.href}
              className="flex min-w-[160px] sm:min-w-[280px] md:min-w-[420px] shrink-0 items-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-2 md:px-4 py-1 sm:py-2 transition hover:opacity-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-8 sm:h-12 md:h-16 w-8 sm:w-12 md:w-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold text-xs sm:text-sm md:text-base truncate">{item.title}</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/90 line-clamp-1">{item.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
