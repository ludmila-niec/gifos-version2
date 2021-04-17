import React, { useRef, useEffect } from "react";
import GridTemplate from "../Grid/GridTemplate";
import Loading from "../Loading";
// hooks
import useGifTrending from "../../hooks/useGifTrending";
// styled
import {
  SectionTitle,
  Container,
  ButtonPrimary,
  Flex,
  TextError,
  GradientLine,
} from "../common/styled";
import { animateGradientLine, animateShowError } from "../../animate";

const Trending = () => {
  const { gifs, isLoading, error, loadMoreGifs } = useGifTrending();
  const containerRef = useRef(null);
  const gradientLineRef = useRef(null);
  const errorMsgRef = useRef(null);
  useEffect(() => {
    animateGradientLine(gradientLineRef.current, containerRef.current);
  }, []);

  useEffect(() => {
    if (error.trendingGifs) return animateShowError(errorMsgRef.current);
  }, [error]);

  const gifsLoaded = gifs && gifs.length > 0;

  if (error.trendingGifs) {
    return (
      <section>
        <Container ref={containerRef}>
          <SectionTitle>Top Trending Gifs</SectionTitle>
          <Flex height="30vh">
            <div style={{ overflowY: "hidden" }}>
              <TextError role='alert' ref={errorMsgRef}>{error.trendingGifs}</TextError>
            </div>
          </Flex>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container ref={containerRef}>
        <SectionTitle>Top Trending Gifs</SectionTitle>
        <GradientLine ref={gradientLineRef} />
        {gifsLoaded && <GridTemplate data={gifs} />}
        {isLoading && <Loading />}
        {error.moreGifs ? (
          <TextError role='alert'>{error.moreGifs}</TextError>
        ) : (
          <Flex height={"20vh"}>
            <ButtonPrimary
              aria-label="load more gifs"
              onClick={loadMoreGifs}
              disabled={isLoading}
            >
              load more
            </ButtonPrimary>
          </Flex>
        )}
      </Container>
    </section>
  );
};

export default Trending;
