import styled from "styled-components";
import { Button } from "../common/styled";

export const Wrapper = styled.div`
  grid-column: ${(props) => (props.width > 290 ? "span 2" : "span 1")};
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    margin: 0;
    grid-column: ${(props) => (props.width > 300 ? "span 2" : "span 1")};
    justify-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.colorPrimary};
  }
`;

export const Gif = styled.img`
  justify-self: center;
  position: relative;
  object-fit: cover;
  border-radius: 3px;
  height: 100%;
  width: 100%;
  &:focus {
    border: 3px solid ${({ theme }) => theme.palette.colorPrimary};
  }
`;

// MODAL STYLED
export const CloseBtn = styled(Button)`
  grid-column: 3 / -1;
  justify-self: flex-end;
  margin: 0;
  padding: 1rem;
`;

export const FavBtn = styled(Button)`
  grid-column: 3 / -1;
  align-self: center;
  justify-self: flex-end;
  border-radius: 50%;
  padding: 0.8rem 0.7rem 0.5rem;
  margin: 0;
  background: ${({ theme }) => theme.palette.colorGradient};
  &:focus {
    border: none;
  }
`;

export const Description = styled.p`
  grid-column: 1 / -1;
  justify-self: center;
  color: ${({ theme }) => theme.palette.colorText};
  font-size: 0.8rem;
  font-weight: 600;
  margin: 1rem 0;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1rem;
  }
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 80%;
  overflow: hidden;
`;

export const Loading = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  background-color: ${({ theme }) => theme.palette.colorPrimary};
  position: relative;
`;

export const HeartAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

export const Alert = styled.div`
  font-size: 0.8rem;
  color: white;
  background-color: ${({ theme }) => theme.palette.colorSecondary};
  padding: 0.7rem 1rem;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;
