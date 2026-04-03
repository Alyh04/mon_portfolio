import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-primary selection:text-white pb-20">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
    </main>
  );
}
