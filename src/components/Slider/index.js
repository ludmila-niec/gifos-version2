import React from "react";
import GifCard from "../GifCard";
import { Wrapper, SliderContainer } from "./styled";
import PropTypes from "prop-types";

const Slider = ({ data }) => {
  const loadedGif = data.length > 0;
  return (
    <Wrapper>
      {loadedGif && (
        <SliderContainer>
          {data.map((gif) => (
            <GifCard data={gif} key={gif.id} />
          ))}
        </SliderContainer>
      )}
    </Wrapper>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Slider;
