import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu-principal" className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
