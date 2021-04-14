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
import { animateGradientLine } from "../../animate";

const Trending = () => {
  const { gifs, isLoading, error, loadMoreGifs } = useGifTrending();
  let containerRef = useRef(null);
  let gradientLineRef = useRef(null);
  useEffect(() => {
    animateGradientLine(gradientLineRef, containerRef);
  }, []);
  return (
    <section>
      <Container ref={(elem) => (containerRef = elem)}>
        <SectionTitle>Top Trending Gifs</SectionTitle>
        <GradientLine ref={(elem) => (gradientLineRef = elem)} />
        {error && <TextError>{error}</TextError>}
        <GridTemplate data={gifs} />
        {isLoading && <Loading />}
        {gifs.length > 0 && (
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
