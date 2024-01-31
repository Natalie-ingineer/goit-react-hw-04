import css from "./SearchBox.module.css";
import { useId } from "react";

export const SearchBox = ({ value, onFilter }) => {
  const usernameFieldIdsearch = useId();
  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        id={usernameFieldIdsearch}
      />
    </div>
  );
};
