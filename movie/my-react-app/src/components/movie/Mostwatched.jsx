import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const Mostwatched = ({ movies = [] }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="w-[308px] h-44 rounded-3xl overflow-hidden relative cursor-pointer mt-[13px]"
          onClick={() => handleClick(movie.id)}
        >
          {/* Background Image Container */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={`${IMG_PATH}${movie.backdrop_path || movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover absolute top-0 left-0"
            />

            {/* Content Container */}
            <div className="absolute bottom-0 p-4 md:p-6 flex justify-between items-center z-10 w-full bg-white/50 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.3px]">
              {/* Movie Title */}
              <div>
                <h2 className="text-white text-[16px] font-semibold">
                  {movie.title}
                </h2>
              </div>

              {/* Play Button */}
              <div>
                <button
                  className="w-[30px] h-[30px] rounded-full bg-[#202327]/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(movie.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mostwatched;
