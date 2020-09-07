import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominated, setNominated] = useState([]);
  const [imdbArr, setIMDBArr] = useState([]);
  const [maxNominations, setMaxNominations] = useState(false);

  /**
   * Use effect to determine if the max nominations are true and the imdbID values of
   * each movie that has been nominated
   */
  useEffect(() => {
    if (nominated.length === 5) {
      setMaxNominations(true);
    } else {
      setMaxNominations(false);
    }
    const imdbList = nominated.map((item) => {
      return item.imdbID;
    });
    setIMDBArr(imdbList);
  }, [nominated]);

  //Sends a get request and sets the result array to the first 10 movies.
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${term}&type=movie&apikey=6d6340f8`)
      .then((res) => {
        setResults(res.data.Search);
      });
  }, [term]);

  const addMovie = (obj) => {
    let newArray = [];
    if (nominated.length < 5) {
      newArray = [...nominated];
      newArray.push(obj);
      setNominated(newArray);
    }
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

  return {
    term,
    nominated,
    setTerm,
    results,
    maxNominations,
    imdbArr,
    addMovie,
    removeMovie
  };
};

export default useApplicationData;
