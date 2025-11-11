import React from "react";
import Banner from "./movie/Banner";
import Trending from "./movie/Trending";

const MainContent = ({ movies }) => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <div className="mt-8">
        <Trending movies={movies} />
      </div>
    </div>
  );
};

export default MainContent;
