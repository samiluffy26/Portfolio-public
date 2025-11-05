import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import ParticlesBackground from "./components/ParticlesBackground";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Backgrounds */}
      <GridBackground />
      <ParticlesBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectsCarousel />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <Toaster position="top-right" />
    </div>
  );
}
