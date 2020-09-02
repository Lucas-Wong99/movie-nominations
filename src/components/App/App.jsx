import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "../MovieList/MovieList";
import NominatedList from "../NominatedList/NominatedList";
import SearchBar from "../SearchBar/SearchBar";

import "../../styles/app.scss";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominated, setNominted] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=6d6340f8`)
      .then((res) => {
        setResults(res.data.Search);
      });
  }, [term]);

  return (
    <main className="App">
      <section className="header">
        <h1>Movie Nominations</h1>
        <SearchBar onSearch={(term) => setTerm(term)} />
      </section>
      <section className="movie-containers">
        <MovieList results={results} term={term} />
        <NominatedList />
      </section>
    </main>
  );
}

export default App;
