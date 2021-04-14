import styled from "styled-components";
import { Button } from "../common/styled";

const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mediaLg}) {
    height: 15vh;
    button:last-of-type {
      margin-right: 0;
    }
  }
`;

export const MenuBtn = styled(Button)`
  margin: 0;
  padding: 0.5rem;
  &:focus {
    border-radius: 3px;
  }
`;

export { Wrapper };
