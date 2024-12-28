import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import MusicButton from "@/components/Music Button";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className="flex min-h-[600vh] w-full flex-col items-center justify-center space-y-16">
      <Header />
      <MusicButton />
      <Welcome />
      <Introduction />
      <Contact />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
