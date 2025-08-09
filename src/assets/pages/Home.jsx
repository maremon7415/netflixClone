import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import TitleBar from "../components/TitleCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-auto">
      <NavBar />
      <Hero />
      <div className="flex flex-col gap-2">
        <TitleBar title={"Bloockbuster Movies"} category={"top_rated"} />
        <TitleBar title={"Only on Netflix"} category={"popular"} />
        <TitleBar title={"Upcoming"} category={"upcoming"} />
        <TitleBar title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
