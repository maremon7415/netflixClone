import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGJlNTM4M2I0YWQ3MmUwYWIxMmExNTc1MDZlNWUxOCIsIm5iZiI6MTc1NDEyMjg2NS40NTgsInN1YiI6IjY4OGRjYTcxZGNhNjM2NDkyYTdjZWVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aniK-Mn5RknVsQPWb678lQjEp2uzlDLDApyMk0OVwQU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 overflow-auto">
      <div className="w-full max-w-4xl relative mx-auto rounded-lg">
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            aria-label="Go back"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="text-white text-lg" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
          {apiData.key && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${apiData.key}`}
              title={apiData.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Video Info */}
        <div className="bg-gray-900 mt-4 rounded-lg p-4 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="text-base font-medium">
              {apiData.published_at?.slice(0, 10) || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Name</p>
            <p className="text-base font-medium">{apiData.name || "N/A"}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Type</p>
            <p className="text-base font-medium">{apiData.type || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
