import Button from "./Button";
import Navbar from "./Navbar";

function Header({ currentPage = "home" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between px-4 py-4 sm:px-8">
        <a
          href="/"
          className="text-xs font-semibold tracking-[0.14em] text-white sm:text-sm"
        >
          Navbar BSY LEGAL WEBSITE
        </a>
        <Navbar currentPage={currentPage} />
        <div className="flex items-center gap-3">
          <Button
            as="a"
            href="#"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            Get Legal Advice
          </Button>
          <Button
            as="a"
            href="#"
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
