import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import MusicButton from "@/components/Music Button";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-web-purple-3 to-web-purple-1">
      <Header />
      <MusicButton />
      <Introduction />
    </div>
  );
};

export default Home;
