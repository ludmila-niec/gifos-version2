import React, { useState, useRef, useEffect } from "react";
// icons
import Fav from "../Icons/Fav.js";
import NotFav from "../Icons/NotFav.js";
import CloseIcon from "../Icons/Close";
// context
import useFavorite from "../../hooks/useFavorite";
// styles
import {
  Gif,
  FavBtn,
  ModalGrid,
  Description,
  CloseBtn,
  Loading,
  HeartAnimation,
  Alert,
} from "./styled";
// animation
import { animateHeartFavorite, animateDeleteGif } from "../../animate";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const GifCardModal = ({ data, onClickHandler }) => {
  // state for loading animation
  const [isLoading, setIsloading] = useState(true);
  // refs
  const imgRef = useRef(null);
  const loadingRef = useRef(null);
  let heartRef = useRef(null);
  let alertRef = useRef(null);
  // hooks
  const { addFavorite, removeFavorite, localFavs } = useFavorite();
  const { mdImg: image, title, id, height, width } = data;

  const isFav = localFavs.includes(id);
  //   animation
  const tl = gsap.timeline({ repeat: -1, duration: 1, yoyo: true });
  // useEffect(() => {
  //   if (!isLoading) {
  //     return tl.pause();
  //   }
  //   const loadingAnimation = loadingRef.current;
  //   tl.to(loadingAnimation, { backgroundColor: "#fff" });
  //   tl.play();

  //   return () => tl.pause();
  // }, [isLoading]);

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
    animateHeartFavorite(heartRef);
  };

  const handleRemovefavorite = (id) =>{
    setTimeout(() =>{
      removeFavorite(id)
    },2000)
    animateDeleteGif(alertRef)
  }

  return (
    <ModalGrid>
      <CloseBtn onClick={onClickHandler}>
        <CloseIcon />
      </CloseBtn>
      <Loading width={width} height={height}>
        <Gif src={image} alt={title} ref={imgRef} />
      </Loading>
      <HeartAnimation ref={(elem) => (heartRef = elem)}>
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
  onClickHandler: PropTypes.func.isRequired,
};

export default GifCardModal;
