import styled from "styled-components";
import { Button, Flex } from "../common/styled";

export const WindowBg = styled.div`
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
`;

export const Wrapper = styled(Flex)`
  /* padding: 2rem; */
  position: relative;
  &:focus {
    border: 2px solid ${({ theme }) => theme.palette.colorPrimary};
  }
  /* max-width: 300px; */
`;

export const CloseBtn = styled(Button)`
  position: absolute;
  top: -60px;
  right: 0;
  margin: 0;
  border-radius: 3px;
`;
