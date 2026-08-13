import Button from "./Button";
import Navbar from "./Navbar";
import LOGO from "../assets/main/BSY LEGAL 1.svg";

function Header({ currentPage = "home" }) {
  return (
    <header className="sticky -mb-20 inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between px-3 py-3 sm:px-4 md:px-8 md:py-4">
        <a href="/">
          <img src={LOGO} alt="BSY Legal" className="h-6 w-auto sm:h-8 md:h-10" />
        </a>
        <Navbar currentPage={currentPage} />
        {/* <div className="hidden sm:flex items-center gap-2 md:gap-3"> */}
          {/* <Button
            as="a"
            href="/contact"
            variant="secondary"
            className="text-xs md:text-sm"
          >
            Get Legal Advice
          </Button>
          <Button
            as="a"
            href="/contact"
            variant="primary"
            className="text-xs md:text-sm"
          >
            Book Consultation
          </Button> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
