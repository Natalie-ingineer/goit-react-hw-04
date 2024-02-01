import css from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items }) => {
  // if (!items) {
  //   return <div>No images available</div>;
  // }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <img src={item.urls.small} alt={item.alt_description} />
            <ImageCard></ImageCard>
          </div>
        </li>
      ))}
    </ul>
  );
};
