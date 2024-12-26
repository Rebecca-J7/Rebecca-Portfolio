import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import MusicButton from "@/components/Music Button";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
import About from "@/components/About";

const Home = () => {
  return (
    <div className="flex min-h-[400vh] w-full flex-col items-center justify-center space-y-16">
      <Header />
      <MusicButton />
      <Welcome />
      <Introduction />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
