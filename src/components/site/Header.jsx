import Link from "next/link";
import Navbar from "./Navbar";

const LOGO = "/assets/main/BSY%20LEGAL%201.svg";

function Header({ currentPage = "home" }) {
  return (
    <header className="sticky -mb-20 inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between px-3 py-3 sm:px-4 md:px-8 md:py-4">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="BSY Legal" className="h-6 w-auto sm:h-8 md:h-10" />
        </Link>
        <Navbar currentPage={currentPage} />
      </div>
    </header>
  );
}

export default Header;
