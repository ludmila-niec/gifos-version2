import React, { useState, useEffect, useRef } from "react";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

import PropTypes from "prop-types";

const Modal = ({ children, triggerContent, ariaLabel, mediaSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    isOpen && buttonRef.current.focus();
  }, [isOpen]);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onClickAway(e) {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    onClose();
  }

  function onKeyDown(e) {
    return e.keyCode === 27 && onClose();
  }
  return (
    <>
      <ModalTrigger
        triggerContent={triggerContent}
        mediaSize={mediaSize}
        onOpen={onOpen}
      />
      {isOpen && (
        <ModalContent
          content={children}
          onClose={onClose}
          onClickAway={onClickAway}
          onKeyDown={onKeyDown}
          modalRef={modalRef}
          buttonRef={buttonRef}
          ariaLabel={ariaLabel}
        />
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
