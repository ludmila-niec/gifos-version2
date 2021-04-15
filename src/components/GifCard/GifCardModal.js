import React, { useState, useRef, useEffect } from "react";
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
  Loading,
  HeartAnimation,
  Alert,
} from "./styled";
// animation
import { animateHeartFavorite, animateDeleteGif } from "../../animate";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const GifCardModal = ({ data }) => {
  // state for loading animation
  const [isLoading, setIsloading] = useState(true);
  // refs
  const imgRef = useRef(null);
  const loadingRef = useRef(null);
  const heartRef = useRef(null);
  let alertRef = useRef(null);
  // hooks
  const { addFavorite, removeFavorite, localFavs } = useFavorite();
  const { mdImg: image, title, id, height, width } = data;

  const isFav = localFavs.includes(id);

  //   check if image has loaded
  useEffect(() => {
    const image = imgRef.current;
    if (image && image.complete) {
      setIsloading(false);
    }
  }, []);

  // const like = heartRef.current;
  const handleAddFavorite = (id) => {
    addFavorite(id);
    animateHeartFavorite(heartRef.current);
  };

  const handleRemovefavorite = (id) => {
    setTimeout(() => {
      removeFavorite(id);
    }, 2000);
    animateDeleteGif(alertRef);
  };

  return (
    <ModalGrid>
      <Loading width={width} height={height}>
        <Gif src={image} alt={title} ref={imgRef} />
      </Loading>
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
      <Alert ref={(elem) => (alertRef = elem)}>Favorito eleminado</Alert>
    </ModalGrid>
  );
};

GifCardModal.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GifCardModal;
