import css from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageGallery = ({ items, onClickOpenModal }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            photo={item.urls.small}
            description={item.alt_description}
            onOpenModal={onClickOpenModal}
          ></ImageCard>
          {
            (onClickOpenModal = { onClickOpenModal } && (
              <ImageModal
                photo={item.urls.regular}
                description={item.alt_description}
              />
            ))
          }
        </li>
      ))}
    </ul>
  );
};
