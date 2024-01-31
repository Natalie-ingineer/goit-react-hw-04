import css from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = () => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          <img src="" alt="" />
          <ImageCard></ImageCard>
        </div>
      </li>
    </ul>
  );
};
