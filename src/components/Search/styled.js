import styled from "styled-components";
import { Flex } from "../common/styled";
import { Button, SectionTitle } from "../common/styled";

export const Wrapper = styled.div`
  position: relative;
  margin: 2rem 0;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    margin: 4rem 0;
  }
`;

export const Input = styled.input`
  display: block;
  width: 85%;
  font-size: 1rem;
  font-family: "Chakra Petch", sans-serif;
  color: ${({ theme }) => theme.palette.colorText};
  background-color: ${({ theme }) => theme.palette.colorAccent};
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  margin: 2rem auto;
  &::placeholder {
        color: ${({ theme }) => theme.palette.colorText};
  }
  &:focus {
    border: ${({ theme }) => theme.palette.colorPrimary};
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1.2rem;
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1.6rem;
    width: 65%;
  }
`;

export const Box = styled.ul`
  width: 85%;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.colorGlass};
  border-radius: 0 0 50px 50px;
  padding: 3rem 2rem 2rem;
  position: absolute;
  top: 62px;
  right: 7%;
  left: 7%;
  z-index: 1;

  & > li {
    margin-bottom: 0.8rem;
  }
  li:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1.3rem;
    width: 65%;
    left: 0;
    right: 0%;
  }
`;

export const IconBtn = styled(Button)`
  position: absolute;
  right: 5%;
  margin-right: 1rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    right: 13%;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    right: 17%;
  }
`;

export const FlexWrapper = styled(Flex)`
  position: relative;
  z-index: 2;
`;

export const SearchTitle = styled(SectionTitle)`
  font-size: 1rem;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1.3rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    font-size: 1.8rem;
  }
`;
export const TitleContainer = styled.div`
  padding: 2rem 0 0 2rem;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    padding: 4rem 0 0 4rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    padding-left: 6rem;
  }
`;
