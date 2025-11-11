import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const ContinueWatching = ({ movies = [] }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex justify-between items-center cursor-pointer"
          onClick={() => handleClick(movie.id)}
        >
          <div className="flex items-center gap-4 my-4">
            <img
              src={`${IMG_PATH}${movie.backdrop_path || movie.poster_path}`}
              alt={movie.title}
              className="w-[60px] h-[60px] object-cover rounded-lg"
            />
            <h4 className="text-white text-[14px] font-medium">
              {movie.title}
            </h4>
          </div>
          <button
            className="bg-white/30 hover:bg-white/50 transition-colors duration-300 text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation(); // რომ კლიკი არ გადავიდეს მშობელზე
              handleClick(movie.id);
            }}
          >
            ▶
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContinueWatching;
