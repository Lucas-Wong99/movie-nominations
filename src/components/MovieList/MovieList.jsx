import React from "react";

import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList({ results, term, add, action, imdbArr }) {
  return (
    <article className="movie-item-container">
      <h2>Search Results for "{term}"</h2>
      <div className="list">
        {results !== undefined &&
          results.map((item) => {
            if (imdbArr.includes(item.imdbID)) {
              return (
                <MovieListItem
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                  add={add}
                  action={action}
                  check="Included"
                />
              );
            } else {
              return (
                <MovieListItem
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                  add={add}
                  action={action}
                />
              );
            }
          })}
      </div>
    </article>
  );
}
