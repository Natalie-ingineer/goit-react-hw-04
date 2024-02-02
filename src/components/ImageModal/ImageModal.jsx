import css from "./ImageModal.module.css";
// import { openModal, afterOpenModal, closeModal } from "../App";
// ReactModal.setAppElement("#main");

// class ExampleApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//     };

//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }

//   handleOpenModal() {
//     this.setState({ showModal: true });
//   }

//   handleCloseModal() {
//     this.setState({ showModal: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleOpenModal}>Trigger Modal</button>
//         <ReactModal
//           isOpen={this.state.showModal}
//           contentLabel="onRequestClose Example"
//           onRequestClose={this.handleCloseModal}
//           className="Modal"
//           overlayClassName="Overlay"
//         >
//           <p>Modal text!</p>
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//         </ReactModal>
//       </div>
//     );
//   }
// }

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById("main"));
export const ImageModal = ({ photo, description }) => {
  return (
    <div>
      <img src={photo} alt={description} />
    </div>
  );
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }
