import React from "react";

export default function MovieListItem({ title, year, poster }) {
  return (
    <div className="movie-item">
      <h4>{title}</h4>
      <img src={poster} alt="Movie Img" />
      <p>{year}</p>
    </div>
  );
}
