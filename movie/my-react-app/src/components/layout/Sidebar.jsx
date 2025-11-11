import React from "react";
import Mostwatched from "../movie/Mostwatched";
import ContinueWatching from "../movie/ContinueWatching";

const Sidebar = ({ movies = [] }) => {
  const mostWatched = movies.slice(0, 5);
  const continuePlaying = movies.slice(5, 10);

  return (
    <div className="flex flex-col pr-10">
      <Mostwatched movies={mostWatched} />
      <ContinueWatching movies={continuePlaying} />
    </div>
  );
};

export default Sidebar;
