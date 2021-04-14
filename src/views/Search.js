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
import { animateSearchResult } from "../animate";

const Search = () => {
  const keyword = new URLSearchParams(useLocation().search).get("query");
  const { gifs, isLoading, error, submitSearch, loadMoreGifs } = useSearch();
  const titleRef = useRef(null);
  const gradientLineRef = useRef(null);
  useEffect(() => {
    submitSearch(keyword);
  }, [keyword]);

  useEffect(() => {
    animateSearchResult(gradientLineRef.current, titleRef.current);
  }, [keyword]);

  if (!isLoading && gifs.length === 0) {
    return (
      <main style={{minHeight:'80vh'}}>
      <Container>
        <SearchTitle>0 results for: "{keyword}"</SearchTitle>
        <TextError>Sorry, nothing here :(</TextError>
      </Container>
      </main>
    );
  }
  return (
    <main>
      <TitleContainer>
        <SearchTitle textAlign={"left"} ref={titleRef}>
          Results for: "{keyword}"
        </SearchTitle>
        <GradientLine ref={gradientLineRef} />
      </TitleContainer>
      <Container>
        {error.search && <TextError>{error.search}</TextError>}
        <GridTemplate data={gifs} />
        {isLoading && <Loading />}
        <Flex height={"20vh"}>
          {error.loadMore ? (
            <TextError>{error.loadMore}</TextError>
          ) : (
            <ButtonPrimary
              aria-label="load more gifs"
              onClick={() => loadMoreGifs(keyword)}
              disabled={isLoading}
            >
              load more
            </ButtonPrimary>
          )}
        </Flex>
      </Container>
    </main>
  );
};

export default Search;
