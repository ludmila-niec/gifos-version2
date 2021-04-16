import React from "react";
import { useBreakpoint } from "../../context/MediaQueries";
import { WrapperGif } from "./styled";

const ModalTrigger = ({ triggerContent, onOpen, onKeyUp, mediaSize }) => {
  const [lowWidth, width] = mediaSize;
  const { sm } = useBreakpoint();
  return (
    <WrapperGif
      tabIndex="0"
      role="button"
      onClick={onOpen}
      onKeyUp={onKeyUp}
      width={sm ? lowWidth : width}
    >
      {triggerContent}
    </WrapperGif>
  );
};

export default ModalTrigger;
