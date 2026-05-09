import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f5f2] px-4 py-14 sm:px-8">
        <section className="mx-auto max-w-7xl rounded-sm border border-[#e7ecea] bg-white px-6 py-14 text-center sm:px-12">
          <div className="mx-auto mb-8 h-44 w-44 rounded-md bg-[linear-gradient(135deg,#d5dbe0,#8d9bac)]" />
          <p className="font-display text-8xl font-semibold text-[#1f252b] sm:text-9xl">404</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#1f252b] sm:text-4xl">Oops! Something is wrong</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#6c747b] sm:text-base">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button as="a" href="/" variant="primary" className="mt-7">
            Back to Home
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
