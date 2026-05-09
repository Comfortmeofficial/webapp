import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Articles & Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

function Navbar({ currentPage = "home" }) {
  const [isPath, setIsPath] = useState("");
  const whitePaths = ["/about", "/services", "/"];
  useEffect(() => {
    setIsPath(whitePaths.includes(window.location.pathname.toLowerCase()));
    console.log(isPath);
  });
  return (
    <nav aria-label="Primary">
      <ul
        className={
          isPath
            ? `hidden items-center gap-6 text-xs font-medium tracking-wide text-white/90 lg:flex`
            : `hidden items-center gap-6 text-xs font-medium tracking-wide text-black lg:flex`
        }
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`transition hover:text-[#18535b] ${
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
    </nav>
  );
}

export default Navbar;
