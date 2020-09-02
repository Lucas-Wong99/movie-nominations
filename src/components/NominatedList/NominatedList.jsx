import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList(props) {
  return (
    <article className="movie-item-container">
      <h2>Nominated Movies</h2>
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
    </article>
  );
}
