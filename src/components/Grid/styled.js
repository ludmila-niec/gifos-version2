import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  padding: 0.75rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
