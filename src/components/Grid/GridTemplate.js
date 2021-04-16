import React from "react";
import GifCard from "../GifCard";
import { GridWrapper } from "./styled";
import PropTypes from "prop-types";

const GridTemplate = ({ data }) => {
  return (
    <>
      <GridWrapper>
        <>
          {data.map((gif) => (
            <GifCard key={gif.id} data={gif} />
          ))}
        </>
      </GridWrapper>
    </>
  );
};

GridTemplate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default GridTemplate;
