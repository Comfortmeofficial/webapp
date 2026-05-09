import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Header currentPage="home" />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
