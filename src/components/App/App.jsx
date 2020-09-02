import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=6d6340f8`)
      .then((res) => {
        setResults(res.data.Search);
      });
  }, [term]);

  return (
    <div className="App">
      <h1>Movie Nominations</h1>
      <SearchBar onSearch={(term) => setTerm(term)} />
      <MovieList results={results} />
    </div>
  );
}

export default App;
