import css from "./Loader.module.css";
import { Audio } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      ;
    </div>
  );
};
