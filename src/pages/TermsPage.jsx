import Header from "../components/Header";
import Footer from "../components/Footer";

function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f5f2] text-[#1f252b]">
        <section className="relative overflow-hidden bg-[#06090c] px-4 py-16 text-white sm:px-8 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,65,43,0.45),rgba(6,9,12,0.94)_66%)]" />
          <div className="relative mx-auto max-w-7xl text-center">
            <h1 className="font-display text-5xl sm:text-6xl">Terms Of Service</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <div className="rounded-sm border border-[#e7ecea] bg-white p-8">
            <div className="grid gap-8 md:grid-cols-[180px_1fr]">
              <aside className="text-sm text-[#6a747c]">
                <p className="font-semibold text-[#1f252b]">Our Terms</p>
                <p className="mt-2">Terms of Service</p>
              </aside>
              <article className="space-y-5 text-sm leading-7 text-[#566169] sm:text-base">
                <h2 className="font-display text-3xl text-[#171f25] sm:text-4xl">Terms Of Service</h2>
                <p>These Terms of Service govern your access to and use of BSY Legal services. By using our website, you agree to these terms.</p>
                <p><strong>Use Responsibilities:</strong> You agree to use our platform lawfully and not for prohibited purposes.</p>
                <p><strong>Intellectual Property:</strong> All content, branding, and information on this website belong to BSY Legal.</p>
                <p><strong>Disclaimer:</strong> Information provided does not constitute legal advice.</p>
                <p><strong>Changes to Terms:</strong> We may update these terms periodically.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TermsPage;
