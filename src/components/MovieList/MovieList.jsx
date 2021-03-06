import React from "react";

import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList({
  results,
  term,
  add,
  action,
  imdbArr,
  max
}) {
  return (
    <article className="movie-item-container">
      <h2>Search Results for "{term}"</h2>
      <div className="list">
        {results !== undefined &&
          results.map((item) => {
            /**
             * Checks if each movie has been either already nominated or if the maxNominations
             * is true. If either is true then a disabled prop is added, which will disable
             * the add button or else the button is active.
             */
            if (imdbArr.includes(item.imdbID) || max) {
              return (
                <MovieListItem
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                  add={add}
                  action={action}
                  disabled={true}
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
