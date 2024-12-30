import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import MusicButton from "@/components/MusicButton";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-[530vh] w-full flex-col items-center justify-center space-y-16">
      <Header />
      <Welcome />
      <MusicButton />
      <Introduction />
      <Contact />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
