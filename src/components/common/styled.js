import styled from "styled-components";
import { Link } from "react-router-dom";

// CONTAINER
export const Container = styled.div`
  padding: 4rem 2rem 2rem;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    padding: 4rem;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  height: ${({ height }) => height || "auto"};
`;

// TITLES - SUBTITLES
export const Title = styled.h1`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${({ theme }) => theme.palette.colorGradient};
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 4rem;
    margin: 2rem;
  }
`;
export const Subtitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.colorText};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: 2rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1.3rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.3rem;
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin-bottom: 1rem;
  text-transform: capitalize;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1.8rem;
  }
`;

// BUTTONS
export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  background-color: transparent;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1rem;
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.text};

  &:disabled,
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
export const ButtonSecondary = styled(Button)`
  background: ${({ theme }) => theme.button.secondary.background};
  color: ${({ theme }) => theme.button.secondary.text};
  border: ${({ theme }) => theme.button.secondary.border};
  /* border-radius: ${({ theme }) => theme.button.secondary.borderRadius}; */
  transition: all 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.palette.colorAccent};
    background: ${({ theme }) => theme.button.secondary.state.hover.background};
  }
`;

// LINK ROUTER
export const LinkStyled = styled(Link)`
  font-size: 0.8;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.colorText};
  margin-right: 1rem;
  transition: all 0.2s linear;
  &:hover {
    /* color: ${({ theme }) => theme.palette.colorPrimary}; */
    background: ${({ theme }) => theme.palette.colorGradient};
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

// STATE
export const TextError = styled.p`
  text-align: center;
  text-transform: capitalize;
  margin: 2rem;
  font-weight: 600;
  font-size: 4rem;
`;

// DECO GRADIENT LINE
export const GradientLine = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.palette.colorGradient};
  margin: 1rem 0;
`;

//SVG GRADIENT
export const SvgStyled = styled.svg`
  --color-stop1: ${({ theme }) => theme.palette.colorSecondary};
  --color-stop2: ${({ theme }) => theme.palette.colorPrimary};
  --color-stop3: ${({ theme }) => theme.palette.colorComplement};
  --color-opacity: ${({ theme }) => (theme.name === "light" ? "0.6" : "1")};
`;

//SVG MENU - CLOSE BUTTON
export const SvgIcon = styled.svg`
  --color-fill: ${({ theme }) => theme.palette.colorText};
  z-index: 20;
`;
