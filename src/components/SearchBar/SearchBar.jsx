import css from "./SearchBar.module.css";
import { useId } from "react";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };
  // const usernameFieldIdsearch = useId();
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
