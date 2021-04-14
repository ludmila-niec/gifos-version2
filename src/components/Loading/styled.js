import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  background: ${({ theme }) => theme.palette.colorGradient};
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 2rem;
`;
