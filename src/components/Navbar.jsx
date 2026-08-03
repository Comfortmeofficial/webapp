import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Firm", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Articles & Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

function Navbar({ currentPage = "home" }) {
  const [isPath, setIsPath] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const whitePaths = ["/about", "/services", "/"];
  
  useEffect(() => {
    setIsPath(whitePaths.includes(window.location.pathname.toLowerCase()));
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const isWhitePath = isPath;

  return (
    <nav aria-label="Primary" className="relative" ref={menuRef}>
      {/* Desktop Navigation */}
      <ul
        className={
          isWhitePath
            ? `hidden items-center gap-3 text-xs font-medium tracking-wide text-white/90 lg:flex xl:gap-6`
            : `hidden items-center gap-3 text-xs font-medium tracking-wide text-black lg:flex xl:gap-6`
        }
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`transition hover:text-[#18535b] py-2 px-1 ${
                (currentPage === "about" && item.href === "/about") ||
                (currentPage === "services" && item.href === "/services") ||
                (currentPage === "team" && item.href === "/team") ||
                (currentPage === "insights" && item.href === "/insights") ||
                (currentPage === "contact" && item.href === "/contact") ||
                (currentPage === "home" && item.href === "/")
                  ? "text-[#18535b]"
                  : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden p-2 rounded-md transition z-40 relative ${
          isWhitePath ? "text-white/90 hover:text-white" : "text-black hover:text-[#18535b]"
        }`}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 lg:hidden z-30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className={`fixed top-16 left-4 right-4 rounded-xl shadow-2xl z-40 lg:hidden ${
          isWhitePath ? "bg-[#0d1c24] border border-white/10" : "bg-white border border-gray-200"
        }`}>
          <ul className="flex flex-col max-h-[calc(100vh-200px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <li key={item.label} className={`${isWhitePath ? "border-white/5" : "border-gray-100"} ${index !== navItems.length - 1 ? "border-b" : ""}`}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-5 py-4 text-base font-medium transition ${
                    isWhitePath ? "text-white/90 hover:text-white hover:bg-white/10" : "text-black hover:text-[#18535b] hover:bg-gray-50"
                  } ${
                    (currentPage === "about" && item.href === "/about") ||
                    (currentPage === "services" && item.href === "/services") ||
                    (currentPage === "team" && item.href === "/team") ||
                    (currentPage === "insights" && item.href === "/insights") ||
                    (currentPage === "contact" && item.href === "/contact") ||
                    (currentPage === "home" && item.href === "/")
                      ? isWhitePath ? "text-white bg-white/10 border-l-4 border-white" : "text-[#18535b] bg-blue-50 border-l-4 border-[#18535b]"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
