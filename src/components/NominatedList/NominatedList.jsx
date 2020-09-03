import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function NominatedList({ nominatedItems, action, remove }) {
  return (
    <article className="movie-item-container">
      <h2>Nominated Movies</h2>
      <div className="list">
        {nominatedItems !== undefined &&
          nominatedItems.map((item) => {
            return (
              <MovieListItem
                key={item.imdbID}
                id={item.imdbID}
                title={item.Title}
                year={item.Year}
                poster={item.Poster}
                action={action}
                remove={remove}
              />
            );
          })}
      </div>
    </article>
  );
}
