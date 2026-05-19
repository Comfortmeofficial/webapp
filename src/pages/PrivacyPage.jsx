import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function PrivacyPage() {
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
            className="relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-24"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="mx-auto max-w-7xl text-center">
              <h1 className="font-display text-5xl sm:text-6xl text-[#1f252b]">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[#5f686f] sm:text-lg">
                Your privacy is important to us. This page explains how we
                collect and protect your data.
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
                  <p className="mt-2">Privacy Policy</p>
                </aside>
                <article className="space-y-5 text-sm leading-7 text-[#566169] sm:text-base">
                  <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">
                    Privacy Policy
                  </h2>
                  <p>
                    At BSY Legal, your privacy is important to us. This policy
                    outlines how we collect, use, and protect your personal
                    information.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> We may collect
                    personal details such as name, email, and phone number when
                    you contact us.
                  </p>
                  <p>
                    <strong>How We Use Information:</strong> We use collected
                    information to respond to inquiries and improve our
                    services.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> We implement reasonable
                    safeguards to protect your information.
                  </p>
                  <p>
                    <strong>Contact:</strong> For privacy-related concerns,
                    please contact{" "}
                    <a
                      href="mailto:info@bsylegal.com"
                      className="text-[#1f676d]"
                    >
                      info@bsylegal.com
                    </a>
                    .
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

export default PrivacyPage;
