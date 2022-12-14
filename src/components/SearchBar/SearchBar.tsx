import React from "react";
import "./SearchBar.scss";

interface ISearchBar {
  filterSearchTerm: string;
  setFilterSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
  filterSearchTerm,
  setFilterSearchTerm,
}: ISearchBar): JSX.Element => {
  return (
    <form className="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="What can I help you search today?"
        value={filterSearchTerm}
        onChange={(e) => setFilterSearchTerm(e.target.value)}
      />
      <img
        className="search-icon"
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        alt="search Icon"
      />
    </form>
  );
};

export default SearchBar;
