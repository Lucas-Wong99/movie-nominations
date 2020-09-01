import React, { useState, useEffect, useCallback } from "react";

import useDebounce from "../../hooks/useDebounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <div>
      <h2>Search Bar</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search Movies"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
