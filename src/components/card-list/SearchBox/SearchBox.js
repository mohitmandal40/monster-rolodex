import React from "react";

import classes from "./SearchBox.module.css";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={classes.Search}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
