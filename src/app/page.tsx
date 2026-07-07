import Welcome from "@/components/Welcome";
import MusicButton from "@/components/MusicButton";
import ProfileSection from "@/components/ProfileSection";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Welcome />
      <MusicButton />
      <ProfileSection />
    </div>
  );
};

export default Home;
