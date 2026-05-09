import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f5f2] text-[#1f252b]">
        <section className="relative overflow-hidden bg-[#06090c] px-4 py-16 text-white sm:px-8 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,65,43,0.45),rgba(6,9,12,0.94)_66%)]" />
          <div className="relative mx-auto max-w-7xl text-center">
            <h1 className="font-display text-5xl sm:text-6xl">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Your privacy is important to us. This page explains how we collect and protect your data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <div className="rounded-sm border border-[#e7ecea] bg-white p-8">
            <div className="grid gap-8 md:grid-cols-[180px_1fr]">
              <aside className="text-sm text-[#6a747c]">
                <p className="font-semibold text-[#1f252b]">Our Terms</p>
                <p className="mt-2">Privacy Policy</p>
              </aside>
              <article className="space-y-5 text-sm leading-7 text-[#566169] sm:text-base">
                <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">Privacy Policy</h2>
                <p>At BSY Legal, your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
                <p><strong>Information We Collect:</strong> We may collect personal details such as name, email, and phone number when you contact us.</p>
                <p><strong>How We Use Information:</strong> We use collected information to respond to inquiries and improve our services.</p>
                <p><strong>Data Protection:</strong> We implement reasonable safeguards to protect your information.</p>
                <p><strong>Contact:</strong> For privacy-related concerns, please contact <a href="mailto:info@bsylegal.com" className="text-[#1f676d]">info@bsylegal.com</a>.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPage;
