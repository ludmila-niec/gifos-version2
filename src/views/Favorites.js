import React, { useEffect, useRef } from "react";
import {
  Container,
  Flex,
  SectionTitle,
  TextError,
  GradientLine,
} from "../components/common/styled";
import GridTemplate from "../components/Grid/GridTemplate";
import Loading from "../components/Loading";
// hook
import useFavorite from "../hooks/useFavorite";
// animation
import { animateGradientLine, animateShowError } from "../animate";

const Favorites = () => {
  const {
    state: { gifs, isLoading, error },
    actions: { loadFavorites },
  } = useFavorite();
  const containerRef = useRef(null);
  const gradientLineRef = useRef(null);
  const errorMsgRef = useRef(null);
  const noFavoritesRef = useRef(null);

  const gifsLoaded = gifs.length > 0;
  const noFavorites = !isLoading && !gifsLoaded;

  useEffect(() => {
    document.title = "Gifs || Favorites";
  }, []);

  useEffect(() => {
    loadFavorites();
    animateGradientLine(gradientLineRef.current, containerRef.current);
  }, []);

  useEffect(() => {
    if (error.loadFavorites) return animateShowError(errorMsgRef.current);
  }, [error]);

  useEffect(() => {
    if (noFavorites) return animateShowError(noFavoritesRef.current);
  }, [noFavorites]);

  if (error.loadFavorites) {
    return (
      <main style={{ minHeight: "60vh" }}>
        <Flex height="50vh">
          <div style={{ overflowY: "hidden" }}>
            <TextError ref={errorMsgRef}>{error.loadFavorites}</TextError>
          </div>
        </Flex>
      </main>
    );
  }

  const noFavoritesSavedMsg = (
    <Flex height="30vh">
      <div style={{ overflowY: "hidden" }}>
        <TextError ref={noFavoritesRef}>
          You don't have favorites gifs yet
        </TextError>
      </div>
    </Flex>
  );

  return (
    <main style={{ minHeight: "90vh" }}>
      <Container ref={containerRef}>
        <SectionTitle>My Favorites</SectionTitle>
        <GradientLine ref={gradientLineRef} />
        {isLoading && <Loading />}
        {noFavorites ? noFavoritesSavedMsg : <GridTemplate data={gifs} />}
      </Container>
    </main>
  );
};

export default Favorites;
