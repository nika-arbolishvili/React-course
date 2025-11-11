import HeaderNav from "../components/layout/HeaderNav";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/MainContent";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="">
      {/* <HeaderNav /> */}
      <div className="flex">
        {/* <Sidebar /> */}
        <Sidebar movies={movies} />
        <MainContent movies={movies} />
      </div>
    </div>
  );
}

export default Home;
