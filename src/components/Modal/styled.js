import styled from "styled-components";
import { Button } from "../common/styled";

// MODAL CONTENT
export const Backdrop = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.colorGlass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CloseBtn = styled(Button)`
  align-self: flex-end;
  padding: 0.5rem;
  border-radius: 50px;
  margin: 0;
  margin-bottom: 1rem;
`;

// MODAL TRIGGER
export const WrapperGif = styled.div`
  grid-column: ${(props) => (props.width > 290 ? "span 2" : "span 1")};
  background-color: ${({ theme }) => theme.palette.colorAccent};
  cursor: pointer;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.colorSecondary};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaMd}) {
    margin: 0;
    grid-column: ${(props) => (props.width > 300 ? "span 2" : "span 1")};
    justify-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
  }
`;
