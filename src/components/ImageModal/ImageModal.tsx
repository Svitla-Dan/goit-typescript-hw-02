import { FC } from "react";
import ReactModal from "react-modal";
import style from "./ImageModal.module.css";
import { ModalParams } from "../types";

interface ModalProps {
  modalParams: ModalParams;
  handleClose: () => void;
}

const ImageModal: FC<ModalProps> = ({ modalParams, handleClose }) => {
  return (
    <ReactModal
      isOpen={modalParams.isOpen}
      onRequestClose={handleClose}
      className={style.modalContainer}
      overlayClassName={style.overlayBackground}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
    >
      <img
        src={modalParams.url}
        alt={modalParams.alt}
        className={style.modalImage}
      />
    </ReactModal>
  );
};

export default ImageModal;
