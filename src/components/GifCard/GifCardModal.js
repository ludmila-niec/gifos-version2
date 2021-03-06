import React, { useRef, useEffect } from "react";
// icons
import Fav from "../Icons/Fav.js";
import NotFav from "../Icons/NotFav.js";
// context
import useFavorite from "../../hooks/useFavorite";
// styles
import {
  Gif,
  FavBtn,
  ModalGrid,
  Description,
  GifWrapper,
  HeartAnimation,
  Alert,
} from "./styled";
// animation
import {
  animateHeartFavorite,
  animateToastAlert,
  animateOpenModal,
} from "../../animate";
import PropTypes from "prop-types";

const GifCardModal = ({ data }) => {
  // refs
  const heartRef = useRef(null);
  const alertRef = useRef(null);
  const alertError = useRef(null);
  const gifWrapperRef = useRef(null);
  // hooks
  const {
    state: { localFavs, error },
    actions: { addFavorite, removeFavorite },
  } = useFavorite();
  const { mdImg: image, title, id, height, width } = data;

  const isFav = localFavs.includes(id);

  useEffect(() => {
    gifWrapperRef &&
      gifWrapperRef.current &&
      animateOpenModal(gifWrapperRef.current);
  }, []);

  useEffect(() => {
    if (error.addFavorite) return animateToastAlert(alertError.current);
  }, [error]);

  const handleAddFavorite = (id) => {
    addFavorite(id);
    animateHeartFavorite(heartRef.current);
  };

  const handleRemovefavorite = (id) => {
    setTimeout(() => {
      removeFavorite(id);
    }, 1500);
    animateToastAlert(alertRef.current);
  };

  return (
    <ModalGrid>
      <GifWrapper width={width} height={height} ref={gifWrapperRef}>
        <Gif src={image} alt={title} loading="lazy" />
      </GifWrapper>
      <HeartAnimation ref={heartRef}>
        <Fav height="59" width="57" />
      </HeartAnimation>
      <Description>{title}</Description>
      {isFav ? (
        <FavBtn
          aria-label="remove from favorites"
          onClick={() => handleRemovefavorite(id)}
        >
          <Fav />
        </FavBtn>
      ) : (
        <FavBtn
          aria-label="add to favorites"
          onClick={() => handleAddFavorite(id)}
        >
          <NotFav />
        </FavBtn>
      )}
      <Alert role="status" aria-live="polite" ref={alertRef}>
        Favorite deleted
      </Alert>
      <Alert
        role="status"
        aria-live="polite"
        error
        ref={alertError}
      >{`Error: ${error.addFavorite}`}</Alert>
    </ModalGrid>
  );
};

GifCardModal.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GifCardModal;
