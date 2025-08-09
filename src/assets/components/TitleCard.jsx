import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TitleBar = ({ title, imgSize, category }) => {
  const cardsRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGJlNTM4M2I0YWQ3MmUwYWIxMmExNTc1MDZlNWUxOCIsIm5iZiI6MTc1NDEyMjg2NS40NTgsInN1YiI6IjY4OGRjYTcxZGNhNjM2NDkyYTdjZWVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aniK-Mn5RknVsQPWb678lQjEp2uzlDLDApyMk0OVwQU",
        },
      };

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${
            category ? category : "now_playing"
          }?language=en-US&page=1`,
          options
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data.results);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Scroll functions for buttons
  const scrollByAmount = (amount) => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-10">Loading movies...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  }

  return (
    <div className="relative w-full h-auto max-h-[500px] px-[6%] mx-auto py-2 mb-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button
            aria-label="Scroll Left"
            className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            onClick={() => scrollByAmount(-300)}
            type="button"
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Scroll Right"
            className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            onClick={() => scrollByAmount(300)}
            type="button"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={cardsRef}
        className="flex overflow-x-scroll gap-4 w-full select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
      >
        {apiData.length > 0 ? (
          apiData.map((card) => (
            <Link
              to={`/player/${card.id}`}
              key={card.id}
              className={`relative flex-shrink-0 overflow-hidden my-5`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                alt={card.title}
                className={` w-auto object-cover rounded-md cursor-pointer  ${
                  imgSize || "h-100"
                }`}
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-2 rounded-b-md">
                <p className="truncate">{card.title}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white">OPPS !No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default TitleBar;
