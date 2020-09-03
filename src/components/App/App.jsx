import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "../MovieList/MovieList";
import NominatedList from "../NominatedList/NominatedList";
import SearchBar from "../SearchBar/SearchBar";

import "../../styles/app.scss";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominated, setNominated] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=6d6340f8`)
      .then((res) => {
        setResults(res.data.Search);
      });
  }, [term]);

  const addMovie = (obj) => {
    let newArray = [];
    newArray = [...nominated];
    newArray.push(obj);
    setNominated(newArray);
  };

  const removeMovie = (id) => {
    const filteredArray = [...nominated].filter((item) => {
      if (item.imdbID !== id) {
        return item;
      } else {
        return null;
      }
    });
    setNominated(filteredArray);
  };

  return (
    <main className="App">
      <section className="header">
        <h1>Movie Nominations</h1>
        <SearchBar onSearch={(term) => setTerm(term)} />
      </section>
      <section className="movie-containers">
        <MovieList
          results={results}
          term={term}
          add={addMovie}
          action="Add to Nominate"
        />
        <NominatedList
          nominatedItems={nominated}
          remove={removeMovie}
          action="Remove"
        />
      </section>
    </main>
  );
}

export default App;
