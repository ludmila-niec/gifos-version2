import React from "react";
import ReactDOM from "react-dom";
import { WindowBg} from "./styled";

import PropTypes from "prop-types";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <WindowBg role="dialog" aria-modal>
      {props.children}
    </WindowBg>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
