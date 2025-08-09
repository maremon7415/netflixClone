import HeroImg from "../imgs/hero_banner.jpg";
import HeroTitle from "../imgs/hero_title.png";
import { FaPlay } from "react-icons/fa";
import TitleBar from "./TitleCard";

const Hero = () => {
  return (
    <div className="relative h-screen w-full mb-10">
      <img
        src={HeroImg}
        alt="Hero Banner"
        className="w-full h-full [mask-image:linear-gradient(to_right,transparent,black_70%)] [webkit-mask-image:to_right,transparent,black_70%] object-cover"
      />
      <div className="absolute sleft-0 pl-[6%]" style={{ bottom: "30%" }}>
        <img
          src={HeroTitle}
          alt="Hero Title"
          className="w-[90%] max-w-[420px] mb-8"
          s
        />
        <p className="text-[17px] max-w-[700px] mb-5 pr-1">
          Descovering his ties to a secrete ancient order , a young man living
          in modern Istanbul embark on quest to save the city from an a im
          mortal enemy
        </p>
        <div className="flex gap-4 lg:mb-12 mb-2">
          <button
            type="button"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transitionAll cursor-pointer"
          >
            <FaPlay />
            Play
          </button>
          <button
            type="button"
            aria-label="More Info"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transitionAll cursor-pointer"
          >
            More Info
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent max-h-52 mb-5 ">
        <TitleBar title={"Popular on Netflix"} imgSize={"h-40"} />
      </div>
    </div>
  );
};

export default Hero;
