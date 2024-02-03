import css from "./ImageModal.module.css";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ImageModal = ({ photoModal, isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <img src={photoModal} />
        <button onClick={() => onClose()}>close</button>
      </Modal>
    </div>
  );
};
