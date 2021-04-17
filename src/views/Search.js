import React, { useEffect, useRef } from "react";
// components
import GridTemplate from "../components/Grid/GridTemplate";
import Loading from "../components/Loading";
// hook
import useSearch from "../hooks/useSearch";
// router
import { useLocation } from "react-router-dom";
// styled
import {
  Container,
  Flex,
  ButtonPrimary,
  TextError,
  GradientLine,
} from "../components/common/styled";
import { SearchTitle, TitleContainer } from "../components/Search/styled";
// animation
import { animateSearchResult, animateShowError } from "../animate";

const Search = () => {
  const keyword = new URLSearchParams(useLocation().search).get("query");
  const { gifs, isLoading, error, submitSearch, loadMoreGifs } = useSearch();
  const titleRef = useRef(null);
  const gradientLineRef = useRef(null);
  const errorMsgRef = useRef(null);
  const noResultsRef = useRef(null);

  const gifsLoaded = gifs.length > 0;
  // 0 results for current search
  const noResults = !isLoading && !gifsLoaded;

  useEffect(() => {
    document.title = "Gifs || Search";
  }, []);

  useEffect(() => {
    submitSearch(keyword);
    animateSearchResult(gradientLineRef.current, titleRef.current);
  }, [keyword]);

  useEffect(() => {
    if (error.search) return animateShowError(errorMsgRef.current);
  }, [error]);

  useEffect(() => {
    if (noResults) return animateShowError(noResultsRef.current);
  }, [noResults]);

  // failed to load gifs
  if (error.search) {
    return (
      <main style={{ minHeight: "60vh" }}>
        <Flex height="50vh">
          <div style={{ overflowY: "hidden" }}>
            <TextError role='alert' ref={errorMsgRef}>{error.search}</TextError>
          </div>
        </Flex>
      </main>
    );
  }

  if (noResults) {
    return (
      <main style={{ minHeight: "60vh" }}>
        <Container>
          <SearchTitle>0 results for: "{keyword}"</SearchTitle>
          <Flex height="30vh">
            <div style={{ overflowY: "hidden" }}>
              <TextError ref={noResultsRef}>Sorry, nothing here :(</TextError>
            </div>
          </Flex>
        </Container>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "60vh" }}>
      <TitleContainer>
        <SearchTitle textAlign={"left"} ref={titleRef}>
          Results for: "{keyword}"
        </SearchTitle>
        <GradientLine ref={gradientLineRef} />
      </TitleContainer>
      <Container>
        {error.search && <TextError>{error.search}</TextError>}
        {gifs.length > 0 && <GridTemplate data={gifs} />}
        {isLoading && <Loading />}
        {error.loadMore ? (
          <TextError role='alert'>{error.loadMore}</TextError>
        ) : (
          <Flex height={"20vh"}>
            <ButtonPrimary
              aria-label="load more gifs"
              onClick={() => loadMoreGifs(keyword)}
              disabled={isLoading}
            >
              load more
            </ButtonPrimary>
          </Flex>
        )}
      </Container>
    </main>
  );
};

export default Search;
