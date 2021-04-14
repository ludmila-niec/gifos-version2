import React from "react";
import SearchLight from "../Icons/SearchLight";
// router
import { useHistory, Link } from "react-router-dom";
// context
import { useBreakpoint } from "../../context/MediaQueries";
// hook
import useSearch from "../../hooks/useSearch";
// styled
import { Wrapper, Input, IconBtn, FlexWrapper, Box } from "./styled";

const Search = () => {
  let history = useHistory();
  const { lg } = useBreakpoint();
  const {
    query,
    suggestions,
    error,
    handleChange,
    setQuery,
  } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    history.push(`/search?query=${query}`);
    setQuery("");
  };

  const haveSuggestions = suggestions.length > 0;
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FlexWrapper justify={lg && "flex-start"}>
          <Input
            type="text"
            placeholder="Search your favorite gifs..."
            aria-label="Search gifs by keywords"
            value={query}
            onChange={handleChange}
          />
          <IconBtn type="submit" aria-label="search button" role="button">
            <SearchLight />
          </IconBtn>
        </FlexWrapper>
      </form>
      {error.suggestion && <p>{error.suggestion}</p>}
      {haveSuggestions && (
        <Box>
          {suggestions.map((result, index) => (
            <li key={index} onClick={() => setQuery("")}>
              <Link to={`/search?query=${result.name}`}>{result.name}</Link>
            </li>
          ))}
        </Box>
      )}
    </Wrapper>
  );
};

export default Search;
