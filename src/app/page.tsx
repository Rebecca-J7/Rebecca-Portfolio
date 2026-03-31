import Welcome from "@/components/Welcome";
import MusicButton from "@/components/MusicButton";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Welcome />
      <MusicButton />
      <Introduction />
      <Contact />
    </div>
  );
};

export default Home;
