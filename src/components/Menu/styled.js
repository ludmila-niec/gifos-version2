import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 15;
  background: ${({ theme }) => theme.palette.colorGlass};
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;
export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  margin: 3rem 0;
  font-size: 1.5rem;
  & > li > button {
    font-size: 1.1rem;
  }

  @media (min-width: ${({theme}) => theme.mediaQueries.mediaMd}){
      font-size:2rem;
      & > li > button {
    font-size: 1.5rem;
  }
  }
`;
