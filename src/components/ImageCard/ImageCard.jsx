import css from "./ImageCard.module.css";

export const ImageCard = ({ photo, description }) => {
  return (
    <div>
      <img src={photo} alt={description} />
    </div>
  );
};
