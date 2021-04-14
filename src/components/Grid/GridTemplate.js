import React, { useEffect, useRef } from "react";
import GifCard from "../GifCard";
import { GridWrapper } from "./styled";
import PropTypes from "prop-types";
import { animateGifsOnLoad } from "../../animate";

const GridTemplate = ({ data }) => {
  const loadedGif = data.length > 0;
  let containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef;
  //   const item = container.querySelector("div");
  //   if (!item) return;
  //   animateGifsOnLoad(item);
  //   console.log('effect grid');
  // }, [data]);
  return (
    <>
      <GridWrapper ref={(elem) => (containerRef = elem)}>
        {loadedGif && (
          <>
            {data.map((gif) => (
              <GifCard key={gif.id} data={gif} />
            ))}
          </>
        )}
      </GridWrapper>
    </>
  );
};

GridTemplate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default GridTemplate;
