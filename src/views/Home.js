import React, { useEffect, useRef } from "react";
import { Container, Title, Subtitle } from "../components/common/styled";
import Trending from "../components/Sections/Trending";
// animation
import { animateHeading } from "../animate";

const Home = () => {
  let titleRef = useRef(null);
  let subtitleRef = useRef(null);
  useEffect(() => {
    document.title = "Gifs || Home";
  }, []);

  useEffect(() => {
    animateHeading(titleRef, subtitleRef);
  }, []);
  return (
    <main style={{ minHeight: "90vh" }}>
      <Container>
        <Title ref={(elem) => (titleRef = elem)}>welcome to gifos</Title>
        <Subtitle ref={(elem) => (subtitleRef = elem)}>
          Get inspired, search and download your favorite gifs
        </Subtitle>
      </Container>
      <Trending />
    </main>
  );
};

export default Home;
