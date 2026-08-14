import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/sections/Hero";
import HomeAbout from "@/components/site/sections/HomeAbout";
import HomeTestimonials from "@/components/site/sections/HomeTestimonials";
import HomeInsights from "@/components/site/sections/HomeInsights";

const BACKGROUND = "/assets/sections/background.jpg";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header currentPage="home" />
      <Hero />
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="max-w-full w-[98vw] sm:w-[98vw]">
          <HomeAbout />
          <HomeTestimonials />
          <HomeInsights />
        </main>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BACKGROUND}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
        />
      </div>
      <Footer />
    </>
  );
}
