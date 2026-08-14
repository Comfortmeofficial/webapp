import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { connectToDatabase } from "@/lib/db";
import { LegalPage } from "@/lib/models";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  await connectToDatabase();
  const page = await LegalPage.findOne({ slug: "terms" }).lean();
  return { title: `${page?.title ?? "Terms of Service"} | BSY Legal` };
}

const BACKGROUND = "/assets/sections/background.jpg";
const TOP_BG = "/assets/sections/topbackground.png";
const WOMAN_IMAGE = "/assets/sections/woman_law.svg";

export default async function TermsPage() {
  await connectToDatabase();
  const page = await LegalPage.findOne({ slug: "terms" }).lean();
  const title = page?.title ?? "Terms Of Service";
  const contentMarkdown = page?.contentMarkdown ?? "";

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
        <main className="bg-[#f4f5f2] text-[#1f252b]  max-w-full w-[98vw] sm:w-[98vw]">
          <section
            className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="mx-auto  text-center ">
              <h1 className="font-display text-5xl sm:text-6xl text-[#1f252b]">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[#5f686f] sm:text-lg">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </section>

          <section
            className="relative mx-auto px-4 py-16 sm:px-8"
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
                <article className="prose prose-sm max-w-none text-[#566169] sm:prose-base prose-headings:font-display prose-headings:text-[#171f25] prose-a:text-[#1f676d]">
                  <h2>{title}</h2>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {contentMarkdown}
                  </ReactMarkdown>
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
