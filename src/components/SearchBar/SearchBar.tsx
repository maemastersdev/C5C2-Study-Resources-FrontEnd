import React from "react";
import { IPageHeader } from "../../Interfaces/Interfaces";
import "./SearchBar.scss";

const SearchBar = ({
  filterSearchTerm,
  setFilterSearchTerm,
}: IPageHeader): JSX.Element => {
  return (
    <form className="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="What can I help you search today?"
        value={filterSearchTerm}
        onChange={(e) => setFilterSearchTerm(e.target.value)}
      />
      <a href="#">
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          alt="search Icon"
        />
      </a>
    </form>
  );
};

export default SearchBar;
