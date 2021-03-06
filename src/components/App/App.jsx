import React from "react";

import MovieList from "../MovieList/MovieList";
import NominatedList from "../NominatedList/NominatedList";
import SearchBar from "../SearchBar/SearchBar";

import useApplicationData from "../../hooks/useApplicationData";

import "../../styles/app.scss";

export default function App() {
  const {
    term,
    nominated,
    setTerm,
    results,
    maxNominations,
    imdbArr,
    addMovie,
    removeMovie
  } = useApplicationData();

  return (
    <main className="App">
      <section className="header">
        <h1>The Shoppies</h1>
        <SearchBar onSearch={(term) => setTerm(term)} />
      </section>
      <section className="movie-containers">
        <MovieList
          results={results}
          term={term}
          add={addMovie}
          action="Add to Nominate"
          imdbArr={imdbArr}
          max={maxNominations}
        />
        <NominatedList
          nominatedItems={nominated}
          remove={removeMovie}
          action="Remove"
          max={maxNominations}
        />
      </section>
    </main>
  );
}
