import { useState, useEffect } from "react";

const useCheckIfNom = (nominationArray) => {
  const [imdbArr, setIMDBArr] = useState([]);
  const check = [...nominationArray];

  useEffect(() => {
    const imdbList = check.map((item) => {
      return item.imdbID;
    });
    setIMDBArr(imdbList);
  }, [check]);

  return { imdbArr };
};

export default useCheckIfNom;
