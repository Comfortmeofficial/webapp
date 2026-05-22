import BACKGROUND from "../assets/sections/background.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import ParallaxReveal from "../sections/ParallaxReveal";
import Testimonials from "../sections/Testimonials";

function Home() {
  return (
    <>
      <Header currentPage="home" />
      <Hero />
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="w-full max-w-full sm:w-[98vw]">
          <About />
          {/* <ParallaxReveal> */}
          <Testimonials />
          {/* </ParallaxReveal> */}
          <Contact />
        </main>
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

export default Home;
