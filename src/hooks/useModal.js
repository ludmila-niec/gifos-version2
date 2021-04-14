import { useState } from "react";
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeOutid = null;

  const onClickHandler = () => {
    setIsOpen((currentState) => !currentState);
  };

  const onKeyDown = (e) =>{
    if(e.keyCode !== 13) return;
    setIsOpen((currentState) => !currentState);
  }

  const onBlurHandler = () => {
    setIsOpen(false);
  };

  const onFocusHandler = () => {
    clearInterval(timeOutid);
  };

  return { isOpen, onClickHandler, onBlurHandler, onFocusHandler, onKeyDown };
};
export default useModal;
