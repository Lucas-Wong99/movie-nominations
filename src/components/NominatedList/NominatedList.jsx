import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export default function NominatedList({ nominatedItems, action, remove, max }) {
  return (
    <article className="movie-item-container">
      <div className="nom-header">
        <h2>Nominated Movies</h2>
        {max && <h3 className="max-noms">Max number of nominations</h3>}
      </div>
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
