import React, { useEffect, useRef } from "react";
import {
  Container,
  SectionTitle,
  TextError,
  GradientLine,
} from "../components/common/styled";
import GridTemplate from "../components/Grid/GridTemplate";
import Loading from "../components/Loading";
// hook
import useFavorite from "../hooks/useFavorite";
// animation
import { animateGradientLine } from "../animate";
const Favorites = () => {
  const { gifs, loadFavorites, isLoading, error } = useFavorite();
  let containerRef = useRef(null);
  let gradientLineRef = useRef(null);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    animateGradientLine(gradientLineRef, containerRef);
  }, []);

  const noFavorites = !isLoading && gifs.length === 0;
  return (
    <main style={{minHeight:"90vh"}}>
      <Container ref={(elem) => (containerRef = elem)}>
        <SectionTitle>My Favorites</SectionTitle>
        <GradientLine ref={(elem) => (gradientLineRef = elem)} />
        {isLoading && <Loading />}
        {noFavorites && (
          <TextError>You don't have favorites gifs yet</TextError>
        )}
        {error ? <TextError>{error}</TextError> : <GridTemplate data={gifs} />}
      </Container>
    </main>
  );
};

export default Favorites;
