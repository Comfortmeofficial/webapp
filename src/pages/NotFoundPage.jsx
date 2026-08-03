import BACKGROUND from "../assets/sections/background.jpg";
import TOP_BG from "../assets/sections/topbackground.png";
import TEXT_404 from "../assets/sections/404/404_text.png";
import THINKING_MAN from "../assets/sections/404/handsome-bearded-man-is-thinking-with-question-mark.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFoundPage() {
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
        <main className="bg-[#f4f5f2] px-4 py-14 w-[98vw] sm:px-8">
          <section
            className="mx-auto max-w-6xl rounded-3xl border border-[#e7ecea] bg-white px-6 py-14 sm:px-12"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div
                className="mx-auto flex h-64 w-64 items-end justify-center rounded-2xl sm:h-72 sm:w-72"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #a99270 0px, #a99270 14px, #8a7455 14px, #8a7455 20px, #d9c9a3 20px, #d9c9a3 30px, #6f5a3d 30px, #6f5a3d 36px)",
                }}
              >
                <img
                  src={THINKING_MAN}
                  alt=""
                  className="h-full w-full object-contain object-bottom"
                />
              </div>

              <div className="text-center md:text-left">
                <img src={TEXT_404} alt="404" className="mx-auto h-auto w-64 sm:w-80 md:mx-0" />
                <h1 className="mt-2 text-3xl font-semibold text-[#1f252b] sm:text-4xl">
                  Oops! Something is wrong
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm text-[#6c747b] sm:text-base md:mx-0">
                  Oops! The page that you're looking for doesn't exist or has
                  been moved.
                </p>
                <Button as="a" href="/" variant="primary" className="mt-7 gap-2">
                  Back to Home <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
