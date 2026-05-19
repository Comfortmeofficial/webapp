import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function TermsPage() {
  return (
    <>
      <Header />
      <div
        className="flex h-[] items-center justify-center "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f4f5f2] text-[#1f252b]">
          <section
            className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="mx-auto max-w-7xl text-center">
              <h1 className="font-display text-5xl sm:text-6xl text-[#1f252b]">
                Terms Of Service
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[#5f686f] sm:text-lg">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </section>

          <section
            className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8"
            style={{
              backgroundImage: `url(${WOMAN_IMAGE})`,
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="rounded-sm border border-[#e7ecea] bg-white p-8">
              <div className="grid gap-8 md:grid-cols-[180px_1fr]">
                <aside className="text-sm text-[#6a747c]">
                  <p className="font-semibold text-[#1f252b]">Our Terms</p>
                  <p className="mt-2">Terms of Service</p>
                </aside>
                <article className="space-y-5 text-sm leading-7 text-[#566169] sm:text-base">
                  <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">
                    Terms Of Service
                  </h2>
                  <p>
                    These Terms of Service govern your access to and use of BSY
                    Legal services. By using our website, you agree to these
                    terms.
                  </p>
                  <p>
                    <strong>Use Responsibilities:</strong> You agree to use our
                    platform lawfully and not for prohibited purposes.
                  </p>
                  <p>
                    <strong>Intellectual Property:</strong> All content,
                    branding, and information on this website belong to BSY
                    Legal.
                  </p>
                  <p>
                    <strong>Disclaimer:</strong> Information provided does not
                    constitute legal advice.
                  </p>
                  <p>
                    <strong>Changes to Terms:</strong> We may update these terms
                    periodically.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default TermsPage;
