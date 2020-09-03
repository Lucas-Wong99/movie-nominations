import React from "react";

export default function MovieListItem({
  title,
  year,
  poster,
  action,
  add,
  remove,
  id
}) {
  return (
    <div className="movie-item">
      <h4>{title}</h4>
      <img src={poster} alt="Movie Img" />
      <p>{year}</p>
      {add !== undefined && (
        <button
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
