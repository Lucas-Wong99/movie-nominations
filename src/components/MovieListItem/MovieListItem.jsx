import React from "react";

import classNames from "classnames";

export default function MovieListItem({
  title,
  year,
  poster,
  action,
  add,
  remove,
  id,
  disabled
}) {
  let itemClass = classNames("", {
    "button-disabled": disabled
  });

  return (
    <div className="movie-item">
      <img src={poster} alt="Movie Img" />
      <h4>{title}</h4>
      <p>{year}</p>
      {add !== undefined && (
        <button
          className={itemClass}
          onClick={() =>
            add({ Title: title, Year: year, Poster: poster, imdbID: id })
          }
        >
          {action}
        </button>
      )}
      {remove !== undefined && (
        <button onClick={() => remove(id)}>{action}</button>
      )}
    </div>
  );
}
