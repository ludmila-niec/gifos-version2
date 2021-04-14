import React from "react";
import Modal from "../Modal";
import GifCardModal from "./GifCardModal";
// custom hooks
import useModal from "../../hooks/useModal";
import { useBreakpoint } from "../../context/MediaQueries";
// styles
import { Gif, Wrapper } from "./styled";
import PropTypes from "prop-types";


const GifCard = ({ data }) => {
  const { sm } = useBreakpoint();
  const {
    isOpen,
    onClickHandler,
    onBlurHandler,
    onFocusHandler,
    onKeyDown,
  } = useModal();
  // api data
  const { url: lowImg, width: lowWidth } = data.images.fixed_height_downsampled;
  const { width, height, url: mdImg } = data.images.downsized_medium;
  const { title, id } = data;


  return (
    <>
      <Wrapper
        width={sm ? lowWidth : width}
        onClick={onClickHandler}
        onKeyDown={onKeyDown}
        tabIndex="0"
      >
        <Gif
          src={sm ? lowImg : mdImg}
          alt={title}
          loading="lazy"
        />
      </Wrapper>
      {isOpen && (
        <Modal
          onFocusHandler={onFocusHandler}
          onBlurHandler={onBlurHandler}
          // onClickHandler={onClickHandler}
        >
          <GifCardModal
            data={{ mdImg, title, id, height, width }}
            onClickHandler={onClickHandler}
          />
        </Modal>
      )}
    </>
  );
};

GifCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GifCard;
