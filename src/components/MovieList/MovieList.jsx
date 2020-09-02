import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList(props) {
  return (
    <div className="movie-search-results">
      <h2>Results</h2>
      {props.results !== undefined &&
        props.results.map((item) => {
          return (
            <MovieListItem
              title={item.Title}
              year={item.Year}
              poster={item.Poster}
              key={item.imdbID}
            />
          );
        })}
    </div>
  );
}
