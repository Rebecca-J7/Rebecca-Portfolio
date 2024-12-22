import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import MusicButton from "@/components/Music Button";
import Introduction from "@/components/Introduction";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-16">
      <Header />
      <MusicButton />
      <Welcome />
      <Introduction />
    </div>
  );
};

export default Home;
