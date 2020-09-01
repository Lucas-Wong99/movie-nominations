import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList(props) {
  const results = props.results;

  const movies = results.map((item) => {
    return <MovieListItem info={item} />;
  });

  return (
    <div>
      <h2>Results</h2>
      {movies}
    </div>
  );
}
