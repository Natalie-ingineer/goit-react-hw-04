import css from "./ImageCard.module.css";
import { ImageModal } from "../ImageModal/ImageModal";
import { useState } from "react";

export const ImageCard = ({ photo, description, photoModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <img src={photo} alt={description} onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && (
        <ImageModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <img src={photoModal} />
        </ImageModal>
      )}
    </div>
  );
};
