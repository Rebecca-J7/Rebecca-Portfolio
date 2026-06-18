import Welcome from "@/components/Welcome";
import MusicButton from "@/components/MusicButton";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Welcome />
      <MusicButton />
      <div className="mt-8 flex flex-row items-start gap-8">
        <Introduction />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
