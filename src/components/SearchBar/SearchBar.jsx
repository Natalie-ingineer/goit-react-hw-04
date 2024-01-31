import css from "./SearchBar.module.css";
import { useId } from "react";

export const SearchBar = ({ onSubmit }) => {
  // const usernameFieldIdsearch = useId();
  return (
    <header>
      <form>
        <input
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
