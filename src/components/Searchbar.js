import React, { useState } from "react";

export default function Searchbar(props) {
  const [innerSearch, setInnerSearch] = useState("");

  const styles = {
    position: "absolute",
    top: "50%",
    left: "38%",
  };
  return (
    <div id="hi" style={styles}>
      <input
        type="search"
        name="search"
        id="search"
        aria-labelledby="search-button"
        value={innerSearch}
        onChange={(e) => {
          setInnerSearch(e.target.value);
        }}
      />
      <button
        id="search-button"
        type="button"
        onClick={() => {
          props.onSubmit(innerSearch);
        }}
      >
        Search
      </button>
      <button
        id="reset-button"
        type="button"
        onClick={() => {
          setInnerSearch("");
          props.onSubmit(innerSearch);
        }}
      >
        Reset
      </button>
    </div>
  );
}
