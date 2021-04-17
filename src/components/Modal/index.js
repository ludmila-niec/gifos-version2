import React, { useState, useEffect, useRef } from "react";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

import PropTypes from "prop-types";

const Modal = ({ children, triggerContent, ariaLabel, mediaSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  const htmlDom = document.querySelector("html");
  useEffect(() => {
    isOpen && buttonRef.current.focus();
    if (isOpen) return (htmlDom.style.overflow = "hidden");
    htmlDom.style.overflow = "visible";
  }, [isOpen, htmlDom]);

  useEffect(() => {
    return () => (htmlDom.style.overflow = "visible");
  }, [htmlDom]);

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

  function triggerOpenOnKeyUp(e) {
    e.keyCode === 13 && onOpen();
  }

  return (
    <>
      <ModalTrigger
        triggerContent={triggerContent}
        mediaSize={mediaSize}
        onOpen={onOpen}
        onKeyUp={triggerOpenOnKeyUp}
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
