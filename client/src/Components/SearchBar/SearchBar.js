//import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className="searchbar"
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

export default SearchBar;
