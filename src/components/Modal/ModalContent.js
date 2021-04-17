import ReactDOM from "react-dom";
import React from "react";
import CloseIcon from "../Icons/Close";
import { Backdrop, Container, CloseBtn } from "./styled";

const ModalContent = ({
  content,
  onClose,
  onClickAway,
  onKeyDown,
  modalRef,
  buttonRef,
  ariaLabel,
}) => {
  return ReactDOM.createPortal(
    <Backdrop
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex="-1"
      onClick={onClickAway}
      onKeyDown={onKeyDown}
    >
      <Container ref={modalRef}>
        <CloseBtn aria-label="Close button" onClick={onClose} ref={buttonRef}>
          <CloseIcon className="close-btn" />
        </CloseBtn>
        {content}
      </Container>
    </Backdrop>,
    document.body
  );
};

export default ModalContent;
