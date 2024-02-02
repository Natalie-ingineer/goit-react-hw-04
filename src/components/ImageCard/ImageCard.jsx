import css from "./ImageCard.module.css";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ photo, description, onOpenModal }) => {
  return (
    <div>
      <img src={photo} alt={description} />
      {/* {
        (onOpenModal = { onOpenModal } && (
          <ImageModal
            photo={item.urls.regular}
            description={item.alt_description}
          />
        ))
      } */}
    </div>
  );
};
