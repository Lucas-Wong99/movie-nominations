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
    <form className="search-bar" action="" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="input"
        placeholder="Search Movies"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
