import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!res.ok) throw new Error("Movie not found");
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        navigate("/500");
      }
    };
    fetchMovie();
  }, [id, navigate]);

  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  if (loading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Movie Poster */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
              <img
                src={`${IMG_PATH}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Movie Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {movie.title}
            </h1>
            <p className="text-gray-700">{movie.overview}</p>

            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Rating:</span>
              <span className="text-yellow-400 font-semibold">
                {movie.vote_average} / 10
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Release Date:</span>
              <span className="text-gray-700">{movie.release_date}</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Genres:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
