import css from "./ImageModal.module.css";
import { useState } from "react";
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// ReactDOM.render(<App />, appElement);

export const ImageModal = ({ photoOpenModal, isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles}>
        <img src={photoOpenModal} />
        <button onClick={() => onClose()}>close</button>
      </Modal>
    </div>
  );
};
